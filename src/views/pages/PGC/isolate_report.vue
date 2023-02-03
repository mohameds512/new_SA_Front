<template>
    <div>
        <b-table-simple bordered  class="text-center">
            <b-tbody>
                <tr>
                    <b-th variant="secondary" class="text-center text-dark text-bold">
                        رقم العقار قبل الفرز
                    </b-th>
                    <b-th variant="secondary" class="text-center text-dark text-bold">
                        رقم العقار بعد الفرز
                    </b-th>
                </tr>
            </b-tbody>
            <b-tbody>
                <b-tr v-if="submission.isolate_submissions" v-for="(item , i) in submission.isolate_submissions">

                    <b-td v-if="i == 0" :rowspan="submission.isolate_submissions.length">
                        {{submission.building_number}}
                    </b-td>

                    <b-td>
                        {{item}}
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
        name: "isolate_report",
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
