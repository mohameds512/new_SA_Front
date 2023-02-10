<template>
    <!-- <div> -->
        <!-- <vue-html2pdf
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
            <section slot="pdf-content"> -->
                <div style="text-align: right; " id="collection_pdf"  class="invoice-preview-wrapper">
                    <br><br>
                    <b-button
                            variant="success"
                            class="mb-75 invoice-actions"
                            block
                            @click="printInvoice"
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
                        <b-col cols="2" ></b-col>
                        <b-col md="6">
                            <b-table-simple bordered class="text-center">
                                <b-thead head-variant="light">
                                    <b-tr>
                                        <b-th class="green-item"> رقم المشروع</b-th>
                                        <b-th class="green-item">رقم المنطقة</b-th>
                                        <b-th class="green-item">رقم اللوحة</b-th>
                                        <b-th class="green-item">رقم العقار</b-th>
                                    </b-tr>
                                    
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-th  >{{ submissionData.pro_num }}</b-th>
                                        <b-th >{{submissionData.zone}}</b-th>
                                        <b-th> {{ submissionData.plad_num }}</b-th>
                                        <b-th>{{getLast5(submissionData.building_number)}}</b-th>

                                    </b-tr>
                                    <b-tr>
                                        رقم العقار ( {{ submissionData.building_number }}                           )
                                    </b-tr>
                                </b-tbody>

                            </b-table-simple>
                            <!-- <b-table
                                    bordered
                                    style="text-align: right;"
                                    hover
                                    :items="submissionData"
                                    :fields="[
                                        { key: 'pro_num', label: 'رقم المشروع ' },
                                        { key: 'area_num' , label: ' رقم المنطقة'   },
                                        { key: 'num' , label: '  رقم اللوحة'   },
                                        { key: 'building_number' , label: '  رقم العقار'   },
                                    ]"
                            >
                                <tbody>
                                    <tr>
                                        <td>{{ submissionData.building_number }}</td>
                                    </tr>
                                </tbody>
                            </b-table> -->
                            <!-- <div style="width: 100%; text-align: right; padding-right: 10px; border: 0.1rem;" >  رقم العقار ( {{ submissionData.building_number }}                           )</div> -->
                        </b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <h3 style="color:  rgb(11, 55, 2); margin-right: 20px;">محضــر حصــر عقــار</h3>
                        <p style="width: 90%; text-align: right; margin-right: 15px;">بناءً على الأمر السامي الكريم رقم (..........) الصادر بتاريخ .../.../..........هــ القاضي بالموافقة على الآلية المقترحة لنزع الملكيات وإعادة توطين سكان مشروع ................، وبناءً على الفقرة الثالثة من المادة السادسة من نظام نزع ملكية العقارات للمنفعة العامة ووضع اليد المؤقت على العقار الصادر بالمرسوم الملكي رقم (م/15) بتاريخ (11/03/1424هـ) فقد قامت لجنة الحصر بالوقوف على العقار الموضحة بياناته أدناه وتم حصر وصفه ومشتملاته وفقاً للتالي :</p>
                    </b-row>
                    <br>

                    <b-row>
                        <b-col>
                            <b-table-simple small
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
                                        <b-th class="content-item"  colspan="3">{{ ownersData.name }}</b-th>
                                        <b-th class="green-header" variant="secondary">رقم الهوية</b-th>
                                        <b-th class="content-item" colspan="3">{{ ownersData.national_id }}</b-th>

                                    </b-tr>
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary">رقم القطعة</b-th>
                                        <b-th class="content-item">{{ submissionData.slice_number }}</b-th>
                                        <b-th class="green-header" variant="secondary">رقم المخطط</b-th>
                                        <b-th class="content-item">{{ submissionData.planned_num}}</b-th>
                                        <b-th class="green-header" variant="secondary">الموقع</b-th>
                                        <b-th class="content-item" colspan="3">56</b-th>

                                    </b-tr>
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary">رقم الصك</b-th>
                                        <b-th class="content-item">{{ submissionData.contract_number}}</b-th>
                                        <b-th class="green-header" variant="secondary">تاريخه</b-th>
                                        <b-th class="content-item">{{ submissionData.contract_date }}</b-th>
                                        <!-- <b-th class="content-item">{{ new Date(submissionData.contract_date).toLocaleString('ar-u-ca-islamic', { year: 'numeric', month: 'long', day: 'numeric'})}}</b-th> -->
                                        <b-th class="green-header" variant="secondary">مصدره </b-th>
                                        <b-th class="content-item" colspan="3">{{submissionData.contract_source}}</b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary">نوع العقار</b-th>
                                        <b-th class="content-item" > {{submissionData.building_type}}</b-th>
                                        <b-th class="green-header" variant="secondary">المساحة حسب الصك ( <span>م&sup2</span>)</b-th>
                                        <b-th class="content-item">{{ submissionData.contract_area }}</b-th>
                                        <b-th class="green-header" variant="secondary">الاستخدام </b-th>
                                        <b-th class="content-item" colspan="3">{{submissionData.submission_using}}</b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary">نوع الملكية</b-th>
                                        <b-td class="content-item" >{{ submissionData.contract_type }}</b-td>
                                        <b-th class="green-header" variant="secondary">وصف العقار</b-th>
                                        <b-th class="content-item" colspan="5">{{submissionData.building_type }}</b-th>

                                    </b-tr>

                                </b-tbody>

                            </b-table-simple>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row>
                        <b-col>
                            <h3 style="color:  rgb(11, 55, 2); text-align: right;">  ثانياً: مساحة الأرض</h3>
                            <b-table-simple small
                                    bordered
                            > 
                            <b-tbody>
                                    <b-tr>
                                        <b-th class="green-header" style="width: 25%;" variant="secondary">  المساحة حسب الصك ( <span>م&sup2</span>)</b-th>
                                        <b-th class="content-item" style="width: 25%;"  colspan="3">{{ submissionData.contract_area }}</b-th>
                                        <b-th class="green-header" style="width: 25%;" variant="secondary">المساحة حسب الطبيعة ( <span>م&sup2</span>)</b-th>
                                        <b-th class="content-item" style="width: 25%;" colspan="3">{{ submissionData.submission_area}}</b-th>

                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row>
                        <b-col>
                            <h3 style="color:  rgb(11, 55, 2); text-align: right;"> ثالثاً: مشتملات العقار </h3>
                            <b-table-simple small
                                    bordered
                            > 
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="green-header" style="width: 5%;" variant="secondary"> م</b-th>
                                        <b-th class="green-header" > الوصف</b-th>
                                        <b-th class="green-header" > الوحدة</b-th>
                                        <b-th class="green-header" style="width: 11%;" > العدد/المساحة</b-th>
                                        <b-th class="green-header text-center" >الملاحظات</b-th>
                                        
                                    </b-tr>
                                    <b-tr  v-for="(item,index) in submissionData.includes_data" v-if="index <= 6" :key="index">
                                        <b-th class="content-item">{{ index + 1}}</b-th>
                                        <b-th class="content-item"> {{ item.content }} </b-th>
                                        <b-th class="content-item">{{ item.unit }}</b-th>
                                        <b-th class="content-item">{{ item.qty }}</b-th>
                                        <b-th class="content-item text-center">{{ getValidData(item.notes) }}</b-th>
                                    </b-tr>
                                    
                                    <b-tr style="text-align: right;">
                                        <h3>ملاحظات: <br><br> </h3>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                            
                            <b-table-simple small bordered>
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="content-item" >التوقيع</b-th>
                                        <b-th class="content-item"><span> <input type="checkbox" :checked="submissionData.contract_type == 'مالك' ? true : false"   > </span> <span>مالك</span>   </b-th>
                                        <b-th class="content-item"> <span> <input type="checkbox"  :checked="submissionData.contract_type == 'وكيل' ? true : false"  > </span> <span>وكيل</span> </b-th>
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
                            <b-table-simple small bordered >
                                <b-tbody>
                                    <b-tr>
                                        <b-th style="width: 33%;">الاسم: {{ ownersData.name }} </b-th>
                                        <b-th style="width: 33%;">التوقيع:</b-th>
                                        <b-th style="width: 33%;">رقم الجوال: {{ ownersData.phone }} </b-th>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row>
                        <b-col>
                            <h3 style="color:  rgb(11, 55, 2); text-align: right;"> أعضاء لجنة حصر العقارات</h3>
                            
                            <b-table-simple small bordered>
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="green-header" style="width: 25%;" >وزارة الشؤون البلدية والقروية والإسكان</b-th>
                                        <b-th class="green-header" style="width: 25%;">الإمارة</b-th>
                                        <b-th class="green-header" style="width: 25%;">وزارة البيئة والمياه والزراعة</b-th>
                                        <b-th class="green-header" style="width: 25%;">الجهة المستفيدة</b-th>
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
                    <br>
                    <b-row>
                        <b-col cols="4" style="font-size: 10px;" class="mr-2"  >رمز الوثيقة:[TP_OPS_ATM_01]</b-col>
                        <b-col cols="5" ></b-col>
                        <b-col cols="2" style="font-size: 10px;" >الاصدار:01</b-col>
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
            <!-- </section>
        </vue-html2pdf>
    </div> -->
    
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

    // import VueHtml2pdf from 'vue-html2pdf'
    export default {
        
        name: "report",
        components: {
            // VueHtml2pdf,
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
        props:{
            submissionData:[],
            ownersData:[],
        },
        methods: {
            // generateReport () {
            //     this.$refs.html2Pdf.generatePdf()
            // },
            getValidData(data){
            if (data == null) {
                return "-"
            }if (data == 'null') {
                return "-"
                
            }
            return data;
        },
            getLast5( subNum ){
                return  subNum.slice(-5);
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

<style lang="scss" scoped >
.green-item{
    color: #05481e !important;
    background-color: #ffffff !important;
}
.green-header{
        background-color: #05481e !important;
        color: #ffffff !important;
        
    }
    
    .default_th{
        background-color: #ffffff;  
        color: #1b0404;
    }
    @media print {

        // Global Styles
        body {
            background-color: transparent !important;
            font-size: 12px;
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
        color:#000;
        // font-size: 15px;
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
        .invoice-actions {
            display: none;
        }
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

