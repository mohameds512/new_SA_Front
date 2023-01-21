<template>
    <div dir="rtl" class="invoice-preview-wrapper ">
        <b-button
                variant="secondary"
                class="mb-75 invoice-actions"
                block
                @click="printInvoice"
        >
            Print
        </b-button>

        <b-row    class="invoice-preview">
            <b-col md="4">
                <h4 class="text-left text-bold text-dark">قرار مساحى</h4>
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
                        dir="rtl"
                ></b-table>
            </b-col>
        </b-row>
        <br/>
        <b-row>
            <b-col>
                <b-table-simple
                        bordered
                >
                    <b-thead head-variant="light">
                        <b-tr>
                            <b-th colspan="8" class="text-center text-dark text-bold">
                                أولاً: بيانات العقار
                            </b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr>
                            <b-th variant="secondary">اسم المالك</b-th>
                            <b-th colspan="3">56</b-th>
                            <b-th variant="secondary">رقم الهوية</b-th>
                            <b-th colspan="3">56</b-th>

                        </b-tr>
                        <b-tr>
                            <b-th variant="secondary">رقم القطعة</b-th>
                            <b-th>56</b-th>
                            <b-th variant="secondary">رقم المخطط</b-th>
                            <b-th>56</b-th>
                            <b-th variant="secondary">الموقع</b-th>
                            <b-th colspan="3">56</b-th>

                        </b-tr>
                        <b-tr>
                            <b-th variant="secondary">رقم الصك</b-th>
                            <b-th>56</b-th>
                            <b-th variant="secondary">تاريخه</b-th>
                            <b-th>56</b-th>
                            <b-th variant="secondary">مصدره </b-th>
                            <b-th colspan="3">56</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th variant="secondary">نوع العقار</b-th>
                            <b-th>56</b-th>
                            <b-th variant="secondary">المساحة حسب الصك م2</b-th>
                            <b-th>56</b-th>
                            <b-th variant="secondary">الاستخدام </b-th>
                            <b-th colspan="3">56</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th variant="secondary">نوع الملكية</b-th>
                            <b-td>56</b-td>
                            <b-th variant="secondary">وصف العقار</b-th>
                            <b-th colspan="5">56</b-th>

                        </b-tr>

                        <b-tr>
                            <b-th colspan="4" class="justify-content-center">
                                <img src="/test2.jpg" height="220px" width="80%">
                            </b-th>
                            <b-th colspan="4">
                                <img src="/test.jpg" height="220px" width="80%">
                            </b-th>
                        </b-tr>
                    </b-tbody>
                    <b-thead head-variant="light">
                        <b-tr>
                            <b-th colspan="5" class="text-center text-dark text-bold">

                            </b-th>
                            <b-th colspan="3" class="text-center text-dark text-bold">
                                الاحداثيات
                            </b-th>
                        </b-tr>
                        <b-tr>
                            <b-th class="text-center text-dark text-bold bg-gray">
                                الاتجاه
                            </b-th>
                            <b-th class="text-center text-dark text-bold">
                                حدود العقار بالكامل
                            </b-th>
                            <b-th class="text-center text-dark text-bold">
                                الطول (م)
                            </b-th>
                            <b-th class="text-center text-dark text-bold">
                                حدود الجزء المنزوع من العقار
                            </b-th>
                            <b-th class="text-center text-dark text-bold">
                                الطول (م)
                            </b-th>
                            <b-th class="text-center text-dark text-bold">
                                م
                            </b-th>
                            <b-th class="text-center text-dark text-bold">
                                الشرق
                            </b-th>
                            <b-th class="text-center text-dark text-bold">
                                الشمال
                            </b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr>
                            <b-th variant="secondary" class="text-center text-dark text-bold">
                                الشمال
                            </b-th>
                            <b-td class="text-center text-dark text-bold">
                               40
                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">
                            </b-td>
                            <b-th  variant="secondary" class="text-center text-dark text-bold">
                                م
                            </b-th>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th variant="secondary" class="text-center text-dark text-bold">
                                الجنوب
                            </b-th>
                            <b-td class="text-center text-dark text-bold">
                                40
                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">
                            </b-td>
                            <b-th  variant="secondary" class="text-center text-dark text-bold">
                                م
                            </b-th>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th variant="secondary" class="text-center text-dark text-bold">
                                الشرق
                            </b-th>
                            <b-td class="text-center text-dark text-bold">
                                40
                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">
                            </b-td>
                            <b-th  variant="secondary" class="text-center text-dark text-bold">
                                م
                            </b-th>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th variant="secondary" class="text-center text-dark text-bold">
                                الغرب
                            </b-th>
                            <b-td class="text-center text-dark text-bold">
                                40
                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">
                            </b-td>
                            <b-th  variant="secondary" class="text-center text-dark text-bold">
                                م
                            </b-th>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th  class="text-center text-dark text-bold">
                                المساحة (م2)
                            </b-th>
                            <b-td colspan="2" class="text-center text-dark text-bold">
                                40
                            </b-td>

                            <b-td colspan="2" class="text-center text-dark text-bold">

                            </b-td>

                            <b-th  variant="secondary" class="text-center text-dark text-bold">
                                م
                            </b-th>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                    </b-tbody>
                    <b-thead head-variant="light">
                        <b-tr>
                            <b-th colspan="4" class="text-center text-dark text-bold bg-gray">
                                مساحة كامل العقار ( م2 )
                            </b-th>
                            <b-th colspan="4" class="text-center text-dark text-bold">
                                مساحة الجزء المنزوع من العقار  ( م2)
                            </b-th>
                        </b-tr>
                        <b-tr>
                            <b-th colspan="2" class="text-center text-dark text-bold bg-gray">
                                مساحة الارض ( م2 )
                            </b-th>
                            <b-th colspan="2" class="text-center text-dark text-bold">
                                مساحة المباني ( م2 )
                            </b-th>
                            <b-th colspan="2" class="text-center text-dark text-bold">
                                مساحة الارض ( م2 )
                            </b-th>
                            <b-th colspan="2" class="text-center text-dark text-bold">
                                مساحة المباني ( م2 )
                            </b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr>
                            <b-th rowspan="2" variant="secondary" class="text-center text-dark text-bold">
                                مبنى
                            </b-th>
                            <b-td rowspan="2" class="text-center text-dark text-bold">
                                40
                            </b-td>
                            <b-td class="text-center text-dark text-bold">
                                أرضي
                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-th rowspan="2" variant="secondary" class="text-center text-dark text-bold">
                                مبنى
                            </b-th>
                            <b-td rowspan="2" class="text-center text-dark text-bold">
                                40
                            </b-td>
                            <b-td class="text-center text-dark text-bold">
                                أرضي
                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-td class="text-center text-dark text-bold">
                                اول
                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">
                                اول
                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th rowspan="2" variant="secondary" class="text-center text-dark text-bold">
                                 غير مبنى
                            </b-th>
                            <b-td rowspan="2" class="text-center text-dark text-bold">
                                40
                            </b-td>
                            <b-td class="text-center text-dark text-bold">
                                أرضي
                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-th rowspan="2" variant="secondary" class="text-center text-dark text-bold">
                                غير مبنى
                            </b-th>
                            <b-td rowspan="2" class="text-center text-dark text-bold">
                                40
                            </b-td>
                            <b-td class="text-center text-dark text-bold">
                                أرضي
                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-td class="text-center text-dark text-bold">
                                اول
                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                            <b-td class="text-center text-dark text-bold">
                                اول
                            </b-td>
                            <b-td class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th variant="secondary"  class="text-center text-dark text-bold bg-gray">
                                المجموع
                            </b-th>
                            <b-td  class="text-center text-dark text-bold">

                            </b-td>
                            <b-td colspan="2" class="text-center text-dark text-bold">

                            </b-td>
                            <b-th variant="secondary"  class="text-center text-dark text-bold bg-gray">
                                المجموع
                            </b-th>
                            <b-td  class="text-center text-dark text-bold">

                            </b-td>
                            <b-td colspan="2" class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th variant="secondary"  class="text-center text-dark text-bold bg-gray">
                                الملاحظات
                            </b-th>
                            <b-td colspan="7" class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                    </b-tbody>
                    <b-thead head-variant="light">
                        <b-tr>
                            <b-th colspan="4" class="text-center text-dark text-bold bg-gray">
                                مندوب شركة القطر للمساحة الارضية
                            </b-th>
                            <b-th colspan="4" class="text-center text-dark text-bold">
                                يعتمد من صاحب الصلاحية
                            </b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr>
                            <b-th variant="secondary"  class="text-center text-dark text-bold">
                                الاسم
                            </b-th>
                            <b-td colspan="3" class="text-center text-dark text-bold">

                            </b-td>
                            <b-th variant="secondary"  class="text-center text-dark text-bold">
                                الاسم
                            </b-th>
                            <b-td colspan="3" class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th variant="secondary"  class="text-center text-dark text-bold">
                                التاريخ
                            </b-th>
                            <b-td colspan="3" class="text-center text-dark text-bold">

                            </b-td>
                            <b-th variant="secondary"  class="text-center text-dark text-bold">
                                التاريخ
                            </b-th>
                            <b-td colspan="3" class="text-center text-dark text-bold">

                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th variant="secondary"  class="text-center text-dark text-bold">
                                التوقيع
                            </b-th>
                            <b-td colspan="3" class="text-center text-dark text-bold">

                            </b-td>
                            <b-th variant="secondary"  class="text-center text-dark text-bold">
                                التوقيع
                            </b-th>
                            <b-td colspan="3" class="text-center text-dark text-bold">

                            </b-td>
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

    export default {
        name: "report",
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
        methods: {
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
