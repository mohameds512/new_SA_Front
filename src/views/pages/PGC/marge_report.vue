<template>
    <div>
        <b-table-simple bordered  class="text-center">
            <b-tbody>
                <tr>
                    <b-th variant="secondary" class="text-center text-dark text-bold">
                        رقم العقار قبل الدمج
                    </b-th>
                    <b-th variant="secondary" class="text-center text-dark text-bold">
                        رقم العقار بعد بعد
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
                    <b-th class="justify-content-center">
                        <img :src="submission.before_image" height="220px" width="80%">
                    </b-th>
                    <b-th >
                        <img :src="submission.after_image" height="220px" width="80%">
                    </b-th>
                </b-tr>
            </b-tbody>
            <!--                <b-tr>-->
            <!--                    <b-th variant="secondary">رقم القطعة</b-th>-->
            <!--                    <b-th>56</b-th>-->
            <!--                    <b-th variant="secondary">رقم المخطط</b-th>-->
            <!--                    <b-th>56</b-th>-->
            <!--                    <b-th variant="secondary">الموقع</b-th>-->
            <!--                    <b-th colspan="3">56</b-th>-->

            <!--                </b-tr>-->
            <!--                <b-tr>-->
            <!--                    <b-th variant="secondary">رقم الصك</b-th>-->
            <!--                    <b-th>56</b-th>-->
            <!--                    <b-th variant="secondary">تاريخه</b-th>-->
            <!--                    <b-th>56</b-th>-->
            <!--                    <b-th variant="secondary">مصدره </b-th>-->
            <!--                    <b-th colspan="3">56</b-th>-->
            <!--                </b-tr>-->
            <!--                <b-tr>-->
            <!--                    <b-th variant="secondary">نوع العقار</b-th>-->
            <!--                    <b-th>56</b-th>-->
            <!--                    <b-th variant="secondary">المساحة حسب الصك م2</b-th>-->
            <!--                    <b-th>56</b-th>-->
            <!--                    <b-th variant="secondary">الاستخدام </b-th>-->
            <!--                    <b-th colspan="3">56</b-th>-->
            <!--                </b-tr>-->
            <!--                <b-tr>-->
            <!--                    <b-th variant="secondary">نوع الملكية</b-th>-->
            <!--                    <b-td>56</b-td>-->
            <!--                    <b-th variant="secondary">وصف العقار</b-th>-->
            <!--                    <b-th colspan="5">56</b-th>-->

            <!--                </b-tr>-->

            <!--            </b-tbody>-->
        </b-table-simple>
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
        }
    }
</script>

<style scoped>

</style>
