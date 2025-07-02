<template>
  <v-app id="inspire">
    <sideBar />
    <headerCom app />
    <mainContent />
  </v-app>
</template>

<script>
import headerCom from "@/components/headerCom.vue";
import sideBar from "@/components/sideBar.vue";
import mainContent from "@/components/mainContent.vue";
export default {
  name: "App",
  components: {
    headerCom,
    sideBar,
    mainContent,
  },
};
</script>
