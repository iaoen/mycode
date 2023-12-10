<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Send from './components/Send.vue'

</script>

<template>
  <a-tabs default-active-key="1" size="large" lazy-load>
    <a-tab-pane key="1" title="账号管理">
      <Home />
    </a-tab-pane>
    <a-tab-pane key="2" title="发微博">
      <Send />
    </a-tab-pane>
    <a-tab-pane key="3">
      <template #title>Tab 3</template>
      Content of Tab Panel 3
    </a-tab-pane>
  </a-tabs>
</template>

<style></style>
