<template>
  <v-main>
    <v-container fluid style="padding-top: 70px" class="px-10">
      <v-row class="mt-16">
        <v-col cols="12">
          <v-card
            class="px-5 pb-4"
            style="border-radius: 7px; overflow: visible"
          >
            <div class="top" style="display: flex; align-items: center">
              <div
                class="icon"
                style="
                  color: white;
                  font-size: 40px;
                  background-color: #4caf50;
                  padding: 30px;
                  border-radius: 4px;
                  margin-top: -40px;
                  box-shadow: 0 3px 7px #3c4855;
                  position: relative;
                  z-index: 2;
                  width: 130px;
                  height: 130px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <v-icon>mdi-clipboard-text</v-icon>
              </div>
              <v-card-title
                style="margin-left: 24px; font-size: 25px; font-weight: 400"
              >
                Simple Table
              </v-card-title>
            </div>
            <v-table class="mt-7 px-6" style="color: #0009; font-weight: 400">
              <thead style="font-size: 22px; color: #4caf50">
                <tr>
                  <th class="text-left">ID</th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Salary</th>
                  <th class="text-left">Country</th>
                  <th class="text-left">City</th>
                </tr>
              </thead>
              <tbody style="font-size: 20px">
                <tr v-for="item in employees" :key="item.id">
                  <td class="py-4">{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.salary }}</td>
                  <td>{{ item.country }}</td>
                  <td>{{ item.city }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
        <v-col cols="12" class="mt-12">
          <v-card
            class="px-5 pb-4"
            style="
              border-radius: 7px;
              overflow: visible;
              background-color: #1e1e1e;
              color: white;
            "
          >
            <div class="top" style="display: flex; align-items: center">
              <div
                class="icon"
                style="
                  color: white;
                  font-size: 40px;
                  background-color: #4caf50;
                  padding: 30px;
                  border-radius: 4px;
                  margin-top: -40px;
                  box-shadow: 0 3px 7px #3c4855;
                  position: relative;
                  z-index: 2;
                  width: 130px;
                  height: 130px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <v-icon>mdi-clipboard-text</v-icon>
              </div>
              <v-card-title
                style="margin-left: 24px; font-size: 25px; font-weight: 400"
              >
                Simple Table
              </v-card-title>
            </div>
            <v-table
              class="mt-7 px-6"
              style="
                color: #0009;
                font-weight: 400;
                background-color: #1e1e1e;
                color: white;
              "
            >
              <thead style="font-size: 22px; color: #4caf50">
                <tr>
                  <th
                    class="text-left"
                    style="border-bottom: 1px solid #ffffffb3"
                  >
                    ID
                  </th>
                  <th
                    class="text-left"
                    style="border-bottom: 1px solid #ffffffb3"
                  >
                    Name
                  </th>
                  <th
                    class="text-left"
                    style="border-bottom: 1px solid #ffffffb3"
                  >
                    Salary
                  </th>
                  <th
                    class="text-left"
                    style="border-bottom: 1px solid #ffffffb3"
                  >
                    Country
                  </th>
                  <th
                    class="text-left"
                    style="border-bottom: 1px solid #ffffffb3"
                  >
                    City
                  </th>
                </tr>
              </thead>
              <tbody style="font-size: 20px">
                <tr v-for="item in employees" :key="item.id">
                  <td class="py-4" style="border-bottom: 1px solid #ffffffb3">
                    {{ item.id }}
                  </td>
                  <td style="border-bottom: 1px solid #ffffffb3">
                    {{ item.name }}
                  </td>
                  <td style="border-bottom: 1px solid #ffffffb3">
                    {{ item.salary }}
                  </td>
                  <td style="border-bottom: 1px solid #ffffffb3">
                    {{ item.country }}
                  </td>
                  <td style="border-bottom: 1px solid #ffffffb3">
                    {{ item.city }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
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
</script>
