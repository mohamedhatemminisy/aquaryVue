<template>
  <section class="featured-properties" v-if="featured">
    <div class="container">
      <div class="main-title">
        <h2>{{ $t("featured_properties") }}!<span class="line"></span></h2>
      </div>
      <carousel :items-to-show="1">
        <slide v-for="featur in featured" :key="featur.id">
          <div class="featured-slider">
            <div class="item">
              <img class="img-fluid" style="width: 1000px" :src="featur.image" :alt="featur.title" />
              <div class="item-details">
                <h3>{{ featur.title }}</h3>
                <div class="item-btn">
                  <router-link class="btn" :to="`/property/${featur.id}`">{{
                    $t("view")
                  }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
  </section>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "Featured",
  props: { featured: Array },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style>
</style>