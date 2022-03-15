<template>
  <Header />
  <Breadcrumb />
  <br /><br /><br />
  <!--properties-->
  <section class="properties">
    <div class="container">
      <div class="property-content">
        <div class="row" v-if="filterData">
          <div
            class="col-md-6 col-lg-4"
            v-for="filter in filterData"
            :key="filter.id"
          >
            <div class="property-box">
              <div class="property-image">
                <a href="single-property.html"
                  ><img :src="filter.image" :alt="filter.title" /></a
                ><span class="images-number">
                  <i class="bi bi-images"></i>{{ filter.img_count }}</span
                >
              </div>
              <div class="property-details">
                <a href="#!">
                  <h2 class="title">
                    {{ filter.title }}
                  </h2>
                  <p class="location">
                    <i class="bi-pin"></i>{{ filter.address }}
                  </p>
                  <p class="price">{{ filter.price }} EGP</p></a
                >
                <router-link class="btn" :to="`/property/${filter.id}`">{{
                  $t("view")
                }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--properties-->

  <Footer />
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
  data() {
    return {
      filterData: "",
    };
  },
  components: {
    Header,
    Footer,
    Breadcrumb,
    About,
  },

  created: function () {
    if (this.$store.state.searchParams) {
      this.filterData = this.$store.state.searchParams;
    }
  },
};
</script>
