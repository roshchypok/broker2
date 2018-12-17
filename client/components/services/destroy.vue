<template>
  <modal-dialog
    title="Видалити послугу"
    :buttons='buttons'
    :onClose.Function="closeForm">
    <service-form v-if="service" :f="service" :readonly="true"/>

  </modal-dialog>
</template>

<script>
import ServiceForm from './form';
import Service from './../../form-models/service';

export default {
  name: 'ServiceDestroy',
  components: {ServiceForm},
  data () {
    return {
      service: null,
      buttons: [
        {
          title: 'Видалити',
          type: 'secondary',
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
    this.service = new Service(data.service);
  },
  methods: {
    closeForm (action) {
      console.log('action= ', action);
      if (action === this.$const.forms.submit) this.destroy();
    },
    destroy () {
      this.$store.dispatch('services/destroy', this.service.params);
    }
  }
};
</script>
