<template>
    <div>
        <!--        <b-card >-->
        <b-row class="mb-1">
            <b-col sm="4">
                <v-select
                        placeholder=" نوع العمالة"
                        :options="Array.from(man_power_list , (el) => el.man_power_category.labor_type)"
                        :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                        v-model="category"
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
                :items="man_power_list.filter(el =>  (el.man_power_category.labor_type == category || category== null) && (el.date >= start || start== null) && (el.date <= end || end== null))"
                :fields="show_action ?[
                              { key: 'contract_name', label: 'العقد' },
                              { key: 'category', label: 'نوع العمالة' },
                              { key: 'daily_manpower', label: ' العدد اليومى الفعلى  ',},
                              { key: 'planned_daily',label: ' العدد اليومى المخطط  ',},
                              { key: 'date', label: 'التاريخ' },
                              { key: 'action', label: ' تعديل' },
                            ] : [
                              { key: 'contract_name', label: 'العقد' },
                              { key: 'category', label: 'نوع العمالة' },
                              { key: 'daily_manpower',label: ' العدد اليومى الفعلى  '},
                              {key: 'planned_daily',label: ' العدد اليومى المخطط  ',},
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

            <template #cell(category)="data">
                {{ data.item.man_power_category.labor_type}}
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
        name: "manPower",
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
            man_power_list: [],
            show_action: {type: Boolean, default: true},
        },


        data() {
            return {
                category: null,
                start: null,
                end: null,
            };
        },
    }
</script>

<style scoped>

</style>
