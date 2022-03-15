<template>
  <div
    class="tab-pane fade show active"
    id="v-pills-1"
    role="tabpanel"
    aria-labelledby="v-pills-1-tab"
  >
    <div class="row">
      <div class="col-lg-12">
        <h3 class="subtitle">edit profile</h3>
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong>You should check in on some of those
          fields below.
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="form-group">
          <input class="form-control" type="text" placeholder="Name" required />
        </div>
      </div>
      <div class="col-lg-12">
        <div class="form-group">
          <input
            class="form-control"
            type="number"
            placeholder="Number"
            required
          />
        </div>
      </div>
      <div class="col-lg-12">
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            placeholder="Email"
            required
          />
        </div>
      </div>
      <div class="col-lg-12">
        <div class="form-group">
          <button class="btn btn-danger hvr-sweep-to-top" type="submit">
            save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"EditProfile"
};
</script>

<style>
</style>