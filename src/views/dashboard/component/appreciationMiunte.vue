<template>
    
    <div  class="invoice-preview-wrapper  " style="text-align: right;">
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
        <div   class="invoice-preview switch_printer">
            <div style="min-width: 350px;" >
                <div >
                    <img style="max-width: 200px; max-height: 150px;" src="@/assets/images/Picture1.png" alt="" />
                </div>
            </div>
            <div style="flex-grow: 1;" >
                
                <b-table-simple>
                            <b-thead head-variant="light">
                                <b-tr>
                                    <b-th class="green-header" > رقم المشروع</b-th>
                                    <b-th class="green-header">رقم المنطقة</b-th>
                                    <b-th class="green-header">رقم اللوحة</b-th>
                                    <b-th class="green-header">رقم العقار</b-th>
                                </b-tr>
                                
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-th>{{ submissionData.pro_num }}</b-th>
                                    <b-th >{{submissionData.zone}}</b-th>
                                    <b-th> {{ submissionData.plad_num }}</b-th>
                                    <b-th>{{ getLast5(submissionData.building_number) }}</b-th>

                                </b-tr>

                            </b-tbody>

                        </b-table-simple>
                <div style="width: 100%;  padding-right: 10px; ">رقم العقار (    {{ submissionData.building_number }}                        )</div>
            </div>
        </div>
        
        <div>
            <h3 style="color:  rgb(11, 55, 2); margin-right: 20px; "> محضر تقدير </h3>
            <div style="padding-right: 15px;">
                تاريخ نهاية إجراءات قرار لجنة التقدير     /      /          14هـ
بناءً على الأمر السامي الكريم رقم (……………) الصادر بتاريخ  ..../…./………هــ القاضي بالموافقة على الآلية المقترحة لنزع الملكيات وإعادة توطين السكان بمشروع .............................، وعلى الأمر السامي الكريم رقم (..............) في ...../....../.............هـ القاضي بالموافقة على ...............................، تم شخوص اللجنة المشكلة بموجب المادة السابعة من نظام نزع ملكية العقارات للمنفعة العامة ووضع اليد المؤقت على العقار المصادق عليه بالمرسوم الملكي رقم (م/15) بتاريخ (11/03/1424هـ) على العقار الموضح بياناته أدناه، واتضح أن المعلومات المبينة صحيحة وأن الأسعار التي حددت أخذت بعين الاعتبار موقع العقار بالنسبة للمنطقة والعقارات المجاورة وكذلك بحسب وصف العقار  في محضر الحصر المعتد من قبل لجنة الحصر المشكلة حسب نظام نزع ملكية العقارات للمنفعة العامة ووضع اليد المؤقت على العقار المشار إليه ولائحته التنفيذية، كما أن اللجنة اتبعت في تقديراتها طريقة (...........) وفقاً للمعايير والضوابط التي تتبعها الهيئة السعودية للمقيمين المعتمدين وفقاً للتالي:

            </div>
        </div>
        <br>

        <b-row>
                    <b-col>
                        <b-table-simple
                                bordered
                        > 
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
                                    <b-th class="content-item">{{ toLocalDatetime(submissionData.contract_date)}}</b-th>
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
        <br><br>
        
        <br><br>
        <b-row>
            <b-col>
                <h3 style="color:  rgb(11, 55, 2); text-align: right;">  ثانياً: التقديرات </h3>
                
                <b-table-simple bordered>
                    <b-tbody>
                        <b-tr>
                            <b-th class="green-header" >الوصف</b-th>
                            <b-th class="green-header" >الوحدة</b-th>
                            <b-th class="green-header" >الكمية</b-th>
                            <b-th class="green-header" >سعر الوحدة</b-th>
                            <b-th class="green-header" >القيمة</b-th>
                            <b-th class="green-header" >الملاحظات</b-th>
                        </b-tr>
                        <b-tr  v-for="(item,index) in submissionData.includes_data" :key="index">
                            <b-th class="content-item"> {{ item.content }} </b-th>
                            <b-th class="content-item">{{ item.unit }}</b-th>
                            <b-th class="content-item">{{ item.qty }}</b-th>
                            <b-th class="content-item">{{ item.price }}</b-th>
                            <b-th class="content-item">{{ item.qty * item.price }}</b-th>
                            <b-th class="content-item">{{ item.notes }}</b-th>
                        </b-tr>
                        
                        
                    </b-tbody>
                </b-table-simple>
                <div style="padding-top: 8px;">
                    <span style="padding:10px; padding-left: 147px; color: #ffffff; background-color: #05481e; "> إجمالي التعويض </span>
                    <span style="padding:10px; padding-left: 137px; ">{{ totalComp() }}</span>
                    <span style="padding:10px; padding-left: 95px; "> كتابة</span>
                </div>
                <div style="padding-top: 8px;">
                    <span style="padding:10px; padding-left: 95px; color: #ffffff;  background-color: #05481e; "> إجمالي التعويض بدون ارض</span>
                    <span style="padding:10px; padding-left: 137px; "></span>
                    <span style="padding:10px; padding-left: 95px; "> كتابة</span>
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
        getLast5( subNum ){
            return  subNum.slice(-5);
        },
        printInvoice() {
            window.print()
        },
        totalComp(){
                let data = this.submissionData.includes_data;
                let total = 0 ;
                data.forEach(element => {
                    total = total + (element.qty * element.price);
                });
                return total;
            }
    }
}
</script>

<style lang="scss" scoped>
@import "~@core/scss/base/pages/app-invoice.scss";
</style>

<style lang="scss" scoped >

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
    }@media print {
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

