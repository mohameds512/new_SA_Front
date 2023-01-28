<template>
    
        <div  class="invoice-preview-wrapper " style="text-align: right;">
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
                <h3 style="color:  rgb(11, 55, 2); margin-right: 20px;"> محضر تقدير </h3>
                <div style="padding-right: 15px;">
                    تاريخ نهاية إجراءات قرار لجنة التقدير     /      /          14هـ
بناءً على الأمر السامي الكريم رقم (……………) الصادر بتاريخ  ..../…./………هــ القاضي بالموافقة على الآلية المقترحة لنزع الملكيات وإعادة توطين السكان بمشروع .............................، وعلى الأمر السامي الكريم رقم (..............) في ...../....../.............هـ القاضي بالموافقة على ...............................، تم شخوص اللجنة المشكلة بموجب المادة السابعة من نظام نزع ملكية العقارات للمنفعة العامة ووضع اليد المؤقت على العقار المصادق عليه بالمرسوم الملكي رقم (م/15) بتاريخ (11/03/1424هـ) على العقار الموضح بياناته أدناه، واتضح أن المعلومات المبينة صحيحة وأن الأسعار التي حددت أخذت بعين الاعتبار موقع العقار بالنسبة للمنطقة والعقارات المجاورة وكذلك بحسب وصف العقار  في محضر الحصر المعتد من قبل لجنة الحصر المشكلة حسب نظام نزع ملكية العقارات للمنفعة العامة ووضع اليد المؤقت على العقار المشار إليه ولائحته التنفيذية، كما أن اللجنة اتبعت في تقديراتها طريقة (...........) وفقاً للمعايير والضوابط التي تتبعها الهيئة السعودية للمقيمين المعتمدين وفقاً للتالي:

                </div>
            </b-row>
            <br><br>
            
            <b-row>
                        <b-col>
                            <b-table-simple
                                    bordered
                            > 
                                <b-thead head-variant="light">
                                    <!-- <b-tr>
                                        <b-th colspan="8" class="text-center text-dark text-bold">
                                            أولاً: بيانات العقار
                                        </b-th>
                                    </b-tr> -->
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary">اسم المالك</b-th>
                                        <b-th class="content-item"  colspan="3">56</b-th>
                                        <b-th class="green-header" variant="secondary">رقم الهوية</b-th>
                                        <b-th class="content-item" colspan="3">56</b-th>

                                    </b-tr>
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary">رقم القطعة</b-th>
                                        <b-th class="content-item">56</b-th>
                                        <b-th class="green-header" variant="secondary">رقم المخطط</b-th>
                                        <b-th class="content-item">56</b-th>
                                        <b-th class="green-header" variant="secondary">الموقع</b-th>
                                        <b-th class="content-item" colspan="3">56</b-th>

                                    </b-tr>
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary">رقم الصك</b-th>
                                        <b-th class="content-item">56</b-th>
                                        <b-th class="green-header" variant="secondary">تاريخه</b-th>
                                        <b-th class="content-item">56</b-th>
                                        <b-th class="green-header" variant="secondary">مصدره </b-th>
                                        <b-th class="content-item" colspan="3">56</b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary">نوع العقار</b-th>
                                        <b-th class="content-item" > 56</b-th>
                                        <b-th class="green-header" variant="secondary">المساحة حسب الصك م2</b-th>
                                        <b-th class="content-item">56</b-th>
                                        <b-th class="green-header" variant="secondary">الاستخدام </b-th>
                                        <b-th class="content-item" colspan="3">56</b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary">نوع الملكية</b-th>
                                        <b-td class="content-item" >56</b-td>
                                        <b-th class="green-header" variant="secondary">وصف العقار</b-th>
                                        <b-th class="content-item" colspan="5">56</b-th>

                                    </b-tr>

                                </b-tbody>

                            </b-table-simple>
                        </b-col>
                    </b-row>
            <br><br>
            <b-row>
                <b-col>
                    <h3 style="color:  rgb(11, 55, 2); text-align: right;">  ثانياً: التقديرات </h3>
                    
                    <b-table-simple bordered>
                        <b-tbody>
                            <b-tr>
                                <b-th class="green-header" >النوع</b-th>
                                <b-th class="green-header" >الوحدة</b-th>
                                <b-th class="green-header" >الكمية</b-th>
                                <b-th class="green-header" >سعر الوحدة</b-th>
                                <b-th class="green-header" >القيمة</b-th>
                                <b-th class="green-header" >الملاحظات</b-th>
                            </b-tr>
                            <b-tr>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                            </b-tr>
                            <b-tr>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                            </b-tr>
                            <b-tr>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                            </b-tr>
                            <b-tr>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                            </b-tr>
                            <b-tr>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                            </b-tr>
                            <b-tr>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                            </b-tr>
                            <b-tr>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                            </b-tr>
                            <b-tr>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                                <b-th class="content-item" ></b-th>
                            </b-tr>
                            
                        </b-tbody>
                    </b-table-simple>
                    <div style="padding-top: 8px;">
                        <span style="padding:10px; padding-left: 95px; color: #ffffff; background-color: #05481e; "> إجمالي التعويض </span>
                        <span style="padding:10px; padding-left: 100px; border: 0.1rem">.</span>
                        <span style="padding:10px; padding-left: 95px; border: 0.1rem"> كتابة</span>
                    </div>
                </b-col>
                
            </b-row>
            <!-- <b-row>
                <b-col>
                    <b-table-simple>
                        <b-tbody>
                            <b-tr>
                                <b-th class="green-header">إجمالي التعويض</b-th>
                                <b-th> fff </b-th>
                                <b-th> كتابة: </b-th>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row> -->
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