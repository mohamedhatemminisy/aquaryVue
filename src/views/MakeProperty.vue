<template>
  <Header />
  <Breadcrumb />
  <MakeProperty />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/global/Header.vue";
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import MakeProperty from "@/components/MakeProperty.vue";
import Footer from "@/components/global/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Breadcrumb,
    MakeProperty
  },
};
</script>
