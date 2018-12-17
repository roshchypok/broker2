<template>
  <modal-dialog
    title="Нова послуга"
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
  name: 'ServiceNew',
  components: {ServiceForm},
  data () {
    return {
      service: null,
      validator: null,
      buttons: [
        {
          title: 'Створити',
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
    const {data} = await this.$store.dispatch('services/new');
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
      this.$store.dispatch('services/create', this.service.params);
    }
  }
};
</script>
