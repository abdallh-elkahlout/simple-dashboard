<template>
  <v-main>
    <v-container
      fluid
      style="margin-top: 130px; padding-right: 30px; padding-left: 30px"
    >
      <v-row>
        <v-col cols="8">
          <v-card class="px-1" style="border-radius: 7px; overflow: visible">
            <v-card-text>
              <div
                class="chart"
                style="
                  background-color: #4caf50;
                  padding: 30px;
                  border-radius: 4px;
                  margin-top: -40px;
                  box-shadow: 0 3px 7px #3c4855;
                  position: relative;
                  z-index: 2;
                "
              >
                <v-card-title
                  style="font-size: 25px; font-weight: 400; color: white"
                >
                  Edit Profile
                </v-card-title>
                <v-card-text
                  style="font-size: 18px; color: #fffc; margin-top: 0px"
                >
                  Complete your profile
                </v-card-text>
              </div>
            </v-card-text>
            <v-card-text>
              <v-responsive class="mx-auto">
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      hide-details="auto"
                      label="Company (disabled)"
                      variant="underlined"
                      flat
                      disabled
                      class="transparent-input"
                      style="border-bottom: #919fb3 dashed 1px"
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      hide-details="auto"
                      label="User Name"
                      variant="underlined"
                      flat
                      class="transparent-input"
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      hide-details="auto"
                      label="Email Adderss"
                      variant="underlined"
                      flat
                      class="transparent-input"
                    />
                  </v-col>
                </v-row>
                <v-row class="mt-15">
                  <v-col cols="6">
                    <v-text-field
                      hide-details="auto"
                      label="First Name"
                      variant="underlined"
                      flat
                      class="transparent-input"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      hide-details="auto"
                      label="Last Name"
                      variant="underlined"
                      flat
                      class="transparent-input"
                    />
                  </v-col>
                </v-row>
                <v-row class="mt-15">
                  <v-col cols="12">
                    <v-text-field
                      hide-details="auto"
                      label="Address"
                      variant="underlined"
                      flat
                      class="transparent-input"
                    />
                  </v-col>
                </v-row>
                <v-row class="mt-15">
                  <v-col cols="4">
                    <v-text-field
                      hide-details="auto"
                      label="City"
                      variant="underlined"
                      flat
                      class="transparent-input"
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      hide-details="auto"
                      label="Country"
                      variant="underlined"
                      flat
                      class="transparent-input"
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      hide-details="auto"
                      label="Postal Code"
                      variant="underlined"
                      flat
                      class="transparent-input"
                      type="number"
                    />
                  </v-col>
                </v-row>
                <v-row class="mt-15">
                  <v-col cols="12">
                    <v-textarea
                      v-model="textAreaContent"
                      label="About Me"
                      class="transparent-input"
                      variant="underlined"
                      flat
                      hide-details="auto"
                    />
                  </v-col>
                </v-row>
              </v-responsive>
              <v-card-actions
                class="pt-14"
                style="display: flex; align-items: end; justify-content: end"
              >
                <v-btn
                  style="
                    background-color: #4caf50;
                    color: white;
                    height: 55px;
                    width: 190px;
                    font-size: 16px;
                  "
                  >Update Profile</v-btn
                >
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="px-1" style="border-radius: 7px; overflow: visible">
            <div class="d-flex justify-center align-center mb-8">
              <img
                src="../assets/img2.png"
                alt=""
                style="
                  border-radius: 50%;
                  margin-top: -20%;
                  box-shadow: 0 3px 7px #3c4855;
                  position: relative;
                  z-index: 2;
                  width: 200px;
                "
              />
            </div>
            <div
              class="content d-flex align-center"
              style="flex-direction: column"
            >
              <v-card-text style="color: #9e9e9e; font-size: 20px">{{
                user.position
              }}</v-card-text>
              <v-card-title
                style="font-weight: 400; color: black; font-size: 27px"
              >
                {{ user.name }}
              </v-card-title>
              <v-card-text
                class="text-center"
                style="font-weight: 300; color: #9e9e9e; font-size: 17px"
                >{{ user.about }}</v-card-text
              >
              <v-card-actions
                style="
                  display: flex;
                  align-items: end;
                  justify-content: end;
                  margin-bottom: 15px;
                "
              >
                <v-btn
                  style="
                    background-color: #4caf50;
                    color: white;
                    height: 50px;
                    width: 140px;
                    border-radius: 35px;
                    font-size: 16px;
                  "
                  >Follow</v-btn
                >
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script setup>
import { ref } from "vue";

const textAreaContent = ref(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);

const user = ref({
  name: "Alec Thompson",
  position: "CEO / CO-FOUNDER",
  about:
    "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
});
</script>

<style>
.transparent-input .v-field__input {
  font-size: 20px !important; /* حجم النص داخل الخانة */
}

.transparent-input textarea {
  font-size: 20px !important; /* حجم النص في textarea */
}
</style>
