<template>
    <div>
        <!--        <b-card >-->
        <b-row class="mb-1">
            <b-col sm="6">
                <v-select
                        placeholder="نوع المعدة"
                        :options="Array.from(equipment_productivity_list , (el) => el.equipment_id)"
                        :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                        v-model="equipment_id"
                        :reduce="(val) => val"
                >
                </v-select>
            </b-col>
            <b-col sm="6">
                <v-select
                        placeholder=" العقد"
                        :options="Array.from(equipment_productivity_list , (el) => el.work_statement_id)"
                        :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                        v-model="work_statement_id"
                        :reduce="(val) => val"
                >
                </v-select>
            </b-col>
        </b-row>
        <b-row class="mb-1">

            <b-col sm="6">
                <b-form-datepicker
                        v-model="end"
                        label-no-date-selected="نهاية"
                />
            </b-col>

            <b-col sm="6">
                <b-form-datepicker
                        :clearbale="true"
                        v-model="start"
                        label-no-date-selected=" بداية"
                />
            </b-col>


        </b-row>

        <!--        </b-card>-->
        <!--        {{list_data}}-->
        <b-table
                class="text-center"
                bordered
                striped
                hover
                :items="equipment_productivity_list.filter(el =>
                (el.equipment_id == equipment_id || equipment_id== null) && (el.work_statement_id == work_statement_id || work_statement_id== null)
                && (el.date >= start || start== null) && (el.date <= end || end== null))"
                :fields="show_action ?  [ { key: 'work_statement_id', label: ' العقد ' },
                              { key: 'equipment_id', label: 'نوع المعدة' },
                              {
                                key: 'avg_actual',
                                label: '  متوسط فعلي يومي ',
                              },
                              { key: 'date', label: '  التاريخ ' },

                              { key: 'action' },
                            ] : [ { key: 'work_statement_id', label: ' العقد ' },
                              { key: 'equipment_id', label: 'نوع المعدة' },
                              {
                                key: 'avg_actual',
                                label: '  متوسط فعلي يومي ',
                              },
                              { key: 'date', label: '  التاريخ ' },
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
                {{ toLocalDatetime(data.item.date) }}
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
        name: "equipmentProductivity",
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
            equipment_productivity_list: [],
            show_action: {type: Boolean, default: true},
        },


        data() {
            return {
                work_statement_id: null,
                equipment_id: null,
                start: null,
                end: null,
                list_data: []
            };
        },

        mounted() {
            this.list_data = this.equipment_productivity_list;
        }
    }
</script>

<style scoped>

</style>
