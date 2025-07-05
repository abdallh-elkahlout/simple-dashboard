<template>
  <v-row class="mt-16">
    <v-col cols="6">
      <v-card class="px-5 pb-4" style="border-radius: 7px; overflow: visible">
        <v-card-text>
          <div
            class="chart"
            style="
              background-color: #fb8c00;
              padding: 30px;
              border-radius: 4px;
              margin-top: -40px;
              box-shadow: 0 3px 7px #3c4855;
              position: relative;
              z-index: 2;
            "
          >
            <v-card-title
              style="font-weight: 400; color: white; font-size: 20px"
            >
              Employees Stats
            </v-card-title>
            <v-card-text style="font-weight: 300; color: #fffc; font-size: 17px"
              >New employees on 15th September, 2016
            </v-card-text>
          </div>
        </v-card-text>
        <v-table class="mt-7 px-6" style="color: #0009; font-weight: 400">
          <thead style="font-size: 20px">
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Name</th>
              <th class="text-left">Salary</th>
              <th class="text-left">Country</th>
              <th class="text-left">City</th>
            </tr>
          </thead>
          <tbody style="font-size: 18px">
            <tr v-for="item in employees" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.salary }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="px-5 pb-4" style="border-radius: 7px; overflow: visible">
        <v-card-text>
          <div
            style="
              background-color: #4caf50;
              padding: 30px;
              border-radius: 4px;
              margin-top: -40px;
              box-shadow: 0 3px 7px #3c4855;
              position: relative;
              z-index: 2;
              padding: 50px 0px 50px 30px;
              color: white;
            "
          >
            <div class="content d-flex">
              <v-card-title>Tasks: </v-card-title>
              <v-tabs
                v-model="tab"
                background-color="#4caf50"
                color="white"
                slider-color="white"
                show-arrows
                style="color: #fff9"
              >
                <v-tab
                  v-for="(item, i) in tabs"
                  :key="i"
                  style="font-size: 18px"
                >
                  <v-icon left class="mr-2">{{ item.icon }}</v-icon>
                  {{ item.label }}
                </v-tab>
              </v-tabs>
            </div>
          </div>
        </v-card-text>
        <v-card-text>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item
              v-for="(item, i) in tabs"
              :key="i"
              :value="item"
            >
              <div v-if="item.label === 'BUGS'">
                <v-list>
                  <v-list-item
                    v-for="(bug, idx) in bugs"
                    :key="idx"
                    style="min-width: 0; padding: 8px 16px; font-size: 18px"
                  >
                    <div
                      style="
                        display: flex;
                        align-items: center;
                        width: 100%;
                        gap: 16px;
                      "
                    >
                      <v-checkbox
                        v-model="bug.done"
                        color="deep-purple accent-4"
                        hide-details
                        class="ma-0 pa-0"
                        style="flex: 0 0 auto"
                      ></v-checkbox>
                      <div
                        style="
                          flex: 1;
                          min-width: 0;
                          display: flex;
                          justify-content: start;
                          align-items: center;
                        "
                      >
                        <v-list-item-title
                          class="task-text"
                          :style="{
                            color: bug.done ? '#9e9e9e' : '#3c4858',
                            whiteSpace: 'normal',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            fontSize: '20px',
                          }"
                        >
                          {{ bug.text }}
                        </v-list-item-title>
                      </div>
                      <div
                        class="icons"
                        style="display: flex; align-items: end; gap: 8px"
                      >
                        <v-icon small color="grey">mdi-pencil</v-icon>
                        <v-icon small color="red">mdi-close</v-icon>
                      </div>
                    </div>
                  </v-list-item>
                </v-list>
              </div>
              <div v-if="item.label == 'WEBSITE'">
                <v-list>
                  <v-list-item
                    v-for="(web, idx) in website"
                    :key="idx"
                    style="min-width: 0; padding: 8px 16px; font-size: 18px"
                  >
                    <div
                      style="
                        display: flex;
                        align-items: center;
                        width: 100%;
                        gap: 16px;
                      "
                    >
                      <v-checkbox
                        v-model="web.done"
                        color="deep-purple accent-4"
                        hide-details
                        class="ma-0 pa-0"
                        style="flex: 0 0 auto"
                      ></v-checkbox>
                      <div
                        style="
                          flex: 1;
                          min-width: 0;
                          display: flex;
                          justify-content: start;
                          align-items: center;
                        "
                      >
                        <v-list-item-title
                          class="task-text"
                          :style="{
                            color: web.done ? '#9e9e9e' : '#3c4858',
                            whiteSpace: 'normal',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            fontSize: '20px',
                          }"
                        >
                          {{ web.text }}
                        </v-list-item-title>
                      </div>
                      <div
                        class="icons"
                        style="display: flex; align-items: end; gap: 8px"
                      >
                        <v-icon small color="grey">mdi-pencil</v-icon>
                        <v-icon small color="red">mdi-close</v-icon>
                      </div>
                    </div>
                  </v-list-item>
                </v-list>
              </div>
              <div v-if="item.label == 'SERVER'">
                <v-list>
                  <v-list-item
                    v-for="(serv, idx) in server"
                    :key="idx"
                    style="min-width: 0; padding: 8px 16px; font-size: 18px"
                  >
                    <div
                      style="
                        display: flex;
                        align-items: center;
                        width: 100%;
                        gap: 16px;
                      "
                    >
                      <v-checkbox
                        v-model="serv.done"
                        color="deep-purple accent-4"
                        hide-details
                        class="ma-0 pa-0"
                        style="flex: 0 0 auto"
                      ></v-checkbox>
                      <div
                        style="
                          flex: 1;
                          min-width: 0;
                          display: flex;
                          justify-content: start;
                          align-items: center;
                        "
                      >
                        <v-list-item-title
                          class="task-text"
                          :style="{
                            color: serv.done ? '#9e9e9e' : '#3c4858',
                            whiteSpace: 'normal',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            fontSize: '20px',
                          }"
                        >
                          {{ serv.text }}
                        </v-list-item-title>
                      </div>
                      <div
                        class="icons"
                        style="display: flex; align-items: end; gap: 8px"
                      >
                        <v-icon small color="grey">mdi-pencil</v-icon>
                        <v-icon small color="red">mdi-close</v-icon>
                      </div>
                    </div>
                  </v-list-item>
                </v-list>
              </div>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { ref } from "vue";
const employees = ref([
  {
    id: 1,
    name: "Dakota Rice",
    calories: 159,
    salary: "$36,738",
    country: "Niger",
    city: "Oud-Turnhout",
  },
  {
    id: 2,
    name: "Minerva Hooper",
    calories: 237,
    salary: "$23,789",
    country: "Curaçao",
    city: "Sinaai-Waas",
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    calories: 262,
    salary: "$56,142",
    country: "Netherlands",
    city: "Baileux",
  },
  {
    id: 4,
    name: "Philip Chanley",
    calories: 305,
    salary: "$38,735",
    country: "Netherlands",
    city: "Baileux",
  },
  {
    id: 5,
    name: "Doris Greene",
    calories: 356,
    salary: "$63,542",
    country: "Netherlands",
    city: "Baileux",
  },
]);
const tab = ref(0);
const tabs = [
  { label: "BUGS", icon: "mdi-bug" },
  { label: "WEBSITE", icon: "mdi-web" },
  { label: "SERVER", icon: "mdi-cloud" },
];

const bugs = ref([
  {
    text: 'Sign contract for "What are conference organizers afraid of?"',
    done: true,
  },
  {
    text: "Lines From Great Russian Literature? Or E-mails From My Boss?",
    done: false,
  },
  {
    text: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
    done: false,
  },
  {
    text: "Create 4 Invisible User Experiences you Never Knew About",
    done: true,
  },
]);
const website = ref([
  {
    text: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
    done: true,
  },
  {
    text: "Sign contract for What are conference organizers afraid of?",
    done: false,
  },
]);
const server = ref([
  {
    text: "Lines From Great Russian Literature? Or E-mails From My Boss?",
    done: false,
  },
  {
    text: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
    done: true,
  },
  {
    text: "Sign contract for What are conference organizers afraid of?",
    done: true,
  },
]);
</script>
