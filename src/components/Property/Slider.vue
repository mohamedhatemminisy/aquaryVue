<template>
  <div class="single-property-images" v-if="images">
    <carousel :items-to-show="1">
      <slide v-for="image in images" :key="image.id">
        <div class="slider-for">
          <div class="item">
            <a data-fancybox="demo" :data-src="image.image" data-caption="">
              <img class="img-fluid" :src="image.image" alt=""/>
            </a>
          </div>
        </div>
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>

  <!-- <splide :options="options" v-for="image in images" :key="image.id">
    <splide-slide>
      <img :src="image.image" />
    </splide-slide>

  </splide> -->
</template>


<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "Slider",
  props: { images: Array },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};

//  export default {
//   name: "images",
//   props: { images: Array },
//   data() {
//     return {
//       options: {
//         rewind: true,
//         width: 800,
//         gap: "1rem",
//       },
//     };
//   },
// };
</script>




<style>
</style>