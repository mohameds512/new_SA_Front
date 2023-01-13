<template>
    <div class="main_ecb_wrapper">
        <!-- //// Start Project Details  -->
        <b-row>
            <b-col>
                <div align="right">
                    <b-row class="bg-white pt-2 pb-2">
                        <b-col cols="12">
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
                                                            <b-form-input v-model="form.submission.government"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="اسم المشروع"  />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="رقم المشروع">
                                                        <validation-provider #default="{ errors }" name="رقم المشروع"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission.center"
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
                                                            <b-form-input v-model="form.submission.area"
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
                                                            <b-form-input v-model="form.submission.center"
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
                                                                placeholder="اسم المالك" type="number" />
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
                                                                v-model="owner.idType"
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
                                                                placeholder="رقم الصك" type="number" />
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
                                                            <b-form-input v-model="contract_date.contract_source"
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
                                                            <b-form-input v-model="contract_source.contract_area"
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
                                                            <b-form-input v-model="form.contract_border_details.north_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الشمال" type="number" />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="طول الشمال ">
                                                        <validation-provider #default="{ errors }" name="طول الشمال"
                                                            rules="required">
                                                            <b-form-input v-model="form.contract_border_details.north_length"
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
                                                            <b-form-input v-model="form.contract_border_details.south_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الجنوب" type="number" />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="طول الجنوب ">
                                                        <validation-provider #default="{ errors }" name="طول الجنوب"
                                                            rules="required">
                                                            <b-form-input v-model="form.contract_border_details.south_length"
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
                                                            <b-form-input v-model="form.contract_border_details.east_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الشرق" type="number" />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="طول الشرق ">
                                                        <validation-provider #default="{ errors }" name="طول الشرق"
                                                            rules="required">
                                                            <b-form-input v-model="form.contract_border_details.east_length"
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
                                                            <b-form-input v-model="form.contract_border_details.west_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الغرب" type="number" />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="طول الغرب ">
                                                        <validation-provider #default="{ errors }" name="طول الغرب"
                                                            rules="required">
                                                            <b-form-input v-model="form.contract_border_details.west_length"
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
                                                    <b-button variant="info" @click="show_model(5)" >
                                                        التالي
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
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="رقم العقار" type="number"/>
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
                                                                placeholder="رقم المخطط" type="number" />
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
                                                    <b-form-group class="text-right" label="نوع الملكية ">
                                                        <validation-provider #default="{ errors }" name="نوع الملكية"
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
                                                <b-col md="4">
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
                                                </b-col>
                                                <b-col md="4">
                                                    <b-form-group class="text-right" label=" مساحة العقار م2">
                                                        <validation-provider #default="{ errors }" name="مساحة العقار م2"
                                                            rules="required">
                                                            <b-form-input v-model="submission.project_num"
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
                                                    <b-button variant="primary" @click="show_model(4)" >
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
                                                            <b-form-input v-model="dirary.north_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الشمال" type="number" />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="طول الشمال ">
                                                        <validation-provider #default="{ errors }" name="طول الشمال"
                                                            rules="required">
                                                            <b-form-input v-model="dirary.north_hieght"
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
                                                            <b-form-input v-model="dirary.south_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الجنوب" type="number" />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="طول الجنوب ">
                                                        <validation-provider #default="{ errors }" name="طول الجنوب"
                                                            rules="required">
                                                            <b-form-input v-model="dirary.south_hieght"
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
                                                            <b-form-input v-model="dirary.east_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الشرق" type="number" />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="طول الشرق ">
                                                        <validation-provider #default="{ errors }" name="طول الشرق"
                                                            rules="required">
                                                            <b-form-input v-model="dirary.east_hieght"
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
                                                            <b-form-input v-model="dirary.west_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الغرب" type="number" />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="طول الغرب ">
                                                        <validation-provider #default="{ errors }" name="طول الغرب"
                                                            rules="required">
                                                            <b-form-input v-model="dirary.west_hieght"
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
                            <!-- المساحات المنزوعة   -->
                            <b-overlay v-if="(show_model_inputs == 7)" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
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
                                                    <b-form-group class="text-right" label="المساحة المنزوعة المبنية">
                                                        <validation-provider #default="{ errors }" name="المساحة المنزوعة المبنية"
                                                            rules="required">
                                                            <b-form-input v-model="submission.submission_num"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="المساحة المنزوعة المبنية" type="number"/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="المساحات المنزوعة غير المبنية">
                                                        <validation-provider #default="{ errors }" name="المساحات المنزوعة غير المبنية"
                                                            rules="required">
                                                            <b-form-input v-model="submission.planned_num"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="المساحات المنزوعة غير المبنية" type="number" />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
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
                            
                            <!--  المشتمالات -->
                            <b-overlay v-if="(show_model_inputs == 8)" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
                            rounded="sm">
                                <div class="add_project_details_wrapper">
                                        <validation-observer ref="addProjectRules">
                                            <b-form v-if="this.hide == true">
                                                <b-row class="bg-white pt-2 pb-2">
                                                    <b-col md="12" class="back_ground">
                                                        <p class="text-center">المشتمالات</p>
                                                    </b-col>

                                                    <b-col md="1"></b-col>

                                                    <b-col class="d-flex justify-content-center" md="8">
                                                    </b-col>
                                                    
                                                </b-row>
                                                <b-form-group class="text-right" v-if="includesFormLength() == 0">
                                                    <b-button @click="addIncludes"> اضف</b-button>
                                                </b-form-group>
                                                <b-row v-for="(item ,index) in form.includesForm" :key="index">
                                                        <b-col md="4">
                                                            <b-form-group class="text-right" label=" نوع المشتمل ">
                                                                <validation-provider #default="{ errors }" name=" نوع المشتمل"
                                                                    rules="required">
                                                                    <v-select
                                                                        placeholder="نوع المشتمل"
                                                                        :options="Array.from(contentType , (el) => el)"
                                                                        :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                        v-model="submission.zone"
                                                                        :reduce="(val) => val"
                                                                    >
                                                                    </v-select>
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>
                                                        <b-col md="4">
                                                            <b-form-group class="text-right" label=" الوصف  ">
                                                                <validation-provider #default="{ errors }" name=" الوصف "
                                                                    rules="required">
                                                                    <v-select
                                                                        placeholder="الوصف "
                                                                        :options="Array.from(contentDesc , (el) => el)"
                                                                        :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                        v-model="submission.zone"
                                                                        :reduce="(val) => val"
                                                                    >
                                                                    </v-select>
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>
                                                        <b-col md="2">
                                                            <b-form-group class="text-right" label="المساحة  ">
                                                                <validation-provider #default="{ errors }" name="المساحة "
                                                                    rules="required">
                                                                    <b-form-input v-model="dirary.east_hieght"
                                                                        :state="errors.length > 0 ? false : null"
                                                                        placeholder="المساحة " type="number" />
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
                                                                <b-col cols="4">
                                                                    <b-form-group class="text-right" label=" . ">
                                                                        <b-button @click="form.includesForm.pop()">حذف</b-button>
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
                                                        <b-button variant="info" @click="show_model(9)" >
                                                            التالي
                                                        </b-button>
                                                    </b-col>
                                                </b-row>
                                            </b-form>
                                        </validation-observer>
                                </div>
                            </b-overlay>
                            <!-- المرفقات   -->
                            <b-overlay v-if="(show_model_inputs == 9)" variant="white"  spinner-variant="primary" blur="0" opacity=".75"
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
                                                    <!-- <b-form-group class="text-right" label="المرفق">
                                                        <validation-provider #default="{ errors }" name="المرفق"
                                                            rules="required">
                                                            <b-form-input v-model="attach.file"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="المرفق" type="file"/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group> -->
                                                </b-col>
                                                <b-col md="4">
                                                    <b-form-group class="text-right" label="ملاحظات">
                                                        <validation-provider #default="{ errors }" name="ملاحظات"
                                                            rules="required">
                                                            <b-form-input v-model="attach.note"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="ملاحظات" type="number" />
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

    export default {
        name: 'Add Project',
        props: {
            value: Array,
            fields: Array
        },
        data() {
            return {
                // includesForm:[],
                form: {
                    includesForm: [{
                        type:null,
                        desc: null,
                        area: null,
                    }],
                    owners: [{
                        name: null,
                        phone: null,
                        natiinal_id: null,
                        idType: null,
                    }],
                    attachs: [{
                        file: null,
                        note: null,
                    }],
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
                    submission: {
                        building_number: null,
                        government: null,
                        area: null,
                        center: null,
                        contract_type: null,
                        contract_area:null,
                        build_area: null,
                        unbuild_area: null,
                        total_area: null,
                        building_details: null,
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
                        // search_text: null,
                    },
                },
                show_model_inputs: 1,
                hide: true,
                contentType: [
                    'مبني','مظلة','حظيرة'
                ],
                contentDesc:[
                    'des1','des2'
                ],
                personality: [
                    'زائر','مقيم','مواطن'
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
                    'ايجار',
                    'ملك',
                ],
                submissionDesc: [
                    'تشطيب داخلي',
                    'تشطيب خارجي',
                    'تشطيب داخلي و خارجي',
                ],
                
                dirary: {
                    north_dir: null,
                    south_dir: null,
                    east_dir: null,
                    west_dir: null,
                    north_hieght: null,
                    south_hieght: null,
                    east_hieght: null,
                    west_hieght: null,
                },
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
                tableItems: {

                },
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
            // this.$store.dispatch('ecb_forms/listProjects', this.id)
            //     .then((res) => {
            //         console.log(res)
            //         this.project = res
            //     })

            // this.$store.dispatch('ecb_forms/listcontractors', this.id)
            //     .then((res) => {
            //         this.contractor_list = res.contractors
            //         this.consultant_list = res.consultants
            //         this.division_list = res.divisions
            //         this.work_statement_list = res.work_statements
            //         this.work_statement_work = res.work_statements_work
            //         this.specialization_list = res.specializations
            //         this.raw_material_list = res.raw_materials
            //         this.equipment_list = res.equipments
            //         this.activity_list = res.activities
            //         this.man_power_category_list = res.manpower_categories
            //         this.man_power_list = res.manpower
            //         this.work_progress_list = res.work_progress
            //         this.earned_value_list = res.earned_value
            //         this.check_request_list = res.check_request
            //         this.operational_graphics_list = res.operational_graphics
            //         this.equipment_productivity_list = res.equipment_productivity
            //         this.exports_list = res.exports
            //         this.problems_list = res.problems
            //         this.cash_flow_list = res.cash_flow
            //         this.project_images_list = res.project_images
            //         this.contract_list = res.contracts
            //         this.work_statements_work = res.work_statements_work

            //         console.log(res)
            //     })

            // this.$store.dispatch('ecb_forms/viewImg', {
            //     id: 20,
            //     query: {

            //         contract_id: null,
            //     },
            // })
            //     .then((res) => {

            //         console.log(res)
            //     })

        },
        methods: {  
            show_model(num){
                this.show_model_inputs = num;
            },
            addIncludes(){
                this.form.includesForm.push({type:null,desc:null,area:null});
            },
            includesFormLength(){
                var x = this.form.includesForm;
                return x.length; 
            },
            addOwner(){
                this.form.owners.push({name:null,phone:null,idType:null});
            },
            ownersFormLenght(){
                var x = this.form.owners;
                return x.length; 
            },
            addAttachs(){
                this.form.attachs.push({file:null,note:null});
            },
            attachLength(){
                var x = this.form.attachs;
                return x.length;
            },
            checkSubmit(){
                this.$swal({
                    icon: 'info',
                    title: 'هل انت متأكد من عملية الحفظ ',
                    showConfirmButton: true,
                    // timer: 1500,
                })
            }
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