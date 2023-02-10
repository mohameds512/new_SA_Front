<template>
    <div class="main_ecb_wrapper">
        <!-- //// Start Project Details  -->
        <b-row>

            <b-col>
                <div dir="rtl">
                    <b-row class="bg-white pt-2 pb-2">
                        <b-col cols="3">
                            <div class="hide_time_line">

                                <app-timeline>
                                    <app-timeline-item
                                            v-for="(log , i) in form.submission[0].logs_data" :key="i"
                                            :title="log.status.name"
                                            :subtitle="log.note"
                                            icon="AwardIcon"
                                            :time="log.user.name"
                                            variant="success"
                                    />
                                </app-timeline>
                            </div>
                        </b-col>
                        <b-col cols="9">
                            <b-card no-body v-if=" form.submission && form.submission[0]">
                                <b-tabs pills card dir="rtl" class="text-left">
                                    <b-tab title="بيانات المشروع" active>
                                        <b-card-text>
                                            <div class="add_project_details_wrapper">
                                                <validation-observer ref="addProjectRules">
                                                    <b-form v-if="this.hide == true">

                                                        <b-button @click="model_notes = true"
                                                                  v-if="hasPermission('feedback_submissions')"
                                                                  style="margin-left: 20px;"> أضافة ملاحظة
                                                        </b-button>
                                                        <b-button @click="change_status(2)" variant="info"
                                                                  v-if="this.form.submission[0].status != 2 && hasPermission('approve_submissions') && (form.submission[0].signature_eng && (form.submission[0].signature_owner || form.submission[0].signature_vice) &&  form.submission[0].signature_poss )">
                                                            أعتماد
                                                            الطلب
                                                        </b-button>

                                                        <b-button v-if="hasPermission('signOne_submissions')"
                                                                  @click="openSignature(1)" variant="primary"
                                                                  class="mx-1">
                                                            توقيع المساح
                                                        </b-button>


                                                        <b-button
                                                                v-if="hasPermission('signTwo_submissions') && !this.form.submission[0].signature_poss"
                                                                @click="openSignature(4)" variant="danger"
                                                                class="mx-1">
                                                            توقيع الوكيل
                                                        </b-button>

                                                        <b-button
                                                                v-if="hasPermission('signTwo_submissions') && !this.form.submission[0].signature_vice"
                                                                @click="openSignature(2)" variant="warning"
                                                                class="mx-1">
                                                            توقيع المالك
                                                        </b-button>

                                                        <b-button v-if="hasPermission('signFinal_submissions')"
                                                                  @click="openSignature(3)" variant="success">
                                                            توقيع رئيس اللجنة
                                                        </b-button>

                                                        <b-modal hide-header-close v-model="model_notes" hide-footer
                                                                 title="أضافة ملاحظة ">
                                                            <div class="demo-vertical-spacing">
                                                                <b-form-group class="text-left" label=" ملاحظة">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name=" ملاحظة"
                                                                                         rules="required">
                                                                        <b-form-input v-model="notes.note"
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder=" ملاحظة"/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </div>
                                                            <div class="mt-2">
                                                                <b-col cols="12">
                                                                    <div class="d-flex justify-content-end">
                                                                        <b-button @click="change_status(1)"
                                                                                  variant="primary"
                                                                                  style="margin-right: 10px;">تأكيد
                                                                        </b-button>
                                                                        <b-button @click="model_notes = false"
                                                                                  variant="outline-primary">الغاء
                                                                        </b-button>
                                                                    </div>
                                                                </b-col>
                                                            </div>

                                                        </b-modal>
                                                        <b-modal hide-header-close v-model="model_approve" hide-footer
                                                                 title=" أعتماد الطلب ">
                                                            <div class="demo-vertical-spacing">
                                                                <h4 class="text-center"> هل انت متأكد من اعتماد الطلب
                                                                    ؟ </h4>
                                                            </div>
                                                            <div class="mt-2">
                                                                <b-col cols="12">
                                                                    <div class="d-flex justify-content-end">
                                                                        <b-button @click="approve()" variant="primary"
                                                                                  style="margin-right: 10px;">تأكيد
                                                                        </b-button>
                                                                        <b-button @click="model_approve = false"
                                                                                  variant="outline-primary">الغاء
                                                                        </b-button>
                                                                    </div>
                                                                </b-col>
                                                            </div>

                                                        </b-modal>
                                                        <b-row class="bg-white pt-2 pb-2">
                                                            <!-- <b-col md="12" class="back_ground">
                                                                <p class="text-center"> بيانات المشروع </p>
                                                            </b-col>

                                                            <b-col md="1"></b-col> -->

                                                            <b-col class="d-flex justify-content-center" md="8">
                                                            </b-col>
                                                            <!-- {{ retDirs(form.submission[0].contract_border_details , north_dir )  }} -->

                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="اسم المشروع">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="اسم المشروع"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].pro_name"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="اسم المشروع" disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="رقم المشروع">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="رقم المشروع"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].pro_num"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="رقم المشروع" disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="رقم المنطقة ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name=" رقم المنطقة"
                                                                                         rules="required">
                                                                        <b-form-input v-model="form.submission[0].zone"
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder=" رقم المنطقة"
                                                                                      disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label=" رقم اللوحة">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name=" رقم اللوحة"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].plad_num"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder=" رقم اللوحة" disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <!-- <b-col cols="10 text-left pt-2">
                                                            </b-col>
                                                            <b-col cols="2 text-left pt-2">
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

                                                            <b-col class="d-flex justify-content-center" md="8">
                                                            </b-col>
                                                        </b-row>

                                                        <b-row v-for="(owner , i) in form.owners" :key="i">
                                                            <b-col md="4">
                                                                <b-form-group class="text-left" label="اسم المالك">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="اسم المالك"
                                                                                         rules="required">
                                                                        <b-form-input v-model="owner.name"
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder="اسم المالك"
                                                                                      disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="4">
                                                                <b-form-group class="text-left" label="رقم الجوال ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name=" رقم الجوال"
                                                                                         rules="required">
                                                                        <b-form-input v-model="owner.phone"
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder=" رقم الجوال"
                                                                                      disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="4">
                                                                <b-form-group class="text-left" label=" نوع الهوية ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name=" نوع الهوية"
                                                                                         rules="required">
                                                                        <b-form-input v-model="owner.id_type"
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder=" نوع الهوية "
                                                                                      disabled/>
                                                                        <!-- <v-select
                                                                            placeholder="نوع الهوية"
                                                                            :options="Array.from(personality , (el) => el)"
                                                                            :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                            v-model="submission.zone"
                                                                            :reduce="(val) => val"
                                                                            disabled
                                                                        > -->
                                                                        </v-select>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
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
                                    <b-tab title="بيانات مقدم الطلب ">
                                        <b-card-text>
                                            <div class="add_project_details_wrapper">
                                                <validation-observer ref="addProjectRules">
                                                    <b-form v-if="this.hide == true">
                                                        <b-row class="bg-white pt-2 pb-2">

                                                            <b-col class="d-flex justify-content-center" md="8">
                                                            </b-col>
                                                        </b-row>

                                                        <b-row v-for="(owner , i) in form.applicants" :key="i">
                                                            <b-col md="4">
                                                                <b-form-group class="text-left" label="اسم مقدم الطلب">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="اسم مقدم الطلب"
                                                                                         rules="required">
                                                                        <b-form-input v-model="owner.name"
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder="اسم مقدم الطلب"
                                                                                      disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="4">
                                                                <b-form-group class="text-left" label="رقم الجوال ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name=" رقم الجوال"
                                                                                         rules="required">
                                                                        <b-form-input v-model="owner.phone"
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder=" رقم الجوال"
                                                                                      disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="4">
                                                                <b-form-group class="text-left" label=" نوع الهوية ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name=" نوع الهوية"
                                                                                         rules="required">
                                                                        <b-form-input v-model="owner.id_type"
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder=" نوع الهوية "
                                                                                      disabled/>
                                                                        <!-- <v-select
                                                                            placeholder="نوع الهوية"
                                                                            :options="Array.from(personality , (el) => el)"
                                                                            :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                            v-model="submission.zone"
                                                                            :reduce="(val) => val"
                                                                            disabled
                                                                        > -->
                                                                        </v-select>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
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
                                                                <b-form-group class="text-left" label="رقم الصك">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="رقم الصك"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_number"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="رقم الصك"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="تاريخه">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="رقم الصك"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_date"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="  تاريخه" disabled/>
                                                                        <!-- <b-form-datepicker
                                                                            v-model="submission.submission_history"
                                                                            :state="errors.length > 0 ? false : null"
                                                                            label-no-date-selected="تاريخه " disabled /> -->
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="مصدره ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="مصدره "
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_source"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="مصدره " type="text"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left"
                                                                              label="المساحة حسب السك ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="المساحة حسب السك "
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_area"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="المساحة حسب السك "
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
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
                                                                <b-form-group class="text-left" label="أتجاه الشمال">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="أتجاه الشمال"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_border_details.north_dir"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="أتجاه الشمال" disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="طول الشمال ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="طول الشمال"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_border_details.north_length"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="أتجاه الشمال"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="أتجاه الجنوب">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="أتجاه الجنوب"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_border_details.south_dir"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="أتجاه الجنوب"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="طول الجنوب ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="طول الجنوب"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_border_details.south_length"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="طول الجنوب"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="أتجاه الشرق">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="أتجاه الشرق"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_border_details.east_dir"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="أتجاه الشرق"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="طول الشرق ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="طول الشرق"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_border_details.east_length"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="طول الشرق"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="أتجاه الغرب">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="أتجاه الغرب"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_border_details.west_dir"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="أتجاه الغرب"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="طول الغرب ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="طول الغرب"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_border_details.west_length"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="طول الغرب"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
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
                                                                <b-form-group class="text-left" label="رقم العقار">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="رقم العقار"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].building_number"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="رقم العقار"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="رقم المخطط">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="رقم المخطط"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].planned_num"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="رقم المخطط"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="نوع الملكية ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="نوع الملكية"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].contract_type"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="" disabled/>
                                                                        <!-- <v-select
                                                                            placeholder="نوع الملكية"
                                                                            :options="Array.from(preportyTypes , (el) => el)"
                                                                            :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                            v-model="form.submission[0].contract_type"
                                                                            :reduce="(val) => val" disabled
                                                                        >
                                                                        </v-select> -->
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="الاستخدام">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="الاستخدام"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].submission_using"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="الاستخدام" disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left"
                                                                              label=" مساحة العقار م2">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="مساحة العقار م2"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].submission_area"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="مساحة العقار م2"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
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
                                    <b-tab title="  الاحداثيات">
                                        <b-card-text>
                                            <div class="add_project_details_wrapper">
                                                <validation-observer ref="addProjectRules">
                                                    <b-form v-if="this.hide == true">
                                                        <b-row class="bg-white "
                                                               v-for="(item ,index) in form.submission[0].coordinates"
                                                               :key="index">

                                                            <b-col md="6">
                                                                <b-form-group class="text-left"
                                                                              :label=" ' احداثيات الشمال ' + (index+1)">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="احداثيات الشمال"
                                                                                         rules="required">

                                                                        <b-form-input v-model="item.coor_north"
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder="احداثيات الشمال"
                                                                                      disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>

                                                            <b-col md="6">
                                                                <b-form-group class="text-left"
                                                                              :label=" ' احداثيات الشرق ' + (index+1)">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="احداثيات الشرق"
                                                                                         rules="required">
                                                                        <b-form-input v-model="item.coor_east"
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder="احداثيات الشرق"
                                                                                      disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
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

                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="أتجاه الشمال">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="أتجاه الشمال"
                                                                                         rules="required">

                                                                        <b-form-input
                                                                                v-model="form.submission[0].restrict_border.north_dir"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="أتجاه الشمال" disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="طول الشمال ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="طول الشمال"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].restrict_border.north_length"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="أتجاه الشمال"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>

                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="أتجاه الجنوب">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="أتجاه الجنوب"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].restrict_border.south_dir"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="أتجاه الجنوب" disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="طول الجنوب ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="طول الجنوب"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].restrict_border.south_length"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="طول الجنوب"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>

                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="أتجاه الشرق">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="أتجاه الشرق"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].restrict_border.east_dir"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="أتجاه الشرق" disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="طول الشرق ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="طول الشرق"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].restrict_border.east_dir"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="طول الشرق" disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>

                                                            <!-- <b-col md="3"> -->


                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="أتجاه الغرب">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="أتجاه الغرب"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].restrict_border.west_dir"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="أتجاه الغرب" disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left" label="طول الغرب ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="طول الغرب"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].restrict_border.west_length"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="طول الغرب"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
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
                                    <b-tab title="المشتملات">
                                        <b-card-text>
                                            <div class="add_project_details_wrapper">
                                                <validation-observer ref="addProjectRules">
                                                    <b-form>
                                                        <b-row class="bg-white pt-2 pb-2">

                                                            <b-col class="d-flex justify-content-center" md="8">
                                                            </b-col>

                                                        </b-row>
                                                        <b-row v-for="(item ,index) in form.submission[0].includes_data"
                                                               :key="index">
                                                            <b-col md="4">
                                                                <b-form-group class="text-left" label=" نوع المشتمل ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name=" نوع المشتمل"
                                                                                         rules="required">
                                                                        <b-form-input v-model="item.type"
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder="المساحات المنزوعة غير المبنية"
                                                                                      disabled/>

                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="4">
                                                                <b-form-group class="text-left" label=" الوصف  ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name=" الوصف "
                                                                                         rules="required">
                                                                        <b-form-input v-model="item.content"
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder="الوصف" disabled/>

                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="3">
                                                                <b-form-group class="text-left" label="المساحة  ">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="المساحة "
                                                                                         rules="required">
                                                                        <b-form-input v-model="item.qty"
                                                                                      disabled
                                                                                      :state="errors.length > 0 ? false : null"
                                                                                      placeholder="المساحة "
                                                                        />
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="1" class="line-height-1">
                                                                <br/>
                                                                <br/>
                                                                <a :href="item.image" target="_blank">
                                                                    <feather-icon icon="EyeIcon"
                                                                                  class="text-primary mx-1 font-medium-4"></feather-icon>
                                                                </a>
                                                            </b-col>
                                                            <b-modal hide-header-close v-model="model_floor"
                                                                     title="الادوار" hide-footer size="lg" dir="rtl">
                                                                <div>
                                                                    <div v-if="floors.length == 0" dir="rtl">
                                                                        <b-form-group class="text-left">
                                                                            <b-button @click="addfloors"> اضف دور
                                                                            </b-button>
                                                                        </b-form-group>
                                                                    </div>

                                                                    <b-row v-for="(details , index) in floors"
                                                                           :key="index">
                                                                        <b-col md="3">
                                                                            <input type="hidden" v-model="item.inc_id">

                                                                            <b-form-group class="text-left"
                                                                                          label=" الدور ">
                                                                                <validation-provider
                                                                                        #default="{ errors }"
                                                                                        name=" الدور"
                                                                                        rules="required">
                                                                                    <v-select
                                                                                            placeholder="الدور"
                                                                                            :options="Array.from(floorsNum , (el) => el)"
                                                                                            :dir="$store.state.appConfig.layout.isRTL ? 'rtl': 'ltr' "
                                                                                            v-model="floors.num"
                                                                                            :reduce="(val) => val"
                                                                                    >
                                                                                    </v-select>
                                                                                    <small class="text-danger"
                                                                                           v-if="errors[0]">هذا الحقل
                                                                                        مطلوب</small>
                                                                                </validation-provider>
                                                                            </b-form-group>
                                                                        </b-col>
                                                                        <b-col md="3">
                                                                            <b-form-group class="text-left"
                                                                                          label="المساحة ">
                                                                                <validation-provider
                                                                                        #default="{ errors }"
                                                                                        name="المساحة "
                                                                                        rules="required">
                                                                                    <b-form-input v-model="floors.area"
                                                                                                  :state="errors.length > 0 ? false : null"
                                                                                                  placeholder="المساحة "
                                                                                    />
                                                                                    <small class="text-danger"
                                                                                           v-if="errors[0]">هذا الحقل
                                                                                        مطلوب</small>
                                                                                </validation-provider>
                                                                            </b-form-group>
                                                                        </b-col>
                                                                        <b-col>
                                                                            <b-row>
                                                                                <b-col cols="4">
                                                                                    <b-form-group class="text-left"
                                                                                                  label=".  ">
                                                                                        <b-button @click="addfloors">
                                                                                            اضف
                                                                                        </b-button>
                                                                                    </b-form-group>
                                                                                </b-col>
                                                                                <b-col cols="4">
                                                                                    <b-form-group class="text-left"
                                                                                                  label=" . ">
                                                                                        <b-button @click="floors.pop()">
                                                                                            حذف
                                                                                        </b-button>
                                                                                    </b-form-group>
                                                                                </b-col>
                                                                            </b-row>
                                                                        </b-col>
                                                                    </b-row>
                                                                </div>
                                                                <div class="mt-2">
                                                                    <b-col cols="12">
                                                                        <div class="d-flex just-content-end">
                                                                            <b-button type="submit" variant="primary"
                                                                                      @click="submitFloor()">
                                                                                تأكيد
                                                                            </b-button>
                                                                            <b-button type="submit" variant="primary"
                                                                                      @click="model_floor = false">
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
                                                        </b-row>
                                                        <br>


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
                                                            <b-button variant="primary" @click="edit_forced_area()">
                                                                تعديل المساحات المنزوعه
                                                            </b-button>

                                                            <b-col class="d-flex justify-content-center" md="8">
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left"
                                                                              label="المساحة المنزوعة المبنية">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="المساحة المنزوعة المبنية"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].removed_from_building"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="المساحة المنزوعة المبنية"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                            <b-col md="6">
                                                                <b-form-group class="text-left"
                                                                              label="المساحات المنزوعة غير المبنية">
                                                                    <validation-provider #default="{ errors }"
                                                                                         name="المساحات المنزوعة غير المبنية"
                                                                                         rules="required">
                                                                        <b-form-input
                                                                                v-model="form.submission[0].removed_from_unbuilding"
                                                                                :state="errors.length > 0 ? false : null"
                                                                                placeholder="المساحات المنزوعة غير المبنية"
                                                                                disabled/>
                                                                        <small class="text-danger" v-if="errors[0]">هذا
                                                                            الحقل
                                                                            مطلوب</small>
                                                                    </validation-provider>
                                                                </b-form-group>
                                                            </b-col>
                                                        </b-row>

                                                    </b-form>
                                                </validation-observer>
                                            </div>
                                            <div>
                                                <b-modal hide-header-close v-model="model_forced_area" hide-footer
                                                         title=" المساحات المنزوعة " size="lg" dir="rtl">
                                                    <validation-observer ref="addProjectRules">
                                                        <b-form v-if="this.hide == true">
                                                            <b-row class="bg-white pt-2 pb-2">

                                                                <b-col class="d-flex justify-content-center" md="8">
                                                                </b-col>
                                                                <b-col md="6">
                                                                    <b-form-group class="text-left"
                                                                                  label="المساحة المنزوعة المبنية">
                                                                        <validation-provider #default="{ errors }"
                                                                                             name="المساحة المنزوعة المبنية"
                                                                                             rules="required">
                                                                            <b-form-input
                                                                                    v-model="form.submission[0].removed_from_building"
                                                                                    :state="errors.length > 0 ? false : null"
                                                                                    placeholder="المساحة المنزوعة المبنية"
                                                                            />
                                                                            <small class="text-danger" v-if="errors[0]">هذا
                                                                                الحقل
                                                                                مطلوب</small>
                                                                        </validation-provider>
                                                                    </b-form-group>
                                                                </b-col>
                                                                <b-col md="6">
                                                                    <b-form-group class="text-left"
                                                                                  label="المساحات المنزوعة غير المبنية">
                                                                        <validation-provider #default="{ errors }"
                                                                                             name="المساحات المنزوعة غير المبنية"
                                                                                             rules="required">
                                                                            <b-form-input
                                                                                    v-model="form.submission[0].removed_from_unbuilding"
                                                                                    :state="errors.length > 0 ? false : null"
                                                                                    placeholder="المساحات المنزوعة غير المبنية"
                                                                            />
                                                                            <small class="text-danger" v-if="errors[0]">هذا
                                                                                الحقل
                                                                                مطلوب</small>
                                                                        </validation-provider>
                                                                    </b-form-group>
                                                                </b-col>
                                                            </b-row>

                                                        </b-form>
                                                    </validation-observer>
                                                    <div class="mt-2">
                                                        <b-col cols="12">
                                                            <div class="d-flex justify-content-end">
                                                                <b-button @click="edit_forced()" variant="primary"
                                                                          style="margin-right: 10px;" class="mx-1">تأكيد
                                                                </b-button>
                                                                <b-button @click="model_forced_area = false"
                                                                          variant="outline-primary">الغاء
                                                                </b-button>
                                                            </div>
                                                        </b-col>
                                                    </div>

                                                </b-modal>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    </b-tab>
                                    <b-tab title="التوقيعات">
                                        <b-card-text>
                                            <div class="add_project_details_wrapper">
                                                <validation-observer ref="addProjectRules">
                                                    <b-form>
                                                        <b-row class="bg-white pt-2 pb-2">

                                                            <b-col class="d-flex justify-content-center" md="8">
                                                            </b-col>

                                                        </b-row>
                                                        <b-row>
                                                            <b-col md="12" class="justify-content-center">
                                                                <div class="d-flex justify-content-between text-center">
                                                                    <div>
                                                                        <h4>توقيع المساح</h4>
                                                                        <img v-if="form.submission[0].signature_eng"
                                                                             :src="form.submission[0].signature_eng"
                                                                             width="200" height="70">
                                                                    </div>
                                                                    <div v-if="form.submission[0].signature_vice">
                                                                        <h4>توقيع الوكيل</h4>
                                                                        <img v-if="form.submission[0].signature_vice"
                                                                             :src="form.submission[0].signature_vice"
                                                                             width="200" height="70">
                                                                    </div>

                                                                    <div v-else>
                                                                        <h4>توقيع المالك</h4>
                                                                        <img v-if="form.submission[0].signature_owner"
                                                                             :src="form.submission[0].signature_owner"
                                                                             width="200" height="70">
                                                                    </div>
                                                                    <div>
                                                                        <h4>توقيع رئيس اللجنة</h4>
                                                                        <img v-if="form.submission[0].signature_poss"
                                                                             :src="form.submission[0].signature_poss"
                                                                             width="200" height="70">
                                                                    </div>
                                                                </div>
                                                            </b-col>
                                                            <b-col md="12">
                                                                <!-- <div>
                                                                    <img v-if="form.submission[0].map"
                                                                         :src="form.submission[0].map" alt=""
                                                                         style="max-width: 100% ; width: 92%; height: 500px">
                                                                </div> -->
                                                            </b-col>
                                                        </b-row>
                                                        <br>


                                                    </b-form>
                                                </validation-observer>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab title="الخريطة">
                                        <b-card-text>
                                            <div class="add_project_details_wrapper">
                                                <validation-observer ref="addProjectRules">
                                                    <b-form>
                                                        <b-row class="bg-white pt-2 pb-2">

                                                            <b-col class="d-flex justify-content-center" md="8">
                                                            </b-col>

                                                        </b-row>
                                                        <b-row>
                                                            <b-col md="12" class="justify-content-center">
                                                                <b-button variant="primary" @click="editMap()"
                                                                          class="mb-2">
                                                                    تحديث الخريطة
                                                                </b-button>
                                                                <div>
                                                                    <b-modal hide-header-close v-model="modal_map"
                                                                             hide-footer title="أضفة خريطة" id="img">
                                                                        <div class="demo-vertical-spacing">

                                                                            <b-form-group class="text-left">
                                                                                <input type="hidden" v-model="sub_map">
                                                                                <validation-provider
                                                                                        #default="{ errors }"
                                                                                        name="خريطة "
                                                                                        rules="required">
                                                                                    <input type="file" name="image"
                                                                                           @change="changeSubMap"
                                                                                           ref="subMap"
                                                                                           accept="image/apng, image/jpeg, image/png, image/webp"
                                                                                    />
                                                                                    <small class="text-danger"
                                                                                           v-if="errors[0]">هذا الحقل
                                                                                        مطلوب</small>
                                                                                </validation-provider>
                                                                            </b-form-group>
                                                                        </div>
                                                                        <div class="mt-2">
                                                                            <b-col cols="12">
                                                                                <div class="d-flex justify-content-end">
                                                                                    <b-button @click="submitMap()"
                                                                                              variant="primary"
                                                                                              style="margin-right: 10px;">
                                                                                        تأكيد
                                                                                    </b-button>
                                                                                    <b-button @click="modal_map = false"
                                                                                              variant="outline-primary">
                                                                                        الغاء
                                                                                    </b-button>
                                                                                </div>
                                                                            </b-col>
                                                                        </div>
                                                                    </b-modal>
                                                                </div>
                                                            </b-col>
                                                            <b-col md="12">
                                                                <div>
                                                                    <img v-if="form.submission[0].map"
                                                                         :src="form.submission[0].map" alt=""
                                                                         style="max-width: 100% ; width: 92%; height: 500px">
                                                                </div>
                                                            </b-col>
                                                        </b-row>
                                                        <br>


                                                    </b-form>
                                                </validation-observer>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab title="التقارير">
                                        <b-card-text>
                                            <div class="add_project_details_warpper">
                                                <b-tabs pills card>
                                                    <b-tab title=" المخطط التفصيلي ">
                                                        <b-card-text>
                                                            <details-rep
                                                                    :submissionData="form.submission[0]"
                                                                    :ownersData="form.owners[0]"
                                                            ></details-rep>
                                                        </b-card-text>
                                                    </b-tab>
                                                    <b-tab title=" حصر العقار ">
                                                        <b-card-text>
                                                            <collect-includes
                                                                    :submissionData="form.submission[0]"
                                                                    :ownersData="form.owners[0]"
                                                            ></collect-includes>
                                                        </b-card-text>
                                                    </b-tab>
                                                    <b-tab title=" ملحق المشتملات ">
                                                        <b-card-text>
                                                            <inclusions-supplement
                                                                    :submissionData="form.submission[0]"
                                                                    :ownersData="form.owners[0]"
                                                            ></inclusions-supplement>
                                                        </b-card-text>
                                                    </b-tab>
                                                    <b-tab title=" محضر تقدير ">
                                                        <b-card-text>
                                                            <appreciation-miunte
                                                                    :submissionData="form.submission[0]"
                                                                    :ownersData="form.owners[0]"
                                                            ></appreciation-miunte>
                                                            <!-- <h3 class="text-center"> جار العمل عليه </h3> -->
                                                        </b-card-text>
                                                    </b-tab>
                                                </b-tabs>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab v-if="form.submission[0].operation_type == 'دمج'" title="نموذج الدمج">
                                        <marge_report :submission="form.submission[0]"></marge_report>
                                    </b-tab>
                                    <b-tab v-if="form.submission[0].operation_type == 'فرز'" title="نموذج الفرز">
                                        <isolate_report :submission="form.submission[0]"></isolate_report>
                                    </b-tab>
                                    <!--                                    <b-tab title="الملاحظات">-->
                                    <!--                                        <b-card-text>-->
                                    <!--                                            <div class="add_project_details_wrapper">-->
                                    <!--                                                <h2 class="text-center danger">-->
                                    <!--                                                    {{ form.submission[0].notes }}-->
                                    <!--                                                </h2>-->
                                    <!--                                            </div>-->
                                    <!--                                        </b-card-text>-->
                                    <!--                                    </b-tab>-->
                                </b-tabs>


                            </b-card>
                            <!-- <div class="d-flex justify-content-between text-center">
                                    <div>
                                        <h4>توقيع المساح</h4>
                                        <img v-if="form.submission[0].signature_eng"
                                             :src="form.submission[0].signature_eng" width="200" height="70">
                                    </div>
                                    <div>
                                        <h4>توقيع المالك</h4>
                                        <img v-if="form.submission[0].signature_owner"
                                             :src="form.submission[0].signature_owner" width="200" height="70">
                                    </div>
                                    <div>
                                        <h4>توقيع رئيس اللجنة</h4>
                                        <img v-if="form.submission[0].signature_poss"
                                             :src="form.submission[0].signature_poss" width="200" height="70">
                                    </div>
                                </div> -->
                        </b-col>
                    </b-row>
                    <b-modal hide-header-close v-model="model_signature" hide-footer title="التوقيع " dir="rtl">
                        <div class="demo-vertical-spacing" dir="rtl">
                            <!--                            <b-form-group class="text-left" label=" التوقيع">-->
                            <vueSignature ref="signature" :sigOption="option" :w="'440px'" :h="'200px'"></vueSignature>
                            <!--                            </b-form-group>-->
                        </div>
                        <div class="mt-2">
                            <b-col cols="12">
                                <div>
                                    <b-button @click="saveSignature()" variant="primary"
                                              style="margin-right: 10px;" class="mx-1">تأكيد
                                    </b-button>
                                    <b-button @click="$refs.signature.clear(); model_signature=false"
                                              variant="outline-primary">الغاء
                                    </b-button>
                                </div>
                            </b-col>
                        </div>

                    </b-modal>
                </div>
            </b-col>
        </b-row>
        <!----------------------////////////-------------/////////////--------///////------->
    </div>
</template>

<script>
    // import { mapGetters } from 'vuex'
    import {ValidationProvider, ValidationObserver} from 'vee-validate'
    import {required, min_value} from '@validations'
    import vSelect from 'vue-select'
    import DataTable from '@/views/components/table/DataTable'
    import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
    import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
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
    import Report from "@/views/pages/PGC/report";
    import detailsRep from "@/views/dashboard/component/detailsRep.vue";
    import vueSignature from "vue-signature";

    // import detailsRep from "@/views/dashboard/component/detailsRep.vue";
    import collectIncludes from "@/views/dashboard/component/collectIncludes.vue";
    import appreciationMiunte from "@/views/dashboard/component/appreciationMiunte.vue";

    import inclusionsSupplement from "@/views/dashboard/component/inclusionsSupplement.vue";

    import {formatDate} from '@/@core/utils/filter'
    import Marge_report from "@/views/pages/PGC/marge_report";
    import Isolate_report from "@/views/pages/PGC/isolate_report";
    // import planedDetailsRep from './planedDetailsRep.vue'
    export default {
        name: 'view',
        props: {
            value: Array,
            fields: Array
        },
        data() {
            return {
                option: {
                    penColor: "rgb(0, 0, 0)",
                    backgroundColor: "rgb(255,255,255)"
                },
                disabled: false,
                model_signature: false,
                signature_type: null,
                sub_map: null,
                approve_sub: {id: null},
                notes: {note: null, id: null},
                model_notes: false,
                model_forced_area: false,
                model_approve: false,
                model_floor: false,
                modal_img: false,
                modal_map: false,
                floorsNum: [
                    'الاول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'اخري'
                ],
                floors: [{
                    num: null, area: null, inc_id: null
                }],
                form: [],
                show_model_inputs: 1,
                hide: true,
                contentType: [
                    'مبني', 'مظلة', 'حظيرة'
                ],
                contentDesc: [
                    'des1', 'des2'
                ],
                personality: [
                    'زائر', 'مقيم', 'مواطن'
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
                    {title: 'يناير'},
                    {title: 'فبراير'},
                    {title: 'مارس'},
                    {title: 'ابريل'},
                    {title: 'مايو'},
                    {title: 'يونيو'},
                    {title: 'يوليو'},
                    {title: 'أغسطس'},
                    {title: 'سبتمبر'},
                    {title: 'اكتوبر'},
                    {title: 'نوفمبر'},
                    {title: 'ديسمبر'},
                ],
                forced_area_data: {
                    sub_id: null,
                    removed_from_unbuilding: null,
                    removed_from_building: null,
                },
                submision_map: null,
            }
        },
        components: {
            Isolate_report,
            Marge_report,
            inclusionsSupplement,
            appreciationMiunte,
            collectIncludes,
            Report,
            detailsRep,
            WorkProgress,
            ManPower,
            vueSignature,
            Exports,
            AppTimeline,
            AppTimelineItem,
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
            this.init();
        },
        methods: {

            init() {
                this.$store.dispatch('pgc_forms/show_sub', this.$route.params.id)
                    .then((res) => {
                        this.form = res.data
                    })
            },

            edit_forced_area() {
                this.model_forced_area = true;
            },

            openSignature(type) {
                this.signature_type = type;
                this.model_signature = true;
            },

            saveSignature() {
                var png = this.$refs.signature.save()

                this.approve_sub.id = this.form.submission[0].id

                let payload = {id: this.form.submission[0].id, query: {type: this.signature_type, signature: png}};
                this.$store.dispatch('pgc_forms/save_signature', payload)
                    .then((response) => {
                        this.init();
                        this.model_signature = false;
                    });

                console.log(png);
            },
            submitMap() {
                const map = new FormData()
                map.append('submission_map', this.submision_map)
                this.$store
                    .dispatch('pgc_forms/submitMab', {
                        id: this.$route.params.id,
                        query: map,
                    }).then((response) => {
                    this.modal_map = false;
                    this.init();

                });
                // this.store.d
            },

            edit_forced() {
                this.forced_area_data.sub_id = this.form.submission[0].id,
                    this.forced_area_data.removed_from_unbuilding = this.form.submission[0].removed_from_unbuilding,
                    this.forced_area_data.removed_from_building = this.form.submission[0].removed_from_building
                this.$store
                    .dispatch('pgc_forms/forced_area', {
                        query: this.forced_area_data
                    })
                    .then((resp) => {
                        this.model_forced_area = false;

                        this.$swal({
                            icon: 'success',
                            title: 'تم التحديث  ',
                            showConfirmButton: false,
                            timer: 1000,
                        })
                        console.log(response);
                    })
            },

            change_status(status) {
                this.approve_sub.id = this.form.submission[0].id

                let payload = {id: this.form.submission[0].id, query: {status: status, note: this.notes.note}};
                this.$store.dispatch('pgc_forms/change_status', payload)
                    .then((response) => {

                        this.$store.dispatch('pgc_forms/show_sub', this.$route.params.id)
                            .then((res) => {
                                this.form = res.data
                            })

                        this.model_notes = false;

                    })
                    .catch((error) => {
                        console.log(error);
                    })
                this.model_approve = false;
            },
            approve() {
                this.approve_sub.id = this.form.submission[0].id
                this.$store
                    .dispatch('pgc_forms/approve', {
                        query: this.approve_sub,
                    })
                    .then((response) => {

                        this.$swal({
                            icon: 'success',
                            title: 'تم الاعتماد  ',
                            showConfirmButton: false,
                            timer: 1000,
                        })
                        this.form.submission[0].status = 2;
                        console.log(response);

                    })
                    .catch((error) => {
                        console.log(error);
                    })
                this.model_approve = false;
            },
            addNote() {
                this.notes.id = this.form.submission[0].id
                this.$store
                    .dispatch('pgc_forms/add_notes', {
                        query: this.notes,
                    })
                    .then((response) => {
                        // console.log(response)
                        // router.push({name:'Realtys'})


                        this.$swal({
                            icon: 'success',
                            title: 'تم الاضافة  ',
                            showConfirmButton: false,
                            timer: 1000,
                        })
                        this.form.submission[0].notes = this.notes.note
                        this.notes.note = null
                        // this.submission = response.submission;
                        console.log(response);

                    })
                    .catch((error) => {
                        // this.errorsdata = this.handleBackendError(error.response.data.errors)
                        console.log(error);
                    })
                this.model_notes = false;
            },
            submitFloor() {
                console.log(this.floors)

                this.$store
                    .dispatch('pgc_forms/save_floor', {
                        query: this.floors,
                    })
                    .then((response) => {
                        router.push({name: 'Realtys'})
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
            editImg() {
                this.modal_img = true;
            },
            editMap() {
                this.modal_map = true;
            }
            ,
            addfloors() {
                this.floors.push({num: null, area: null})
            }
            ,
            changeIncImg() {
                console.log(this.$refs.incFiles.files[0])
            },
            changeSubMap() {
                this.submision_map = this.$refs.subMap.files[0];
            },
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

        .back_ground {
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

        .btncls {
            padding-top: 25px;
        }
    }

    @media print {
        .hide_time_line {
            display: none;
        }
    }
</style>
