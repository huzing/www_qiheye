<template>
  <div class="home">
    <v-container class="container">
      <div ref="content"></div>
      <form action="javascript:">
        <v-text-field
          :dense="isMobile"
          class="rounded-lg mt-3"
          ref="input"
          v-model.trim="inputValue"
          :append-icon="null"
          full-width
          hide-details
          outlined
          label="请输入内容"
          @keydown.enter.prevent="handleEnter"
        >
          <template #append>
            <v-btn
              ref="btn"
              class="primary rounded-lg"
              :height="isMobile ? 28 : 40"
              depressed
              @click.prevent="handleEnter"
            >
              <v-icon color="white" :size="isMobile ? 28 : 40"
                >mdi-chevron-right</v-icon
              >
            </v-btn>
          </template>
        </v-text-field>
      </form>
    </v-container>
    <Icp class="icp" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Icp from '@/components/Icp.vue';

export default Vue.extend({
  name: 'HomeIndex',
  components: {
    Icp,
  },
  data: () => {
    return {
      isMounted: false,
      inputValue: '',
      messageList: [],
    };
  },
  computed: {
    isMobile() {
      return this.isMounted && this.$vuetify.breakpoint.mobile;
    },
  },
  methods: {
    handleEnter() {
      const inputValue = this.inputValue;
      this.inputValue = '';
      this.$refs.content.innerHTML += `<div class="text-right primary" style="color: white">${inputValue}</div>`;
      const source = new EventSource(
        `http://43.134.77.99:9803/chat?content=${inputValue}`
      );
      source.onmessage = (event) => {
        if (event.data === '[DONE]') {
          source.close();
        } else {
          const msg = JSON.parse(event.data).choices[0].delta.content || '';
          this.$refs.content.innerHTML += msg;
        }
      };
    },
  },
  mounted() {
    this.isMounted = true;
  },
});
</script>
<style scoped lang="scss">
.container {
  ::v-deep .v-input__append-inner {
    margin-top: 0 !important;
    padding: 8px 0;
  }
}
.icp {
  position: fixed;
  left: 16px;
  bottom: 16px;
}
</style>
