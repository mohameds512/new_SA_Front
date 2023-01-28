<template>

    <div>
        <vue-html2pdf
            :show-layout="true"
            :float-layout="false"
            :enable-download="true"
            :preview-modal="true"

            :pdf-quality="2"
            :manual-pagination="true"
            pdf-format="a4"

            ref="html2Pdf"
        >
            <section slot="pdf-content" style="font-family: dejavusans; text-align: right; align-self: center;">

                <div  class="invoice-preview-wrapper ">
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
                    <b-row    class="invoice-preview">
                        <b-col md="4">
                            <div >
                                <img style="max-width: 200px; max-height: 150px;" src="@/assets/images/Picture1.png" alt="" />
                            </div>
                        </b-col>
                        <b-col md="8">
                            <b-table
                                    bordered
                                    hover
                                    :items="[{pro_num:2 , area_num: 2 , num:2 , building_num:2}]"
                                    :fields="[
                                        { key: 'pro_num', label: 'رقم المشروع ' },
                                        { key: 'area_num' , label: ' رقم المنطقة'   },
                                        { key: 'num' , label: '  رقم اللوحة'   },
                                        { key: 'building_num' , label: '  رقم العقار'   },
                                    ]"
                            ></b-table>
                            <div style="width: 100%;  padding-right: 10px; ">رقم فريق الحصر (                            )</div>
                        </b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <h3 style="color:  rgb(11, 55, 2); margin-right: 20px;">  ملحق حصر المشتملات</h3>

                    </b-row>
                    <br><br>

                    <b-row>
                        <b-col>
                            <b-table-simple
                                    bordered
                            >
                                <b-thead head-variant="light">

                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary"> م</b-th>
                                        <b-th class="green-header" variant="secondary"> النوع</b-th>
                                        <b-th class="green-header" variant="secondary"> العدد/المساحة</b-th>
                                        <b-th class="green-header" variant="secondary"> م</b-th>
                                        <b-th class="green-header" variant="secondary"> النوع</b-th>
                                        <b-th class="green-header" variant="secondary"> العدد/المساحة</b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="content-item" >1</b-td>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" >13</b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="content-item" >2</b-td>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" >14</b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="content-item" >3</b-td>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" >15</b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="content-item" >4</b-td>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" >16</b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="content-item" >5</b-td>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" >17</b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="content-item" >6</b-td>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" >18</b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="content-item" >7</b-td>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" >19</b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="content-item" >8</b-td>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" >20</b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="content-item" >9</b-td>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" >21</b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="content-item" >10</b-td>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" >22</b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="content-item" >11</b-td>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" >23</b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="content-item" >12</b-td>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" >24</b-th>
                                        <b-th class="content-item" ></b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                </b-tbody>

                            </b-table-simple>
                        </b-col>
                    </b-row>
                    <br><br>
                    <b-row>
                        <b-col>
                            <h3 style="color:  rgb(11, 55, 2); text-align: right;">  ثانياً: مساحة الأرض</h3>

                            <b-table-simple bordered>
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="content-item" >التوقيع</b-th>
                                        <b-th class="content-item">مالك</b-th>
                                        <b-th class="content-item">وكيل</b-th>
                                    </b-tr>

                                </b-tbody>
                            </b-table-simple>
                            <div style="text-align: right;">
                                <p  style="padding-right: 10px;" >
                                    أقر أنا الموقع أدناه، وأنا بكامل أهليتي المعتبرة شرعاً ونظاماً، أن المباني والأنقاض تعود ملكيتها لي وأتحمل كامل المسؤولية في حال ثبت خلاف ذلك، وأني اطلعت على كافة بيانات الحصر للعقار المدونة أعلاه وأنها صحيحة وبذلك أوقع                  التاريخ:
                                </p>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-table-simple bordered >
                                <b-tbody style="text-align: right;">
                                    <b-tr>
                                        <b-th class="content-item" >:الاسم</b-th>
                                        <b-th class="content-item" >التوقيع:</b-th>
                                        <b-th class="content-item" >رقم الجوال:</b-th>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                        </b-col>
                    </b-row>
                    <br><br>
                    <b-row>
                        <b-col>
                            <b-table-simple bordered >
                                <b-tbody style="text-align: right;">
                                    <b-tr >
                                        <b-th  class=" center-green text-center">اعضاء لجنة حصر العقارات</b-th>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                            <b-table-simple bordered>
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="content-item" >وزارة الشؤون البلدية والقروية والإسكان</b-th>
                                        <b-th class="content-item">الإمارة</b-th>
                                        <b-th class="content-item">وزارة البيئة والمياه والزراعة</b-th>
                                        <b-th class="content-item">الجهة المستفيدة</b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="content-item">الاسم</b-th>
                                        <b-th class="content-item">الاسم</b-th>
                                        <b-th class="content-item">الاسم</b-th>
                                        <b-th class="content-item">الاسم</b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="content-item">التاريخ</b-th>
                                        <b-th class="content-item">التاريخ</b-th>
                                        <b-th class="content-item">التاريخ</b-th>
                                        <b-th class="content-item">التاريخ</b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="content-item">التوقيع</b-th>
                                        <b-th class="content-item">التوقيع</b-th>
                                        <b-th class="content-item">التوقيع</b-th>
                                        <b-th class="content-item">التوقيع</b-th>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                        </b-col>
                    </b-row>
                </div>

            </section>
        </vue-html2pdf>
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

    import VueHtml2pdf from 'vue-html2pdf'
    export default {
        name: "report",
        components: {
            VueHtml2pdf,
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
        methods: {
            generateReport () {
                this.$refs.html2Pdf.generatePdf()
            },
            printInvoice() {
                window.print()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@core/scss/base/pages/app-invoice.scss";
</style>

<style lang="scss" >
    // .fgh{

    // }
    @media print {
    .fgh {
        background-color: red;
        direction: rtl;
    }
    // .th {
    //     background-color: #ffffff !important;
    //     color: rgb(11, 55, 2);
    //     font-size: 15px;
    // }
    .green-header{
        background-color: #05481e !important;
        color: #ffffff !important;
        // text-align: left !important;
    }
    .center-green{
        background-color: #05481e !important;
        color: #ffffff !important;
    }
    .content-item{
        text-align: left !important;
    }
}
@media print {
  * {
    -webkit-print-color-adjust: exact !important; /* Chrome, Safari, Edge */
    color-adjust: exact !important; //
  }
}
    .green-header{
        background-color: #05481e !important;
        color: #ffffff !important;
        // text-align: left !important;
    }
    .center-green{
        background-color: #05481e !important;
        color: #ffffff !important;
    }
    .content-item{
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
        th {
            background-color: #787676 !important;
            color: white;
        }
        .card-header-pills{
            display: none;
        }
        .invoice-actions {
            display: none;
        }
    }
</style>
