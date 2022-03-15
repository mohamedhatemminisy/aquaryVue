<template>
  <!--header-->
  <header>
    <div class="top-bar">
      <div class="container">
        <div class="top-bar-content">
          <div class="lang">
            <a @click="handleLangAr">{{ $t("Ar") }}</a> |
            <a @click="handleLangEn">{{ $t("En") }}</a>
          </div>
          <div class="btn-area">
            <!-- <router-link
              class="notification position-relative"
              :to="{ name: 'Notification' }"
              ><i class="bi bi-bell"></i
              ><span
                class="
                  position-absolute
                  top-0
                  start-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                "
                >99+</span
              ></router-link
            > -->
            <div v-if="usermail">
              <div class="account">
                <div class="dropdown">
                  <button
                    id="accountDropdown"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div class="icon">
                      <img src="@/assets/images/profile.png" alt="" />
                    </div>
                  </button>
                  <ul
                    class="user-content dropdown-menu"
                    aria-labelledby="accountDropdown"
                  >
                    <div class="user-icon">
                      <img src="@/assets/images/profile.png" alt="" />
                    </div>
                    <div class="user-text">
                      <p>{{ username }}</p>
                    </div>
                    <div class="user-buttons" v-if="usermail">
                      <router-link
                        class="btn hvr-sweep-to-top"
                        :to="{ name: 'Profile' }"
                        >{{ $t("profile") }}</router-link
                      >

                      <form @submit="onSubmitLogoutForm" ref="main_form" action>
                        <button
                          class="btn hvr-sweep-to-top"
                          :disabled="isLoggedOut"
                          @click="onClickLogoutForm"
                        >
                          {{ $t("logout") }}
                        </button>
                      </form>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else>
              <router-link class="btn make" :to="{ name: 'Account' }"
                ><i class="flaticon-button"></i>{{ $t("login") }}</router-link
              >
            </div>
            <router-link class="btn make" :to="{ name: 'MakeProperty' }"
              ><i class="flaticon-button"></i
              >{{ $t("makeadvertise") }}</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar main-nav navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">
          <img
            :src="allSettingsApiData.logo"
            :alt="allSettingsApiData.website_title"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#side_menu"
          aria-controls="side_menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="hamburger-menu">
            <span></span><span></span><span></span>
          </div>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="{ name: 'Home' }"
                >{{ $t("home") }}</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'About' }">{{
                $t("About")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Properties' }">{{
                $t("properties")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Contact' }">{{
                $t("contact")
              }}</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink1"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >{{ $t("language") }}</a
              >
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink1"
              >
                <li>
                  <a class="dropdown-item" @click="handleLangAr">{{
                    $t("Ar")
                  }}</a>
                </li>
                <li>
                  <a class="dropdown-item" @click="handleLangEn">{{
                    $t("En")
                  }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!--side menu in mobile only-->
    <div
      class="offcanvas offcanvas-start"
      id="side_menu"
      data-bs-scroll="true"
      tabindex="-1"
      aria-labelledby="side_menu_label"
    >
      <div class="offcanvas-header">
        <button
          class="btn-close btn-close-dark"
          type="button"
          data-bs-dismiss="offcanvas"
          data-bs-target="#side_menu"
          aria-controls="side_menu"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="navbar">
          <div class="collapsed navbar-collapse" id="navbarNavSide">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  aria-current="page"
                  :to="{ name: 'Home' }"
                  >{{ $t("home") }}</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'About' }">{{
                  $t("About")
                }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Properties' }">{{
                  $t("properties")
                }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Contact' }">{{
                  $t("contact")
                }}</router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink1"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >{{ $t("language") }}</a
                >
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink1"
                >
                  <li>
                    <a class="dropdown-item" @click="handleLangAr">{{
                      $t("Ar")
                    }}</a>
                  </li>
                  <li>
                    <a class="dropdown-item" @click="handleLangEn">{{
                      $t("En")
                    }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!--header-->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      language: window.location.pathname.replace(/^\/([^/]+).*/i, "$1") || "en",
      usermail: sessionStorage.getItem("email"),
      username: sessionStorage.getItem("name"),
      usertoken: sessionStorage.getItem("tokenKey"),
      userphone: sessionStorage.getItem("phone"),
    };
  },
  methods: {
    ...mapActions(["getSettingsApiData"]),

    onClickLogoutForm(e) {
      e.preventDefault();

      e.preventDefault();
      sessionStorage.removeItem("tokenKey");
      sessionStorage.removeItem("name");
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("phone");
      sessionStorage.removeItem("id");

      window.location.href = `/${this.language}`;
    },

    handleLangAr() {
      window.location = window.location.href.replace("/en/", "/ar/")
    },
    handleLangEn() {
      window.location = window.location.href.replace("/ar/", "/en/")
    },
  },
  computed: mapGetters(["allSettingsApiData"]),
  created() {
    this.getSettingsApiData();
    let htmlElement = document.querySelector("html");
    if (this.language == "ar") {
      htmlElement.setAttribute("dir", "rtl");
      htmlElement.setAttribute("lang", "ar");
    } else {
      htmlElement.setAttribute("lang", "en");
    }
  },
};
</script>

<style>
.top-bar-content .lang a {
  cursor: pointer;
}
</style>