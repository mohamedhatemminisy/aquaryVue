<template>
  <div class="col-lg-3">
    <div class="profile-info shadow">
      <div class="image">
        <img class="img-fluid" src="@/assets/images/property/01.jpg" alt="" />
      </div>
      <div class="details">
        <h3>mohamed ahmed</h3>
        <p>egypt, cairo</p>
        <a class="btn btn-primary" href="#!">logout</a>
      </div>
    </div>
    <div
      class="nav flex-column nav-pills shadow"
      id="profile_tabs"
      role="tablist"
      aria-orientation="vertical"
    >
      <button
        class="nav-link active"
        id="v-pills-1-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-1"
        type="button"
        role="tab"
        aria-controls="v-pills-1"
        aria-selected="false"
      >
        edit profile
      </button>
      <button
        class="nav-link"
        id="v-pills-2-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-2"
        type="button"
        role="tab"
        aria-controls="v-pills-2"
        aria-selected="false"
      >
        change password
      </button>
      <button
        class="nav-link"
        id="v-pills-3-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-3"
        type="button"
        role="tab"
        aria-controls="v-pills-3"
        aria-selected="false"
      >
        favorite properties
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Side",
};
</script>

<style>
</style>