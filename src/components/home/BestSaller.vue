<template>
  <!--hot properties-->
  <section class="hot">
    <div class="container">
      <div class="main-title">
        <h2>{{ $t('bestSeller') }}<span class="line"></span></h2>
      </div>
      <div class="row" v-if="hot">
        <div class="col-sm-6 col-md-4 col-lg-3" v-for="ho in hot" :key="ho.id">
          <div class="hot-box">
            <router-link :to="`/property/${ho.id}`">
              <div class="hot-image">
                <img :src="ho.image" :alt="ho.title" />
              </div>
              <div class="hot-details">
                <h2>{{ ho.title }}</h2>
              </div></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--hot properties-->
</template>

<script>
export default {
  name: "BestSaller",
  props: { hot: Array },
};
</script>

<style>
</style>