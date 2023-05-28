<template>
    <b-card>
        <p>ddddddddddddddddd</p>
    </b-card>
</template>

<script>
    import {ValidationProvider, ValidationObserver} from 'vee-validate'
    import {required, min_value} from '@validations'
    import vSelect from 'vue-select'
    import {
        // BOverlay,
        // https://ecb.dev.vero-cloud.com/api/
        BFormCheckbox,
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
    
export default ({
    name:'createTask',
    
    components: {
            BFormCheckbox,
            ValidationProvider,
            ValidationObserver,
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
            BTabs,
            BOverlay,
            BTable,
            BButton,
            BFormTag,
            BFormTags,
            BFormDatepicker,
            vSelect,
            BFormFile,
        },
})
</script>
