<template>
  <!--footer part-->
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="row">
          <div class="col-lg-5">
            <div class="footer-box">
              <h3>{{ $t("About") }}</h3>
              <div class="footer-logo">
                <p>
                  {{ allSettingsApiData.footer_description }}
                </p>
              </div>
              <div class="social-media">
                <ul>
                  <li>
                    <a :href="allSettingsApiData.facebook" target="_blank"
                      ><i class="bi bi-facebook"> </i
                    ></a>
                  </li>
                  <li>
                    <a :href="allSettingsApiData.twitter" target="_blank"
                      ><i class="bi bi-twitter"> </i
                    ></a>
                  </li>
                  <li>
                    <a :href="allSettingsApiData.instagram" target="_blank"
                      ><i class="bi bi-instagram"> </i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="footer-box">
              <h3>{{ $t("Site_map") }}</h3>
              <div class="main">
                <ul>
                  <li>
                    <router-link :to="{ name: 'Home' }">{{
                      $t("home")
                    }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'About' }">{{
                      $t("About")
                    }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Properties' }">{{
                      $t("properties")
                    }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Contact' }">{{
                      $t("contact")
                    }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="footer-box">
              <h3>{{$t("contact")}}</h3>
              <div class="contact">
                <ul>
                  <li>
                    <i class="bi bi-envelope"> </i
                    ><a :href="`mailto:${allSettingsApiData.email}`">{{allSettingsApiData.email}}</a>
                  </li>
                  <li>
                    <i class="bi bi-telephone"></i
                    ><a :href="`tel:${allSettingsApiData.phone}`" dir="ltr">{{allSettingsApiData.phone}} </a>
                  </li>
                  <li>
                    <i class="bi bi-pin-map"></i
                    ><span>{{allSettingsApiData.address}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="copy-text">
        <p>{{allSettingsApiData.meta_keywords}}</p>
      </div>
    </div>
  </footer>
  <!--footer part-->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Footer",
  methods: {
    ...mapActions(["getSettingsApiData"]),
  },
  computed: mapGetters(["allSettingsApiData"]),
  created() {
    this.getSettingsApiData();
  },
};
</script>


<style>
</style>