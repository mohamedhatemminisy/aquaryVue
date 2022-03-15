<template>
  <div class="loading" v-if="this.$store.state.loading == true">
    <div class="spinner-grow" style="width: 3rem; height: 3rem" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-if="!this.$store.state.loading == true">
    <Header />
    <Breadcrumb />
    <About :aboutData="allAboutApiData.data" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/global/Header.vue";
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import About from "@/components/About.vue";
import Footer from "@/components/global/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Breadcrumb,
    About,
  },
  data: function () {
    return {
      aboutData: null,
      language: window.location.pathname.replace(/^\/([^/]+).*/i, "$1") || "en",
    };
  },
  methods: {
    ...mapActions(["getAboutApiData"]),
  },
  computed: mapGetters(["allAboutApiData"]),
  created() {
    this.getAboutApiData();
  },

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (this.language === "ar") {
          document.title = to.meta.title || " من نحن";
        } else {
          document.title = to.meta.title || "About us";
        }
      },
    },
  },
};
</script>
