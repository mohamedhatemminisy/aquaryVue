<template>
  <!--properties-->
  <section class="properties">
    <div class="container">
      <div class="property-content">
        <div class="row" v-if="properties">
          <div
            class="col-md-6 col-lg-4"
            v-for="property in properties"
            :key="property.id"
          >
            <div class="property-box">
              <div class="property-image">
                <router-link class="btn" :to="`/property/${property.id}`">
                  <img :src="property.image" :alt="property.title"
                /></router-link>
                
              </div>
              <div class="property-details">
                <router-link :to="`/property/${property.id}`">
                  <h2 class="title">
                    {{ property.title }}
                  </h2>
                  <p class="location">
                    <i class="bi-pin"></i>{{ property.address }}
                  </p>
                  <p class="price">{{ property.price }} EGP</p></router-link
                >
                <router-link class="btn" :to="`/property/${property.id}`"
                  >{{ $t('view') }}</router-link
                >
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="view-all">
              <router-link class="btn" :to="{ name: 'Properties' }"
                >{{ $t('viewAll') }}</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--properties-->
</template>

<script>
export default {
  name: "Building",
  props: { properties: Array },
};
</script>

<style>
</style>