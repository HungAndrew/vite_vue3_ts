<script lang="ts" setup>

import {useRoute} from "vue-router";


const route = useRoute();

</script>

<template>
  <div>my match contest: {{ route.params.contestCode }}</div>
</template>


<style scoped>

</style>