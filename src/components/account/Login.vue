<template>
  <div
    class="tab-pane fade"
    id="nav-login"
    role="tabpanel"
    aria-labelledby="nav-login-tab"
  >
    <form @submit="onSubmitForm" ref="main_form" action>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group input-group flex-nowrap">
            <div class="input-group has-validation">
              <i class="input-group-text bi bi-envelope"></i>
              <input
                class="form-control"
                type="email"
                name="email"
                v-bind:class="{ invalid: notsent }"
                v-model="formDataFields.email"
                :placeholder="$t('email')"
              />
            </div>
          </div>
          <div id="email_error_login" style="color: red"></div>
        </div>
        <div class="col-lg-12">
          <div class="form-group input-group flex-nowrap">
            <i class="input-group-text bi bi-shield-lock"></i>
            <input
              class="form-control"
              type="password"
              v-bind:class="{ invalid: notsent }"
              v-model="formDataFields.password"
              name="password"
              :placeholder="$t('password')"
            />
          </div>
          <div id="password_error_login" style="color: red"></div>
        </div>
        <div id="error_login" style="color: red"></div>
        <div class="col-lg-12 mb-2">
          <div class="form-check">
            <input
              class="form-check-input"
              input
              type="checkbox"
              id="gridCheck1"
            />
            <label class="form-check-label" for="gridCheck1">{{
              $t("Rememberme")
            }}</label>
          </div>
        </div>

        <div class="col-lg-12 text-center">
          <div class="form-group">
            <button class="btn btn-danger hvr-sweep-to-top" type="submit">
              {{ $t("login") }}
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      notsent: false,
      sent: false,
      formDataFields: {
        email: null,
        password: null,
      },
    };
  },

  methods: {
    ...mapActions(["loginFormData"]),
    onSubmitForm(e) {
      e.preventDefault();
      let formDataFieldsArr = Object.values(this.formDataFields);
      for (let index = 0; index < formDataFieldsArr.length; index++) {
        var field = formDataFieldsArr;
      }
      if (field == null) {
        this.notsent = true;
        this.sent = false;
      } else {
        this.loginFormData(this.formDataFields).then((result) => {
          $("#email_error_login").html("");
          $("#password_error_login").html("");
          if (this.$store.state.formSent == true) {
            e.target.reset();
            this.notsent = false;
            this.sent = true;
            this.formDataFields.email = null;
            this.formDataFields.password = null;
          } else {
            if (this.$store.state.errorRegistration.email) {
              $("#email_error_login").html(
                this.$store.state.errorRegistration.email[0]
              );
            }
            if (this.$store.state.errorRegistration.password) {
              $("#password_error_login").html(
                this.$store.state.errorRegistration.password[0]
              );
            }
            if (this.$store.state.errorRegistration["error"]) {
              $("#error_login").html(
                this.$store.state.errorRegistration["error"]
              );
            }
          }
        });
      }
    },
    onVerify: function (response) {
      // console.log("Verify: " + response);
      this.verifiedRecapcha = true;
    },
  },
};
</script>

<style>
</style>