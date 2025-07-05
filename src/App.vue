<template>
  <v-app>
    <sideBar />
    <headerCom />
    <router-view />
    <v-main>
      <footerSection />
    </v-main>
  </v-app>
</template>

<script setup>
import sideBar from "@/components/sideBar.vue";
import headerCom from "@/components/headerCom.vue";
import footerSection from "@/components/footerSection.vue";
</script>

<style>
.body {
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
.v-application,
.v-app-bar {
  background-color: #f0efef !important; /* غيّر اللون حسب رغبتك */
}
</style>
