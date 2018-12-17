<template>
  <div class="container">
    <div class="row">
      <h2>Послуги</h2>
    </div>
    <div class="row">
      <router-link
        tag="button"
        to="/services/new"
        class="tertiary"
      >Створити нову послугу</router-link>
    </div>
    <div class="row">
      <table
        class="hoverable"
        style="max-height: none;"
      >
        <thead>
          <th>Назва</th>
          <th>Вартість</th>
          <th>Опис</th>
          <th>Активна</th>
          <th>На формі</th>
          <th>&nbsp;</th>
        </thead>
        <tbody>
          <tr
            v-for="srv in services"
            :key="srv.id"
            >
            <td>{{ srv.title }}</td>
            <td>{{ srv.price }}</td>
            <td>{{ srv.description }}</td>
            <td>{{ srv.active ? 'Так' : 'Ні' }}</td>
            <td>{{ srv.inForm ? 'Так' : 'Ні' }}</td>
            <td>
              <router-link
                :to="`/services/${srv.id}/edit`"
                class="small"
                tag="button"
              ><edit-3-icon class="icon" /> Змінити</router-link>
              <router-link
                :to="`/services/${srv.id}/destroy`"
                class="small"
                tag="button"
              ><delete-icon class="icon"/> Видалити</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <router-view name="dialog" />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import { Edit3Icon, DeleteIcon } from 'vue-feather-icons';

export default {
  name: 'Services',
  components: {Edit3Icon, DeleteIcon},
  data () {
    return {
      sorting: {
        field: null,
        direction: 0
      }
    };
  },
  computed: {
    ...mapState('services', {list: state => state.list}),
    services: {
      get () {
        return this.list;
      }
    }
  },
  mounted () {
    this.$store.dispatch('services/load');
  }
};
</script>
