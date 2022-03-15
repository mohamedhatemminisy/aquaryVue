<template>
  <!--details-->
  <div class="single-property-details" v-if="detail">
    <ul class="p-0 m-0">
      <li v-for="deta in detail" :key="deta.id"><strong>{{deta.title}}: </strong>{{deta.value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props:{detail:Array},
  
};
</script>

<style>
</style>