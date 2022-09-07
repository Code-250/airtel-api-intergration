<template>
  <div class="signup-container">
    <div>
      <img src="../assets/payment.png" alt="signup png" />
    </div>
    <div class="signup-form-container">
      <div class="form-title-container">
        <div class="form-section">
          <p class="account">HAVE AN ACCOUNT?</p>
          <router-link to="/" class="form-link">SIGN-IN</router-link>
        </div>
        <p class="form-title">Create a new Payment account</p>
      </div>
      <template>
        <form>
          <v-text-field
            v-model="firstname"
            :error-messages="firstnameErrors"
            label="first Name"
            required
            @input="$v.firstname.$touch()"
            @blur="$v.firstname.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="lastname"
            :error-messages="lastnameErrors"
            label="last Name"
            required
            @input="$v.lastname.$touch()"
            @blur="$v.lastname.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="phone"
            :error-messages="phoneErrors"
            label="Phone Number"
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

          <v-btn class="mr-4" @click="submit">
            signup
          </v-btn>
        </form>
      </template>
    </div>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    firstname: { required, maxLength: maxLength(10) },
    lastname: { required, maxLength: maxLength(10) },
    phone: { required },
    pin: { required },
  },

  data: () => ({
    firstname: "",
    lastname: "",
    phone: "",
    pin: "",
  }),

  computed: {
    firstnameErrors() {
      const errors = [];
      if (!this.$v.firstname.$dirty) return errors;
      !this.$v.firstname.maxLength &&
        errors.push("first Name must be at most 10 characters long");
      !this.$v.firstname.required && errors.push("first Name is required.");
      return errors;
    },
    lastnameErrors() {
      const errors = [];
      if (!this.$v.lastname.$dirty) return errors;
      !this.$v.lastname.maxLength &&
        errors.push("last Name must be at most 10 characters long");
      !this.$v.lastname.required && errors.push("last Name is required.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push("Phone number is required");
      return errors;
    },
    pinErrors() {
      const errors = [];
      if (!this.$v.pin.$dirty) return errors;
      !this.$v.pin.required && errors.push("Pin is required");
      return errors;
    },
  },

  methods: {
    submit: async () => {
      this.$v.$touch();
      // this.$router.replace("/");
      if (
        this.firstname.length > 0 &&
        this.lastname.length > 0 &&
        this.phone.length > 0 &&
        this.pin.length > 0
      ) {
        this.$router.replace("/");
      }
    },
    clear() {
      this.$v.$reset();
      this.firstname = "";
      this.lastname = "";
      this.phone = "";
      this.pin = "";
    },
  },
};
</script>

<style>
.v-application .primary--text {
  color: red !important;
  caret-color: red !important;
}
.signup {
  max-width: 100% !important;
  background-color: rgb(250, 250, 250);
  height: 100vh;
}
.navigation {
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  border: 1px solid red;
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