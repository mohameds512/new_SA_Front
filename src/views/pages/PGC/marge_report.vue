<template>
    <div class="invoice-preview-wrapper  " >
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
        BThead
    } from "bootstrap-vue";

    export default {
        name: "marge_report",
        components: {
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
        props: {
            submission: null,
            owners:null,
        },
        methods:{
            printInvoice() {
                window.print()
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
