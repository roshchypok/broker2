<script>
export default {
  name: 'AbstractForm',
  props: {
    f: {
      required: true,
      type: Object,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    const form = this.$refs.form;
    if (form) {
      if (this.readonly) {
        Array.from(form.elements).forEach((e) => e.setAttribute('disabled', 'disabled'));
      } else {
        Array.from(form.elements).forEach((e) => {
          e.addEventListener('input', () => {
            if (this.f.liveValidator) this.f.validate();
          });
        });
      }
    } else {
      console.log('Require Form Ref. Live Validation Or Live Disable is not activate.');
    }
  }
};
</script>
