<template>
  <div class="signup-container">
    <div>
      <img src="../assets/payment.png" alt="signup png" />
    </div>
    <div class="signup-form-container">
      <div class="form-title-container">
        <div class="form-section">
          <p class="account">HAVE AN ACCOUNT?</p>
          <router-link to="/signin" class="form-link">SIGN-IN</router-link>
        </div>
        <p class="form-title">Create a new Payment account</p>
      </div>
      <v-form v-model="valid">
        <v-text-field
          v-model="phone"
          type="text"
          :error-messages="phoneErrors"
          label="first Name"
          required
          @input="$v.phone.$touch()"
          @blur="$v.phone.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="amount"
          :error-messages="amountErrors"
          label="last Name"
          type="text"
          required
          @input="$v.amount.$touch()"
          @blur="$v.amount.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="amount"
          :error-messages="amountErrors"
          label="Phone Number"
          type="number"
          required
          @input="$v.amount.$touch()"
          @blur="$v.amount.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="amount"
          :error-messages="amountErrors"
          label="Password"
          type="password"
          required
          @input="$v.amount.$touch()"
          @blur="$v.amount.$touch()"
        ></v-text-field>
        <v-btn
          class="mr-4"
          dark
          @click="submit"
          color="red darken-1"
          :elevation="0"
        >
          SignUp
        </v-btn>
      </v-form>
    </div>
  </div>
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
.signup-container {
  max-width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(250, 250, 250);
  height: 100vh;
}

.signup-form-container {
  padding: 20px 50px;
  width: 40%;
  background-color: white;
  box-shadow: 6px 4px 6px 4px rgb(228, 228, 228);
  border-radius: 5px;
}
.form-title-container {
  padding: 10px 0px;
}
.account {
  font-weight: 500;
  font-size: 15px;
}
.form-title {
  font-size: 20px;
}
.form-section {
  padding: 20px 0px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  width: 35%;
}
.form-link {
  color: red;
  font-size: 15px;
  text-decoration: none;
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
  background-color: red !important;
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
