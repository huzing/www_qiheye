<template>
  <div class="d-flex flex-column">
    <span class="mr-2 text--disabled"> &copy; 杭州七禾页 </span>
    <a
      class="text--disabled mr-2 mb-2"
      href="https://beian.miit.gov.cn"
      is-external
      target="_blank"
    >
      浙ICP备2023016186号-1
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
