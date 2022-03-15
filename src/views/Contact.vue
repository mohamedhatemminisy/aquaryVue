<template>
  <div class="loading" v-if="this.$store.state.loading == true">
    <div class="spinner-grow" style="width: 3rem; height: 3rem" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-if="!this.$store.state.loading == true">
    <Header />
    <Breadcrumb />
    <section class="contact">
      <div class="container">
        <Info :contactData="allContactApiData.data" />
        <Form />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/global/Header.vue";
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import Info from "@/components/contact/Info.vue";
import Form from "@/components/contact/Form.vue";
import Footer from "@/components/global/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Breadcrumb,
    Info,
    Form,
  },

  data: function () {
    return {
      contactData: null,
      aboutTitle: null,
      language: window.location.pathname.replace(/^\/([^/]+).*/i, "$1") || "en",
    };
  },
  methods: {
    ...mapActions(["getContactApiData"]),
  },
  computed: mapGetters(["allContactApiData"]),
  created() {
    this.getContactApiData();
  },
  
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (this.language === "ar") {
          document.title = to.meta.title || "تواصل معنا";
        } else {
          document.title = to.meta.title || "Contact us";
        }
      },
    },
  },
};
</script>
