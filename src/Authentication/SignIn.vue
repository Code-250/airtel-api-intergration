<template>
  <div class="signup-container">
    <div>
      <img src="../assets/payment.png" alt="signup png" />
    </div>
    <div class="signin-form-container">
      <div class="form-title-container">
        <div class="form-section">
          <p class="account">NEED AN ACCOUNT?</p>
          <router-link to="/signup" class="form-link">SIGNUP</router-link>
        </div>
        <p class="form-title">Enter your credentials to access</p>
      </div>
      <form>
        <v-text-field
          v-model="phone"
          :error-messages="phoneErrors"
          label="Phone Number"
          :counter="10"
          type="number"
          required
          @input="$v.phone.$touch()"
          @blur="$v.phone.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="pin"
          :error-messages="pinErrors"
          label="Password"
          type="password"
          required
          @input="$v.pin.$touch()"
          @blur="$v.pin.$touch()"
        ></v-text-field>
        <v-btn
          class="mr-4"
          dark
          @click="submit"
          color="red darken-1"
          :elevation="0"
        >
          SignIn
        </v-btn>
      </form>
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
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.maxLength &&
        errors.push("Phone Number must be 10 characters long");
      !this.$v.phone.required && errors.push("phone Number field is required.");
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

.signin-form-container {
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
  font-weight: 500;
}
.form-section {
  padding: 20px 0px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  width: 40%;
}
.form-link {
  color: red;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
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
