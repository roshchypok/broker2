<template>
  <div>
    <header>
      <router-link to="/" class="logo">Broker 2</router-link>
      <router-link to="/services" class="button">Послуги</router-link>
      <button>Download</button>
    </header>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      msg: 'Welcome!',
      api: '',
      error: {}
    };
  },
  methods: {
    helloCall: function () {
      axios.get('/api/call').then((response) => {
        this.api = response.data.message;
      }, (response) => {
        this.error = response.data;
      });
    }
  }
};
</script>
<style
<style lang="scss">
  @import './../node_modules/mini.css/dist/mini-default.min.css';
  @import '~vuejs-noty/dist/vuejs-noty.css';
  .input-group {
    position: relative;

    .help {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 19px;
      max-height: 19px;
    }

    &.error {
      input, textarea {
        border-color: red;
      }
    }
  }

  .to-rigth {
    float: right;
  }

  .icon {
    display: inline-block;
    height: 1em;
    width: 1em;
    vertical-align: -0.125em;
    background-size: contain;
    margin: 0 calc(var(--universal-margin) / 4);
  }
</style>
