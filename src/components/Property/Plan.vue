<template>
  <!--plans-->
  <div class="single-property-plans" v-if="plans">
    <div class="subtitle">
      <h3>{{ $t('plans') }}</h3>
      <span class="line"></span>
    </div>
    <div class="accordion accordion-flush" id="accordion_plan">
      <div class="accordion-item" v-for="plan in plans" :key="plan.id">
        
        <h2 class="accordion-header" :id="'plan-heading'+plan.id">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#plan-collapse'+plan.id"
            aria-expanded="false"
            :aria-controls="'plan-collapse'+plan.id"
          >
            {{ plan.title }}
          </button>
        </h2>
        <div
          class="accordion-collapse collapse"
          :id="'plan-collapse'+plan.id"
          :aria-labelledby="'plan-heading'+plan.id"
          data-bs-parent="#accordion_plan"
        >
          <div class="accordion-body">
            <img class="img-fluid" :src="plan.image" :alt="plan.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Plan",
  props: { plans: Array },
};
</script>

<style>
</style>