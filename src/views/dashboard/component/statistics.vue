<template>

    <div style="zoom: 90%" dir="rtl">
        <b-row>
            <b-col cols="12">
                <Statistics v-if="counts" :items="counts" :only="[ 'total', 'in_review','feedback','approved' ]"
                            icon="TrendingUpIcon"></Statistics>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="12" class="justify-content-start d-flex">
                <b-button  variant="primary" @click="editDashMap()" v-if="hasPermission('add_dashMap')"
                            class="mb-2">
                    تحديث الخريطة   
                </b-button>
                <!-- {{ dashboardMap.img }} -->
                <div>
                    <b-modal hide-header-close v-model="modal_map"
                                hide-footer title="أضفة خريطة" id="img">
                        <div class="demo-vertical-spacing">

                            <b-form-group class="text-left">
                                <input type="hidden" v-model="dash_map" >
                                <validation-provider
                                        #default="{ errors }"
                                        name="خريطة "
                                        rules="required">
                                    <input type="file" name="image"
                                            @change="changeDashMap"
                                            ref="dashMap"
                                            accept="image/apng, image/jpeg, image/png, image/webp"
                                    />
                                    <small class="text-danger"
                                            v-if="errors[0]">هذا الحقل
                                        مطلوب</small>
                                </validation-provider>
                            </b-form-group>
                        </div>
                        <div class="mt-2">
                            <b-col cols="12">
                                <div class="d-flex justify-content-end">
                                    <b-button @click="submitDashMap()"
                                                variant="primary"
                                                style="margin-right: 10px;">
                                        تأكيد
                                    </b-button>
                                    <b-button @click="modal_map = false"
                                                variant="outline-primary">
                                        الغاء
                                    </b-button>
                                </div>
                            </b-col>
                        </div>
                    </b-modal>
                </div>
            </b-col>
            <b-col md="12">
                <b-card class="text-center" v-if="dashboardMap.img">
                    <img  style="width: 100%; height: 500px;"
                            :src="dashboardMap.img" alt="map">
                </b-card>
            </b-col>
        </b-row>
        
        <b-row>

            <!-- <b-col cols="6">
                <b-card>
                    <div class="d-flex">
                        <feather-icon size="21" class="mr-2" icon="UsersIcon"/>
                        <h4>عدد مساحين لكل منطقة</h4>
                    </div>
                    <pie-chart-category :label="['منطقة 1','منطقة 2','منطقة 3','منطقة 4','منطقة 5','منطقة 6','منطقة 7']"
                                        height="400"
                                        :data="[23,34,45,56,12,3,45]"/>
                </b-card>
            </b-col> -->


            <b-col cols="6">
                <b-card>
                    <div class="d-flex">
                        <feather-icon size="21" class="mr-2" icon="TrendingUpIcon"/>
                        <h4>عدد العقارات لكل منطقة</h4>
                    </div>
                    <chartjs-component-bar-chart :options="options" :height="400" :data="programs" v-if="programs"/>
                </b-card>
            </b-col>
            <b-col cols="6">
                <b-card>
                    <div class="d-flex">
                        <feather-icon size="21" class="mr-2" icon="TrendingUpIcon"/>
                        <h4>عدد العقارات لكل لوحة</h4>
                    </div>
                    <chartjs-component-bar-chart :options="options" :height="400" :data="programs_blade" v-if="programs_blade"/>
                </b-card>
            </b-col>


            <b-col cols="6">
                <b-card>
                    <div class="d-flex">
                        <feather-icon size="21" class="mr-2" icon="CommandIcon"/>
                        <h4>نسبة الانجاز لكل منطقة</h4>
                    </div>
                    <chartjs-component-bar-chart :options="options" :height="400" :data="courses" v-if="courses"/>
                </b-card>
            </b-col>

            <b-col cols="6">
                <b-card>
                    <div class="d-flex">
                        <feather-icon size="21" class="mr-2" icon="UsersIcon"/>
                        <h4>عدد مساحين لكل مشروع</h4>
                    </div>
                    <pie-chart-category :label="['مشروع 1','مشروع 2','مشروع 3','مشروع 4','مشروع 5','مشروع 6','مشروع 7']"
                                        height="400"
                                        :data="[23,34,45,56,12,3,45]"/>
                </b-card>
            </b-col>

        </b-row>
        <!-- <b-row>
            <b-col cols>
                <div > 
                    <button> تحديث الخريطة </button>
                </div>
                <div ></div>
            </b-col>
        </b-row> -->
        <b-row>
            <b-col cols="12">
                <b-card>
                    <div class="d-flex">
                        <feather-icon size="21" class="mr-2" icon="CommandIcon"/>
                        <!--            <feather-icon size="21"  icon="DollarSignIcon"/>-->
                        <h4>نسب الانجاز التراكمية خلال الشهور </h4>
                    </div>
                    <chartjs-component-bar-chart :options="options" :height="400" :data="mixedChart"/>
                </b-card>
            </b-col>
            <!--            <b-col cols="12">-->
            <!--                <b-card>-->
            <!--                    <div class="d-flex">-->
            <!--                        &lt;!&ndash;            <feather-icon size="21"  icon="TrendingUpIcon"/>&ndash;&gt;-->
            <!--                        <h4>Users Activities</h4>-->
            <!--                    </div>-->
            <!--                    <chartjs-component-line-chart :options="options" :height="310" :data="ActivitiesData"-->
            <!--                                                  v-if="activities"/>-->
            <!--                </b-card>-->
            <!--            </b-col>-->
        </b-row>
    </div>
</template>

<script>
    import {
        BCard,
        BCardHeader,
        BCardTitle,
        BCardText,
        BCardBody,
        BCol,
        BRow,
        BImg,
        BButton,
        BMedia,
        BMediaAside,
        BAvatar,
        BMediaBody,
        BFormGroup,
    } from 'bootstrap-vue';
    import {ValidationProvider, ValidationObserver} from 'vee-validate';
    import pieChartCategory from '@/views/dashboard/component/pieChart.vue';
    import ChartjsComponentBarChart from '@/views/components/charts-components/ChartjsComponentBarChart.vue';
    import ChartjsComponentLineChart from '@/views/components/charts-components/ChartjsComponentLineChart.vue';
    import Statistics from '@/views/components/info/statistics';


    import {$themeColors} from '@themeConfig';
    // colors
    const chartColors = {
        mainColor: '#054978',
        primaryColorShade: '#836AF9',
        yellowColor: '#ffe800',
        successColorShade: '#28dac6',
        warningColorShade: '#ffe802',
        warningLightColor: '#FDAC34',
        infoColorShade: '#299AFF',
        greyColor: '#4F5D70',
        blueColor: '#2c9aff',
        blueLightColor: '#84D0FF',
        greyLightColor: '#EDF1F4',
        tooltipShadow: 'rgba(0, 0, 0, 0.25)',
        lineChartPrimary: '#666ee8',
        lineChartDanger: '#ff4961',
        labelColor: '#746D69',
        grid_line_color: 'rgba(200, 200, 200, 0.2)',
        second_color: '#f57f21',
    };

    export default {
        components: {
            ValidationProvider,
            ValidationObserver,
            BFormGroup,
            BCard,
            BCol,
            BImg,
            BRow,
            BCardHeader,
            BCardTitle,
            BCardText,
            BCardBody,
            BButton,
            BMedia,
            BMediaAside,
            BAvatar,
            BMediaBody,
            Statistics,
            ChartjsComponentBarChart,
            pieChartCategory,
            ChartjsComponentLineChart,
        },
        data() {
            return {
                dash_map:null,
                modal_map:false,
                data: null,
                options: {
                    elements: {
                        rectangle: {
                            borderWidth: 2,
                            borderSkipped: 'bottom',
                        },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    responsiveAnimationDuration: 500,
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        // Updated default tooltip UI
                        shadowOffsetX: 1,
                        shadowOffsetY: 1,
                        shadowBlur: 8,
                        shadowColor: chartColors.tooltipShadow,
                        backgroundColor: $themeColors.light,
                        titleFontColor: $themeColors.dark,
                        bodyFontColor: $themeColors.dark,
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                gridLines: {
                                    display: true,
                                    color: chartColors.grid_line_color,
                                    zeroLineColor: chartColors.grid_line_color,
                                },
                                scaleLabel: {
                                    display: false,
                                },
                                ticks: {
                                    fontColor: chartColors.labelColor,
                                },
                            },
                        ],
                        yAxes: [
                            {
                                display: true,
                                gridLines: {
                                    color: chartColors.grid_line_color,
                                    zeroLineColor: chartColors.grid_line_color,
                                },
                                ticks: {
                                    stepSize: 1,

                                    fontColor: chartColors.labelColor,
                                },
                            },
                        ],
                    },
                },
            };
        },
        computed: {
            counts() {

                let counts = {
                    total: 0,
                    in_review: 0,
                    feedback: 0,
                    approved: 0,
                }

                let statistics = this.$store.getters['pgc_forms/dashboard'];
                
                if (statistics) {

                    statistics.statistics.forEach(el => {
                        if (el.status == 0) {
                            counts.in_review = el.count;
                        }
                        if (el.status == 1) {
                            counts.feedback = el.count;
                        }
                        if (el.status == 2) {
                            counts.approved = el.count;
                        }
                        if (el.status == 3) {
                            counts.final_approved = el.count;
                        }

                        counts.total += el.count;

                    })
                }

                return counts;
            },
            dashboardMap(){
                return  this.$store.getters['pgc_forms/dashboard'];
                
            },
            mixedChart() {
                return {
                    labels: ["يناير", "فبراير", " سبتمبر", " اكتوبر", " نوفمبر", " ديسمبر"],
                    datasets: [
                        {
                            type: "line",
                            label: "الفعلى التراكمى ",
                            data: [10, 12, 20, 30, 45, 50],
                            fill: false,
                            borderColor: "pink",
                        },
                        {
                            type: "line",
                            label: "المخطط التراكمى ",
                            data: [20, 23, 30, 40, 60, 80],
                            fill: false,
                            borderColor: "#836AF9",
                        },
                        {
                            type: "bar",
                            label: "الفعلى ",
                            data: [40, 50, 60, 70, 80, 90],
                            backgroundColor: chartColors.second_color,
                        },
                        {
                            type: "bar",
                            label: "المخطط ",
                            data: [50, 55, 60, 75, 85, 98],
                            backgroundColor: "#054978",
                        },
                    ],
                };
                //  }
            },
            programs() {
                let dataLabels= ['01','02','03'];
                let all_submissions = this.$store.getters['pgc_forms/dashboard'].submissions;
                // console.log('all_submissions');
                // console.log(all_submissions);
                const dataValues = [];
                dataLabels.forEach(area_element => {
                    let x = all_submissions.filter((el)=>el.zone == area_element )
                    dataValues.push(x.length);
                });
                console.log(dataValues)
                return {
                    labels:dataLabels,
                    datasets: [
                        {
                            data:dataValues,
                            backgroundColor: chartColors.second_color,
                            borderColor: 'transparent',
                        },
                    ],
                };
            },
            programs_blade() {
                let dataLabels= ['01','02','03','04','05','06','07','08'];
                let all_submissions = this.$store.getters['pgc_forms/dashboard'].submissions;
                const dataValues = [];
                dataLabels.forEach(area_element => {
                    let x = all_submissions.filter((el)=>el.plad_num == area_element )
                    dataValues.push(x.length);
                });
                console.log(dataValues)
                return {
                    labels:dataLabels,
                    datasets: [
                        {
                            data:dataValues,
                            backgroundColor: chartColors.second_color,
                            borderColor: 'transparent',
                        },
                    ],
                };
            },
            courses() {
                return {
                    labels: [' sub zone 1 ', 'sub zone 2  ', 'sub zone 3 ', 'sub zone 4 ', 'sub zone 5 '
                                , 'sub zone 6 ', 'sub zone 7 ', 'sub zone 8 '
                            ],
                    datasets: [
                        {
                            label: "فعلى",
                            data: [40, 59, 30, 20, 34,24,78,69],
                            backgroundColor: chartColors.second_color,
                            borderColor: "transparent",
                        },
                        {
                            label: "مخطط ",
                            data: [80, 70, 30, 14, 78,24,78,69],
                            backgroundColor: "#eee",
                            borderColor: "transparent",
                        },
                    ],
                };
            },

        },
        methods: {
            changeDashMap(){
                this.dash_map = this.$refs.dashMap.files[0];
                console.log(this.dash_map);
            },
            editDashMap(){
                this.modal_map = true;
            },
            submitDashMap() {
                const Map = new FormData()
                Map.append('dash_map', this.dash_map)
                this.$store
                    .dispatch('pgc_forms/updateDashMap', {
                        query: Map,
                    }).then((response) => {
                    this.modal_map = false;
                    this.$store.dispatch('pgc_forms/dashboard');
                });
            }
        },
        mounted() {
            this.$store.dispatch('pgc_forms/dashboard');
        },
    };
</script>
