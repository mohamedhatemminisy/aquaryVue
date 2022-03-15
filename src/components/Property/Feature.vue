<template>
  <div class="single-property-features" v-if="feature">
    <div class="subtitle">
      <h3>{{ $t('features') }}</h3>
      <span class="line"></span>
    </div>
    <ul class="m-0">
      <li v-for="feat in feature" :key="feat.id">{{ feat.title }}</li>
    </ul>
  </div>

  <!--details-->
  <div v-if="propetyDetails">
    <div class="single-property-text">
      <div class="subtitle">
        <h3>{{ $t('details') }}</h3>
        <span class="line"></span>
      </div>
      <p v-html="propetyDetails.description"></p>
    </div>

    <!--location-->
    <div class="single-property-location" id="map">
      <div class="subtitle">
        <h3>{{ $t('location') }}</h3>
        <span class="line"></span>
      </div>
      <div class="location">
        <iframe
          :src="propetyDetails.location"
          width="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <!--video-->
    <div class="single-property-video">
      <div class="subtitle">
        <h3>{{ $t('video') }}</h3>
        <span class="line"></span>
      </div>
      <div class="video">
        <div class="ratio ratio-16x9">
          <iframe
            :src="propetyDetails.video"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
        <!-- في حالة لو الفيديو مرفوع سيرفر مش يوتيوب-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feature",
  props: { feature: Array, propetyDetails: Array },
};
</script>

<style>
</style>