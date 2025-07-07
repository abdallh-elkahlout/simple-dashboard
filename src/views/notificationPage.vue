<template>
  <v-main>
    <v-container fluid class="px-10">
      <v-row class="mt-16">
        <v-col cols="12" lg="6">
          <v-card class="pa-3">
            <v-card-title
              style="font-size: 23px; font-weight: 400; margin-bottom: 40px"
              >Notification Style</v-card-title
            >
            <v-card-text>
              <div class="title px-4 mb-8">
                <v-card-title
                  class="px-5 py-6"
                  style="
                    background-color: #00cae3;
                    color: white;
                    border-radius: 4px;
                    font-size: 18px;
                    font-weight: 300;
                  "
                  >This is a plain notification.</v-card-title
                >
              </div>
              <v-list>
                <v-list-item
                  v-for="(list, i) in lists"
                  :key="i"
                  style="position: relative"
                >
                  <v-list-item-title
                    class="px-5 py-7 mb-7"
                    style="
                      background-color: #00cae3;
                      color: white;
                      border-radius: 4px;
                      font-size: 18px;
                      font-weight: 300;
                      white-space: pre-line;
                    "
                    >{{ list }}</v-list-item-title
                  >
                  <v-btn
                    icon
                    elevation="0"
                    size="small"
                    style="
                      background-color: transparent;
                      position: absolute;
                      top: 8px;
                      right: 12px;
                      z-index: 2;
                    "
                    @click="lists.splice(i, 1)"
                  >
                    <v-icon color="white">mdi-close</v-icon>
                  </v-btn>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6">
          <v-card class="pa-3">
            <v-card-title
              style="font-size: 23px; font-weight: 400; margin-bottom: 40px"
              >Notification Status</v-card-title
            >
            <v-card-text>
              <v-list>
                <v-list-item
                  v-for="(list2, i) in lists2"
                  :key="i"
                  style="position: relative"
                >
                  <v-list-item-title
                    class="px-5 py-7 mb-7"
                    style="
                      background-color: #00cae3;
                      color: white;
                      border-radius: 4px;
                      font-size: 18px;
                      font-weight: 300;
                      white-space: pre-line;
                    "
                    >{{ list2 }}</v-list-item-title
                  >
                  <v-btn
                    icon
                    elevation="0"
                    size="small"
                    style="
                      background-color: transparent;
                      position: absolute;
                      top: 8px;
                      right: 12px;
                      z-index: 2;
                    "
                    @click="lists2.splice(i, 1)"
                  >
                    <v-icon color="white">mdi-close</v-icon>
                  </v-btn>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script setup>
import { ref } from "vue";
const lists = ref([
  "This is a notification with close button.",
  "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",
  "You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",
]);
const lists2 = ref([
  "This is a notification with close button.",
  "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",
  "You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",
]);
</script>
