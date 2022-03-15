<template>
  <Header />
  <Breadcrumb />
  <section class="single-property-page">
    <div class="container">
      <div class="property-content">
        <div class="row">
          <div class="col-md-8 col-lg-8">
            <div class="single-property-box">
              <Slider :images="images" />
              <Detail :detail="detail" />
              <Feature :feature="feature" :propetyDetails="propetyDetails" />
              <Plan :plans="plan" />
            </div>
          </div>

          <Aside :related="related" :propetyDetails="propetyDetails" />
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import Slider from "@/components/Property/Slider.vue";
import Detail from "@/components/Property/Detail.vue";
import Feature from "@/components/Property/Feature.vue";
import Plan from "@/components/Property/Plan.vue";
import Aside from "@/components/Property/Aside.vue";
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Slider,
    Detail,
    Feature,
    Plan,
    Aside,
    Breadcrumb,
  },
  data() {
    return {
      propetyDetails: null,
      plan: null,
      detail: null,
      feature: null,
      images: null,
      related: null,
      language: window.location.pathname.replace(/^\/([^/]+).*/i, "$1") || "en",
    };
  },

  methods: {
    async initData() {
      await axios
        .get(`singlePropety/${this.$route.params.id}`, {
          params: {
            lang: this.language
          }
        })
        .then((result) => {
          console.log("singlePropety/" + this.$route.params.id);
          this.propetyDetails = result.data.data;
          this.plan = result.data.data.plan;
          this.detail = result.data.data.detail;
          this.feature = result.data.data.feature;
          this.images = result.data.data.images;
          this.related = result.data.data.related;
          //   console.log(this.propetyDetails);
        });
    },
  },
  async created() {
    this.initData();
    this.$watch(
      () => this.$route.params,
      async () => {
        this.initData();
      }
    );
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (this.$i18n.locale == "ar") {
          document.title = to.meta.title || "تفاصيل العقار";
        } else {
          document.title = to.meta.title || "Property Details";
        }
      },
    },
  },
};
</script>

