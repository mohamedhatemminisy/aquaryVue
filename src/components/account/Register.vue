<template>
  <div
    class="tab-pane fade show active"
    id="nav-register"
    role="tabpanel"
    aria-labelledby="nav-register-tab"
  >
    <form @submit="onSubmitForm" ref="main_form" action>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group input-group flex-nowrap">
            <i class="input-group-text bi bi-person"></i>
            <input
              class="form-control"
              type="text"
              name="name"
              v-bind:class="{ invalid: notsent }"
              v-model="formDataFields.name"
              :placeholder="$t('name')"
            />
          </div>
          <div id="name_error" style="color: red"></div>
        </div>
        <div class="col-lg-12">
          <div class="form-group input-group flex-nowrap">
            <i class="input-group-text bi bi-telephone"></i>
            <input
              class="form-control"
              type="text"
              name="phone"
              v-bind:class="{ invalid: notsent }"
              v-model="formDataFields.phone"
              :placeholder="$t('phone')"
            />
          </div>
          <div id="phone_error" style="color: red"></div>
        </div>
        <div class="col-lg-12">
          <div class="form-group input-group flex-nowrap">
            <div class="input-group has-validation">
              <i class="input-group-text bi bi-envelope"></i>
              <input
                class="form-control"
                type="text"
                name="email"
                v-bind:class="{ invalid: notsent }"
                v-model="formDataFields.email"
                :placeholder="$t('email')"
              />
            </div>
          </div>
          <div id="email_error" style="color: red"></div>
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
          <div id="password_error" style="color: red"></div>
        </div>
        <div class="col-lg-12">
          <div class="form-group input-group flex-nowrap">
            <i class="input-group-text bi bi-shield-lock"></i>
            <input
              class="form-control"
              type="password"
              name="password_confirmation"
              v-bind:class="{ invalid: notsent }"
              v-model="formDataFields.password_confirmation"
              :placeholder="$t('confirmPassword')"
            />
          </div>
        </div>
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
              {{ $t("registernow") }}
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
  name: "Register",
  data() {
    return {
      notsent: false,
      sent: false,
      formDataFields: {
        name: null,
        phone: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
    };
  },

  methods: {
    ...mapActions(["registerFormData"]),
    onSubmitForm(e) {
      e.preventDefault();
      // if (this.verifiedRecapcha == true) {
      let formDataFieldsArr = Object.values(this.formDataFields);
      // console.log(this.formDataFields);
      for (let index = 0; index < formDataFieldsArr.length; index++) {
        var field = formDataFieldsArr;
        console.log(field);
      }
      if (field == null) {
        this.notsent = true;
        this.sent = false;
      } else {
        this.registerFormData(this.formDataFields).then((result) => {
          $("#email_error").html("");
          $("#password_error").html("");
          $("#phone_error").html("");
          $("#name_error").html("");
          if (this.$store.state.formSent == true) {
            console.log(result);
            e.target.reset();
            this.notsent = false;
            this.sent = true;
            this.formDataFields.name = null;
            this.formDataFields.phone = null;
            this.formDataFields.email = null;
            this.formDataFields.password = null;
            this.formDataFields.registerFormData = null;
          } else {
            if (this.$store.state.errorRegistration.email) {
              $("#email_error").html(
                this.$store.state.errorRegistration.email[0]
              );
            }
            if (this.$store.state.errorRegistration.password) {
              $("#password_error").html(
                this.$store.state.errorRegistration.password[0]
              );
            }
            if (this.$store.state.errorRegistration.phone) {
              $("#phone_error").html(
                this.$store.state.errorRegistration.phone[0]
              );
            }
            if (this.$store.state.errorRegistration.name) {
              $("#name_error").html(
                this.$store.state.errorRegistration.name[0]
              );
            }
          }
        });
      }
      // } else {
      // 	if (field == null) {
      // 		this.notsent = true;
      // 		this.sent = false;
      // 	} else {
      // 		this.notsent = false;
      // 		this.sent = true;
      // 	}
      // }
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