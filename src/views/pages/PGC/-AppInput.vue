<template>
  <div class="form-group">
    <!-- <label class="control-label" v-if="isLabel">{{ label }}</label>
    <textarea
      v-if="isTextarea"
      class="form-input"
      rows="5"
      :placeholder="placeholder"
      v-model="model"
    ></textarea>
    <input
      v-else
      :type="type"
      class="form-input"
      :placeholder="placeholder"
      v-model="model"
      :disabled="disabled"
    />
    <span @click="showPassword" v-if="isPassword" class="show_icon">
      <svg class="icon">
        <use xlink:href="~/static/svg/sprite.svg#eye"></use>
      </svg>
    </span> -->
    <validation-provider #default="{ errors }" rules="required">
      <b-form-group class="text-right" :label="label">
        <b-form-input
          v-model="model"
          :type="type"
          :placeholder="placeholder"
          :state="errors.length > 0 ? false : null"
        />
      </b-form-group>
      <small class="text-danger" v-if="errors[0]">هذا الحقل مطلوب</small>
    </validation-provider>
  </div>
</template>

<script>
import { BFormInput, BFormGroup } from "bootstrap-vue";
import { ValidationProvider } from "vee-validate";
export default {
  name: "AppInput",
  props: {
    label: {
      type: String,
    },
    isLabel: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    inputvalue: {
      type: [String, Number],
      default: "",
    },
    isTextarea: {
      type: Boolean,
      default: false,
    },
    isPassword: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      model: this.inputvalue,
    };
  },
  watch: {
    model(currentValue) {
      this.$emit("input", currentValue);
    },
  },
  methods: {
    showPassword() {
      this.$emit("show-password");
    },
  },
  components: {
    BFormInput,
    ValidationProvider,
    BFormGroup,
  },
};
</script>

<style lang="scss" scoped>
// .form-group {
//   position: relative;
//   // border: 1px solid;
//   border-radius: 20px;
//   .control-label {
//     color: $text-color;
//     font-size: 14px;
//     font-weight: 500;
//     text-transform: capitalize;
//   }
//   .form-input {
//     font-size: 15px;
//     height: 50px;
//     border-radius: 10px;
//     border: 1px solid transparent;
//     border: none;
//     outline: none;
//     width: 100%;
//     border-radius: 25px;
//     padding: 0 1rem;
//     box-shadow: $shadow;
//     color: $text-color;
//     &::placeholder {
//       font-size: 14px;
//       color: $text-color;
//     }
//     &:focus {
//       // border-color: #f6b027;
//     }
//     &:disabled {
//       opacity: 0.75;
//     }
//   }
//   input[type='number']::-webkit-outer-spin-button,
//   input[type='number']::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//   input[type='number'] {
//     -moz-appearance: textfield;
//   }
//   textarea.form-input {
//     height: auto;
//     resize: none;
//     padding: 1rem;
//   }
//   .show_icon {
//     position: absolute;
//     z-index: 10;
//     top: 50%;
//     transform: translateY(-50%);
//     right: 15px;
//     cursor: pointer;
//     .icon {
//       width: 20px;
//       height: 20px;
//       fill: #8f8f8f;
//     }
//   }
// }
// .w_50 {
//   width: calc(50% - 10px);
// }
</style>