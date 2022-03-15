<template>
  <Header />
  <Breadcrumb />
  <!--profile-->

  <section class="profile">
    <div class="container">
      <div class="profile-content">
        <div class="row">
          <div class="col-lg-3">
            <div class="profile-info shadow">
              <div class="image">
                <img
                  class="img-fluid"
                  src="@/assets/images/property/01.jpg"
                  alt=""
                />
              </div>
              <div class="details">
                <h3>{{ formDataField.name }}</h3>
                <button
                  class="btn btn-primary"
                  id="logout-button"
                  :disabled="isLoggedOut"
                  @click="onClickLogoutForm"
                >
                  {{ $t("logout") }}
                </button>
              </div>
            </div>
            <div
              class="nav flex-column nav-pills shadow"
              id="profile_tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                class="nav-link active"
                id="v-pills-1-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-1"
                type="button"
                role="tab"
                aria-controls="v-pills-1"
                aria-selected="false"
              >
                {{ $t("edit_profile") }}
              </button>
              <button
                class="nav-link"
                id="v-pills-2-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-2"
                type="button"
                role="tab"
                aria-controls="v-pills-2"
                aria-selected="false"
              >
                {{ $t("edit_password") }}
              </button>
              <!-- <button
                class="nav-link"
                id="v-pills-3-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-3"
                type="button"
                role="tab"
                aria-controls="v-pills-3"
                aria-selected="false"
              >
                {{ $t("favorite_properties") }}
              </button> -->
            </div>
          </div>

          <div class="col-lg-9">
            <div class="tab-content" id="profile_tabsContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-1"
                role="tabpanel"
                aria-labelledby="v-pills-1-tab"
              >
                <form
                  class="g-3 shadow"
                  @submit="onUpdateProfileForm"
                  ref="main_form"
                  action
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <h3 class="subtitle">{{ $t("edit_profile") }}</h3>
                      <div
                        v-if="sent"
                        class="alert alert-warning alert-dismissible fade show"
                        role="alert"
                      >
                        <strong>{{ $t("profile_updated") }}!</strong>
                        <button
                          class="btn-close"
                          type="button"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          name="name"
                          :placeholder="$t('name')"
                          v-model="formDataField.name"
                        />
                      </div>
                      <div id="name_error" style="color: red"></div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="number"
                          name="phone"
                          :placeholder="$t('phone')"
                          v-model="formDataField.phone"
                        />
                      </div>
                      <div id="phone_error" style="color: red"></div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="email"
                          name="email"
                          :placeholder="$t('email')"
                          v-model="formDataField.email"
                        />
                      </div>
                      <div id="email_error" style="color: red"></div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <button
                          class="btn btn-danger hvr-sweep-to-top"
                          type="submit"
                        >
                          {{ $t("save_changes") }}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-2"
                role="tabpanel"
                aria-labelledby="v-pills-2-tab"
              >
                <form
                  class="g-3 shadow"
                  @submit="onUpdatePasswordForm"
                  ref="main_form"
                  action
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <h3 class="subtitle">{{ $t("edit_password") }}</h3>
                      <div
                        v-if="passwordsentgallery"
                        class="alert alert-warning alert-dismissible fade show"
                        role="alert"
                      >
                        <strong>Holy guacamole!</strong>You should check in on
                        some of those fields below.
                        <button
                          class="btn-close"
                          type="button"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="password"
                          name="old_password"
                          v-model="formDataField.old_password"
                          :placeholder="$t('old_password')"
                        />
                      </div>
                      <div id="old_password_error" style="color: red"></div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="password"
                          v-model="formDataField.new_password"
                          :placeholder="$t('new_password')"
                        />
                      </div>
                    </div>
                    <div id="new_password_error" style="color: red"></div>

                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="password"
                          v-model="formDataField.confirm_password"
                          :placeholder="$t('confirm_password')"
                        />
                      </div>
                      <div id="confirm_password_error" style="color: red"></div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <button
                          class="btn btn-danger hvr-sweep-to-top"
                          type="submit"
                        >
                          {{ $t("save_changes") }}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-3"
                role="tabpanel"
                aria-labelledby="v-pills-3-tab"
              >
                <div class="table-responsive table-area">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>property name</th>
                        <th>price</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="shadow-sm">
                        <td>
                          <a class="property-name" href="single-property.html">
                            <div class="image">
                              <img
                                class="img-fluid"
                                src="images/backgrounds/hero.jpg"
                                alt=""
                              />
                            </div>
                            An example alert with an icon</a
                          >
                        </td>
                        <td>50000 EGP</td>
                        <td>2021-05-20 15:36:25</td>
                        <td>
                          <button class="btn remove" type="button">
                            remove
                          </button>
                        </td>
                      </tr>
                      <tr class="shadow-sm">
                        <td>
                          <a class="property-name" href="single-property.html">
                            <div class="image">
                              <img
                                class="img-fluid"
                                src="images/backgrounds/hero.jpg"
                                alt=""
                              />
                            </div>
                            An example alert with an icon</a
                          >
                        </td>
                        <td>50000 EGP</td>
                        <td>2021-05-20 15:36:25</td>
                        <td>
                          <button class="btn remove" type="button">
                            remove
                          </button>
                        </td>
                      </tr>
                      <tr class="shadow-sm">
                        <td>
                          <a class="property-name" href="single-property.html">
                            <div class="image">
                              <img
                                class="img-fluid"
                                src="images/backgrounds/hero.jpg"
                                alt=""
                              />
                            </div>
                            An example alert with an icon</a
                          >
                        </td>
                        <td>50000 EGP</td>
                        <td>2021-05-20 15:36:25</td>
                        <td>
                          <button class="btn remove" type="button">
                            remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--profile -->
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/global/Header.vue";
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import Side from "@/components/profile/Side.vue";
import ChangePassword from "@/components/profile/ChangePassword.vue";
import EditProfile from "@/components/profile/EditProfile.vue";
import Favorite from "@/components/profile/Favorite.vue";
import Footer from "@/components/global/Footer.vue";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Side,
    Breadcrumb,
    EditProfile,
    Favorite,
    ChangePassword,
  },
  data() {
    return {
      language: window.location.pathname.replace(/^\/([^/]+).*/i, "$1"),
      sent: null,
      passwordsent: null,
      formDataField: {
        email: sessionStorage.getItem("email"),
        name: sessionStorage.getItem("name"),
        token: sessionStorage.getItem("tokenKey"),
        phone: sessionStorage.getItem("phone"),
        old_password: null,
        new_password: null,
        confirm_password: null,
      },
    };
  },
  methods: {
    ...mapActions(["updateProfileFormData", "updatePasswordForm"]),

    onUpdateProfileForm(e) {
      e.preventDefault();
      // if (this.verifiedRecapcha == true) {
      console.log(this.formDataField);
      let formDataFieldsArr = Object.values(this.formDataField);
      for (let index = 0; index < formDataFieldsArr.length; index++) {
        var field = formDataFieldsArr;
      }

      this.updateProfileFormData(this.formDataField).then((result) => {
        if (this.$store.state.formSent == true) {
          this.notsent = false;
          this.sent = true;
          this.formDataFields.name = null;
          this.formDataFields.phone = null;
          this.formDataFields.email = null;
        } else {
          if (this.$store.state.errorRegistration.email) {
            $("#email_error").html(
              this.$store.state.errorRegistration.email[0]
            );
          }
          if (this.$store.state.errorRegistration.phone) {
            $("#phone_error").html(
              this.$store.state.errorRegistration.phone[0]
            );
          }
          if (this.$store.state.errorRegistration.name) {
            $("#name_error").html(this.$store.state.errorRegistration.name[0]);
          }
        }
      });
    },

    onUpdatePasswordForm(e) {
      e.preventDefault();
      // if (this.verifiedRecapcha == true) {
      console.log(this.formDataField);
      let formDataFieldsArr = Object.values(this.formDataField);
      for (let index = 0; index < formDataFieldsArr.length; index++) {
        var field = formDataFieldsArr;
      }

      this.updatePasswordForm(this.formDataField).then((result) => {
        if (this.$store.state.formpasswordSent == true) {
          this.notsent = false;
          this.passwordsent = true;
          this.formDataFields.old_password = null;
          this.formDataFields.new_password = null;
          this.formDataFields.confirm_password = null;
        } else {
          if (this.$store.state.errorRegistration.old_password) {
            $("#old_password_error").html(
              this.$store.state.errorRegistration.old_password[0]
            );
          }
          if (this.$store.state.errorRegistration.new_password) {
            $("#new_password_error").html(
              this.$store.state.errorRegistration.new_password[0]
            );
          }
          if (this.$store.state.errorRegistration.confirm_password) {
            $("#confirm_password_error").html(
              this.$store.state.errorRegistration.confirm_password[0]
            );
          }
        }
      });
    },
  },
  computed: mapGetters(["userlogedApiData"]),
  created() {
    //  this.logoutUserApiData();
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (this.language === "ar") {
          document.title = to.meta.title || "الحساب الشخصي";
        } else {
          document.title = to.meta.title || "User profile";
        }
      },
    },
  },
};
</script>
