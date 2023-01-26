<template>
    <div class="main_ecb_wrapper">
        <!-- //// Start Project Details  -->
        <b-row>
            <b-col>
                <div align="right">
                    <b-row class="bg-white pt-2 pb-2">
                        <div class="container">
                            <b-col  cols="12">
                                
                                <!-- بيانات المشروع  -->
                                <b-overlay v-if="(show_model_inputs == 1)" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
                                rounded="sm">
                                <div class="add_project_details_wrapper">
                                        <validation-observer ref="addProjectRules">
                                            <b-form v-if="this.hide == true">
                                                <b-row class="bg-white pt-2 pb-2">
                                                    <b-col md="12" class="back_ground">
                                                        <p class="text-center"> بيانات المشروع </p>
                                                    </b-col>
                                                    

                                                    <b-col md="1"></b-col>

                                                    <b-col class="d-flex justify-content-center" md="8">
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="اسم المشروع">
                                                            <validation-provider #default="{ errors }" name="اسم المشروع"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.pro_name"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="اسم المشروع"  disabled />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="رقم المشروع">
                                                            <validation-provider #default="{ errors }" name="رقم المشروع"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.pro_num"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="رقم المشروع"  />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="رقم المنطقة ">
                                                            <validation-provider #default="{ errors }" name=" رقم المنطقة"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.zone"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder=" رقم المنطقة"  />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label=" رقم اللوحة">
                                                            <validation-provider #default="{ errors }" name=" رقم اللوحة"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.plad_num"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder=" رقم اللوحة"  />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <!-- <b-col md="6">
                                                        <b-form-group class="text-right" label=" رقم العقار ">
                                                            <validation-provider #default="{ errors }" name=" رقم العقار"
                                                                rules="required">
                                                                <b-form-input v-model="dirary.south_hieght"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder=" رقم العقار"  />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col> -->
                                                    <b-col cols="10 text-right pt-2">
                                                    </b-col>
                                                    <b-col cols="2 text-right pt-2">
                                                        <b-button variant="info" @click="show_model(2)" >
                                                            التالي
                                                        </b-button>
                                                    </b-col>
                                                    
                                                </b-row>
                                            </b-form>
                                        </validation-observer>
                                    </div>
                                </b-overlay>
                                <!-- بيانات المالك  -->
                                <b-overlay v-if="(show_model_inputs == 2)" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
                                rounded="sm">
                                <div class="add_project_details_wrapper">
                                        <validation-observer ref="addProjectRules">
                                            <b-form v-if="this.hide == true">
                                                <b-row class="bg-white pt-2 pb-2">
                                                    <b-col md="12" class="back_ground">
                                                        <p class="text-center"> بيانات المالك </p>
                                                    </b-col>

                                                    <b-col md="1"></b-col>

                                                    <b-col class="d-flex justify-content-center" md="8">
                                                    </b-col>
                                                    
                                                    <!-- <b-col md="6">
                                                        <b-form-group class="text-right" label=" نوع الملكية ">
                                                            <validation-provider #default="{ errors }" name="  نوع الملكية"
                                                                rules="required">
                                                                <b-form-input v-model="dirary.north_hieght"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="  نوع الملكية" type="text" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col> -->
                                                    
                                                </b-row>
                                                <b-form-group class="text-right" v-if="ownersFormLenght() == 0">
                                                        <b-button @click="addOwner"> اضف</b-button>
                                                    </b-form-group>
                                                <b-row v-for="(owner , i) in form.owners" :key="i" >
                                                    <b-col md="3">
                                                        <b-form-group class="text-right" label="اسم المالك">
                                                            <validation-provider #default="{ errors }" name="اسم المالك"
                                                                rules="required">
                                                                <b-form-input v-model="owner.name"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="اسم المالك" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="3">
                                                        <b-form-group class="text-right" label="رقم الجوال ">
                                                            <validation-provider #default="{ errors }" name=" رقم الجوال"
                                                                rules="required">
                                                                <b-form-input v-model="owner.phone"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder=" رقم الجوال" type="number" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="3">
                                                        <b-form-group class="text-right" label="رقم الهوية ">
                                                            <validation-provider #default="{ errors }" name=" رقم الهوية"
                                                                rules="required">
                                                                <b-form-input v-model="owner.national_id"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder=" رقم الهوية" type="number" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="3">
                                                        <b-form-group class="text-right" label=" نوع الهوية ">
                                                            <validation-provider #default="{ errors }" name=" نوع الهوية"
                                                                rules="required">
                                                                <v-select
                                                                    placeholder="نوع الهوية"
                                                                    :options="Array.from(personality , (el) => el)"
                                                                    :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                    v-model="owner.id_type"
                                                                    :reduce="(val) => val"
                                                                >
                                                                </v-select>
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="2">
                                                        <b-row>
                                                            <b-col cols="4">
                                                                <b-form-group class="text-right" label=".  ">
                                                                    <b-button @click="addOwner"> اضف</b-button>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col cols="4">
                                                                <b-form-group class="text-right" label=" . ">
                                                                    <b-button @click="form.owners.pop()">حذف</b-button>
                                                                </b-form-group>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                        <b-col cols="2 text-right pt-2">
                                                        <b-button variant="primary" @click="show_model(1)" >
                                                            السابق
                                                        </b-button>
                                                    </b-col>
                                                    
                                                    <b-col cols="8 text-right pt-2">
                                                    </b-col>
                                                    <b-col cols="2 text-right pt-2">
                                                        <b-button variant="info" @click="show_model(3)" >
                                                            التالي
                                                        </b-button>
                                                    </b-col>
                                                    </b-row>
                                            </b-form>
                                        </validation-observer>
                                    </div>
                                </b-overlay>
                                <!-- بيانات الصك  -->
                                <b-overlay v-if="(show_model_inputs == 3)" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
                                rounded="sm">
                                <div class="add_project_details_wrapper">
                                        <validation-observer ref="addProjectRules">
                                            <b-form v-if="this.hide == true">
                                                <b-row class="bg-white pt-2 pb-2">
                                                    <b-col md="12" class="back_ground">
                                                        <p class="text-center"> بيانات الصك </p>
                                                    </b-col>

                                                    <b-col md="1"></b-col>

                                                    <b-col class="d-flex justify-content-center" md="8">
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="رقم الصك">
                                                            <validation-provider #default="{ errors }" name="رقم الصك"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.contract_number"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="رقم الصك"  />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="تاريخه">
                                                            <validation-provider #default="{ errors }" name="رقم الصك"
                                                                rules="required">
                                                                <b-form-datepicker
                                                                    v-model="form.submission.contract_date"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    label-no-date-selected="تاريخه " />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="مصدره ">
                                                            <validation-provider #default="{ errors }" name="مصدره "
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.contract_source"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="مصدره " type="text" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="المساحة حسب السك ">
                                                            <validation-provider #default="{ errors }" name="المساحة حسب السك "
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.contract_area"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="المساحة حسب السك " type="number" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    
                                                </b-row>
                                                <b-row>
                                                        <b-col cols="2 text-right pt-2">
                                                        <b-button variant="primary" @click="show_model(2)" >
                                                            السابق
                                                        </b-button>
                                                    </b-col>
                                                    
                                                    <b-col cols="8 text-right pt-2">
                                                    </b-col>
                                                    <b-col cols="2 text-right pt-2">
                                                        <b-button variant="info" @click="show_model(4)" >
                                                            التالي
                                                        </b-button>
                                                    </b-col>
                                                    </b-row>
                                            </b-form>
                                        </validation-observer>
                                    </div>
                                </b-overlay>
                                <!-- حدود العقار  بالصك-->
                                <b-overlay v-if="(show_model_inputs == 4)" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
                                rounded="sm">
                                <div class="add_project_details_wrapper">
                                        <validation-observer ref="addProjectRules">
                                            <b-form v-if="this.hide == true">
                                                <b-row class="bg-white pt-2 pb-2">
                                                    <b-col md="12" class="back_ground">
                                                        <p class="text-center">الحدود والأطوال بموجب وثيقة الملكية</p>
                                                    </b-col>

                                                    <b-col md="1"></b-col>

                                                    <b-col class="d-flex justify-content-center" md="8">
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="أتجاه الشمال">
                                                            <validation-provider #default="{ errors }" name="أتجاه الشمال"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.contract_border_details.north_dir"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="أتجاه الشمال" type="text" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="طول الشمال ">
                                                            <validation-provider #default="{ errors }" name="طول الشمال"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.contract_border_details.north_length"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="أتجاه الشمال" type="number" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="أتجاه الجنوب">
                                                            <validation-provider #default="{ errors }" name="أتجاه الجنوب"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.contract_border_details.south_dir"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="أتجاه الجنوب" type="text" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="طول الجنوب ">
                                                            <validation-provider #default="{ errors }" name="طول الجنوب"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.contract_border_details.south_length"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="طول الجنوب" type="number" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="أتجاه الشرق">
                                                            <validation-provider #default="{ errors }" name="أتجاه الشرق"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.contract_border_details.east_dir"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="أتجاه الشرق" type="text" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="طول الشرق ">
                                                            <validation-provider #default="{ errors }" name="طول الشرق"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.contract_border_details.east_length"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="طول الشرق" type="number" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="أتجاه الغرب">
                                                            <validation-provider #default="{ errors }" name="أتجاه الغرب"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.contract_border_details.west_dir"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="أتجاه الغرب" type="text" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="طول الغرب ">
                                                            <validation-provider #default="{ errors }" name="طول الغرب"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.contract_border_details.west_length"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="طول الغرب" type="number" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                        <b-col cols="2 text-right pt-2">
                                                        <b-button variant="primary" @click="show_model(3)" >
                                                            السابق
                                                        </b-button>
                                                    </b-col>
                                                    
                                                    <b-col cols="8 text-right pt-2">
                                                    </b-col>
                                                    <b-col cols="2 text-right pt-2">
                                                        <!-- <b-button variant="info" @click="show_model(5)" >
                                                            التالي
                                                        </b-button> -->
                                                        <b-button variant="info" @click="checkSubmit(5)" >
                                                            تسجيل المرحلة الاولي
                                                        </b-button>
                                                    </b-col>
                                                    </b-row>
                                            </b-form>
                                        </validation-observer>
                                    </div>
                                </b-overlay>
                                <!-- بيانات العقار  -->
                                <b-overlay v-if="(show_model_inputs == 5)" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
                                rounded="sm">
                                <div class="add_project_details_wrapper">
                                        <validation-observer ref="addProjectRules">
                                            <b-form v-if="this.hide == true">
                                                <b-row class="bg-white pt-2 pb-2">
                                                    <b-col md="12" class="back_ground">
                                                        <p class="text-center"> بيانات العقار </p>
                                                    </b-col>

                                                    <b-col md="1"></b-col>

                                                    <b-col class="d-flex justify-content-center" md="8">
                                                    </b-col>
                                                    <b-col md="4">
                                                        <b-form-group class="text-right" label="رقم العقار">
                                                            <validation-provider #default="{ errors }" name="رقم العقار"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.building_number"
                                                                    :state="errors.length > 0 ? false : null" disabled
                                                                    placeholder="رقم العقار" type="text"/>
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="4">
                                                        <b-form-group class="text-right" label="رقم المخطط">
                                                            <validation-provider #default="{ errors }" name="رقم المخطط"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.planned_num"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="رقم المخطط" type="text" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="4">
                                                        <b-form-group class="text-right" label="نوع العقار ">
                                                            <validation-provider #default="{ errors }" name="نوع العقار"
                                                                rules="required">
                                                                <v-select
                                                                    placeholder="نوع العقار"
                                                                    :options="Array.from(submissionTypes , (el) => el)"
                                                                    :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                    v-model="form.submission.building_type"
                                                                    :reduce="(val) => val"
                                                                >
                                                                </v-select>
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="4">
                                                        <b-form-group class="text-right" label=" نوع الملكية ">
                                                            <validation-provider #default="{ errors }" name=" نوع الملكية"
                                                                rules="required">
                                                                <v-select
                                                                    placeholder="نوع الملكية"
                                                                    :options="Array.from(preportyTypes , (el) => el)"
                                                                    :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                    v-model="form.submission.contract_type"
                                                                    :reduce="(val) => val"
                                                                >
                                                                </v-select>
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="4">
                                                        <b-form-group class="text-right" label="الاستخدام">
                                                            <validation-provider #default="{ errors }" name="الاستخدام"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.submission_using"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="الاستخدام" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <!-- <b-col md="4">
                                                        <b-form-group class="text-right" label="وصف العقار ">
                                                            <validation-provider #default="{ errors }" name="وصف العقار"
                                                                rules="required">
                                                                <v-select
                                                                    placeholder="وصف العقار"
                                                                    :options="Array.from(submissionDesc , (el) => el)"
                                                                    :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                    v-model="form.submission.submission_desc"
                                                                    :reduce="(val) => val"
                                                                >
                                                                </v-select>
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col> -->
                                                    <b-col md="4">
                                                        <b-form-group class="text-right" label=" مساحة العقار م2">
                                                            <validation-provider #default="{ errors }" name="مساحة العقار م2"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.submission_area"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="مساحة العقار م2" type="number" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col cols="2 text-right pt-2">
                                                        <b-button variant="primary" disabled @click="show_model(4)" >
                                                            السابق
                                                        </b-button>
                                                    </b-col>
                                                    
                                                    <b-col cols="8 text-right pt-2">
                                                    </b-col>
                                                    <b-col cols="2 text-right pt-2">
                                                        <b-button variant="info" @click="show_model(6)" >
                                                            التالي
                                                        </b-button>
                                                    </b-col>
                                                    </b-row>
                                            </b-form>
                                        </validation-observer>
                                    </div>
                                </b-overlay>
                                <!-- حدود العقار -->
                                <b-overlay v-if="(show_model_inputs == 6)" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
                                rounded="sm">
                                <div class="add_project_details_wrapper">
                                        <validation-observer ref="addProjectRules">
                                            <b-form v-if="this.hide == true">
                                                <b-row class="bg-white pt-2 pb-2">
                                                    <b-col md="12" class="back_ground">
                                                        <p class="text-center">الحدود والأطوال بموجب أعمال الحصر الميداني</p>
                                                    </b-col>

                                                    <b-col md="1"></b-col>

                                                    <b-col class="d-flex justify-content-center" md="8">
                                                    </b-col>
                                                    
                                                        <b-col md="6">
                                                            <b-form-group class="text-right" label="أتجاه الشمال">
                                                                <validation-provider #default="{ errors }" name="أتجاه الشمال"
                                                                    rules="required">
                                                                    <b-form-input v-model="form.submission.restrict_border.north_dir"
                                                                        :state="errors.length > 0 ? false : null"
                                                                        placeholder="أتجاه الشمال" type="text" />
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>
                                                        <b-col md="6">
                                                            <b-form-group class="text-right" label="طول الشمال ">
                                                                <validation-provider #default="{ errors }" name="طول الشمال"
                                                                    rules="required">
                                                                    <b-form-input v-model="form.submission.restrict_border.north_length"
                                                                        :state="errors.length > 0 ? false : null"
                                                                        placeholder="أتجاه الشمال" type="number" />
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>

                                                    


                                                        <b-col md="6">
                                                            <b-form-group class="text-right" label="أتجاه الجنوب">
                                                                <validation-provider #default="{ errors }" name="أتجاه الجنوب"
                                                                    rules="required">
                                                                    <b-form-input v-model="form.submission.restrict_border.south_dir"
                                                                        :state="errors.length > 0 ? false : null"
                                                                        placeholder="أتجاه الجنوب" type="text" />
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>
                                                        <b-col md="6">
                                                            <b-form-group class="text-right" label="طول الجنوب ">
                                                                <validation-provider #default="{ errors }" name="طول الجنوب"
                                                                    rules="required">
                                                                    <b-form-input v-model="form.submission.restrict_border.south_length"
                                                                        :state="errors.length > 0 ? false : null"
                                                                        placeholder="طول الجنوب" type="number" />
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>
                                                    
                                                        <b-col md="6">
                                                            <b-form-group class="text-right" label="أتجاه الشرق">
                                                                <validation-provider #default="{ errors }" name="أتجاه الشرق"
                                                                    rules="required">
                                                                    <b-form-input v-model="form.submission.restrict_border.east_dir"
                                                                        :state="errors.length > 0 ? false : null"
                                                                        placeholder="أتجاه الشرق" type="text" />
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>
                                                        <b-col md="6">
                                                            <b-form-group class="text-right" label="طول الشرق ">
                                                                <validation-provider #default="{ errors }" name="طول الشرق"
                                                                    rules="required">
                                                                    <b-form-input v-model="form.submission.restrict_border.east_length"
                                                                        :state="errors.length > 0 ? false : null"
                                                                        placeholder="طول الشرق" type="number" />
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>
                                                    
                                                        <b-col md="6">
                                                            <b-form-group class="text-right" label="أتجاه الغرب">
                                                                <validation-provider #default="{ errors }" name="أتجاه الغرب"
                                                                    rules="required">
                                                                    <b-form-input v-model="form.submission.restrict_border.west_dir"
                                                                        :state="errors.length > 0 ? false : null"
                                                                        placeholder="أتجاه الغرب" type="text" />
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>
                                                        <b-col md="6">
                                                            <b-form-group class="text-right" label="طول الغرب ">
                                                                <validation-provider #default="{ errors }" name="طول الغرب"
                                                                    rules="required">
                                                                    <b-form-input v-model="form.submission.restrict_border.west_length"
                                                                        :state="errors.length > 0 ? false : null"
                                                                        placeholder="طول الغرب" type="number" />
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>
                                                    

                                                </b-row>
                                                <b-row>
                                                        <b-col cols="2 text-right pt-2">
                                                        <b-button variant="primary" @click="show_model(5)" >
                                                            السابق
                                                        </b-button>
                                                    </b-col>
                                                    
                                                    <b-col cols="8 text-right pt-2">
                                                    </b-col>
                                                    <b-col cols="2 text-right pt-2">
                                                        
                                                        <b-button variant="info" @click="show_model(7)" >
                                                            التالي
                                                        </b-button>
                                                    </b-col>
                                                    </b-row>
                                            </b-form>
                                        </validation-observer>
                                    </div>
                                </b-overlay>
                                <!--  الاحداثيات  -->
                                <b-overlay v-if="(show_model_inputs == 7)" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
                                rounded="sm">
                                <div class="add_project_details_wrapper">
                                        <validation-observer ref="addProjectRules">
                                            <b-form v-if="this.hide == true">
                                                <b-row class="bg-white pt-2 pb-2">
                                                    <b-col md="12" class="back_ground">
                                                        <p class="text-center">  الاحداثيات بموجب الرفع المساحي </p>
                                                    </b-col>

                                                    <b-col md="1"></b-col>

                                                    <b-col class="d-flex justify-content-center" md="8">
                                                    </b-col>
                                                    
                                                </b-row>
                                                <b-form-group class="text-right" v-if="coorsFormLenght() == 0">
                                                        <b-button @click="addCoor"> اضف</b-button>
                                                    </b-form-group>
                                                <b-row v-for="(coor , i) in form.submission.coordinates" :key="i" >
                                                    <b-col md="3">
                                                        <b-form-group class="text-right" :label= "'  احداثيات الشمال ' + (i+1) ">
                                                            <validation-provider #default="{ errors }" name=" احداثيات الشمال"
                                                                rules="required">
                                                                <b-form-input v-model="coor.coor_north"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder=" احداثيات الشمال" type="number" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="3">
                                                        <b-form-group class="text-right" label=" احداثيات الشرق ">
                                                            <validation-provider #default="{ errors }" name=" احداثيات الشرق"
                                                                rules="required">
                                                                <b-form-input v-model="coor.coor_east"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder=" احداثيات الشرق" type="number" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="2">
                                                        <b-row>
                                                            <b-col cols="4">
                                                                <b-form-group class="text-right" label=".  ">
                                                                    <b-button @click="addCoor"> اضف</b-button>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col cols="4">
                                                                <b-form-group class="text-right" label=" . ">
                                                                    <b-button @click="form.submission.coordinates.pop()">حذف</b-button>
                                                                </b-form-group>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                        <b-col cols="2 text-right pt-2">
                                                        <b-button variant="primary" @click="show_model(6)" >
                                                            السابق
                                                        </b-button>
                                                    </b-col>
                                                    
                                                    <b-col cols="8 text-right pt-2">
                                                    </b-col>
                                                    <b-col cols="2 text-right pt-2">
                                                        <b-button variant="info" @click="show_model(8)" >
                                                            التالي
                                                        </b-button>
                                                    </b-col>
                                                    </b-row>
                                            </b-form>
                                        </validation-observer>
                                    </div>
                                </b-overlay>
                                <!-- المساحات المنزوعة   -->
                                <b-overlay v-if="(show_model_inputs == 8)" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
                                rounded="sm">
                                <div class="add_project_details_wrapper">
                                        <validation-observer ref="addProjectRules">
                                            <b-form v-if="this.hide == true">
                                                <b-row class="bg-white pt-2 pb-2">
                                                    <b-col md="12" class="back_ground">
                                                        <p class="text-center">  المساحات المنزوعة  </p>
                                                    </b-col>

                                                    <b-col md="1"></b-col>

                                                    <b-col class="d-flex justify-content-center" md="8">
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="المساحة المبنية">
                                                            <validation-provider #default="{ errors }" name="المساحة المبنية"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.build_area"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="المساحة المبنية" type="number"/>
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="6">
                                                        <b-form-group class="text-right" label="المساحات غير المبنية">
                                                            <validation-provider #default="{ errors }" name="المساحات غير المبنية"
                                                                rules="required">
                                                                <b-form-input v-model="form.submission.unbuild_area"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="المساحات غير المبنية" type="number" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col cols="2 text-right pt-2">
                                                        <b-button variant="primary" @click="show_model(7)" >
                                                            السابق
                                                        </b-button>
                                                    </b-col>
                                                    
                                                    <b-col cols="8 text-right pt-2">
                                                    </b-col>
                                                    <b-col cols="2 text-right pt-2">
                                                        <!-- <b-button variant="info" @click="show_model(8)" >
                                                            التالي
                                                        </b-button> -->
                                                        <b-button variant="info" @click="checkSubmit(9)" >
                                                            انهاء المرحلة الثانية
                                                        </b-button>
                                                    </b-col>
                                                    </b-row>
                                            </b-form>
                                        </validation-observer>
                                    </div>
                                </b-overlay>
                                <!--  المشتمالات -->
                                <b-overlay v-if="(show_model_inputs == 9 )" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
                                    rounded="sm">
                                    <div class="add_project_details_wrapper">
                                            <validation-observer ref="addProjectRules">
                                                <b-form v-if="this.hide == true">
                                                    <b-row class="bg-white pt-2 pb-2">
                                                        <b-col md="12" class="back_ground">
                                                            <p class="text-center">المشتمالات</p>
                                                            <!-- {{  $store.getters['dashboard/getLookups'].includes_type  }} -->
                                                        </b-col>
                                                        <b-col md="1"></b-col>
                                                        <b-col class="d-flex justify-content-center" md="8">
                                                        </b-col>
                                                        
                                                    </b-row>
                                                    <!-- <b-form-group class="text-right" v-if="includesFormLength() == 0">
                                                        <b-button @click="addIncludes"> اضف</b-button>
                                                    </b-form-group> -->
                                                    <!-- <div v-for="(item ,index) in includesForm" :key="index"> -->
                                                        <b-row>
                                                                <b-col md="3">
                                                                    
                                                                    <b-form-group class="text-right" label=" نوع المشتمل ">
                                                                        <validation-provider #default="{ errors }" name=" نوع المشتمل"
                                                                            rules="required">
                                                                            <v-select
                                                                                placeholder="نوع المشتمل"
                                                                                :options="$store.getters['dashboard/getLookups'].includes_type "
                                                                                label = 'name'
                                                                                :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                                v-model="includesForm.build_id"
                                                                                :reduce="(val) => val.id"
                                                                            >
                                                                            </v-select>
                                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                                مطلوب</small>
                                                                        </validation-provider>
                                                                    </b-form-group>
                                                                </b-col>
                                                                <b-col md="3">
                                                                    <b-form-group class="text-right" label=" الوصف  ">
                                                                        
                                                                        <validation-provider #default="{ errors }" name=" الوصف "
                                                                            rules="required">
                                                                            <!-- {{ $store.getters['dashboard/getLookups'].includes_type.filter((el)=>el.id == includesForm[index].type)[0].build_desc }} -->
                                                                            <v-select
                                                                                placeholder="الوصف "
                                                                                :options="$store.getters['dashboard/getLookups'].includes_type.filter((el)=>
                                                                                    el.id == includesForm.build_id)[0].build_desc"
                                                                                label='name'
                                                                                :disabled="includesForm.build_id ? false : true"
                                                                                :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                                v-model="includesForm.build_desc_id"
                                                                                :reduce="(val) => val.id"
                                                                            >
                                                                            </v-select>
                                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                                مطلوب</small>
                                                                        </validation-provider>
                                                                    </b-form-group>
                                                                </b-col>
                                                                <b-col md="2">
                                                                    <b-form-group class="text-right" label=" الوحدة">
                                                                        <validation-provider #default="{ errors }" name="الوحدة "
                                                                            rules="required">
                                                                            <b-form-input v-model="includesForm.qty"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder=" " type="number" />
                                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                                مطلوب</small>
                                                                        </validation-provider>
                                                                    </b-form-group>
                                                                </b-col>
                                                                <b-col md="2">
                                                                    <b-form-group class="text-right" label=" مرفق">
                                                                        <validation-provider #default="{ errors }" name="مرفق "
                                                                            rules="required">
                                                                            <input type="file" name="image" 
                                                                                @change="changeImg"
                                                                                accept="image/apng, image/jpeg, image/png, image/webp"
                                                                                />
                                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                                مطلوب</small>
                                                                        </validation-provider>
                                                                    </b-form-group>
                                                                </b-col>
                                                                <b-col md="2">
                                                                    <b-row>
                                                                        <b-col cols="4">
                                                                            <b-form-group class="text-right" label=".  ">
                                                                                <b-button @click="addIncludes"> اضف</b-button>
                                                                            </b-form-group>
                                                                        </b-col>
                                                                        <!-- <b-col cols="4">
                                                                            <b-form-group class="text-right" label=" . ">
                                                                                <b-button @click="includesForm.pop()">حذف</b-button>
                                                                            </b-form-group>
                                                                        </b-col> -->
                                                                    </b-row>
                                                                </b-col>
                                                        </b-row>
                                                        <!-- <div v-if="includesForm.build_id == 1">
                                                            <b-row v-for="(details , index) in form.submission.building_details" :key="index" >
                                                                <b-col md="4">
                                                                    <b-form-group class="text-right" label=" الدور ">
                                                                        <validation-provider #default="{ errors }" name=" الدور"
                                                                            rules="required">
                                                                            <v-select
                                                                                placeholder="الدور"
                                                                                :options="Array.from(roofs , (el) => el)"
                                                                                :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                                v-model="form.submission.building_details[index].roof"
                                                                                :reduce="(val) => val"
                                                                            >
                                                                            </v-select>
                                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                                مطلوب</small>
                                                                        </validation-provider>
                                                                    </b-form-group>
                                                                </b-col>
                                                                <b-col md="4" >
                                                                    <b-form-group class="text-right" label="المساحة ">
                                                                        <validation-provider #default="{ errors }" name="المساحة "
                                                                            rules="required">
                                                                            <b-form-input v-model="form.submission.building_details[index].area"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="المساحة " type="number" />
                                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                                مطلوب</small>
                                                                        </validation-provider>
                                                                    </b-form-group>
                                                                </b-col>
                                                                <b-col>
                                                                    <b-row>
                                                                        <b-col cols="4">
                                                                            <b-form-group class="text-right" label=".  ">
                                                                                <b-button @click="addroof"> اضف</b-button>
                                                                            </b-form-group>
                                                                        </b-col>
                                                                        <b-col cols="4">
                                                                            <b-form-group class="text-right" label=" . ">
                                                                                <b-button @click="form.submission.building_details.pop()">حذف</b-button>
                                                                            </b-form-group>
                                                                        </b-col>
                                                                    </b-row>
                                                                </b-col>
                                                            </b-row>
                                                        </div> -->
                                                        

                                                    <div style="margin-top: 50px;">
                                                        {{ $store.getters[`dashboard/get_incs/${69}`] }}
                                                        <b-table
                                                            class="text-center"
                                                            striped
                                                            hover
                                                            :items="$store.getters['dashboard/get_incs/69']"
                                                            :fields="[
                                                                    { key: 'type', label: 'نوع المشتمل ' },
                                                                    { key: 'content', label: 'الوصف' },
                                                                    { key: 'qty', label: '  الوحدة ' },
                                                                    { key: 'action', label: '  تعديل ' },
                                                                ]"
                                                        >
                                                        <template #cell(action)="data">
                                                            <feather-icon @click="edit_inc_form(data.item)" icon="EditIcon">

                                                            </feather-icon>
                                                        </template>
                                                        </b-table>
                                                        <b-button @click="edit_inc_form()"> fffff</b-button>
                                                    </div>
                                                    <div>
                                                        <b-modal hide-header-close v-model="model_inc_edit" hide-footer title="أضافة ملاحظة " size="lg" >
                                                            <div class="demo-vertical-spacing">
                                                                <h3>ddddddddd</h3>
                                                            </div>
                                                            <div class="mt-2">
                                                                <b-col cols="12">
                                                                    <div class="d-flex justify-content-end">
                                                                        <b-button @click="edit_inc()" variant="primary" style="margin-right: 10px;">تأكيد</b-button>
                                                                        <b-button @click="model_inc_edit = false"  variant="outline-primary">الغاء</b-button>
                                                                    </div>
                                                                </b-col>
                                                            </div>

                                                        </b-modal>
                                                    </div>
                                                    <b-row>
                                                        <b-col cols="2 text-right pt-2">
                                                            <b-button variant="primary" @click="show_model(8)" >
                                                                السابق
                                                            </b-button>
                                                        </b-col>
                                                        
                                                        <b-col cols="8 text-right pt-2">
                                                        </b-col>
                                                        <b-col cols="2 text-right pt-2">
                                                            <!-- <b-button variant="info" @click="show_model(9)" >
                                                                التالي
                                                            </b-button> -->
                                                            <!-- <b-button variant="danger" @click="checkSubmit()" >
                                                                حفظ
                                                            </b-button> -->
                                                        </b-col>
                                                        
                                                    </b-row>
                                                </b-form>
                                            </validation-observer>
                                    </div>
                                </b-overlay>
                                <!-- المرفقات   -->
                                <b-overlay v-if="(show_model_inputs == 10)" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
                                rounded="sm">
                                <div class="add_project_details_wrapper">
                                        <validation-observer ref="addProjectRules">
                                            <b-form v-if="this.hide == true">
                                                <b-row class="bg-white pt-2 pb-2">
                                                    <b-col md="12" class="back_ground">
                                                        <p class="text-center">  المرفقات  </p>
                                                    </b-col>

                                                    <b-col md="1"></b-col>

                                                    <b-col class="d-flex justify-content-center" md="8">
                                                    </b-col>
                                                    
                                                </b-row>
                                                <b-form-group class="text-right" v-if="attachLength() == 0">
                                                    <b-button @click="addAttachs"> اضف</b-button>
                                                </b-form-group>
                                                <b-row v-for="(attach , i ) in form.attachs" :key="i">
                                                    <b-col md="4">
                                                        <b-form-group class="text-right"
                                                            label=" المرفق ">
                                                            <input type="file" name="image"
                                                                accept="image/apng, image/jpeg, image/png, image/webp"
                                                                />
                                                        </b-form-group>
                                                        <b-form-group class="text-right" label="المرفق">
                                                            <validation-provider #default="{ errors }" name="المرفق"
                                                                rules="required">
                                                                <b-form-input v-model="attach.file"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="المرفق" type="file"/>
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="4">
                                                        <b-form-group class="text-right" label="ملاحظات">
                                                            <validation-provider #default="{ errors }" name="ملاحظات"
                                                                rules="required">
                                                                <b-form-input v-model="attach.note"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="ملاحظات" type="text" />
                                                                <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                    مطلوب</small>
                                                            </validation-provider>
                                                        </b-form-group>
                                                    </b-col>
                                                    <b-col md="3">
                                                        <b-row>
                                                            <b-col cols="4">
                                                                <b-form-group class="text-right" label=".  ">
                                                                    <b-button @click="addAttachs"> اضف</b-button>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col cols="4">
                                                                <b-form-group class="text-right" label=" . ">
                                                                    <b-button @click="form.attachs.pop()">حذف</b-button>
                                                                </b-form-group>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col cols="2 text-right pt-2">
                                                        <b-button variant="primary" @click="show_model(7)" >
                                                            السابق
                                                        </b-button>
                                                    </b-col>
                                                    
                                                    <b-col cols="8 text-right pt-2">
                                                    </b-col>
                                                    <b-col cols="2 text-right pt-2">
                                                        <b-button variant="danger" @click="checkSubmit()" >
                                                            حفظ
                                                        </b-button>
                                                    </b-col>
                                                    </b-row>
                                            </b-form>
                                        </validation-observer>
                                    </div>
                                </b-overlay> 
                                
                            </b-col>
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
                model_inc_edit:false,
                includesForm: {
                        build_id:null,
                        build_desc_id: null,
                        qty: null,
                        submission_id: null,
                        image: null,
                    },
                form: {
                    owners: [{
                        name: null,
                        phone: null,
                        national_id: null,
                        id_type: null,
                    }],
                    attachs: [{
                        file: null,
                        note: null,
                    }],
                    
                    
                    submission: {
                        id: null,
                        restrict_border: {
                            north_dir: null,
                            south_dir: null,
                            east_dir: null,
                            west_dir: null,
                            north_length: null,
                            south_length: null,
                            east_length: null,
                            west_length: null,
                        },
                        contract_border_details: {
                            north_dir: null,
                            south_dir: null,
                            east_dir: null,
                            west_dir: null,
                            north_length: null,
                            south_length: null,
                            east_length: null,
                            west_length: null,
                        },
                        coordinates:[{
                            coor_north: null,
                            coor_east: null,
                        }],
                        building_details:[ {
                            roof:null,
                            area:null,
                        }],
                        pro_num:null,
                        pro_name:null,
                        plad_num:null,
                        building_number: null,
                        government: null,
                        area: null,
                        zone: null,
                        center: null,
                        contract_type: null,
                        contract_area:null,
                        build_area: null,
                        unbuild_area: null,
                        total_area: null,
                        planned_num:null,
                        // contract_border_details: null,
                        // restrict_border: null,
                        contract_number: null,
                        contract_date: null,
                        contract_source: null,
                        removed_from_building: null,
                        building_type: null,
                        unit: null,
                        total_compensation: null,
                        compensation_without_land: null,
                        improvement: null,
                        transportation: null,
                        created_by: null,
                        submission_using:null,
                        submission_area:null,
                        // search_text: null,
                    },
                },
                show_model_inputs: 1,
                hide: true,
                roofs:[
                    ' تحت الارضي',' الارضي',' الاول',' الثاني',' الثالث',' الرابع',' الخامس','أخري',
                ],
                personality: [
                    'تابعية','هوية'
                ],
                zones: [
                    'A1', 'A2', 'A3',
                ],
                submissionTypes: [
                    'سكني',
                    'تجاري',
                    'تعليمي',
                    'فندقي',
                    'أرض فضاء',
                ],
                preportyTypes: [
                    'مالك',
                    'وكيل',
                    'ممثل',
                ],
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
                this.$store.getters['dashboard/get_incs/69']
            // this.$store.dispatch(`dashboard/get_incs/${69}`)
            // .then((res) => {
            //     console.log(res);
            //     // this.build_type = res.includes_type;
                
            // })

        },
        computed:{
            getIncludes(){
                this.$store.getters[`dashboard/get_incs/${69}`]
            }
        },
        methods: {  
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