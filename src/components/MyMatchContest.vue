<script lang="ts" setup>

import {useRoute} from "vue-router";


const route = useRoute();
console.log(route.params.contestCode)

</script>

<template>
  <div>my match contest: {{ route.params.contestCode }}</div>
</template>


<style scoped>

</style>