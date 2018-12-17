<template>
  <modal-dialog
    :title="`Змінити послугу`"
    :buttons='buttons'
    :beforeClose.Function="validateForm"
    :onClose.Function="closeForm">
    <service-form v-if="service" :f="service"/>

  </modal-dialog>
</template>

<script>
import ServiceForm from './form';
import Service from './../../form-models/service';

export default {
  name: 'ServiceEdit',
  components: {ServiceForm},
  data () {
    return {
      service: null,
      validator: null,
      buttons: [
        {
          title: 'Зберегти',
          type: 'primary',
          result: this.$const.forms.submit
        },
        {
          title: 'Відмінити',
          result: this.$const.forms.cancel
        }
      ]
    };
  },
  async mounted () {
    const {data} = await this.$store.dispatch('services/edit', this.$route.params.id);
    console.log(data);
    this.service = new Service(data.service);
  },
  methods: {
    validateForm (action) {
      return this.service.isValid;
    },
    closeForm (action) {
      console.log('action= ', action);
      if (action === this.$const.forms.submit) this.create();
    },
    create () {
      this.$store.dispatch('services/update', this.service.params);
    }
  }
};
</script>
