<template>
  <section class="todoapp">
    <MyHeader />
    <MyMain />
    <MyFooter />
  </section>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyMain from './components/MyMain'
import MyFooter from './components/MyFooter'
export default {
  components: {
    MyHeader,
    MyMain,
    MyFooter
  }
}
</script>

<style></style>
