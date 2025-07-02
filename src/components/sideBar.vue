<template>
  <v-navigation-drawer v-model="drawer" app width="320" class="bg-black">
    <v-container>
      <div class="pt-3 pl-3 d-flex flex-row align-center">
        <img
          src="../assets/img2.png"
          alt=""
          style="width: 60px; border-radius: 30px"
        />
        <h3 class="ml-4" style="font-weight: 400">USER NAME</h3>
      </div>
      <v-divider class="mt-5" style="color: white"></v-divider>
      <v-divider class="" style="color: white"></v-divider>
      <v-list class="mt-5">
        <v-list-item
          v-for="(item, index) in tools"
          :key="index"
          :to="item.link"
          :class="[
            'mb-3 py-5 mt-1 text-grey-lighten-2 hover-only rounded',
            { isActive: activeIndex === index },
          ]"
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 18px;
          "
          @click="setActive(index)"
        >
          <v-icon class="me-5">
            {{ item.icon }}
          </v-icon>
          <span>{{ item.text }}</span>
        </v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "sideBar",
  inject: ["Emitter"],
  data() {
    return {
      drawer: false,
      activeIndex: 0,
      tools: [
        { text: "Dashboard", icon: "mdi-view-dashboard", link: "/" },
        { text: "Profile", icon: "mdi-account", link: "/profile" },
        { text: "Regular Tables", icon: "mdi-table", link: "/tables" },
        {
          text: "Google Maps",
          icon: "mdi-map-marker-multiple-outline",
          link: "/maps",
        },
        { text: "Notifications", icon: "mdi-bell", link: "/notifications" },
      ],
    };
  },
  mounted() {
    this.Emitter.on("toggleDrawer", () => {
      this.drawer = !this.drawer;
    });
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped>
.hover-only {
  background-color: transparent !important;
  transition: background-color 0.2s ease;
}

.hover-only:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
  cursor: pointer;
}

.isActive {
  background-color: #4caf50 !important;
  color: white !important;
}
.isActive:hover {
  background-color: #3eb842 !important;
  color: white !important;
}
</style>
