<template>
    <div>
        <!--        <b-card >-->
        <b-row class="mb-1">
            <b-col sm="4">
                <v-select
                        placeholder="اسم النشاط"
                        :options="Array.from(work_progress , (el) => el.activity_name)"
                        :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                        v-model="activity_name"
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
                :items="work_progress.filter(el =>  (el.activity_name == activity_name || activity_name== null) && (el.month >= start || start== null) && (el.month <= end || end== null))"
                :fields="show_action ?[
                            { key: 'name', label: 'العقد ' },
                            { key: 'activity_name', label: 'اسم النشاط' },
                            { key: 'month', label: '  الشهر ' },
                            {
                            key: 'planned_amount',
                            label: ' الكمية المخططة  خلال الشهر ',
                            },
                            {
                            key: 'actual_amount',
                            label: ' الكمية الفعلية خلال الشهر',
                            },

                            { key: 'action', label: ' تعديل' },
                            ] :[
                            { key: 'name', label: 'العقد ' },
                            { key: 'activity_name', label: 'اسم النشاط' },
                            { key: 'month', label: '  الشهر ' },
                            {
                            key: 'planned_amount',
                            label: ' الكمية المخططة  خلال الشهر ',
                            },
                            {
                            key: 'actual_amount',
                            label: ' الكمية الفعلية خلال الشهر',
                            },
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
        name: "workProgress",
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
            work_progress: [],
            show_action: {type: Boolean, default: true},
        },


        data() {
            return {
                activity_name: null,
                start: null,
                end: null,
            };
        },
    }
</script>

<style scoped>

</style>
