<template>
  <div class="col-md-4 col-lg-4">
    <aside v-if="propetyDetails">
      <div class="list-group">
        <a
          class="list-group-item list-group-item-action active"
          href="#!"
          aria-current="true"
          ><i class="bi bi-question-circle"></i>{{ propetyDetails.price }}</a
        ><a
          class="list-group-item list-group-item-action"
          :href="'tel:' + propetyDetails.phone"
        >
          <i class="bi bi-telephone-outbound"></i>{{ propetyDetails.phone }}</a
        ><a
          class="list-group-item list-group-item-action"
          :href="'mailto:' + propetyDetails.email"
        >
          <i class="bi bi-envelope"></i>{{ propetyDetails.email }}</a
        ><a class="list-group-item list-group-item-action" href="#map">
          <i class="bi bi-pin"></i>{{ $t("map") }}
        </a>
      </div>
      <div class="share-property">
        <div class="subtitle">
          <h3>{{ $t("share") }}</h3>
        </div>
        <ul>
          <li>
            <ShareNetwork
              network="facebook"
              :url="url"
              :title="propetyDetails.title"
              :description="propetyDetails.description"
              quote="The hot reload is so fast it\'s near instant. - Evan You"
              hashtags="vuejs,vite"
            >
              <i class="bi bi-facebook"> </i>
            </ShareNetwork>
          </li>
          <li>
            <ShareNetwork
              network="twitter"
              :url="url"
              :title="propetyDetails.title"
              hashtags="vuejs,vite"
            >
              <i class="bi bi-twitter"> </i>
            </ShareNetwork>
          </li>
          <li>
            <ShareNetwork
              network="WhatsApp"
              :url="url"
              :title="propetyDetails.title"
              :description="propetyDetails.description"
            >
              <i class="bi bi-whatsapp"></i>
            </ShareNetwork>
          </li>
        </ul>
      </div>

      <div class="related-properties">
        <div class="subtitle">
          <h3>{{ $t("relatedProperties") }}</h3>
        </div>
        <div class="row" v-if="related">
          <div
            class="col-sm-6 col-md-12 col-lg-6"
            v-for="relat in related"
            :key="relat.id"
          >
            <div class="property-box">
              <div class="property-image">
                <img :src="relat.image" :alt="relat.title" />
              </div>
              <div class="property-details">
                <router-link :to="`/property/${relat.id}`">
                  <h2 class="title">
                    {{ relat.title }}
                  </h2>
                  <p class="location">
                    <i class="bi-pin"></i>{{ relat.address }}
                  </p>
                  <p class="price">{{ relat.price }}</p></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      url: window.location.href,
    };
  },

  props: { related: Array, propetyDetails: Array },
};
</script>

<style>
</style>