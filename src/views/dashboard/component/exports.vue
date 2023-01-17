<template>
    <div  dir="rtl">
        <!--        <b-card >-->
        <b-row class="mb-1">
            <b-col sm="4">
                <v-select
                        placeholder=" خامة"
                        :options="Array.from(exports , (el) => el.name)"
                        :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                        v-model="material"
                        :reduce="(val) => val"
                >
                </v-select>
            </b-col>

            <b-col sm="4">
                <b-form-datepicker
                        :clearbale="true"
                        v-model="start"
                        label-no-date-selected=" بداية"
                />
            </b-col>
            <b-col sm="4">
                <b-form-datepicker
                        v-model="end"
                        label-no-date-selected="نهاية"
                />
            </b-col>



        </b-row>
        <b-table
                class="text-center"
                bordered
                striped
                hover
                :items="exports.filter(el =>  (el.name == material || material== null) && (el.date >= start || start== null) && (el.date <= end || end== null))"
                :fields="show_action ? [
                              { key: 'contract_name', label: '   العقد ' },
                              { key: 'name', label: '   الخامة ' },
                              { key: 'actual', label: '  الفعلى اليومى ' },
                              { key: 'planned', label: ' المخطط  اليومى ' },
                              { key: 'date', label: 'التاريخ' },


                              { key: 'action', label: ' تعديل' },
                            ] : [
                              { key: 'contract_name', label: '   العقد ' },
                              { key: 'name', label: '   الخامة ' },
                              { key: 'actual', label: '  الفعلى اليومى ' },
                              { key: 'planned', label: ' المخطط  اليومى ' },
                              { key: 'date', label: 'التاريخ' },
                            ]"
                dir="rtl"
        >
            <template #cell(action)="data">
                <feather-icon
                        @click="$emit('edit',data.item)"
                        v-if="show_action"
                        size="16"
                        icon="EditIcon"
                        class="m-0 plus_icon"
                />
            </template>

            <template #cell(date)="data">
                {{toLocalDatetime(data.item.date) }}
            </template>
        </b-table>
    </div>
</template>

<script>

    import vSelect from 'vue-select'
    import {
        // BOverlay,
        // https://ecb.dev.vero-cloud.com/api/
        BFormInput,
        BFormTag,
        BFormTags,
        BFormGroup,
        BForm,
        BRow,
        BCol,
        BTab,
        BTabs,
        BOverlay,
        BButton,
        BCardText,
        BCard,
        BModal,
        BFormDatepicker,
        BFormFile,
        BTable,
    } from 'bootstrap-vue'
    import DataTable from "@/views/components/table/DataTable";


    export default {
        name: "exports",
        components: {
            // BOverlay,
            BCardText,
            BCard,
            BModal,
            BFormInput,
            BFormGroup,
            BForm,
            BRow,
            BCol,
            BTab,
            vSelect,
            BTabs,
            BOverlay,
            BTable,
            DataTable,
            BButton,
            BFormTag,
            BFormTags,
            BFormDatepicker,
            BFormFile,
        },
        props: {
            exports: [],
            show_action: {type: Boolean, default: true},
        },


        data() {
            return {
                material: null,
                start: null,
                end: null,
            };
        },
    }
</script>

<style scoped>

</style>
