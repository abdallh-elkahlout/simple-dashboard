<template>
  <v-app-bar elevation="0" app class="pt-3 pl-3">
    <v-app-bar-nav-icon
      @click="toggleDrawer"
      style="background-color: white; color: gray"
      elevation="2"
    >
      <v-icon>mdi-dots-vertical</v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-title style="font-size: 23px; font-weight: 300"
      >Dashbord</v-app-bar-title
    >
    <v-responsive class="mx-auto mr-3" max-width="150">
      <v-text-field
        hide-details="auto"
        label="Search"
        variant="underlined"
        flat
        class="transparent-input"
      />
    </v-responsive>
    <v-app-bar-nav-icon elevation="4" class="mr-15">
      <v-icon
        style="
          background-color: white;
          color: gray;
          padding: 25px;
          border-radius: 50%;
          cursor: pointer;
        "
        >mdi-magnify</v-icon
      >
    </v-app-bar-nav-icon>
    <v-list
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: transparent;
      "
    >
      <v-list-item
        v-for="(btn, index) in btns"
        :key="index"
        :to="btn.link"
        rounded
        :class="[{ active: activeIndex === index }, 'mr-3 py-3 px-3']"
        @click="setActive(index)"
      >
        <v-icon class="mx-2">{{ btn.icon }}</v-icon>

        <v-badge
          v-if="index === 1"
          color="red"
          content="5"
          top="-10px"
          :offset-x="8"
          :offset-y="-10"
        ></v-badge>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script>
export default {
  name: "headerCom",
  inject: ["Emitter"],
  data() {
    return {
      activeIndex: 0,
      btns: [
        { icon: "mdi-view-dashboard", link: "/" },
        { icon: "mdi-bell", link: "/notifications" },
        { icon: "mdi-account", link: "/account" },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.Emitter.emit("toggleDrawer");
    },
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>
