<template>
  <!-- about-->
  <section class="about" v-if="aboutData">
    <div class="container">
      <div class="about-content">
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <div class="about-box">
              <i :class="aboutData.vision.icon"></i>
              <div class="main-title">
                <h2>{{ aboutData.vision.title }}<span class="line"></span></h2>
                <div class="text-center" v-html="aboutData.vision.description"></div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="about-box">
              <i :class="aboutData.mission.icon"></i>
              <div class="main-title">
                <h2>{{ aboutData.mission.title }}<span class="line"></span></h2>
                <div class="text-center" v-html="aboutData.mission.description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- about -->
</template>

<script>

export default {
  name: "About",
   components: {
  },
  	data: function () {
		return {
			breadcrumb: null, 
      breadcrumbTitle: {
        
      }
		};
	},
  props: { aboutData: Array },
  created() {
    console.log(this.aboutData);
  },
  
};
</script>

<style>
</style>