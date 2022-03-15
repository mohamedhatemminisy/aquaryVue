<template>
  <!--breadcrumb-->
  <nav
    class="main-breadcrumb"
    aria-label="breadcrumb"
    :style="{
      'background-image':
        'url(' + require('@/assets/images/backgrounds/broad.jpg') + ')',
    }"
  >
    <div
      class="circular"
      v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
    ></div>

    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Home' }">{{$t('home')}}</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{$t( Title )}}
          
        </li>
      </ol>
    </div>
  </nav>
  <!--breadcrumb-->
</template>

<script>
export default {
  name: "Breadcrumb",
  data: function () {
    return {
      Title: null,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        this.Title = to.name;
      },
    },
  },
};
</script>

<style>
</style>

