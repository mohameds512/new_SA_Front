<template>
    <div class="container bg-white pt-2 pb-2" dir="rtl">
        <div style="text-align: right;">
<!--            <router-link :to="`/addRealty`"  >-->
                <b-button variant="primary"  @click="openDialog()" > اضافة عقار </b-button>
<!--            </router-link>-->
            <router-link :to="`/addRealty`"  >
                <b-button variant="primary"> اضافة عقار </b-button>
            </router-link>

            <router-link :to="`/building_desc`" style="margin-right: 15px;" >
                <b-button variant="primary"> انواع المشتمالات و الوصف</b-button>
            </router-link>
        </div>
        <br>
        <div>
            <b-row>
                <b-col md="4">
                    <b-form-group class="text-right" label="بحث">
                        <validation-provider #default="{ errors }" name="بحث"
                                             rules="required">
                            <b-form-input v-model="search_Sub"
                                          :state="errors.length > 0 ? false : null"
                                          placeholder="بحث" />
                        </validation-provider>
                    </b-form-group>
                </b-col>
            </b-row>
        </div>
        <!-- {{ $store.getters['dashboard/allSubmission'] }} -->
        <!-- {{  $store.getters['dashboard/getSubs'].submissions  }}   -->
        <b-table
                class="text-center"
                striped
                hover
                :items="$store.getters['dashboard/getSubs'].submissions"
                :fields="[
                            { key: 'building_number', label: 'رقم العقار ' },
                            { key: 'status', label: 'الحالة' },
                            { key: 'zone', label: '  المنطقة ' },
                            { key: 'created_at', label: '  التاريخ ' },
                        ]"

        >
            <template #cell(building_number)="data">
                <router-link :to="`/viewRealty/${data.item.id}`">
                    {{ data.item.building_number }}
                </router-link>
            </template>

            <template #cell(status)="data">
                {{getStatus(data.item.status) }}
            </template>
            <template #cell(created_at)="data">
                {{toLocalDatetime(data.item.created_at) }}
            </template>
        </b-table>

        <b-modal v-model="building_dialog" centered id="modal-prevent-closing" ref="my-modal" title="اضافة عقار" cancel-title="الغاء" ok-title="اضافة" cancel-variant="outline-secondary" @show="resetModal" @hidden="resetModal" @ok="save">
            <validation-observer ref="simpleRules">
                <form  ref="form" @submit.stop.prevent="save">
                    <b-col md="12">
                        <b-form-group label="رقم العقار " label-for="name-input" invalid-feedback="Name is required">
<!--                            <validation-provider #default="{ errors }" name="name" rules="english|required">-->
                                <b-form-input id="name-input" v-model="form.building_number"/>
<!--                                <ValidationErrors :frontend-errors="errors" :backend-errors="getBackendFieldError(errorsdata, 'new_role')" />-->
<!--                            </validation-provider>-->
                        </b-form-group>
                    </b-col>
                </form>
            </validation-observer>
        </b-modal>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import vSelect from 'vue-select'
    import {
        // BOverlay,
        // https://ecb.dev.vero-cloud.com/api/
        BFormInput,
        BFormTag,
        BFormTags,
        BFormGroup,
        BForm,
        BRow,
        BCol,
        BTab,
        BTabs,
        BOverlay,
        BButton,
        BCardText,
        BCard,
        BModal,
        BFormDatepicker,
        BFormFile,
        BTable,
    } from 'bootstrap-vue'
    import DataTable from "@/views/components/table/DataTable";


    export default {
        name: "workProgress",
        components: {
            // BOverlay,
            BCardText,
            BCard,
            BModal,
            BFormInput,
            BFormGroup,
            BForm,
            BRow,
            BCol,
            BTab,
            vSelect,
            BTabs,
            BOverlay,
            BTable,
            DataTable,
            BButton,
            BFormTag,
            BFormTags,
            BFormDatepicker,
            BFormFile,
        },


        data() {
            return {
                realty_list: [],
                realty_list2: [],
                building_dialog:false,
                search_sub: null,
                form:{}
            };
        },
        mounted() {
            // this.includes_type  = $store.getters['dashboard/getLookups'].includes_type
            this.$store.dispatch('dashboard/allSubmission')
                .then((res) => {
                    this.realty_list = res.submissions
                    // this.build_type = res.includes_type;
                    console.log('res')
                    // console.log(this.realty_list)
                })

        },
        methods:{
            searchSub(){

                if (this.search_Sub) {
                    this.realty_list = this.realty_list.filter((el)=> el.building_number == this.search_sub );
                }
            },
            openDialog(){
                this.building_dialog = true;
            },
            resetModal(){
                this.building_dialog = false;
            },
            getStatus(x){
                if (x==0) {
                    return 'تحت المراجعة'
                }
                if (x==1) {
                    return ' يراجع مرة أخري'
                }
                if(x==2){
                    return 'تم اعتماده'
                }
            },
            save($state) {
                this.$store
                    .dispatch('pgc_forms/add_subs', {
                        query: this.form,
                    })
                    .then((response) => {
                        if ($state) {
                            this.building_dialog = false ;
                        }
                        this.$swal({
                            icon: 'success',
                            title: 'تم الحفظ',
                            showConfirmButton: false,
                            timer: 1500,
                        })

                        this.$router.push(`/viewRealty/${response.submission.id}`)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
        }
    }
</script>

<style>
    th {
        background-color: #535ae7 !important;
        color: white;
    }
</style>
