<template >
<div  v-if="contactData">
  <div class="map" >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110550.39964813001!2d31.11960275764731!3d30.01676975648693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458469235579697%3A0x4e91d61f9878fc52!2sGiza%2C%20El%20Omraniya%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1630871023803!5m2!1sen!2seg"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
  <!-- contact page map-->
  <div class="info-area">
    <div class="row">
      <div class="col-md-4 col-lg-4">
        <div class="info-box">
          <i class="bi bi-envelope"> </i>
          <h4>{{ $t('email') }}</h4>
          <a href="mailto:{{contactData.email}}">{{contactData.email}}</a>
        </div>
      </div>
      <div class="col-md-4 col-lg-4">
        <div class="info-box">
          <i class="bi bi-telephone"></i>
          <h4>{{ $t('phone') }}</h4>
          <a href="tel:{{contactData.phone}}" dir="ltr">{{contactData.phone}}</a>
        </div>
      </div>
      <div class="col-md-4 col-lg-4">
        <div class="info-box">
          <i class="bi bi-pin-map"></i>
          <h4>{{ $t('location') }}</h4>
          <span>{{contactData.address}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Info",
    props: { contactData: Array },
  created() {
    console.log(this.contactData);
  },
};
</script>

<style>
</style>