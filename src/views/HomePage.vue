<template>
  <v-main>
    <v-container fluid class="pt-16 px-10">
      <chartsComp />
      <titlesComp />
      <tableAndTasks />
    </v-container>
  </v-main>
</template>

<script setup>
import chartsComp from "@/components/chartsComp.vue";
import titlesComp from "@/components/titleComp.vue";
import tableAndTasks from "@/components/TableAndTasks.vue";
</script>
<style>
table tbody tr:hover {
  background-color: #d4d2d2;
}
</style>
