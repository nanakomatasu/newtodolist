<template>
    <!-- 头部部分 -->
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="请输入任务名称" autofocus @keyup.enter="ABC" v-model="title"/>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'SrcTodosMyHeader',

  data () {
    return {
      title: ''
    };
  },

  mounted () {

  },

  methods: {
    ...mapActions('addlist'),
    ABC () {
      this.$store.dispatch('addlist', {
        name: this.title,
        done: false
      })
      this.title = ''
    }

  },
};
</script>
