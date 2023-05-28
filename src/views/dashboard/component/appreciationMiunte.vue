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
        <b-row    class="invoice-preview">
                        <b-col md="4">
                            <div >
                                <img style="max-width: 200px; max-height: 150px;" src="@/assets/images/Picture1.png" alt="" />
                            </div>
                        </b-col>
                        <b-col cols="2" ></b-col>
                        <b-col md="6">
                            <b-table-simple small bordered class="text-center">
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
                                        رقم العقار ( {{submissionData.pro_num + submissionData.zone+submissionData.plad_num + getLast5(submissionData.building_number) }}                           )
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
        
        <div>
            <h3 style="color:  rgb(11, 55, 2); margin-right: 20px; "> محضر تقدير </h3>
            <div style="padding-right: 15px;">
                <p style="font-weight: bold;">
                    تاريخ نهاية إجراءات قرار لجنة التقدير     <span class="mr-1"></span>/<span class="mr-1"></span>      /<span class="mr-1"></span>          14هـ
                </p> 
                <p style="font-weight: normal !important; ">
                    بناءً على الأمر الملكي  الكريم رقم (907) الصادر بتاريخ <span style="font-weight: normal;" >06/  </span> <span style="font-weight: normal;"> 01/</span> <span style="font-weight: normal;">1439هــ </span> القاضي بالموافقة على نزع ملكية العقارات الواقعة  بمنطقة شمال الحرم المكي وبناءً على القرار الوزاري رقم ( <span style="font-weight: normal;">1444/</span><span style="font-weight: normal;">305</span> ) الصادر بتاريخ : <span style="font-weight: normal;"> 22/</span> <span style="font-weight: normal;">07/</span> <span style="font-weight: normal;">1444هــ </span> القاضي ببدء إجراءات نزع ملكية العقارات الواقعة شمال الحرم المكي المجاورة  لمشروع رؤى الحرم المكي ، تم شخوص اللجنة المشكلة بموجب المادة السابعة من نظام نزع ملكية العقارات للمنفعة العامة ووضع اليد المؤقت على العقار المصادق عليه بالمرسوم الملكي رقم (م/15) بتاريخ ( <span style="font-weight: normal;"> 11/</span> <span style="font-weight: normal;">03/</span> <span style="font-weight: normal;">1424هـ</span> ) على العقار الموضح بياناته أدناه، واتضح أن المعلومات المبينة صحيحة وأن الأسعار التي حددت أخذت بعين الاعتبار موقع العقار بالنسبة للمنطقة والعقارات المجاورة وكذلك بحسب وصف العقار  في محضر الحصر المعد من قبل لجنة الحصر المشكلة حسب نظام نزع ملكية العقارات للمنفعة العامة ووضع اليد المؤقت على العقار المشار إليه ولائحته التنفيذية، كما أن اللجنة اتبعت في تقديراتها أدناه طريقة (...........) وفقاً للمعايير والضوابط التي تتبعها الهيئة السعودية للمقيمين المعتمدين وفقاً للتالي:
                </p>                


            </div>
        </div>
        

        <b-row>
            
                    <b-col>
                <h3 style="color:  rgb(11, 55, 2); text-align: right;"> أولاً: بيانات ووصف العقار</h3>

                        <b-table-simple small
                                bordered
                        > 
                            <b-tbody>
                                <b-tr>
                                    <b-th class="green-header" variant="secondary">اسم المالك</b-th>
                                    <b-th class="content-item"  colspan="3">
                                        <span v-for=" (name ,index) in get_owners_names()" :key="index" > {{ name }} <span v-if="get_owners_names().length > index+1" >,</span>  </span>
                                    </b-th>
                                    <b-th class="green-header" variant="secondary">رقم الهوية</b-th>
                                    <b-th class="content-item" colspan="3">{{ ownersData[0].national_id }}</b-th>

                                </b-tr>
                                <b-tr>
                                    <b-th class="green-header" variant="secondary">رقم القطعة</b-th>
                                    <b-th class="content-item">{{ submissionData.slice_number }}</b-th>
                                    <b-th class="green-header" variant="secondary">رقم المخطط</b-th>
                                    <b-th class="content-item">{{ submissionData.planned_num}}</b-th>
                                    <b-th class="green-header" variant="secondary">موقع العقار</b-th>
                                    <b-th class="content-item" colspan="3">56</b-th>

                                </b-tr>
                                <b-tr>
                                    <b-th class="green-header" variant="secondary">رقم الصك</b-th>
                                    <b-th class="content-item">{{ submissionData.contract_number}}</b-th>
                                    <b-th class="green-header" variant="secondary">تاريخه</b-th>
                                    <b-th class="content-item">{{ submissionData.contract_date}}</b-th>
                                    <!-- <b-th class="content-item">{{ new Date(submissionData.contract_date).toLocaleString('ar-u-ca-islamic', { year: 'numeric', month: 'long', day: 'numeric'})}}</b-th> -->
                                    <b-th class="green-header" variant="secondary">مصدره </b-th>
                                    <b-th class="content-item" colspan="3">{{submissionData.contract_source}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-th class="green-header" variant="secondary">نوع العقار</b-th>
                                    <b-th class="content-item" > {{submissionData.building_type}}</b-th>
                                    <b-th class="green-header" variant="secondary">استخدام العقار</b-th></b-th>
                                    <b-th class="content-item">{{ submissionData.submission_using }}</b-th>
                                    <b-th class="green-header" variant="secondary">الشوارع </b-th>
                                    <b-th class="content-item" colspan="3">{{submissionData.submission_using}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-th class="green-header" variant="secondary"> حالة البناء</b-th>
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
                <h3 style="color:  rgb(11, 55, 2); text-align: right;">  ثانياً: التقديرات </h3>
                
                <b-table-simple small bordered>
                    <b-tbody>
                        <b-tr>
                            <b-th class="green-header" style="width: 26.5%;" >الوصف</b-th>
                            <b-th class="green-header" style="width: 18.5%;" >الوحدة</b-th>
                            <b-th class="green-header" >الكمية</b-th>
                            <b-th class="green-header" >سعر الوحدة</b-th>
                            <b-th class="green-header" >القيمة</b-th>
                            <b-th class="green-header text-center" >الملاحظات</b-th>
                        </b-tr>
                        <b-tr  v-for="(item,index) in submissionData.includes_data" v-if="index <=12" :key="index">
                            <b-th class="content-item"> {{ item.content }} </b-th>
                            <b-th class="content-item">{{ item.unit }}</b-th>
                            <b-th class="content-item">{{ item.qty }}</b-th>
                            <b-th class="content-item">{{ item.price }}</b-th>
                            <b-th class="content-item">{{ item.qty * item.price }}</b-th>
                            <b-th class="content-item text-center">{{ getValidData(item.notes)  }}</b-th>
                        </b-tr>
                        
                        
                    </b-tbody>
                </b-table-simple>
                
                <b-table-simple small
                                bordered
                        > 
                            <b-tbody v-if="submissionData.includes_data.length <= 13">
                                <b-tr>
                                    <b-th style="width: 26.5%;" class="green-header" > إجمالي التعويض</b-th>
                                    <b-th style="width: 18.5%;"  > {{ totalComp("with") }}</b-th>
                                    <b-th  style=" font-weight: normal;" >كتابة: {{ retrnWrite(totalComp("with")) }} </b-th>
                                    

                                </b-tr>
                                <b-tr>
                                    <b-th class="green-header" > إجمالي التعويض بدون أرض</b-th>
                                    <b-th  > {{ totalComp("withOut")  }}</b-th>
                                    <b-th  style=" font-weight: normal;" >كتابة: {{ retrnWrite(totalComp("withOut")) }} </b-th>
                                    

                                </b-tr>
                            </b-tbody>
                </b-table-simple>
                
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
        <br>
        <h3 style="color: #05481e; " class="text-center" >أعضاء اللجنة </h3>
        
        <b-row>
            <b-col>
                <b-table-simple small bordered>
                    <b-tbody>
                        <b-tr>
                            <b-th class="green_right_item" >  الغرفة التجارية</b-th>
                            <b-th class="green_right_item">  وزارة العدل</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th style="color: aliceblue;" >.</b-th>
                            <b-th style="color: aliceblue;" >.</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th style="color: aliceblue;" >.</b-th>
                            <b-th style="color: aliceblue;" >.</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th class="green_right_item" >  الهيئة العامة لعقارات الدولة</b-th>
                            <b-th class="green_right_item">  وزارة الداخلية</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th style="color: aliceblue;" >.</b-th>
                            <b-th style="color: aliceblue;" >.</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th style="color: aliceblue;" >.</b-th>
                            <b-th style="color: aliceblue;" >.</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th class="green_right_item" >  وزارة الشؤون البلدية والقروية والإسكان</b-th>
                            <b-th class="green_right_item">  الجهة المستفيدة</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th style="color: aliceblue;" >.</b-th>
                            <b-th style="color: aliceblue;" >.</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th style="color: aliceblue;" >.</b-th>
                            <b-th style="color: aliceblue;" >.</b-th>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </b-col>
        </b-row>
        
        <b-row>
                        <b-col cols="4" class="mr-2" style="font-size: 10px;"  >رمز الوثيقة:[TP_OPS_ATM_01]</b-col>
                        <b-col cols="5" ></b-col>
                        <b-col cols="2" style="font-size: 10px;" >الاصدار:01</b-col>
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
        retrnWrite(value){
            var Tafgeet = require('tafgeetjs');
            var stringText = new Tafgeet(value, 'SAR').parse();
            return stringText;
        }, 
        get_owners_names(){
            let Onames = [];
            this.ownersData.forEach(element => {
                Onames.push(element.name);
            });
            return Onames;
        },
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
            var css = '@page { size: portrait; }',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

            style.type = 'text/css';
            style.media = 'print';

            if (style.styleSheet){
            style.styleSheet.cssText = css;
            } else {
            style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);
            window.print()
        },
        totalComp( type ){
                let data = this.submissionData.includes_data;
                let total = 0 ;
                data.forEach((element,index) => {
                    // if(index > 37 && index < 62){
                        total = total + (element.qty * element.price);
                    // }
                    
                });
                if (type == "with") {
                    return Number(total).toLocaleString() ;
                }
                if (type == "withOut") {
                    let area_total = 0;
                    data.forEach((element,index) => {
                    if(element.type_id == 41){
                        area_total = area_total + (element.qty * element.price);
                    }
                    
                    });
                    let diff = total - area_total;
                    return Number(diff).toLocaleString() ;
                }
                

                // return total;
            }
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
@page { size: portrait; }
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

