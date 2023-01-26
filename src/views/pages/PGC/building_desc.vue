<template>
    <div class="main_ecb_wrapper">
        <!-- //// Start Project Details  -->
        <b-row>
            <b-col>
                <div align="right">
                    <b-row class="bg-white pt-2 pb-2">
                        <div class="container">
                            <!-- {{ $store.getters['dashboard/allBuildType'] }} -->
                            <!-- {{ buildTypes }} -->
                            <b-table
                                class="text-center"
                                striped
                                hover
                                :items="buildTypes"
                                :fields="[
                                            { key: 'type_name', label: 'نوع المشتمل ' },
                                            { key: 'desc_name', label: 'الوصف' },
                                            { key: 'desc_unit', label: '  الوحدة ' },
                                            { key: 'desc_price', label: '  السعر ' },
                                            { key: 'action', label: '  تعديل ' },
                                        ]"
                            >
                                <template #cell(action)="data">
                                    <feather-icon @click="edit_type_form(data.item)" icon="EditIcon">

                                    </feather-icon>
                                </template>
                            </b-table>
                        </div>
                        <div>
                            
                            <b-modal hide-header-close v-model="model_type_form" hide-footer title=" تحديث "  >
                                <div class="demo-vertical-spacing">
                                    
                                    <b-col md="6">
                                        <b-form-group class="text-right" label= " النوع   ">
                                            <validation-provider #default="{ errors }" name=" النوع "
                                                rules="required">
                                                <b-form-input v-model="editBuildTypes.type_name"
                                                    :state="errors.length > 0 ? false : null"
                                                    placeholder=" النوع " disabled  />
                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                    مطلوب</small>
                                            </validation-provider>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group class="text-right" label= " الوصف   ">
                                            <validation-provider #default="{ errors }" name=" الوصف "
                                                rules="required">
                                                <b-form-input v-model="editBuildTypes.desc_name"
                                                    :state="errors.length > 0 ? false : null"
                                                    placeholder=" الوصف " disabled />
                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                    مطلوب</small>
                                            </validation-provider>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group class="text-right" label= " الوحدة   ">
                                            <validation-provider #default="{ errors }" name=" الوحدة "
                                                rules="required">
                                                <b-form-input v-model="editBuildTypes.desc_unit"
                                                    :state="errors.length > 0 ? false : null"
                                                    placeholder=" الوحدة "  />
                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                    مطلوب</small>
                                            </validation-provider>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group class="text-right" label= " السعر ">
                                            <validation-provider #default="{ errors }" name=" السعر "
                                                rules="required">
                                                <b-form-input v-model="editBuildTypes.desc_price"
                                                    :state="errors.length > 0 ? false : null"
                                                    placeholder=" السعر "  />
                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                    مطلوب</small>
                                            </validation-provider>
                                        </b-form-group>
                                    </b-col>
                                </div>
                                <div class="mt-2">
                                    <b-col cols="12">
                                        <div class="d-flex justify-content-end">
                                            <b-button @click="edit_type()" variant="primary" style="margin-right: 10px;">تأكيد</b-button>
                                            <b-button @click="model_inc_edit = false"  variant="outline-primary">الغاء</b-button>
                                        </div>
                                    </b-col>
                                </div>

                            </b-modal>
                        
                        </div>
                    </b-row>
                </div>
            </b-col>
        </b-row>
        <!----------------------////////////-------------/////////////--------///////------->
    </div>
</template>

<script>
    // import { mapGetters } from 'vuex'
    import { ValidationProvider, ValidationObserver } from 'vee-validate'
    import { required, min_value } from '@validations'
    import vSelect from 'vue-select'
    import DataTable from '@/views/components/table/DataTable'
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
    import EquipmentProductivity from "@/views/dashboard/component/equipmentProductivity";
    import Exports from "@/views/dashboard/component/exports";
    import ManPower from "@/views/dashboard/component/manPower";
    import WorkProgress from "@/views/dashboard/component/workProgress";
import lookups from '@/api/system/lookups'
import router from '@/router'

    export default {
        name: 'Add Project',
        props: {
            value: Array,
            fields: Array
        },
        data() {
            return {
                
                hide: true,
                
                // submissionDesc: [
                //     'تشطيب داخلي',
                //     'تشطيب خارجي',
                //     'تشطيب داخلي و خارجي',
                // ],
                
                monthes: [
                    { title: 'يناير' },
                    { title: 'فبراير' },
                    { title: 'مارس' },
                    { title: 'ابريل' },
                    { title: 'مايو' },
                    { title: 'يونيو' },
                    { title: 'يوليو' },
                    { title: 'أغسطس' },
                    { title: 'سبتمبر' },
                    { title: 'اكتوبر' },
                    { title: 'نوفمبر' },
                    { title: 'ديسمبر' },
                ],
                allBuild:[],
                editBuildTypes:{
                    desc_id: null,
                    type_name:null,
                    desc_name:null,
                    desc_unit:null,
                    desc_price:null,
                },
                model_type_form:false,
            }
        },
        components: {
            WorkProgress,
            ManPower,
            Exports,
            EquipmentProductivity,
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
            DataTable,
            BButton,
            BFormTag,
            BFormTags,
            BFormDatepicker,
            vSelect,
            BFormFile,
        },
        mounted() {
            // this.includes_type  = $store.getters['dashboard/getLookups'].includes_type
            this.$store.dispatch('dashboard/getLookups')
                .then((res) => {
                    
                    // this.build_type = res.includes_type;
                    
                })
                this.initBuild() 
            // this.$store.dispatch(`dashboard/get_incs/${69}`)
            // .then((res) => {
            //     console.log(res);
            //     // this.build_type = res.includes_type;
                
            // })

        },
        computed:{
            buildTypes(){
                return this.$store.getters['dashboard/getAllTypes']
            }
        },
        methods: { 
            edit_type_form(data){
                this.model_type_form = true;
                this.editBuildTypes.desc_id = data.desc_id,
                this.editBuildTypes.type_name = data.type_name,
                this.editBuildTypes.desc_name = data.desc_name,
                this.editBuildTypes.desc_price = data.desc_price,
                this.editBuildTypes.desc_unit = data.type_unit
            },
            edit_type(){
                this.$store
                    .dispatch('pgc_forms/edit_desc',{
                        query: this.editBuildTypes
                    })
                    .then((resp) => {
                        this.model_type_form = false;
                        this.initBuild();
                        this.$swal({
                            icon: 'success',
                            title: 'تم التحديث  ',
                            showConfirmButton: false,
                            timer: 1000,
                        })
                        console.log(response);
                    })
            },
            initBuild(){
                this.$store.dispatch('dashboard/allBuildType')
                .then((res)=>{
                    console.log(res.build_desc)
                    this.allBuild = res.build_desc
                    // console.log(res)
                })
            } ,
            edit_inc(){

            },
            edit_inc_form(item){
                this.includesForm.build_id = 1,
                // this.includesForm.build_id = item.build_id,
                this.includesForm.build_desc_id = 1,
                // this.includesForm.build_desc_id = item.build_desc_id,
                this.includesForm.qty = 1,
                // this.includesForm.qty = item.qty,
                this.model_inc_edit = true;

                console.log(item);
            },
            changeImg(e){
                console.log(e.target.files[0]);
                this.includesForm.image = e.target.files[0];
            },
            show_model(num){
                this.show_model_inputs = num;
            },
            // addIncludes(){
            //     this.includesForm.push({build_id:null,build_desc_id:null,qty:null});
            // },
            includesFormLength(){
                var x = this.includesForm;
                return x.length; 
            },
            addOwner(){
                this.form.owners.push({name:null,phone:null,id_type:null});
            },
            addCoor(){
                this.form.submission.coordinates.push({coor_north:null,coor_east:null});
            },
            addroof(){
                this.form.submission.building_details.push({roof:null,area:null});
            },
            ownersFormLenght(){
                var x = this.form.owners;
                return x.length; 
            },
            coorsFormLenght(){
                var x = this.form.submission.coordinates;
                return x.length; 
            },
            addAttachs(){
                this.form.attachs.push({file:null,note:null});
            },
            attachLength(){
                var x = this.form.attachs;
                return x.length;
            },
            addIncludes(){
                this.includesForm.submission_id = 67;
                // this.includesForm.submission_id = this.form.submission.id;
                console.log(this.includesForm)
                // delete this.form.submission.restrict_border
                // delete this.form.submission.contract_border_
                this.$store
                    .dispatch('pgc_forms/save_inc', {
                        query: this.includesForm,
                    })
                    .then((response) => {
                        // console.log(response)
                        // router.push({name:'Realtys'})
                        this.includesForm.build_id = null,
                        this.includesForm.build_desc_id = null,
                        this.includesForm.qty = null,
                        this.includesForm.image = null,
                        
                        this.$swal({
                            icon: 'success',
                            title: 'تم حفظ المشتمل ',
                            showConfirmButton: false,
                            timer: 1000,
                        })

                        // this.submission = response.submission;
                            console.log(response);

                    })
                    .catch((error) => {
                        // this.errorsdata = this.handleBackendError(error.response.data.errors)
                        console.log(error);
                    })
            },
            checkSubmit($state) {
                console.log(this.form)
                // delete this.form.submission.restrict_border
                // delete this.form.submission.contract_border
                this.$store
                    .dispatch('pgc_forms/save_subs', {
                        // id: this.includesForm.submission_id,
                        query: this.form,
                    })
                    .then((response) => {
                        // console.log(response)
                        // router.push({name:'Realtys'})
                        if ($state) {
                            this.show_model_inputs = $state ;    
                        }
                        
                        this.$swal({
                            icon: 'success',
                            title: 'تم الحفظ',
                            showConfirmButton: false,
                            timer: 1500,
                        })
                        // this.submission = response.submission;
                            console.log(response);
                        // this.form.submission.id = response.id
                        // this.form.submission.building_number = response.building_number
                    })
                    .catch((error) => {
                        // this.errorsdata = this.handleBackendError(error.response.data.errors)
                        console.log(error);
                    })
            },
            // checkSubmit(){

            //     this.$swal({
            //         icon: 'info',
            //         title: 'هل انت متأكد من عملية الحفظ ',
            //         showConfirmButton: true,
            //         timer: 1500,
            //     })
            // }
        },
    }
</script>

<style lang="scss" scoped>
    @import "@core/scss/vue/libs/vue-select.scss";

    .modal-header .close {
        display: none;
    }

    .main_ecb_wrapper {
        direction: rtl;

        .form_label {
            margin-bottom: 10px;
        }

        .project_details_icon_warpp {
            display: flex;
            justify-content: flex-start;
            gap: 10px;
            margin-bottom: 10px;
        }

        .project_progress_wrapper {
            border-top: 1px solid #ccc;

            .for_percentage_wrapper {
                display: flex;
                // background: bisque;
                gap: 10px;
                align-items: center;

                .form-control {
                    width: 150px;
                    // background: #eee;
                }
            }

            // .work_situations {
            //   .for_percentage_wrapper {
            //     display: flex;
            //     background: bisque;
            //     gap: 10px;
            //     align-items: center;
            //     .form-control {
            //       width: 150px;
            //       background: #eee;
            //     }
            //   }
            // }

            // // Start main_wrapper_for_duplicate
            .main_wrapper_for_duplicate {
                // background: #eee;
                margin-top: 15px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .part_one {
                    align-items: center;
                    display: flex;
                    gap: 10px;

                    .form-group {
                        margin-bottom: 0;
                    }
                }
            }
        }

        .custom-file-upload {
            cursor: pointer;
            padding: 10px;
            box-shadow: 8px -1px 3px -3px #b569bb;
            border-radius: 4px 17px 17px 4px;
        }

        .main_title_icon_wrapper {
            display: flex;
            align-items: center;
            gap: 30px;
        }

        // Part Three
        .project_part_three_wrapper {
            border-top: 1px solid #ccc;

            .part_three_heading {
                // background: #eee;
                display: flex;
                align-items: center;
                gap: 15px;
            }

            .main_container_for_values_monthes {
                padding-top: 2.2rem;

                &.main_for_workers {
                    .span_work {
                        min-width: 100px;
                        text-align: right;
                    }
                }

                .input_with_text_and_select {
                    display: flex;
                    align-items: center;
                    gap: 15px;

                    &.with_draw {
                        gap: 50px;
                    }

                    .part_a {
                        align-items: center;
                        display: flex;
                        gap: 8px;

                        .form-group {
                            margin-bottom: 0;
                        }
                    }

                    .every_plan_month {
                        align-items: center;
                        display: flex;
                        gap: 8px;

                        .form-group {
                            margin-bottom: 0;
                        }
                    }
                }

                .input_with_quantity {
                    .part_a {
                        align-items: center;
                        display: flex;
                        gap: 15px;
                        padding-top: 1.5rem;

                        .form-group {
                            margin-bottom: 0;
                        }

                        .qunt {
                            min-width: 100px;
                            display: block;
                        }
                    }
                }
            }

            .part_two_form_three {
                .every_part {
                    align-items: center;
                    display: flex;
                    gap: 15px;
                    padding-top: 1.5rem;

                    .form-group {
                        margin-bottom: 0;
                    }
                }
            }

            .sections_and_sectors {
                .sections {
                    .part_e {
                        text-align: right;
                        align-items: center;
                        display: flex;
                        gap: 15px;
                    }

                    .part_d {
                        text-align: right;
                        align-items: center;
                        display: flex;
                        gap: 15px;
                    }

                    .minumm {
                        min-width: 150px;
                    }
                }
            }

            .approval_and_rejection {
                .part_d {
                    text-align: right;
                    align-items: center;
                    display: flex;
                    gap: 15px;

                    .form-group {
                        margin-bottom: 0;
                    }

                    .minumm {
                        min-width: 100px;
                    }
                }
            }

            .drawing_name_container {
                .part_e {
                    text-align: right;
                    align-items: center;
                    display: flex;
                    gap: 15px;

                    .minumm {
                        min-width: 100px;
                    }
                }

                .parts_drwing_container {
                    display: flex;
                    justify-content: space-between;

                    .every_part {
                        align-items: center;
                        display: flex;
                        gap: 15px;
                        padding-top: 1.5rem;

                        .form-group {
                            margin-bottom: 0;
                        }

                        &.problem {
                            min-width: 50%;

                            .form-group {
                                margin-bottom: 0;
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }

        .plus_icon {
            border: 1px solid #ccc;
            border-radius: 50%;
            cursor: pointer;
            width: 20px;
            height: 20px;
            padding: 2px;
        }

        //  Start Matrial
        .material_wrapper {
            border-top: 1px solid #ccc;

            .box_wrapper {
                display: flex;
                align-items: center;

                gap: 15px;
            }
        }

        // mony_wrapper
        .mony_wrapper {
            .input_with_text_and_select {
                display: flex;
                align-items: center;
                gap: 50px;

                .money_planned_text {
                    min-width: 150px;
                    text-align: right;
                }
            }
        }
        .back_ground{
            color: antiquewhite !important;
            padding-top: 8px;
            font-size: 20px;
            border-radius: 5px;
            background-color: #535ae7;
            margin-bottom: 10px;
        }
        .choose_images {
            .choosing_photos_ {
                display: flex;
                justify-content: center;

                .photos_label {
                    border: 1px solid #ccc;
                    min-width: 200px;
                    text-align: center;
                    height: 50px;
                    line-height: 50px;
                    cursor: pointer;
                }
            }
        }
    }
</style>