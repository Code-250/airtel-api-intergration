<template>
  <v-row justify="start">
    <v-dialog v-model="dialog" content-class="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red" dark v-bind="attrs" v-on="on" :elevation="0">
          start Paying
        </v-btn>
      </template>
      <v-card>
        <v-card-title color="red darken-1" text>Payment Modal</v-card-title>
        <template>
          <form class="form-container">
            <v-text-field
              v-model="phone"
              type="number"
              :error-messages="phoneErrors"
              :counter="10"
              label="PhoneNumber"
              required
              @input="$v.phone.$touch()"
              @blur="$v.phone.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="amount"
              :error-messages="amountErrors"
              label="Amount"
              type="number"
              required
              @input="$v.amount.$touch()"
              @blur="$v.amount.$touch()"
            ></v-text-field>
            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="Do you agree?"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
            <v-btn
              class="mr-4"
              dark
              @click="submit"
              color="red darken-1"
              :elevation="0"
            >
              pay
            </v-btn>
            <v-btn
              @click="clearAndClose"
              :elevation="0"
              color="red darken-1 !important"
              text
              :border="1"
            >
              clear
            </v-btn>
          </form>
        </template>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog1" pesistent content-class="dialog">
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn color="red" dark v-bind="attrs" v-on="on" :elevation="0">
          start Paying
        </v-btn>
      </template> -->
      <v-card>
        <v-card-title color="red darken-1" text>Confirm Payment</v-card-title>
        <template>
          <form class="form-container">
            <v-text-field
              v-model="pin"
              :error-messages="pinErrors"
              label="Pin"
              type="password"
              required
              @input="$v.pin.$touch()"
              @blur="$v.pin.$touch()"
            ></v-text-field>
            <v-btn
              class="mr-4"
              @click="authenticate"
              color="red darken-1"
              :elevation="0"
            >
              confirm
            </v-btn>
            <v-btn
              @click="clearAndClose"
              :elevation="0"
              color="red darken-1 !important"
              text
              :border="1"
            >
              cancel
            </v-btn>
          </form>
        </template>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    phone: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },
    amount: { required },
    pin: { required, minLength: minLength(4) },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
  data: () => ({
    phone: "",
    amount: "",
    pin: "",
    checkbox: false,
    dialog: false,
    dialog1: false,
  }),
  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.maxLength &&
        errors.push("Phone Number must be 10 characters long");
      !this.$v.phone.required && errors.push("phone Number field is required.");
      return errors;
    },
    amountErrors() {
      const errors = [];
      if (!this.$v.amount.$dirty) return errors;
      !this.$v.amount.required && errors.push("Amount field is required");
      return errors;
    },
    pinErrors() {
      const errors = [];
      if (!this.$v.pin.$dirty) return errors;
      !this.$v.pin.required && errors.push("Pin field is required");
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      const formData = {
        phoneNumber: this.phone,
        Amount: this.amount,
        Pin: this.pin,
      };
      if (
        !this.$v.phone.$error &&
        !this.$v.amount.$error &&
        this.$v.checkbox.checked
      )
        this.dialog1 = !this.dialog1;
      console.log(formData);
    },
    authenticate() {
      this.$v.$touch();
      if (!this.$v.pin.$error) this.dialog1 = !this.dialog1;
    },
    clearAndClose() {
      this.$v.$reset();
      this.phone = "";
      this.amount = "";
      this.pin = "";
      this.checkbox = false;
      this.dialog1 = false;
      this.dialog = false;
    },
  },
};
</script>

<style>
.v-application .primary--text {
  color: red !important;
  caret-color: red !important;
}
.form-container {
  padding: 20px 50px;
}
.v-card__title {
  color: red;
}
.row {
  padding-left: 20px;
  margin-top: 10px;
}
.mr-4 {
  color: white !important;
}
.dialog {
  max-width: 35%;
}
@media (max-width: 900px) {
  .dialog {
    max-width: 60%;
  }
}
@media (max-width: 600px) {
  .dialog {
    max-width: 80%;
  }
}
</style>