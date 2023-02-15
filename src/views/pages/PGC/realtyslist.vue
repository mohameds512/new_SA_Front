<template>
    <div class="container bg-white pt-2 pb-2" dir="rtl" v-if="$store.getters['dashboard/getSubs']">
        <div style="text-align: right;">
            <!--            <router-link :to="`/addRealty`"  >-->
            <b-button variant="primary" v-if="hasPermission('edit_submissions')" @click="openDialog()"> اضافة عقار
            </b-button>
            <!--            </router-link>-->
            <!--            <router-link :to="`/addRealty`"  >-->
            <!--                <b-button variant="primary"> اضافة عقار </b-button>-->
            <!--            </router-link>-->

            <router-link :to="`/building_desc`" style="margin-right: 15px;" v-if="hasPermission('add_includes')">
                <b-button variant="primary"> انواع المشتمالات و الوصف</b-button>
            </router-link>
        </div>
        <br>
        <div>
            <b-row>
                <b-col md="4">
                    <b-form-group class="text-right" label=" بحث بنوع المعاملة ">
                        <validation-provider #default="{ errors }" name="نوع المعاملة"
                                             rules="required">
                            <v-select
                                    placeholder="نوع المعاملة"
                                    :options="Array.from(all_operation_type , (el) => el)"
                                    v-model="search_operation_type"
                                    :reduce="(val) => val"
                            >
                            </v-select>
                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                مطلوب</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>
                <!-- <b-col md="4">
                    <b-form-group class="text-right" label="  بحث برقم العقار  ">
                        <validation-provider #default="{ errors }"
                                            name="رقم العقار  "
                                            rules="required">
                            <b-form-input v-model="search_buildingNumber"
                                        :state="errors.length > 0 ? false : null"
                                        placeholder="رقم العقار  " />
                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                مطلوب</small>
                        </validation-provider>
                    </b-form-group>
                </b-col> -->
                <!-- <b-col md="4">
                    <b-form-group class="text-right" label="  بحث برقم العقار  ">
                        <validation-provider #default="{ errors }"
                                            name="رقم العقار  "
                                            rules="required">
                            <b-form-input v-model="search_createdBy"
                                        @change="console.log(search_createdBy)"
                                        placeholder="رقم العقار  " />
                        </validation-provider>
                    </b-form-group>
                </b-col> -->
                <!-- <b-col md="4" >
                    <b-form-group class="text-right" label="بحث بالاسم">
                        <validation-provider #default="{ errors }" name="بحث بالاسم"
                                                rules="required">
                            <v-select
                                    :disabled="show_model_inputs > 8"
                                    placeholder="بحث بالاسم"
                                    :options="Array.from($store.getters['dashboard/getSubs'].submissions , (el) => el.created_by)"

                                    v-model="sub_created_by"
                                    :reduce="(val) => val"
                            >
                            </v-select>
                            <small class="text-danger" v-if="errors[0]">هذا الحقل
                                مطلوب</small>
                        </validation-provider>
                    </b-form-group>
                </b-col> -->
            </b-row>
        </div>
        <!-- {{ $store.getters['dashboard/allSubmission'] }} -->
        <!-- {{  $store.getters['dashboard/getSubs'].submissions  }}   -->
        
        <b-table
                class="text-center"
                striped
                hover
                :items="$store.getters['dashboard/getSubs'].submissions.filter((el)=>
                    (el.operation_type == search_operation_type || search_operation_type == null) &&
                    (el.building_number == search_buildingNumber || search_buildingNumber == null) &&
                    (el.created_by == search_createdBy || search_createdBy == null)
                    )"
                :fields="[
                        { key: 'building_number', label: 'رقم العقار ' },
                        { key: 'status', label: 'الحالة' },
                        { key: 'operation_type', label: 'نوع المعاملة' },
                        { key: 'zone', label: '  المنطقة ' },
                        { key: 'created_by', label: '  المساح ' },
                        { key: 'created_at', label: '  التاريخ ' },
                           { key: 'action', label: '  تعديل ' },
                    ]"
        >
            <template #cell(building_number)="data">
                <router-link :to="`/viewRealty/${data.item.id}`">
                    {{ data.item.building_number }}
                </router-link>
            </template>

            <template #cell(status)="data">
                {{getStatus(data.item.status) }}
            </template>
            <template #cell(created_at)="data">
                {{toLocalDatetime(data.item.created_at) }}
            </template>
            <template #cell(action)="data">
                <router-link v-if="hasPermission('edit_submissions')" :to="`/addRealty/${data.item.id}`">
                    <feather-icon icon="EditIcon"></feather-icon>
                </router-link>
            </template>
        </b-table>
        <!--        <b-table-->
        <!--                class="text-center"-->
        <!--                striped-->
        <!--                hover-->
        <!--                :items="$store.getters['dashboard/getSubs'].submissions.filter(el => el.status != 4)"-->
        <!--                :fields="[-->
        <!--                            { key: 'building_number', label: 'رقم العقار ' },-->
        <!--                            { key: 'status', label: 'الحالة' },-->
        <!--                            { key: 'zone', label: '  المنطقة ' },-->
        <!--                            { key: 'created_at', label: '  التاريخ ' },-->
        <!--                            { key: 'action', label: '  تعديل ' },-->
        <!--                        ]"-->

        <!--        >-->
        <!--            <template #cell(building_number)="data">-->
        <!--                <router-link :to="`/viewRealty/${data.item.id}`">-->
        <!--                    {{ data.item.building_number }}-->
        <!--                </router-link>-->
        <!--            </template>-->

        <!--            <template #cell(status)="data">-->
        <!--                {{getStatus(data.item.status) }}-->
        <!--            </template>-->
        <!--            <template #cell(created_at)="data">-->
        <!--                {{toLocalDatetime(data.item.created_at) }}-->
        <!--            </template>-->

        <!--            <template #cell(action)="data">-->
        <!--                <router-link v-if="hasPermission('edit_submissions')" :to="`/addRealty/${data.item.id}`">-->
        <!--                    <feather-icon icon="EditIcon"></feather-icon>-->
        <!--                </router-link>-->
        <!--            </template>-->
        <!--        </b-table>-->

        <b-modal v-model="building_dialog" centered id="modal-prevent-closing" no-close-on-backdrop ref="my-modal"
                 size="lg" title="اضافة عقار"
                 cancel-title="الغاء" ok-title="اضافة" dir="rtl" cancel-variant="outline-secondary"
                 @hidden="resetModal" @ok="save">
            <validation-observer ref="simpleRules">
                <form ref="form" @submit.stop.prevent="save">
                    <b-col md="12" dir="rtl" class="text-left">
                        <!--                            <validation-provider #default="{ errors }" name="name" rules="english|required">-->

                        <b-form-group label="نوع المعاملة " label-for="name-input" invalid-feedback="Name is required">
                            <v-select
                                    dir="rtl"
                                    class="mb-2"
                                    placeholder="نوع المعاملة"
                                    :options="all_operation_type"
                                    v-model="form.operation_type"
                                    :reduce="(val) => val"
                            >
                            </v-select>
                        </b-form-group>

                        <b-row v-if="form.operation_type == 'دمج'">
                            <b-col md="12">
                                <b-form-group label="عقارات الدمج" label-for="name-input">
                                    <v-select
                                            dir="rtl"
                                            multiple
                                            placeholder="العقارات الدمج"
                                            :options="$store.getters['dashboard/getSubs'].submissions"
                                            v-model="form.merged_submissions"
                                            :reduce="(val) => val.building_number"
                                            label="building_number"
                                    >
                                    </v-select>
                                </b-form-group>
                            </b-col>
                            <b-col md="12">
                                <b-form-group label="رقم العقار الجديد" label-for="name-input">
                                    <v-select
                                            dir="rtl"
                                            placeholder=" رقم العقار الجديد"
                                            :options="$store.getters['dashboard/getSubs'].submissions.filter(el =>  (form.merged_submissions && form.merged_submissions.includes(el.building_number)))"
                                            v-model="form.submission_id"
                                            :reduce="(val) => val.id"
                                            label="building_number"
                                    >
                                    </v-select>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group label="الموقع قبل الدمج" label-for="name-input">
                                    <b-form-file
                                            v-model="form.before_file"
                                            :state="Boolean(form.before_file)"
                                            accept=".jpg, .png, .gif"
                                            placeholder="الموقع قبل الدمج "
                                    ></b-form-file>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group label="الموقع بعد الدمج" label-for="name-input">
                                    <b-form-file
                                            v-model="form.after_file"
                                            :state="Boolean(form.after_file)"
                                            accept=".jpg, .png, .gif"
                                            placeholder="الموقع بعد الدمج "
                                    ></b-form-file>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row v-else-if="form.operation_type == 'فرز'">
                            <b-col md="12">
                                <b-form-group label="رقم العقار" label-for="name-input">
                                    <v-select
                                            dir="rtl"
                                            placeholder="رقم العقار"
                                            :options="$store.getters['dashboard/getSubs'].submissions"
                                            v-model="form.submission_id"
                                            :reduce="(val) => val.id"
                                            label="building_number"
                                    >
                                    </v-select>
                                </b-form-group>
                            </b-col>
                            <b-col md="12" class="mb-1">
                                <!--                                <b-form-group label="رقم العقار" label-for="name-input">-->
                                <b-row>
                                    <b-col md="4" v-for="(submission , i ) in form.isolate_submissions">
                                        <b-form-group :label="` عقار فرز رقم ${ i + 1}` " label-for="name-input">
                                            <b-form-input v-model="form.isolate_submissions[i]"
                                                          :placeholder="` عقار فرز رقم ${ i + 1}` "/>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="12" class="d-flex justify-content-center">
                                        <b-button size="sm" class="mx-1" variant="success"
                                                  @click="form.isolate_submissions.push(null)"> اضافة
                                            عقار
                                        </b-button>
                                        <b-button size="sm" variant="danger" @click="form.isolate_submissions.pop()">
                                            حذف عقار
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col md="6">
                                <b-form-group label="الموقع قبل الفرز" label-for="name-input">
                                    <b-form-file
                                            v-model="form.before_file"
                                            :state="Boolean(form.before_file)"
                                            accept=".jpg, .png, .gif"
                                            placeholder="الموقع قبل الدمج "
                                    ></b-form-file>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group label="الموقع بعد الفرز" label-for="name-input">
                                    <b-form-file
                                            v-model="form.after_file"
                                            :state="Boolean(form.after_file)"
                                            accept=".jpg, .png, .gif"
                                            placeholder="الموقع بعد الدمج "
                                    ></b-form-file>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row v-else>
                            <b-col md="12">
                                <b-form-group label="رقم العقار" label-for="name-input">
                                    <v-select
                                            dir="rtl"
                                            placeholder="رقم العقار"
                                            :options="$store.getters['dashboard/getSubs'].submissions"
                                            v-model="form.submission_id"
                                            :reduce="(val) => val.id"
                                            label="building_number"
                                    >
                                    </v-select>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-col>
                </form>
            </validation-observer>
        </b-modal>

    </div>
</template>

<script>
    import {ValidationProvider, ValidationObserver} from 'vee-validate'

    import {mapGetters} from 'vuex'
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
            ValidationObserver,
            ValidationProvider,
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
                search_operation_type: null,
                search_buildingNumber: null,
                search_createdBy: null,
                sub_created_by: null,
                all_operation_type: [
                    'فرز', 'دمج', 'عادية', 'اخري'
                ],
                realty_list: [],
                realty_list2: [],
                building_dialog: false,
                search_sub: null,
                form: {
                    isolate_submissions: [],
                }
            };
        },
        mounted() {
            // this.includes_type  = $store.getters['dashboard/getLookups'].includes_type
            this.$store.dispatch('dashboard/allSubmission')
                .then((res) => {
                    this.realty_list = res.submissions
                    // this.build_type = res.includes_type;
                    console.log('res')
                    // console.log(this.realty_list)
                })

        },
        methods: {
            searchSub() {

                if (this.search_Sub) {
                    this.realty_list = this.realty_list.filter((el) => el.building_number == this.search_sub);
                }
            },
            openDialog() {
                this.building_dialog = true;
            },
            resetModal() {
                this.building_dialog = false;
            },
            getStatus(x) {
                if (x == 0) {
                    return 'تحت المراجعة'
                }
                if (x == 1) {
                    return ' يراجع مرة أخري'
                }
                if (x == 2) {
                    return 'تم اعتماده'
                }
            },
            save() {

                const submission = new FormData();

               Object.entries(this.form).map(([key, val] = entry) => {
                    submission.append(key, val);
                })


                this.$store.dispatch('pgc_forms/add_subs', {
                    query: submission,
                })
                    .then((response) => {
                        // if ($state) {
                        this.building_dialog = false;
                        // }
                        this.$swal({
                            icon: 'success',
                            title: 'تم الحفظ',
                            showConfirmButton: false,
                            timer: 1500,
                        })

                        this.$router.push(`/addRealty/${response.submission.id}`)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
        }
    }
</script>

