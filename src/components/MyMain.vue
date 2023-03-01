<template>
    <!-- 主体部分 -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- 当任务已完成，可以给 li 加上 completed 类，会让元素加上删除线 -->
        <li :class="item.done ? 'completed':''" v-for="(item,index) in $store.state.list" :key="index">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.done" />
            <label>{{ item.name }}</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
export default {
  name: 'SrcTodosMyMain',
  data () {
    return {

    };
  },

  created () {
    this.$store.dispatch('getlist')
  },

  methods: {
  },
};
</script>
