<template>
  <div class="row">
    <input type="checkbox" class="modal" :checked="showing">
    <div role="dialog" aria-labelledby="dialog-title" class="col-md-12">
      <div class="card fluid">
        <label class="modal-close" @click="close($const.forms.cancel)"></label>
        <h3 class="section dark">{{ title }}</h3>
        <div class="section">
          <slot>Тіло модального вікна</slot>
        </div>
        <div class="section">
          <label
            v-for="button in modalButtons"
            :key="button.title"
            class="button"
            :class="[button.type]"
            @click="button.action ? button.action() : clickButton(button.result)"
            >{{ button.title }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: 'Назва модального вікна'
    },
    beforeOpen: {
      type: Function,
      default: null
    },
    onOpen: {
      type: Function,
      default: null
    },
    beforeClose: {
      type: Function,
      default: null
    },
    onClose: {
      type: Function,
      default: null
    },
    returnTo: {
      type: String,
      default: null
    },
    buttons: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      showing: false,
      autoOpen: true,
      modalButtons: [],
      modalResult: null
    };
  },
  mounted () {
    this.initButtons();
    this.showing = this.autoOpen;
  },
  methods: {
    is (testAction) {
      return this.modalResult === testAction;
    },
    not (testAction) {
      return !this.is(testAction);
    },
    open () {
      if (this.beforeOpen) this.beforeOpen();
      this.showing = true;
      if (this.onOpen) this.onOpen();
    },
    close (result) {
      if (result) this.modalResult = result;
      const nextClose = this.beforeClose && this.not(this.$const.forms.cancel) ? this.beforeClose(this.modalResult) : true;
      if (nextClose) {
        this.showing = false;
        if (this.onClose) this.onClose(this.modalResult);
        this.returnTo ? this.$router.replace(this.returnTo) : this.$router.back();
      }
    },
    initButtons () {
      if (this.buttons.length > 0) {
        this.buttons.forEach((b) => {
          this.modalButtons.push({
            title: b.title,
            result: b.result,
            type: b.type,
            action: b.action
          });
        });
      } else {
        this.modalButtons.push({
          title: 'Закрити',
          result: this.$const.forms.cancel
        });
      }
    },
    clickButton (result = this.$const.forms.cancel) {
      this.modalResult = result;
      this.close();
    }
  }
};
</script>
