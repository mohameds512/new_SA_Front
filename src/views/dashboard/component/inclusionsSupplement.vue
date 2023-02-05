<template>
    
    <div  class="invoice-preview-wrapper " style="text-align: right;">
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
                            <!-- <b-table
                                    bordered
                                    hover
                                    :items="[{pro_num:2 , area_num: 2 , num:2 , building_num:2}]"
                                    :fields="[
                                        { key: 'pro_num', label: 'رقم المشروع ' },
                                        { key: 'area_num' , label: ' رقم المنطقة'   },
                                        { key: 'num' , label: '  رقم اللوحة'   },
                                        { key: 'building_num' , label: '  رقم العقار'   },
                                    ]"
                            ></b-table> -->
                            
                            <b-table-simple>
                                <b-thead head-variant="light">
                                    <b-tr>
                                        <b-th class="green-header"> رقم المشروع</b-th>
                                        <b-th class="green-header">رقم المنطقة</b-th>
                                        <b-th class="green-header">رقم اللوحة</b-th>
                                        <b-th class="green-header">رقم العقار</b-th>
                                    </b-tr>
                                    
                                </b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="default_th">{{ submissionData.pro_num }}</b-th>
                                        <b-th >{{submissionData.zone}}</b-th>
                                        <b-th> {{ submissionData.plad_num }}</b-th>
                                        <b-th>{{ getLast5(submissionData.building_number) }}</b-th>

                                    </b-tr>

                                </b-tbody>

                            </b-table-simple>
                            <div style="width: 100%;  padding-right: 10px; ">رقم  العقار (        {{ submissionData.building_number }}                    )</div>
                        </b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <h3 style="color:  rgb(11, 55, 2); margin-right: 20px;">  ملحق حصر المشتملات</h3>
                        
                    </b-row>
                    <br><br>

                    <b-row>
                        <b-col>
                            <div  >
                                <b-row>
                                    <b-col cols="6">
                                        <b-table-simple
                                    bordered
                            > 
                                <b-thead head-variant="light">
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary"> م</b-th>
                                        <b-th class="green-header" variant="secondary"> الوصف</b-th>
                                        <b-th class="green-header" variant="secondary"> العدد/المساحة</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr v-for="(item ,index) in submissionData.includes_data" :key="index" v-if="index%2 == 0" >
                                        <b-td class="content-item" >{{ index+1 }}</b-td>
                                        <b-th class="content-item" >{{ submissionData.includes_data[index].content }}</b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                </b-tbody>

                            </b-table-simple>
                                    </b-col>
                                    <b-col cols="6">
                                        <b-table-simple
                                    bordered
                            > 
                                <b-thead head-variant="light">
                                    <b-tr>
                                        <b-th class="green-header" variant="secondary"> م</b-th>
                                        <b-th class="green-header" variant="secondary"> الوصف</b-th>
                                        <b-th class="green-header" variant="secondary"> العدد/المساحة</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr v-for="(item ,index) in submissionData.includes_data" :key="index" v-if="index%2 != 0" >
                                        <b-td class="content-item" >{{ index+1 }}</b-td>
                                        <b-th class="content-item" >{{ submissionData.includes_data[index].content }}</b-th>
                                        <b-th class="content-item" ></b-th>
                                    </b-tr>
                                </b-tbody>

                            </b-table-simple>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                    </b-row>
                    <br><br>
                    <b-row>
                        <b-col>
                            
                            <b-table-simple bordered>
                                <b-tbody>
                                    <b-tr>
                                        <b-th class="content-item" >التوقيع</b-th>
                                        <b-th class="content-item"><span> <input type="checkbox" :checked="submissionData.contract_type == 'مالك' ? true : false"   > </span> <span>مالك</span>   </b-th>
                                        <b-th class="content-item"> <span> <input type="checkbox"  :checked="submissionData.contract_type == 'وكيل' ? true : false"  > </span> <span>وكيل</span> </b-th>
                                    
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
                                        <b-th class="content-item" > الاسم: {{ ownersData.name }}</b-th>
                                        <b-th class="content-item" >التوقيع:</b-th>
                                        <b-th class="content-item" >رقم الجوال:{{ ownersData.phone }}</b-th>
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
    
    .default_th{
        background-color: #ffffff;  
        color: #1b0404;
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

