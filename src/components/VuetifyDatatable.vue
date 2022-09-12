<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="navbar">
          <img
            src="../assets/airtel-payment.png"
            alt="airtel-image"
            class="logo-nav"
          />
          <v-btn
            @click="logout"
            :elevation="0"
            color="red darken-1 !important"
            borderColor="red"
            text
            :border="1"
          >
            logout
          </v-btn>

        </div>
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
              :items="postData"
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
import AuthService from "../services/Auth";
import Vue from "vue";

export default {
  props:['post'],
  components: {
    PaymentDialog,
  },
  data: () => ({
    title:'the prors',
    search: "",
    headers: [
      { text: "Transaction Id", value: "id" },
      { text: "Sender", value: "sender_phone" },
      { text: "Receiver", value: "receiver_phone" },
      { text: "Prooduct", value: "product" },
      { text: "Amount in RWF", value: "amount" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    postData: [],
  }),
  created() {
    if (!this.$cookie.get("token")) {
      this.$router.push("/");
    }
    console.log(this.$store, this.postData);
  },
  methods: {
    async deleteItem(item) {
      const index = this.postData.indexOf((x) => x.id === item.id);
      const getToken = this.$cookie.get("token");
      const data = await AuthService.deleteTransaction(item.id, getToken);
      if (data.status === 204) {
        Vue.notify({
          group: "auth",
          title: "Transactioon remove",
          text: "Transaction have been deleted",
          type: "success",
        });
      }
      this.postData.splice(index, 1);
    },
    async fetchTransactions() {
      const getToken = this.$cookie.get("token");
      return this.postData = await AuthService.transactions(getToken);
    },
    logout() {
      this.$cookie.delete("token");
      this.$router.push("/");
    },
  },
  mounted(){
     this.fetchTransactions();
    this.$root.$on('Table',()=>{
      console.log(this.postData);
      this.fetchTransactions();
    })
  }

};
</script>

<style>
.logo-nav {
  width: 300px;
  height: 100px;
}
.row {
  align-items: center;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.row > .column {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
i.v-icon.v-icon {
  color: red;
}
.v-application .red--text.text--darken-1 {
  border: 1px solid red;
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