<template>
  <!-- Deadly Sin 1 FIXED -->
  <div class="p-d-flex p-jc-center p-ai-center">
    <div class="reg_form">
      <form
        class="reg_form p-fluid p-formgrid p-grid"
        @submit.prevent="register()"
        method="post"
      >
        <div class="p-field p-col-12 p-md-6">
          <label for="firstname">First Name</label>
          <InputText
            id="firstname"
            :class="{ 'p-invalid': $v.firstname.$error }"
            class="p-inputtext-sm"
            type="text"
            v-model.trim="$v.firstname.$model"
          />
        </div>
        <div class="p-field p-col-12 p-md-6">
          <label for="lastname">Last Name</label>
          <InputText
            id="lastname"
            :class="{ 'p-invalid': $v.lastname.$error }"
            class="p-inputtext-sm"
            type="text"
            v-model.trim="$v.lastname.$model"
          />
        </div>
        <div class="p-field p-col-12 p-md-4">
          <label for="username">Username</label>
          <InputText
            id="username"
            :class="{ 'p-invalid': $v.username.$error }"
            class="p-inputtext-sm"
            type="text"
            v-model.trim="$v.username.$model"
          />
        </div>
        <div class="p-field p-col-12 p-md-4">
          <label for="email">Email Address</label>
          <InputText
            id="email"
            :class="{ 'p-invalid': $v.email.$error }"
            class="p-inputtext-sm"
            type="email"
            v-model.trim="$v.email.$model"
          />
        </div>
        <div class="p-field p-col-12 p-md-4">
          <label for="password">Password</label>
          <InputText
            id="password"
            :class="{ 'p-invalid': $v.password.$error }"
            class="p-inputtext-sm"
            type="password"
            v-model.trim="$v.password.$model"
          />
        </div>
        <div class="p-field p-col-12">
          <label for="address">Address</label>
          <InputText
            id="address"
            :class="{ 'p-invalid': $v.address.$error }"
            class="p-inputtext-sm"
            type="address"
            v-model.trim="$v.address.$model"
          />
        </div>
        <div class="submit p-field p-col-12">
          <Button
            label="Register"
            type="submit"
            class="p-button-sm"
            :disabled="registerStatus === 'PENDING'"
          />
        </div>
        <h4 v-if="registerStatus === 'ERROR'">
          Please fill the form correctly.
        </h4>
        <div class="error" v-html="error" />
      </form>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import AuthenticationService from "../services/AuthenticationService";

//PrimeVue Imports
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
export default {
  name: "RegisterForm",
  components: {
    InputText,
    Textarea,
    Dropdown,
    Button,
  },
  data: () => {
    return {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      address: "",
      registerStatus: null,
      error: null,
    };
  },
  validations: {
    firstname: { required },
    lastname: { required },
    username: { required },
    email: { required },
    password: { required },
    address: { required },
  },
  methods: {
    async register() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.registerStatus = "ERROR";
      } else {
        // do your submit logic here
        this.registerStatus = "PENDING";
        try {
          await AuthenticationService.register({
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            password: this.password,
            address: this.address,
          });
        } catch (error) {
          this.error = error.response.data.error
        }
        this.$router.push("/");
        // setTimeout(() => {
        //   //This is where you put stuff on database
        //   this.$router.push("/");
        // }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reg_form {
  width: 45vw;
  height: 25vh;
}
.error{
  color: red;
}
</style>
