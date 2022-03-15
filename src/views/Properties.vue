<template>
  <div class="loading" v-if="this.$store.state.loading == true">
    <div class="spinner-grow" style="width: 3rem; height: 3rem" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-if="!this.$store.state.loading == true">
    <Header />
    <Breadcrumb />
    <section class="properties properties-page">
      <div class="container">
        <div class="property-content">
          <div class="row">
            <AllProperty :categories="allPropertiesApiData.categories" :propertiesData="allPropertiesApiData.data" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/global/Header.vue";
import AllProperty from "@/components/Properties/AllProperty.vue";
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import Footer from "@/components/global/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Breadcrumb,
    AllProperty,
  },
  data: function () {
    return {
      propertiesData: null,
      categories: null,
      language: window.location.pathname.replace(/^\/([^/]+).*/i, "$1") || "en",
    };
  },
  methods: {
    ...mapActions(["getPropertiesApiData"]),
  },
  computed: mapGetters(["allPropertiesApiData"]),
  created() {
    this.getPropertiesApiData();
  },

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (this.language === "ar") {
          document.title = to.meta.title || "العقارات";
        } else {
          document.title = to.meta.title || "All Properties";
        }
      },
    },
  },
};
</script>
