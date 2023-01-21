<template>
    <div class="main_ecb_wrapper">
        <!-- //// Start Project Details  -->
        <b-row>

            <b-col>
                <div dir="rtl">
                    <b-row class="bg-white pt-2 pb-2">
                        <b-col cols="12">
                            <b-card no-body>
                                <b-tabs pills card>
                                <b-tab title="بيانات المشروع" active>
                                    <b-card-text>
                                    <div class="add_project_details_wrapper">
                                    <validation-observer ref="addProjectRules">
                                        <b-form v-if="this.hide == true">
                                            <b-row class="bg-white pt-2 pb-2">
                                                <!-- <b-col md="12" class="back_ground">
                                                    <p class="text-center"> بيانات المشروع </p>
                                                </b-col>

                                                <b-col md="1"></b-col> -->

                                                <b-col class="d-flex justify-content-center" md="8">
                                                </b-col>
                                                <!-- {{ retDirs(form.submission[0].contract_border_details , north_dir )  }} -->

                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="اسم المشروع">
                                                        <validation-provider #default="{ errors }" name="اسم المشروع"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].pro_name"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="اسم المشروع" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="رقم المشروع">
                                                        <validation-provider #default="{ errors }" name="رقم المشروع"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].pro_num"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="رقم المشروع" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="رقم المنطقة ">
                                                        <validation-provider #default="{ errors }" name=" رقم المنطقة"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].zone"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder=" رقم المنطقة" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label=" رقم اللوحة">
                                                        <validation-provider #default="{ errors }" name=" رقم اللوحة"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].plad_num"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder=" رقم اللوحة" disabled  />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <!-- <b-col cols="10 text-right pt-2">
                                                </b-col>
                                                <b-col cols="2 text-right pt-2">
                                                    <b-button variant="info" @click="show_model(2)" >
                                                        التالي
                                                    </b-button>
                                                </b-col> -->

                                            </b-row>
                                        </b-form>
                                    </validation-observer>
                                    </div>
                                </b-card-text>
                            </b-tab>
                                <b-tab title="بيانات المالك ">
                                    <b-card-text>
                                        <div class="add_project_details_wrapper">
                                    <validation-observer ref="addProjectRules">
                                        <b-form v-if="this.hide == true">
                                            <b-row class="bg-white pt-2 pb-2">
                                                <!-- <b-col md="12" class="back_ground">
                                                    <p class="text-center"> بيانات المالك </p>
                                                </b-col>

                                                <b-col md="1"></b-col> -->

                                                <b-col class="d-flex justify-content-center" md="8">
                                                </b-col>

                                                <!-- <b-col md="6">
                                                    <b-form-group class="text-right" label=" نوع الملكية ">
                                                        <validation-provider #default="{ errors }" name="  نوع الملكية"
                                                            rules="required">
                                                            <b-form-input v-model="boundary.north_hieght"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="  نوع الملكية" type="text" />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col> -->

                                            </b-row>

                                            <b-row v-for="(owner , i) in form.owners" :key="i" >
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label="اسم المالك">
                                                        <validation-provider #default="{ errors }" name="اسم المالك"
                                                            rules="required">
                                                            <b-form-input v-model="owner.name"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="اسم المالك" disabled />
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
                                                                placeholder=" رقم الجوال" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label=" نوع الهوية ">
                                                        <validation-provider #default="{ errors }" name=" نوع الهوية"
                                                            rules="required">
                                                            <b-form-input v-model="owner.id_type"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder=" نوع الهوية "  disabled />
                                                            <!-- <v-select
                                                                placeholder="نوع الهوية"
                                                                :options="Array.from(personality , (el) => el)"
                                                                :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                v-model="submission.zone"
                                                                :reduce="(val) => val"
                                                                disabled
                                                            > -->
                                                            </v-select>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="2">

                                                </b-col>
                                            </b-row>

                                        </b-form>
                                    </validation-observer>
                                </div>
                                    </b-card-text>
                                </b-tab>

                                <b-tab title="بيانات الصك ">
                                    <b-card-text>
                                        <div class="add_project_details_wrapper">
                                    <validation-observer ref="addProjectRules">
                                        <b-form v-if="this.hide == true">
                                            <b-row class="bg-white pt-2 pb-2">

                                                <b-col class="d-flex justify-content-center" md="8">
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="رقم الصك">
                                                        <validation-provider #default="{ errors }" name="رقم الصك"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_number"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="رقم الصك" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="تاريخه">
                                                        <validation-provider #default="{ errors }" name="رقم الصك"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_date"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="  تاريخه"  disabled />
                                                            <!-- <b-form-datepicker
                                                                v-model="submission.submission_history"
                                                                :state="errors.length > 0 ? false : null"
                                                                label-no-date-selected="تاريخه " disabled /> -->
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="مصدره ">
                                                        <validation-provider #default="{ errors }" name="مصدره "
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_source"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="مصدره " type="text" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="المساحة حسب السك ">
                                                        <validation-provider #default="{ errors }" name="المساحة حسب السك "
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_area"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="المساحة حسب السك " type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>

                                            </b-row>

                                        </b-form>
                                    </validation-observer>
                                </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="حدود العقار  بالصك">
                                    <b-card-text>
                                        <div class="add_project_details_wrapper">
                                    <validation-observer ref="addProjectRules">
                                        <b-form v-if="this.hide == true">
                                            <b-row class="bg-white pt-2 pb-2">

                                                <b-col class="d-flex justify-content-center" md="8">
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="أتجاه الشمال">
                                                        <validation-provider #default="{ errors }" name="أتجاه الشمال"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_border_details.north_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الشمال"  disabled/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="طول الشمال ">
                                                        <validation-provider #default="{ errors }" name="طول الشمال"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_border_details.north_length"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الشمال" type="number" disabled/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="أتجاه الجنوب">
                                                        <validation-provider #default="{ errors }" name="أتجاه الجنوب"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_border_details.south_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الجنوب" type="number" disabled/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="طول الجنوب ">
                                                        <validation-provider #default="{ errors }" name="طول الجنوب"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_border_details.south_length"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="طول الجنوب" type="number" disabled/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="أتجاه الشرق">
                                                        <validation-provider #default="{ errors }" name="أتجاه الشرق"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_border_details.east_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الشرق" type="number" disabled/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="طول الشرق ">
                                                        <validation-provider #default="{ errors }" name="طول الشرق"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_border_details.east_length"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="طول الشرق" type="number" disabled/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="أتجاه الغرب">
                                                        <validation-provider #default="{ errors }" name="أتجاه الغرب"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_border_details.west_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الغرب" type="number" disabled/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="طول الغرب ">
                                                        <validation-provider #default="{ errors }" name="طول الغرب"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_border_details.west_length"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="طول الغرب" type="number" disabled/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>

                                        </b-form>
                                    </validation-observer>
                                </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="بيانات العقار ">
                                    <b-card-text>
                                        <div class="add_project_details_wrapper">
                                    <validation-observer ref="addProjectRules">
                                        <b-form v-if="this.hide == true">
                                            <b-row class="bg-white pt-2 pb-2">

                                                <b-col class="d-flex justify-content-center" md="8">
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="رقم العقار">
                                                        <validation-provider #default="{ errors }" name="رقم العقار"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].building_number"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="رقم العقار" type="number" disabled/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="رقم المخطط">
                                                        <validation-provider #default="{ errors }" name="رقم المخطط"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].planned_num"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="رقم المخطط" type="number" disabled/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <!-- <b-col md="6">
                                                    <b-form-group class="text-right" label="نوع العقار ">
                                                        <validation-provider #default="{ errors }" name="نوع العقار"
                                                            rules="required">
                                                            <v-select
                                                                placeholder="نوع العقار"
                                                                :options="Array.from(submissionTypes , (el) => el)"
                                                                :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                v-model="submission.submission_type"
                                                                :reduce="(val) => val"
                                                                disabled
                                                                >
                                                            </v-select>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col> -->
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="نوع الملكية ">
                                                        <validation-provider #default="{ errors }" name="نوع الملكية"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].contract_type"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder=""  disabled/>
                                                            <!-- <v-select
                                                                placeholder="نوع الملكية"
                                                                :options="Array.from(preportyTypes , (el) => el)"
                                                                :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                v-model="form.submission[0].contract_type"
                                                                :reduce="(val) => val" disabled
                                                            >
                                                            </v-select> -->
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="الاستخدام">
                                                        <validation-provider #default="{ errors }" name="الاستخدام"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].submission_using"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="الاستخدام"  disabled/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <!-- <b-col md="6">
                                                    <b-form-group class="text-right" label="وصف العقار ">
                                                        <validation-provider #default="{ errors }" name="وصف العقار"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].submission_desc"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="  وصف العقار " type="number" disabled />

                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col> -->
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label=" مساحة العقار م2">
                                                        <validation-provider #default="{ errors }" name="مساحة العقار م2"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].submission_area"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="مساحة العقار م2" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>

                                        </b-form>
                                    </validation-observer>
                                </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="  حدود العقار علي الطبيعة">
                                    <b-card-text>
                                        <div class="add_project_details_wrapper">
                                    <validation-observer ref="addProjectRules">
                                        <b-form v-if="this.hide == true">
                                            <b-row class="bg-white ">

                                                <b-row>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label="أتجاه الشمال">
                                                        <validation-provider #default="{ errors }" name="أتجاه الشمال"
                                                            rules="required">
                                                            
                                                            <b-form-input v-model="form.submission[0].restrict_border.north_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الشمال"  disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label="طول الشمال ">
                                                        <validation-provider #default="{ errors }" name="طول الشمال"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].restrict_border.north_length"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الشمال" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label=" احداثيات الشمال ">
                                                        <validation-provider #default="{ errors }" name=" احداثيات الشمال"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].coordinates.north_coor_north"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder=" احداثيات الشمال" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label=" احداثيات الشرق ">
                                                        <validation-provider #default="{ errors }" name=" احداثيات الشرق"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].coordinates.north_coor_east"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder=" احداثيات الشرق" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                </b-row>
                                                <b-row>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label="أتجاه الجنوب">
                                                        <validation-provider #default="{ errors }" name="أتجاه الجنوب"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].restrict_border.south_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الجنوب"  disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label="طول الجنوب ">
                                                        <validation-provider #default="{ errors }" name="طول الجنوب"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].restrict_border.south_length"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="طول الجنوب" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label=" احداثيات الشمال ">
                                                        <validation-provider #default="{ errors }" name=" احداثيات الشمال"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].coordinates.south_coor_north"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder=" احداثيات الشمال" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label=" احداثيات الشرق ">
                                                        <validation-provider #default="{ errors }" name=" احداثيات الشرق"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].coordinates.south_coor_east"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder=" احداثيات الشرق" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                </b-row>
                                                <b-row>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label="أتجاه الشرق">
                                                        <validation-provider #default="{ errors }" name="أتجاه الشرق"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].restrict_border.east_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الشرق"  disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label="طول الشرق ">
                                                        <validation-provider #default="{ errors }" name="طول الشرق"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].restrict_border.east_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="طول الشرق"  disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label=" احداثيات الشمال ">
                                                        <validation-provider #default="{ errors }" name=" احداثيات الشمال"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].coordinates.east_coor_north"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder=" احداثيات الشمال" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label=" احداثيات الشرق ">
                                                        <validation-provider #default="{ errors }" name=" احداثيات الشرق"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].coordinates.east_coor_east"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder=" احداثيات الشرق" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                </b-row>
                                                <b-row>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label="أتجاه الغرب">
                                                        <validation-provider #default="{ errors }" name="أتجاه الغرب"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].restrict_border.west_dir"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="أتجاه الغرب"  disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label="طول الغرب ">
                                                        <validation-provider #default="{ errors }" name="طول الغرب"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].restrict_border.west_length"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="طول الغرب" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label=" احداثيات الشمال ">
                                                        <validation-provider #default="{ errors }" name=" احداثيات الشمال"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].coordinates.west_coor_north"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder=" احداثيات الشمال" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="3">
                                                    <b-form-group class="text-right" label=" احداثيات الشرق ">
                                                        <validation-provider #default="{ errors }" name=" احداثيات الشرق"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].coordinates.west_coor_east"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder=" احداثيات الشرق" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                </b-row>
                                            </b-row>

                                        </b-form>
                                    </validation-observer>
                                </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="المساحات المنزوعة">
                                    <b-card-text>
                                        <div class="add_project_details_wrapper">
                                    <validation-observer ref="addProjectRules">
                                        <b-form v-if="this.hide == true">
                                            <b-row class="bg-white pt-2 pb-2">

                                                <b-col class="d-flex justify-content-center" md="8">
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="المساحة المنزوعة المبنية">
                                                        <validation-provider #default="{ errors }" name="المساحة المنزوعة المبنية"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].build_area"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="المساحة المنزوعة المبنية" type="number" disabled/>
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6">
                                                    <b-form-group class="text-right" label="المساحات المنزوعة غير المبنية">
                                                        <validation-provider #default="{ errors }" name="المساحات المنزوعة غير المبنية"
                                                            rules="required">
                                                            <b-form-input v-model="form.submission[0].unbuild_area"
                                                                :state="errors.length > 0 ? false : null"
                                                                placeholder="المساحات المنزوعة غير المبنية" type="number" disabled />
                                                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                مطلوب</small>
                                                        </validation-provider>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>

                                        </b-form>
                                    </validation-observer>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="المشتمالات">
                                    <b-card-text>
                                        <div class="add_project_details_wrapper">
                                        <validation-observer ref="addProjectRules">
                                            <b-form >
                                                <b-row class="bg-white pt-2 pb-2">

                                                    <b-col class="d-flex justify-content-center" md="8">
                                                    </b-col>

                                                </b-row>
                                                <!-- <b-form-group class="text-right" v-if="includesFormLength() == 0">
                                                    <b-button @click="addIncludes"> اضف</b-button>
                                                </b-form-group> -->
                                                <b-row v-for="(item ,index) in form.submission[0].includes_data" :key="index">
                                                        <b-col md="3">
                                                            <b-form-group class="text-right" label=" نوع المشتمل ">
                                                                <validation-provider #default="{ errors }" name=" نوع المشتمل"
                                                                    rules="required">
                                                                    <b-form-input v-model="item.type"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="المساحات المنزوعة غير المبنية"  disabled />
                                                                    
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>
                                                        <b-col md="3">
                                                            <b-form-group class="text-right" label=" الوصف  ">
                                                                <validation-provider #default="{ errors }" name=" الوصف "
                                                                    rules="required">
                                                                    <b-form-input v-model="item.content"
                                                                    :state="errors.length > 0 ? false : null"
                                                                    placeholder="الوصف"  disabled />
                                                                    
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>
                                                        <b-col md="2">
                                                            <b-form-group class="text-right" label="المساحة  ">
                                                                <validation-provider #default="{ errors }" name="المساحة "
                                                                    rules="required">
                                                                    <b-form-input v-model="item.qty"
                                                                        :state="errors.length > 0 ? false : null"
                                                                        placeholder="المساحة " type="number" />
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-col>
                                                        <b-col md="3">
                                                            <b-row>
                                                            <b-col cols="6">
                                                                <b-form-group class="text-right btncls" >
                                                                    <b-button @click="editImg" variant="primary" > تحديث الصورة  </b-button>
                                                                </b-form-group>
                                                            </b-col>
                                                            <!-- <b-col cols="6" v-if="item.type== 'المباني'" >
                                                                <b-form-group class="text-right btncls" >
                                                                    <b-button @click="model_floor = true" variant="info">أضافة دور</b-button>
                                                                </b-form-group>
                                                            </b-col> -->
                                                        </b-row>
                                                        
                                                        </b-col>
                                                        <b-modal hide-header-close v-model="modal_img" title="أضفة صورة" id="img">
                                                            <b-form-group class="text-right" >
                                                                <input type="hidden" v-model="item.inc_id" >
                                                                <validation-provider #default="{ errors }" name="صورة "
                                                                    rules="required">
                                                                    <input type="file" name="image" 
                                                                        @change="changeIncImg" ref="incFiles"
                                                                        accept="image/apng, image/jpeg, image/png, image/webp"
                                                                        />
                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                        مطلوب</small>
                                                                </validation-provider>
                                                            </b-form-group>
                                                        </b-modal>
                                                        <!-- floors  -->
                                                        <b-modal hide-header-close v-model="model_floor" title="الادوار" hide-footer size="lg" dir="rtl">
                                                            <div >
                                                                <div v-if="floors.length == 0" dir="rtl">
                                                                    <b-form-group class="text-right"  >
                                                                        <b-button @click="addfloors"> اضف دور</b-button>
                                                                    </b-form-group>
                                                                </div>
                                                                
                                                                    <b-row v-for="(details , index) in floors" :key="index" >
                                                                        <b-col md="3">
                                                                        <input type="hidden" v-model="item.inc_id" >

                                                                            <b-form-group class="text-right" label=" الدور ">
                                                                                <validation-provider #default="{ errors }" name=" الدور"
                                                                                    rules="required">
                                                                                    <v-select
                                                                                        placeholder="الدور"
                                                                                        :options="Array.from(floorsNum , (el) => el)"
                                                                                        :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                                        v-model="floors.num"
                                                                                        :reduce="(val) => val"
                                                                                    >
                                                                                    </v-select>
                                                                                    <small class="text-danger" v-if="errors[0]">هذا الحقل
                                                                                        مطلوب</small>
                                                                                </validation-provider>
                                                                            </b-form-group>
                                                                        </b-col>
                                                                        <b-col md="3" >
                                                                            <b-form-group class="text-right" label="المساحة ">
                                                                                <validation-provider #default="{ errors }" name="المساحة "
                                                                                    rules="required">
                                                                                    <b-form-input v-model="floors.area"
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
                                                                                        <b-button @click="addfloors"> اضف</b-button>
                                                                                    </b-form-group>
                                                                                </b-col>
                                                                                <b-col cols="4">
                                                                                    <b-form-group class="text-right" label=" . ">
                                                                                        <b-button @click="floors.pop()">حذف</b-button>
                                                                                    </b-form-group>
                                                                                </b-col>
                                                                            </b-row>
                                                                        </b-col>
                                                                    </b-row>
                                                                </div>
                                                                <div class="mt-2">
                                                                    <b-col cols="12">
                                                                        <div class="d-flex just-content-end">
                                                                            <b-button type="submit" variant="primary" @click="submitFloor()">
                                                                                تأكيد
                                                                            </b-button>
                                                                            <b-button type="submit" variant="primary" @click="model_floor = false">
                                                                                الغاء
                                                                            </b-button>
                                                                        </div>
                                                                    </b-col>
                                                                </div>
                                                                
                                                        </b-modal>
                                                        <br>
                                                        <b-row>
                                                            <b-col cols="6"></b-col>
                                                            <b-col cols="6">
                                                                <div style="max-height: 550px; max-width: 500px;">
                                                    <!-- <img  style="max-height: 550px; max-width: 500px;" :src="'/includes/img1.png'" alt="img"> <br> <br> -->
                                                    <!-- <img  style="max-height: 550px; max-width: 500px;" :src="'/includes/img2.png'" alt="img"><br><br> -->
                                                    <!-- <img  style="max-height: 550px; max-width: 500px;" :src="'/includes/img3.png'" alt="img"><br><br> -->
                                                    <!-- <img  style="max-height: 550px; max-width: 500px;" :src="'/includes/img4.png'" alt="img"><br><br> -->
                                                    <!-- <img  style="max-height: 550px; max-width: 500px;" :src="'/includes/img5.png'" alt="img"><br><br> -->
                                                    <!-- <img  style="max-height: 550px; max-width: 500px;" :src="'/includes/img6.png'" alt="img"><br><br> -->
                                                    <!-- <img  style="max-height: 550px; max-width: 500px;" :src="'/includes/img7.png'" alt="img"><br><br> -->
                                                                    </div>
                                                                </b-col>
                                                    </b-row>
                                                </b-row><br>
                                                
                                                
                                            </b-form>
                                        </validation-observer>
                                </div>
                                    </b-card-text>
                                </b-tab>
                                <!-- <b-tab title="المرفقات">
                                    <b-card-text>
                                        <div class="add_project_details_wrapper">
                                    <validation-observer ref="addProjectRules">
                                        <b-form v-if="this.hide == true">
                                            <b-row class="bg-white pt-2 pb-2">


                                                <b-col class="d-flex justify-content-center" md="8">
                                                </b-col>

                                            </b-row>

                                            <b-row v-for="(attach , i ) in form.attachs" :key="i">
                                                <b-col md="4">
                                                    <b-form-group class="text-right"
                                                        label=" المرفق ">
                                                        <input type="file" name="image"
                                                            accept="image/apng, image/jpeg, image/png, image/webp"
                                                            />
                                                    </b-form-group>
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

                                                </b-col>
                                            </b-row>

                                        </b-form>
                                    </validation-observer>
                                </div>
                                    </b-card-text>
                                </b-tab> -->
                            </b-tabs>

                            </b-card>

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
        name: 'view',
        props: {
            value: Array,
            fields: Array
        },
        data() {
            return {
                model_floor:false,
                modal_img:false,
                floorsNum:[
                    'الاول','الثاني','الثالث','الرابع','الخامس','اخري'
                ],
                floors:[{
                    num: null , area: null,inc_id:null
                }],
                form:[],
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
            // console.log(this.id);
            this.$store.dispatch('pgc_forms/show_sub', this.$route.params.id)
                .then((res) => {
                    this.form = res.data
                })


        },
        methods: {
            submitFloor(){
                console.log(this.floors)

                this.$store
                    .dispatch('pgc_forms/save_floor', {
                        query: this.floors,
                    })
                    .then((response) => {
                        router.push({name:'Realtys'})
                        this.$swal({
                            icon: 'success',
                            title: 'تم الحفظ',
                            showConfirmButton: false,
                            timer: 1500,
                        })

                    })
                    .catch((error) => {
                        console.log(error);
                    })

            },
            editImg(){
                this.modal_img = true;
            },
            addfloors(){
                this.floors.push({num:null , area:null})
            },
            changeIncImg(){
                console.log(this.$refs.incFiles.files[0])
            }
            // retDirs(x , y){
            //     var d=[];
            //     d=x;
            //     return x['north_dir'];
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
        .btncls{
            padding-top: 25px;
        }
    }
</style>
