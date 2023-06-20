<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          width="30"
          alt="杭州七禾页"
          :src="require(`@/assets/logo.svg`)"
        ></v-img>
        <div class="flex-grow-1 text-center ml-4">chatGPTProMaxSuperUltra</div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
