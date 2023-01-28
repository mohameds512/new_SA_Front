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
            pdf-orientation="landscape"
            
            ref="html2Pdf"
        >
            <section slot="pdf-content">
                <div style="text-align: right; "  class="invoice-preview-wrapper ">
                    <br><br>
                    <b-button
                            variant="success"
                            class="mb-75 invoice-actions"
                            block
                            @click="generateReport"
                    >
                        Print
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
                                    style="text-align: right;"
                                    hover
                                    :items="[{pro_num:2 , area_num: 2 , num:2 , building_num:2}]"
                                    :fields="[
                                        { key: 'pro_num', label: 'رقم المشروع ' },
                                        { key: 'area_num' , label: ' رقم المنطقة'   },
                                        { key: 'num' , label: '  رقم اللوحة'   },
                                        { key: 'building_num' , label: '  رقم العقار'   },
                                    ]"
                            ></b-table>
                            <div style="width: 100%; text-align: right; padding-right: 10px; border: 0.1rem;">رقم فريق الحصر (                            )</div>
                        </b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <h3 style="color:  rgb(11, 55, 2); margin-right: 20px;">محضــر حصــر عقــار</h3>
                        <p style="width: 90%; text-align: right; margin-right: 15px;">بناءً على الأمر السامي الكريم رقم (..........) الصادر بتاريخ .../.../..........هــ القاضي بالموافقة على الآلية المقترحة لنزع الملكيات وإعادة توطين سكان مشروع ................، وبناءً على الفقرة الثالثة من المادة السادسة من نظام نزع ملكية العقارات للمنفعة العامة ووضع اليد المؤقت على العقار الصادر بالمرسوم الملكي رقم (م/15) بتاريخ (11/03/1424هـ) فقد قامت لجنة الحصر بالوقوف على العقار الموضحة بياناته أدناه وتم حصر وصفه ومشتملاته وفقاً للتالي :</p>
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
                            <h3 style="color:  rgb(11, 55, 2); text-align: right;">  ثانياً: مساحة الأرض</h3>
                            <b-table-simple
                                    bordered
                            > 
                            <b-tbody>
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary"> المساحة حسب الصك</b-th>
                                        <b-th class="content-item"  colspan="3">56</b-th>
                                        <b-th class="green-header" variant="secondary">المساحة حسب الطبيعة </b-th>
                                        <b-th class="content-item" colspan="3">56</b-th>

                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                        </b-col>
                    </b-row>
                    <br><br>
                    <b-row>
                        <b-col>
                            <h3 style="color:  rgb(11, 55, 2); text-align: right;"> ثالثاً: مشتملات العقار </h3>
                            <b-table-simple
                                    bordered
                            > 
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary"> م</b-th>
                                        <b-th class="green-header" variant="secondary"> النوع</b-th>
                                        <b-th class="green-header" variant="secondary"> الوصف</b-th>
                                        <b-th class="green-header" variant="secondary"> الوحدة</b-th>
                                        <b-th class="green-header" variant="secondary"> العدد/المساحة</b-th>
                                        <b-th class="green-header" variant="secondary">الملاحظات</b-th>
                                        
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="content-item">1</b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="content-item">2</b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="content-item">3</b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="content-item">4</b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="content-item">5</b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="content-item">6</b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="content-item">7</b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                        <b-th class="content-item"></b-th>
                                    </b-tr>
                                    <b-tr style="text-align: right;">
                                        <h3>ملاحظات</h3>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                            
                            <b-table-simple bordered>
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="content-item" >التوقيع</b-th>
                                        <b-th class="content-item">مالك</b-th>
                                        <b-th class="content-item">وكيل</b-th>
                                    </b-tr>
                                    <!-- <b-tr>
                                        <p  style="padding-right: 10px;" >
                                            أقر أنا الموقع أدناه، وأنا بكامل أهليتي المعتبرة شرعاً ونظاماً، أن المباني والأنقاض تعود ملكيتها لي وأتحمل كامل المسؤولية في حال ثبت خلاف ذلك، وأني اطلعت على كافة بيانات الحصر للعقار المدونة أعلاه وأنها صحيحة وبذلك أوقع                  التاريخ: 
                                        </p>
                                    </b-tr> -->
                                    
                                </b-tbody>
                            </b-table-simple  >
                            <div>
                                <p  style="padding-right: 10px;" >
                                    أقر أنا الموقع أدناه، وأنا بكامل أهليتي المعتبرة شرعاً ونظاماً، أن المباني والأنقاض تعود ملكيتها لي وأتحمل كامل المسؤولية في حال ثبت خلاف ذلك، وأني اطلعت على كافة بيانات الحصر للعقار المدونة أعلاه وأنها صحيحة وبذلك أوقع                  التاريخ: 
                                </p>
                            </div>
                            
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-table-simple bordered >
                                <b-tbody>
                                    <b-tr>
                                        <b-th>:الاسم</b-th>
                                        <b-th>التوقيع:</b-th>
                                        <b-th>رقم الجوال:</b-th>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                        </b-col>
                    </b-row>
                    <br><br>
                    <b-row>
                        <b-col>
                            <h3 style="color:  rgb(11, 55, 2); text-align: right;"> أعضاء لجنة حصر العقارات</h3>
                            <b-table-simple bordered>
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="green-header" >وزارة الشؤون البلدية والقروية والإسكان</b-th>
                                        <b-th class="green-header">الإمارة</b-th>
                                        <b-th class="green-header">وزارة البيئة والمياه والزراعة</b-th>
                                        <b-th class="green-header">الجهة المستفيدة</b-th>
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
                    <!-- <b-row>
                        <b-col>
                            <h3 style="color:  rgb(11, 55, 2); text-align: right;"> ثالثاً: مشتملات العقار </h3>
                            <b-table-simple bordered>
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="green-header" >وزارة الشؤون البلدية والقروية والإسكان</b-th>
                                        <b-th class="green-header">الإمارة</b-th>
                                        <b-th class="green-header">وزارة البيئة والمياه والزراعة</b-th>
                                        <b-th class="green-header">الجهة المستفيدة</b-th>
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
                    </b-row> -->
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

<style lang="scss">
    th {
        background-color: #ffffff !important;
        color: rgb(11, 55, 2);
        font-size: 15px;
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