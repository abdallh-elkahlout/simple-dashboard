<template>
  <v-footer
    class="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-2 px-16"
    color="#f5f5f5"
  >
    <v-row>
      <v-col cols="8">
        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
          rounded
        ></v-btn>
      </v-col>
    </v-row>
    <v-col cols="3">
      <div class="flex-1-0-100 text-center mt-2">
        {{ new Date().getFullYear() }} —
        <strong>made with ❤ by Creative Tim for a better web.</strong>
      </div>
    </v-col>
  </v-footer>
</template>
<script setup>
const links = ["Home", "About Us", "Blog", "Licenses"];
</script>
