<template>
    <div>
        

        <b-table
                class="text-center"
                
                striped
                hover
                :items="realty_list"
                :fields="[
                            { key: 'code', label: 'رقم العقار ' },
                            { key: 'status', label: 'الحالة' },
                            { key: 'zone', label: '  المنطقة ' },
                            { key: 'date', label: '  التاريخ ' },
                            
        ]"
                dir="rtl"
        >
        <!-- <template #cell(code)="data">

            <router-link :to="`/add-project/${code.item.id}`">
            <feather-icon

                    size="16"
                    icon="EditIcon"
                    class="m-0 plus_icon"
            />
            </router-link>


        </template>  -->


            <template #cell(date)="data">
                {{toLocalDatetime(data.item.date) }}
            </template> -->
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


        data() {
            return {
                realty_list: [
                    {
                        code: 'Ads000',
                        status: '0',
                        zone: 'Ads',
                        date: '2/1/2022',
                    },
                    {
                        code: 'Ads010',
                        status: '2',
                        zone: 'Ad',
                        date: '2/01/2022',
                    }

                ],
            };
        },
    }
</script>

<style>
    th {
    background-color: #535ae7 !important;
    color: white;
} 
</style>
