<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import {ref} from "vue";

const msg = ref<string>('Vite + Vue');

</script>

<template>
  <!--  <div>-->
  <!--    <a href="https://vitejs.dev" target="_blank">-->
  <!--      <img alt="Vite logo" class="logo" src="/vite.svg" />-->
  <!--    </a>-->
  <!--    <a href="https://vuejs.org/" target="_blank">-->
  <!--      <img alt="Vue logo" class="logo vue" src="./assets/vue.svg" />-->
  <!--    </a>-->
  <!--  </div>-->
  <router-view :msg="msg"></router-view>
</template>

<style scoped>
/*.logo {*/
/*  height: 6em;*/
/*  padding: 1.5em;*/
/*  will-change: filter;*/
/*}*/

/*.logo:hover {*/
/*  filter: drop-shadow(0 0 2em #646cffaa);*/
/*}*/

/*.logo.vue:hover {*/
/*  filter: drop-shadow(0 0 2em #42b883aa);*/
/*}*/
</style>
