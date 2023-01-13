<template>
  <b-row>
    <b-col cols="12">
      <b-overlay
        variant="white"
        :show="load"
        spinner-variant="primary"
        blur="0"
        opacity=".75"
        rounded="sm"
      >
        <validation-observer ref="simpleForm">
          <form-wizard
            :title="null"
            :subtitle="null"
            shape="square"
            color="#054978"
            layout="vertical"
            :finish-button-text="$t('Global.submit')"
            stepSize="xs"
            @on-change="changeTab"
            :next-button-text="$t('Global.next')"
            :back-button-text="$t('Global.previous')"
            class="wizard-vertical mb-3"
            @on-complete="save"
          >
            <template #finish>
              <b-button
                variant="primary"
                size="lg"
                tabindex="-1"
                type="button"
                class="font-weight-lighter"
                style="
                  background-color: rgb(115, 103, 240);
                  border-color: rgb(115, 103, 240);
                  color: white;
                "
              >
                {{ $t("Global.save") }}
              </b-button>
            </template>
            <tab-content
              :title="$t('personal_info')"
              icon="feather icon-user"
            >
              <b-row>
                <b-col md="6">
                  <b-form-group
                    :label="$t('Global.arabic_name')"
                    label-for="nameAr-input"
                    invalid-feedback="Name is required"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="name_local"
                      rules="required"
                    >
                      <b-form-input
                        id="nameAr-input"
                        v-model="form.name_local"
                        class="right_left"
                        :state="errors.length > 0 ? false : null"
                      />
                      <ValidationErrors
                        default-message
                        :frontend-errors="errors"
                        :backend-errors="
                          getBackendFieldError(errorsdata, 'name_local')
                        "
                      />
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <b-col md="6">
                  <validation-provider
                    #default="{ errors }"
                    name="gender"
                    rules="required"
                  >
                    <b-form-group
                      :label="$t('Global.gender')"
                      label-for="vi-gender"
                    >
                      <v-select
                        :dir="
                          $store.state.appConfig.layout.isRTL ? 'rtl' : 'ltr'
                        "
                        :options="genders"
                        v-model="form.gender"
                        :reduce="(val) => val.id"
                      >
                        <template v-slot:option="option">
                          {{ option.label }}
                        </template>
                        <template #selected-option="{ label }">
                          <div style="display: flex; align-items: baseline">
                            <strong>{{ label }} </strong>
                          </div>
                        </template>
                        <template #no-options>
                          {{ $t("noMatching") }}
                        </template>
                      </v-select>
                    </b-form-group>
                    <ValidationErrors
                      default-message
                      :frontend-errors="errors"
                      :backend-errors="
                        getBackendFieldError(errorsdata, $t('Global.gender'))
                      "
                    />
                  </validation-provider>
                </b-col>

              </b-row>
            </tab-content>


            <!-- academic -->

            <!-- social link -->
            <tab-content :title="$t('Global.contact')" icon="feather icon-link">
              <b-row>
                <b-col md="6">
                  <b-form-group :label="$t('email')" label-for="vi-email">
                    <validation-provider
                      #default="{ errors }"
                      rules="required|email"
                      name="email"
                    >
                      <b-form-input
                        :state="errors.length > 0 ? false : null"
                        id="vi-email"
                        type="email"
                        v-model="form.email"
                        placeholder="john.doe@email.com"
                      />
                      <ValidationErrors
                        default-message
                        :frontend-errors="errors"
                      />
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    :label="$t('Global.mobile')"
                    label-for="vi-mobile"
                  >
                    <validation-provider
                      #default="{ errors }"
                      rules="required"
                      name="department_id"
                    >
                      <b-form-input
                        :state="errors.length > 0 ? false : null"
                        id="vi-mobile"
                        v-model="form.mobile"
                        :placeholder="$t('Global.mobile')"
                      />
                      <ValidationErrors
                        default-message
                        :frontend-errors="errors"
                      />
                    </validation-provider>
                  </b-form-group>
                </b-col>
              </b-row>
            </tab-content>

          </form-wizard>
        </validation-observer>
      </b-overlay>
      <!--            </b-card>-->
    </b-col>
  </b-row>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import vSelect from "vue-select";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import { required, email, digits, length } from "@validations";
import {
  BRow,
  BCol,
  BOverlay,
  BCard,
  BFormGroup,
  BFormInput,
  BFormDatepicker,
  BFormTextarea,
} from "bootstrap-vue";
import { localize, ValidationObserver, ValidationProvider } from "vee-validate";
import ValidationErrors from "@/views/components/common/ValidationErrors";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    FormWizard,
    BOverlay,
    TabContent,
    BRow,
    BFormDatepicker,
    BCol,
    BFormGroup,
    BCard,
    BFormInput,
    vSelect,
    BFormTextarea,
    ValidationProvider,
    ValidationObserver,
    localize,
    ValidationErrors,
  },
  computed: {
    ...mapGetters({
      lookups: "app/lookups",
      user: "users/item",
      load: "users/load",
    }),
    id() {
      return this.$route.params && this.$route.params.id
        ? this.$route.params.id
        : null;
    },
    types() {
      return [
        { type: 1, label: this.$t("Global.instructor") },
        { type: 2, label: this.$t("Global.employee") },
        { type: 3, label: this.$t("Global.student") },
      ];
    },
    genders() {
      return [
        { id: 1, label: this.$t("Global.male") },
        { id: 2, label: this.$t("Global.female") },
      ];
    },
  },
  props: {
    type: null,
  },
  data() {
    return {
      errors_data: {},
      errorsdata: {},
      academic_info: false,
      address: false,
      contact: false,
      form: {},
      query: {
        ranks: true,
        faculties: true,
        employee_types: true,
        faculty_departments: true,
      },
    };
  },

  mounted() {
    this.init();
  },
  watch: {
    "form.faculty_id"(val) {
      this.query.faculty_id = val;
      this.getLookups(this.query);
    },
    // 'form.phone'(val) {
    //     this.form.phone = val.toString().replace(/[^0-9]/g, '');
    // },
  },
  methods: {
    ...mapActions({
      getLookups: "app/GET_LOOKUPS",
      saveUser: "users/put",
    }),
    changeTab(pre, next) {
      if (next == 1) {
        this.academic_info = true;
      } else {
        this.academic_info = false;
      }
      if ((this.type == 1 && next == 2) || (this.type != 1 && next == 1)) {
        this.address = true;
      } else {
        this.address = false;
      }
      if ((this.type == 1 && next == 3) || (this.type != 1 && next == 2)) {
        this.contact = true;
      } else {
        this.contact = false;
      }
    },

    validateAsync: function (index) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.$refs.simpleForm.validate().then((success) => {
            if (success) {
              resolve(true);
            } else {
              resolve(false);
            }
          });
        }, 1000);
      });
    },

    init() {
      // this.getLookups(this.query).then(_ => {
      this.form = { type: this.type };
      if (this.id) {
        this.$store.dispatch("users/get", this.id).then((_) => {
          if (this.user) {
            if (this.user.instructor_data) {
              this.form = { ...this.user, ...this.user.instructor_data };
            } else if (this.user.employee_data) {
              this.form = { ...this.user, ...this.user.employee_data };
            } else {
              this.form = this.user;
            }
            // this.form.name_local = this.user.name_local;
            // this.form.name = this.user.name;
            this.form.type = this.type;
          }
        });
      }
      // });
    },

    save() {
      // delete this.form.states;
      // delete this.form.status_type;
      this.$refs.simpleForm.validate().then((success) => {
        if (success) {
          this.$store
            .dispatch("users/put", { id: this.id, query: this.form })
            .then((_) => {
              this.$swal({
                icon: "success",
                title: this.$t("Global.Saved"),
                showConfirmButton: false,
                timer: 1500,
              });
              if (this.$route.params.id) {
                if (this.type == 1) {
                  this.$router.push({
                    name: "staff-show",
                    params: { id: this.$route.params.id },
                  });
                } else if (this.type == 2) {
                  this.$router.push({
                    name: "employee-show",
                    params: { id: this.$route.params.id },
                  });
                } else {
                  this.$router.push({
                    name: "user-show",
                    params: { id: this.$route.params.id },
                  });
                }
              } else {
                if (this.type == 1) {
                  this.$router.push({ name: "staff" });
                } else if (this.type == 2) {
                  this.$router.push({ name: "employees" });
                } else {
                  this.$router.push({ name: "users" });
                }
              }
            })
            .catch((error) => {
              this.errorsdata = this.handleBackendError(
                error.response.data.errors
              );
            });
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-wizard.scss";
@import "@core/scss/vue/libs/vue-select.scss";

.wizard-btn,
.wizard-icon-container {
  background-color: #054978 !important;
  border-color: #054978 !important;
}

.stepTitle.active {
  color: #054978 !important;
}
</style>
