<template>
    <b-card class="text-right">
        <b-button class="mb-2" @click="insertTask"> add task</b-button>
        
        <b-modal hide-header-close v-model="task_modal" no-close-on-backdrop hide-footer
                    title="أضافة مهمة">
                    
            <b-row>
                <b-col md="6">
                    <b-form-group  label="Surveyor">
                        <validation-provider #default="{ errors }" name="Surveyor"
                                                rules="required">
                            <v-select
                                    placeholder="Surveyor"
                                    :options="taskSurv"
                                    :get-option-label="(option)=>option.name_local"
                                    v-model="task.sur_id"
                                    :reduce="(option) => option.id"
                            >
                                <template slot="selected-option" slot-scope="option">
                                <span>
                                    {{ option.name_local }}
                                </span>
                                </template>
                                <template v-slot:option="option">
                                                {{ option.name_local }}
                                            </template>
                            </v-select>
                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                مطلوب</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <!-- <h2>{{ task.building_number }}</h2> -->
                    <b-form-group  v-if="task.building_number" label="submission">  
                        <validation-provider #default="{ errors }" name="submission"
                                                rules="required">
                            <b-form-input v-model="task.building_number" disabled></b-form-input>
                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                مطلوب</small>
                        </validation-provider>
                    </b-form-group>
                    <b-form-group v-else label="submission">  
                        <validation-provider #default="{ errors }" name="submission"
                                                rules="required">
                            <v-select
                                    placeholder="submission"
                                    :options="taskSub"
                                    :get-option-label="(option)=>option.building_number"
                                    v-model="task.sub_id"
                                    :reduce="(option) => option.id"
                            >
                                <template slot="selected-option" slot-scope="option">
                                <span>
                                    {{ option.building_number }}
                                </span>
                                </template>
                                <template v-slot:option="option">
                                                {{ option.building_number }}
                                            </template>
                            </v-select>
                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                مطلوب</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12">
                    <b-form-group class="text-right" label="تاريخ الحصر">
                        <validation-provider #default="{ errors }" name="extra_date"
                                                rules="required">
                            <b-form-datepicker
                                    locale="ar-u-ca-islamic"
                                    :date-format-options="{ year: 'numeric', month: 'long', day: 'numeric'}"
                                    v-model="task.extra_date"
                                    :min="new Date().toISOString().substr(0, 10)"
                                    :state="errors.length > 0 ? false : null"
                                    label-no-date-selected="تاريخه "/>
                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                مطلوب</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>
            </b-row>
            <div class="mt-2">
                <b-col cols="12">
                    <div class="d-flex justify-content-end">
                        <b-button @click="submitTask()"
                                    variant="primary"
                                    style="margin-right: 10px;">تأكيد
                        </b-button>
                        <b-button @click="task_modal = false"
                                    variant="outline-primary">الغاء
                        </b-button>
                    </div>
                </b-col>
            </div>

        </b-modal>

        <b-table class="text-center " striped hover :items="tasksData" 
            :fields="[
                {key:'building_number',label:'رقم العقار'},
                {key:'extra_date',label:'أقصي تاريخ'},
                {key:'operation_date',label:' تاريخ التنفيذ'},
                {key:'name_local',label:'المساح'},
                {key:'status',label:'الحالة'},
                {key:'action',label:'تعديل'},
            ]"
        >
            <template #cell(extra_date)="data">
                {{ getDate(data.item.extra_date) }}
            </template>
            <template #cell(operation_date)="data">
                {{ getDate(data.item.operation_date) }}
            </template>
            <template #cell(status)="data">
                <span :class="data.item.status == 0 ? 'text-danger' : 'text-success'" >{{ getStatus(data.item.status) }}</span> 
            </template>
            <template #cell(action)="data">
                <span  class="text-warning mr-1"> <feather-icon icon="EditIcon" @click="insertTask(data.item)" ></feather-icon> </span>
                <span class="text-danger"> <feather-icon icon="TrashIcon" @click="deleteTask(data.item)" ></feather-icon> </span>
            </template>
        </b-table>
    </b-card>
</template>

<script>
    import {ValidationProvider, ValidationObserver} from 'vee-validate'
    import {required, min_value} from '@validations'
    import vSelect from 'vue-select'
    import {
        // BOverlay,
        // https://ecb.dev.vero-cloud.com/api/
        BFormCheckbox,
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
        BFormSelect,
        BFormSelectOption,
        
    } from 'bootstrap-vue'
    import { mapGetters } from "vuex";
import { methods } from 'vue-echarts';
import ValidationErrors from "@/views/components/common/ValidationErrors";
import resource from '@/api/resource';
export default ({
    name:'tasks',
    
    components: {
        BFormSelect,
        BFormSelectOption,
        ValidationErrors,
            BFormCheckbox,
            ValidationProvider,
            ValidationObserver,
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
            BTabs,
            BOverlay,
            BTable,
            BButton,
            BFormTag,
            BFormTags,
            BFormDatepicker,
            vSelect,
            BFormFile,
        },
        computed:{
            ...mapGetters({
                taskSub: "pgc_forms/taskSub",
                taskSurv: "pgc_forms/taskSurv",
            }),
        },
        data() {
            return{
                task_id:null,
                building_number:null,
                task_modal:false,
                task:{
                    sur_id:null,
                    sub_id:null,
                    extra_date:null,
                },
                tasksData:[],
                errorsdata: {},
            }
        },
        mounted(){
            this.getTasks();
            this.getLookups();
        },
        methods:{
            deleteTask(task) {
                this.$swal({
                    title: 'حذف',
                    text: '! هل انت متأكد من عملية الحذف',
                    icon: 'warning',
                    showCancelButton: true,
                    cancelButtonText: `الغاء`,
                    confirmButtonText: 'حذف',
                    customClass: {
                        confirmButton: 'btn btn-primary',
                        cancelButton: 'btn btn-outline-primary ml-1',
                    },
                    buttonsStyling: false,
                }).then(result => {
                    if (result.value) {
                        this.$store.dispatch('pgc_forms/deleteTask', {
                            id: task.id,
                        })
                        .then((res)=>{
                            this.getTasks();
                            this.$swal({
                                icon: 'success',
                                title: 'تم ',
                                showConfirmButton: false,
                                timer: 1000,
                            })
                        })
                        .catch((err)=>{
                            console.log(err);
                        })
                    }
                

                })
            },
            getStatus(data){
                if (data == 0) {
                    return 'لم تنفذ'
                }
                if (data == 1) {
                    return 'تم التنفيذ'
                }
            },
            getDate(date){
                if(date){
                    return date.split(' ')[0];
                }
                return '--';
            },
            submitTask(){
                console.log(this.task);
                this.$store
                    .dispatch('pgc_forms/submitTask',{
                        id:this.task_id,
                        query : this.task
                    })
                    .then((res) => {
                        this.getTasks();
                        this.task_modal = false;
                        this.$swal({
                            icon: 'success',
                            title: 'تم ',
                            showConfirmButton: false,
                            timer: 1000,
                        })
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            
            insertTask(task){
                if (task) {
                    this.task_id = task.id
                    this.task.sur_id = task.sur_id
                    this.task.sub_id = task.sub_id
                    this.building_number = task.building_number
                    this.task.extra_date = task.extra_date
                }
                this.task_modal = true;
            },
            getLookups(){
                this.$store
                    .dispatch('pgc_forms/taskLookUps')
                    .then((response) => {


                    });
            },
            getTasks(){
                this.$store
                    .dispatch('pgc_forms/listTasks')
                    .then((response) => {
                        this.tasksData = response.tasks

                    });
            }
        }
})
</script>
