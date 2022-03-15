<template>
  <Header />
  <Breadcrumb />
  <section class="login-register">
    <div class="container">
      <div class="login-register-area">
        <div class="login-register-box">
          <div class="login-register-content">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-register-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-register"
                  type="button"
                  role="tab"
                  aria-controls="nav-register"
                  aria-selected="true"
                >
                  {{ $t("registernow") }}
                </button>
                <button
                  class="nav-link"
                  id="nav-login-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-login"
                  type="button"
                  role="tab"
                  aria-controls="nav-login"
                  aria-selected="false"
                >
                  {{ $t("login") }}
                </button>
              </div>
            </nav>

            <div class="tab-content" id="nav-tabContent">
              <Register />
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- login and register -->
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/global/Header.vue";
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import Register from "@/components/account/Register.vue";
import Login from "@/components/account/Login.vue";
import Footer from "@/components/global/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Breadcrumb,
    Register,
    Login,
  },
  data() {
    return {
      language: window.location.pathname.replace(/^\/([^/]+).*/i, "$1") || "en",
    };
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
