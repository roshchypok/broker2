<template>
  <form
    style="width: 800px"
    ref="form">
    <fieldset class="double-padded">
      <div class="row responsive-label">
        <div class="col-sm-12 col-md-3">
          <label for="title" class="doc">Назва</label>
        </div>
        <div class="col-sm-12 col-md input-group" :class="{error: f.hasErrorFor('title')}">
          <input
            v-model="f.title"
            type="text"
            id="title"
            class="doc"
            style="width: 85%">
            <mark v-if="f.hasErrorFor('title')" class="help secondary">{{ f.errorMsgFor('title') }}</mark>
        </div>
      </div>

      <div class="row responsive-label">
        <div class="col-sm-12 col-md-3">
          <label for="description" class="doc">Опис</label>
        </div>
        <div class="col-sm-12 col-md">
          <textarea
            v-model="f.description"
            id="description"
            class="doc"
            style="width: 85%"/>
        </div>
      </div>

      <div class="row responsive-label">
        <div class="col-sm-12 col-md-3">
          <label for="price" class="doc">Вартість</label>
        </div>
        <div class="col-sm-12 col-md input-group" :class="{error: f.hasErrorFor('price')}">
          <input
            v-model="f.price"
            type="text"
            id="price"
            class="doc secondary"
            style="width: 85%">
            <mark v-if="f.hasErrorFor('price')" class="help secondary">{{ f.errorMsgFor('price') }}</mark>
        </div>

      </div>

      <div class="row responsive-label">
        <div class="col-sm-12 col-md-3">
          <label for="active" class="doc">Використовується</label>
        </div>
        <div class="col-sm-12 col-md">
          <input
            v-model="f.active"
            type="checkbox"
            id="active"
            class="doc">
        </div>
      </div>

      <div class="row responsive-label">
        <div class="col-sm-12 col-md-3">
          <label for="in-form" class="doc">На формі</label>
        </div>
        <div class="col-sm-12 col-md">
          <input
            v-model="f.inForm"
            type="checkbox"
            id="in-form"
            class="doc">
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
import AbstractForm from './../../mixins/AbstractForm';

export default {
  name: 'ServiceForm',
  mixins: [AbstractForm],
  mounted () {
    console.log(this.$const);
  }
};
</script>
