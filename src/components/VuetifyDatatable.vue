<template>
  <v-app>
    <v-main>
      <v-container>
        <img
          src="../assets/airtel-payment.png"
          alt="airtel-image"
          class="logo"
        />
        <v-row>
          <v-col md="3" class="column">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          <PaymentDialog />
        </v-row>
        <v-row>
          <v-col>
            <v-data-table
              :headers="headers"
              :items="posts"
              :items-per-page="5"
              :search="search"
              class="elevation-1"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PaymentDialog from "./PaymentDialog.vue";

export default {
  props: ["posts"],
  components: {
    PaymentDialog,
  },
  data: () => ({
    search: "",
    headers: [
      { text: "Transaction Id", value: "transactionId" },
      { text: "Sender", value: "sender" },
      { text: "Receiver", value: "receiver" },
      { text: "Message", value: "message" },
      { text: "Amount in RWF", value: "amount" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),
  methods: {
    deleteItem(item) {
      const index = this.posts.indexOf((x) => x.id === item.id);
      this.posts.splice(index, 1);
    },
  },
};
</script>

<style>
.logo {
  width: 300px;
  height: 100px;
}
.row {
  align-items: center;
}
.row > .column {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
i.v-icon.v-icon {
  color: red;
}
.mdi-delete::before {
  color: red;
}
.mdi-chevron-right::before {
  color: red;
}
.mdi-chevron-left::before {
  color: red;
}
.v-data-table-header {
  background-color: red;
}
th > span {
  color: white;
}
</style>