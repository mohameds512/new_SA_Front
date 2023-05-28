<template>
    <div class="invoice-preview-wrapper  " >
        <div class="invoice-actions">
            <b-button variant="primary" @click="editBefore()"
                        class="mb-2">
                تحديث الخريطة قبل الفرز
            </b-button>
            <b-button variant="primary" @click="editAfter()"
                        class="mb-2 mr-5">
                تحديث الخريطة بعد الفرز
            </b-button>
            <b-modal hide-header-close v-model="modal_img_before"
                    hide-footer title="أضفة خريطة" id="img">
            <div class="demo-vertical-spacing">

                <b-form-group class="text-left">
                    <!-- <input type="hidden" v-model="before_image"> -->
                    <validation-provider
                            #default="{ errors }"
                            name="خريطة "
                            rules="required">
                        <input type="file" name="image"
                                @change="changeImgB"
                                ref="img_before"
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
                        <b-button @click="updateImg()"
                                    variant="primary"
                                    style="margin-right: 10px;">
                            تأكيد
                        </b-button>
                        <b-button @click="modal_img_before = false"
                                    variant="outline-primary">
                            الغاء
                        </b-button>
                    </div>
                </b-col>
            </div>
            </b-modal>
            <b-modal hide-header-close v-model="modal_img_after"
                    hide-footer title="أضفة خريطة" id="img">
            <div class="demo-vertical-spacing">

                <b-form-group class="text-left">
                    <!-- <input type="hidden" v-model="before_image"> -->
                    <validation-provider
                            #default="{ errors }"
                            name="خريطة "
                            rules="required">
                        <input type="file" name="image"
                                @change="changeImgA"
                                ref="img_after"
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
                        <b-button @click="updateImg()"
                                    variant="primary"
                                    style="margin-right: 10px;">
                            تأكيد
                        </b-button>
                        <b-button @click="modal_img_after = false"
                                    variant="outline-primary">
                            الغاء
                        </b-button>
                    </div>
                </b-col>
            </div>
            </b-modal>
        </div>
        <br><br>
        <b-button
                variant="success"
                class="mb-75 invoice-actions"
                block
                @click="printInvoice"
        >
            طباعة
        </b-button>
        <br><br>
        <b-row class="invoice-preview" >
            <b-col md="4">
                <div >
                    <img style="max-width: 200px; max-height: 150px;" src="@/assets/images/Picture1.png" alt="" />
                </div>
            </b-col>
        </b-row><br>
        <div class="text-center" > 
            <span style="padding: 10px;   background-color: #e7e7e7;" > نموذج دمج عقار </span>
        </div>
        <div style="padding: 20px;" v-if="owners && owners[0]">
            <p>بعد الوقف الميداني في لجنة الحصر مع المواطن</p>
            <b-row>
                <b-col cols="8">
                    <p >
                        <span> المواطن / </span> <span> {{ owners[0].name }}  </span>
                    </p>
                </b-col>
                <b-col cols="4">
                    <p >
                        <span> هوية رقم / </span> <span> {{ owners[0].national_id }}  </span>
                    </p>
                </b-col>
            </b-row>
            
            <b-row>
                <b-col cols="8">
                    <div >
                        <span> بتاريخ / </span> <span> {{toLocalDatetime(submission.created_at) }}  </span>
                    </div>
                </b-col>
                <b-col cols="4">
                    <div >
                        <span>  للعقار رقم / </span> <span> {{ submission.building_number }}  </span>
                    </div>
                </b-col>
            </b-row>
            <div style="padding:20px ;">
                أوضح أنه يملك مجموعة من العقارات و ليس فقط الشكل المرسوم ادناه علي قواعد البانات المكانية و تم دمج مجموعة من العقارات و تعديل مشتملاتها و تم اعطائها رقم عقار و هي كالتالي :
            </div>
        </div>
        <br>
        <b-table-simple bordered  class="text-center">
            <b-tbody>
                <tr>
                    <b-th variant="secondary"  class="text-center text-dark text-bold headMare">
                        رقم العقار قبل الدمج
                    </b-th>
                    <b-th variant="secondary"  class="text-center text-dark text-bold headMare">
                        رقم العقار بعد الدمج
                    </b-th>
                </tr>
            </b-tbody>
            <b-tbody>
                <b-tr v-if="submission.merged_submissions" v-for="(item , i) in submission.merged_submissions">
                    <b-td>
                        {{item}}
                    </b-td>

                    <b-td v-if="i == 0" :rowspan="submission.merged_submissions.length">
                        {{submission.building_number}}
                    </b-td>
                </b-tr>

                <b-tr>
                    <b-th style="width: 50%;" class="justify-content-center">
                        <img :src="submission.before_image" height="220px" width="80%">
                    </b-th>
                    <b-th style="width: 50%;" >
                        <img :src="submission.after_image" height="220px" width="80%">
                    </b-th>
                </b-tr>
            </b-tbody>
        </b-table-simple>
        <div style="padding: 25px;">
            <b-row>
                <b-col cols="6">
                    <div>
                        <span> اعــتــمـاد مـدير الحصــر المـيداني</span><span> / ........................</span>
                    </div>
                    <div>
                        <span> اعتماد رئيس فرقة الحصر الميداني</span><span> / .................</span>
                    </div>
                </b-col>
                <b-col cols="1" ></b-col>
                <b-col cols="5">
                    <div>
                        <span> اعــتــمـاد مـدير GIS</span><span> / ........................</span>
                    </div>
                    <div>
                        <span> اعتماد رئيس المشروع</span><span> / .................</span>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import {
        BCol,
        BOverlay,
        BRow,
        BTab,
        BTable,
        BTabs,
        BTableSimple,
        BTr,
        BTh,
        BButton,
        BTfoot,
        BTbody,
        BTd,
        BThead,
        BFormGroup,
    } from "bootstrap-vue";

    import {ValidationProvider, ValidationObserver} from 'vee-validate'
    export default {
        name: "marge_report",
        components: {
            BFormGroup,
            ValidationProvider,
            BRow,
            BCol,
            BTab,
            BButton,
            BTabs,
            BOverlay,
            BTable,
            BTableSimple,
            BTr, BTh, BTfoot, BTbody, BTd, BThead
        },
        data() {
            return {
                modal_img_before:false,
                modal_img_after:false,
                before_image:null,
                after_image:null,
            }
            
        },
        props: {
            submission: null,
            owners:null,
        },
        methods:{
            printInvoice() {
                window.print()
            },
            changeImgB() {
                this.before_image = this.$refs.img_before.files[0];
            },
            changeImgA() {
                this.after_image = this.$refs.img_after.files[0];
            },
            editBefore(){
                this.modal_img_before = true;
            },
            editAfter(){
                this.modal_img_after = true;
            },
            updateImg() {
                const image = new FormData()
                image.append('before_image', this.before_image)
                image.append('after_image', this.after_image)
                this.$store
                    .dispatch('pgc_forms/updateBeforeAfter', {
                        id: this.$route.params.id,
                        query: image,
                    }).then((response) => {
                        this.$emit('refresh');
                        this.before_image = null;
                        this.after_image = null;
                        this.modal_img_before = false;
                        this.modal_img_after = false;
                    });
            },
        }
    }
</script>
<style lang="scss" scoped>
@import "~@core/scss/base/pages/app-invoice.scss";
</style>

<style lang="scss" scoped >

.green_right_item{
    background-color: #05481e !important;
    color: #ffffff !important;
    text-align: left !important;
    width: 50%;
}
.green-header{
    background-color: #05481e !important;
    color: #ffffff !important;
    text-align: left !important;
}
@media print {

    // Global Styles
    body {
        background-color: transparent !important;
    }
    nav.header-navbar {
        display: none;
    }
    .main-menu {
        display: none;
    }
    .header-navbar-shadow {
        display: none !important;
    }
    .collection_pdf{
        position: fixed;
    }
    .content.app-content {
        margin-left: 0;
        padding-top: 2rem !important;
    }
    footer.footer {
        display: none;
    }
    .card {
        background-color: transparent;
        box-shadow: none;
    }
    .customizer-toggle {
        display: none !important;
    }

    // Invoice Specific Styles
    .invoice-preview-wrapper {

        th {
    background-color: #ffffff !important;
    color: rgb(11, 55, 2);
    font-size: 15px;
}
.invoice-preview-wrapper_container{

} 
.green_right_item{
    background-color: #05481e !important;
    color: #ffffff !important;
    text-align: left !important;
    width: 50%;
}
.green-header{
    background-color: #05481e !important;
    color: #ffffff !important;
    text-align: left !important;
}
.content-item{
    color: #1b0404 !important;
    text-align: left !important;
}
        .row.invoice-preview {
            .col-md-8 {
                max-width: 100%;
                flex-grow: 1;
            }

            .invoice-preview-card {
                .card-body:nth-of-type(2) {
                    .row {
                        > .col-12 {
                            max-width: 50% !important;
                        }

                        .col-12:nth-child(2) {
                            display: flex;
                            align-items: flex-start;
                            justify-content: flex-end;
                            margin-top: 0 !important;
                        }
                    }
                }
            }
        }

        // Action Right Col
        .invoice-actions {
            display: none;
        }
    }
    body{
        overflow: hidden;
        overflow-scrolling: unset;
    }
    
    .card-header-pills{
        display: none;
    }
    @media print {
  * {
    -webkit-print-color-adjust: exact !important; /* Chrome, Safari, Edge */
    color-adjust: exact !important; /*Firefox*/
    // direction: rtl;
  }
  .our_wrapper_for_container_details {
    background-color: red;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 15px;
    font-size: 14px;
    line-height: 18px;
    z-index: 999999999999999999999999999999;
  }
}
    .invoice-actions {
        display: none;
    }
}
.switch_printer{
    display: flex;
    gap: 10px;
}
@media print {
  * {
    -webkit-print-color-adjust: exact !important; /* Chrome, Safari, Edge */
    color-adjust: exact !important; /*Firefox*/
    
  }
  .invoice-preview-wrapper {
    .btn_print{
      display: none;
    }
    .switch_printer{
        flex-direction: row-reverse;
    }
    
    background-color: #ffffff;
    overflow:hidden !important;
    height: 100%;
    width: 100%;
    position: fixed;
    inset: 0;
    padding: 35px;
    margin: 0;
    z-index: 999999999999999999999999999999;
  }
}

</style>

<style lang="scss">
    .swith_test_print_table{
        .card .table{
            background-color: #1b0404 !important;
            padding: 50px;
        }
    }
</style>
