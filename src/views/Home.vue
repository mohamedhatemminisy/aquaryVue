<template>
  <div class="loading" v-if="this.$store.state.loading == true">
    <div class="spinner-grow" style="width: 3rem; height: 3rem" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-if="!this.$store.state.loading == true">
    <Header />
    <Filter
      :type="allHomeApiData.data.type"
      :categories="allHomeApiData.data.categories"
    />
    <Search />
    <Building :properties="allHomeApiData.data.properties" />
    <BestSaller :hot="allHomeApiData.data.hot" />
    <Featured :featured="allHomeApiData.data.featured" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import Filter from "@/components/home/Filter.vue";
import Building from "@/components/home/Building.vue";
import Search from "@/components/home/Search.vue";
import BestSaller from "@/components/home/BestSaller.vue";
import Featured from "@/components/home/Featured.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Filter,
    Building,
    Featured,
    BestSaller,
    Search,
  },

  data: function () {
    return {
      properties: null,
      language: window.location.pathname.replace(/^\/([^/]+).*/i, "$1") || "en",
    };
  },
  methods: {
    ...mapActions(["getHomeApiData"]),
  },
  computed: mapGetters(["allHomeApiData"]),
  created() {
    this.getHomeApiData();
    // console.log(this.allHomeApiData);
  },

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (this.language === "ar") {
          document.title = to.meta.title || "الرئيسية";
        } else {
          document.title = to.meta.title || "Aquary home page";
        }
      },
    },
  },
};
</script>
