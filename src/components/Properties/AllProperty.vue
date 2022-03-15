<template>
  <div class="col-md-4 col-lg-3">
    <div class="filter-properties">
      <div class="type" v-if="categories">
        <div class="subtitle">
          <h3>{{ $t("categories") }}</h3>
        </div>
        <div
          class="form-check"
          v-for="category in categories"
          :key="category.id"
        >
          <input
            @change="onSubmitForm"
            class="form-check-input"
            :id="'propertyTypeRadio' + category.id"
            v-model="formDataFields.category_id"
            :value="category.id"
            type="radio"
            name="propertyTypeRadio"
          />
          <label
            class="form-check-label"
            :for="'propertyTypeRadio' + category.id"
          >
            {{ category.title }}</label
          >
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-8 col-lg-9" v-if="filterVal.length">
    <div class="row">
      <div
        class="col-md-12 col-lg-4"
        v-for="property in filterVal"
        :key="property.id"
      >
        <div class="property-box">
          <div class="property-image">
            <img :src="property.image" :alt="property.title" /><span
              class="images-number"
            >
              <i class="bi bi-images"></i>{{ property.img_count }}</span
            >
          </div>
          <div class="property-details">
            <router-link :to="`/property/${property.id}`">
              <h2 class="title">
                {{ property.title }}
              </h2>
              <p class="location">
                <i class="bi-pin"></i>{{ property.address }}
              </p>
              <p class="price">{{ property.price }}</p></router-link
            >
            <router-link class="btn" :to="`/property/${property.id}`">{{
              $t("view")
            }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-8 col-lg-9" v-else>
    <div class="row">
      <div
        class="col-md-12 col-lg-4"
        v-for="property in propertiesData"
        :key="property.id"
      >
        <div class="property-box">
          <div class="property-image">
            <img :src="property.image" :alt="property.title" /><span
              class="images-number"
            >
              <i class="bi bi-images"></i>{{ property.img_count }}</span
            >
          </div>
          <div class="property-details">
            <router-link :to="`/property/${property.id}`">
              <h2 class="title">
                {{ property.title }}
              </h2>
              <p class="location">
                <i class="bi-pin"></i>{{ property.address }}
              </p>
              <p class="price">{{ property.price }}</p></router-link
            >
            <router-link class="btn" :to="`/property/${property.id}`">{{
              $t("view")
            }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllProperty",
  props: { categories: Array, propertiesData: Array },
  data: function () {
    return {
      formDataFields: {
        category_id: null,
      },
      filterVal: [],
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      this.filterVal = this.$props.propertiesData.filter(
        (prop) => prop.category_id == e.target.value
      );
    },
  },

  created() {},
};
</script>

<style>
</style>