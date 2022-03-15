<template>
  <!--make property-->
  <section class="make-property">
    <div class="container">
      <div class="make-property-area">
        <div class="make-property-box">
          <div class="make-property-content">
            <form
              class="g-3"
              @submit="onSubmitForm"
              ref="main_form"
              enctype="multipart/form-data"
              action
            >
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="">{{ $t("name") }} </label>
                    <div class="input-group flex-nowrap">
                      <i class="input-group-text bi bi-person"></i>
                      <input
                        type="text"
                        class="form-control"
                        v-bind:class="{ invalid: notsent }"
                        name="name"
                        v-model="formDataFields.name"
                        :placeholder="$t('name')"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="">{{ $t("phone") }} </label>
                    <div class="input-group flex-nowrap">
                      <i class="input-group-text bi bi-telephone"></i>
                      <input
                        class="form-control"
                        type="number"
                        :placeholder="$t('phone')"
                        name="phone"
                        v-bind:class="{ invalid: notsent }"
                        v-model="formDataFields.phone"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="">{{ $t("email") }}</label>
                    <div class="input-group flex-nowrap has-validation">
                      <i class="input-group-text bi bi-envelope"></i>
                      <input
                        class="form-control"
                        type="email"
                        v-model="formDataFields.email"
                        v-bind:class="{ invalid: notsent }"
                        name="email"
                        :placeholder="$t('email')"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="">{{ $t("area") }}</label>
                    <div
                      class="input-group input-group flex-nowrap has-validation"
                    >
                      <i class="input-group-text bi bi-house"></i>
                      <input
                        class="form-control"
                        type="text"
                        :placeholder="$t('area')"
                        name="area"
                        v-bind:class="{ invalid: notsent }"
                        v-model="formDataFields.area"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="">{{ $t("space") }}</label>
                    <div class="input-group flex-nowrap">
                      <i class="input-group-text bi bi-building"></i>
                      <input
                        class="form-control"
                        type="text"
                        :placeholder="$t('space')"
                        name="space"
                        v-bind:class="{ invalid: notsent }"
                        v-model="formDataFields.space"
                      />
                    </div>
                  </div>
                </div>
                <!-- <div class="col-lg-12">
                  <div class="form-group">
                    <label for="">{{ $t("choice_images") }} </label>
                    <div class="input-group flex-nowrap has-validation">
                      <input
                        ref="images"
                        class="form-control"
                        name="images[]"
                        type="file"
                        multiple
                        maxlength="2"
                        @change="handleImages"
                      />
                      <div class="invalid-tooltip">
                        must choose one file at least
                      </div>
                    </div>
                  </div>
                </div> -->
                <div class="col-lg-12">
                  <div class="form-group">
                    <vue-recaptcha
                      @verify="onVerify"
                      ref="recaptcha"
                      sitekey="6LdrMI4eAAAAADtunFeo5BxM7h2wG76W380cxfhm"
                    ></vue-recaptcha>

                    <button
                      class="btn btn-danger hvr-sweep-to-top mt-3"
                      type="submit"
                    >
                      send now
                    </button>
                    <div class="col-lg-12" v-if="sent">
                      <div class="text-center">
                        <p class="successfully">{{ $t('Message_send') }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--make property-->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { VueRecaptcha } from "vue-recaptcha";
export default {
  name: "MakeProperty",
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      notsent: false,
      sent: false,
      verifiedRecapcha: false,
      formDataFields: {
        name: null,
        email: null,
        phone: null,
        area: null,
        space: null,
        // images: [],
      },
    };
  },
  methods: {
    ...mapActions(["propertyRequestFormData"]),
    handleImages(e) {
      let files = e.target.files;
      this.formDataFields.images = files;
    },
    onSubmitForm(e) {
      e.preventDefault();
      if (this.verifiedRecapcha == true) {
        let formDataFieldsArr = Object.values(this.formDataFields);

        for (let index = 0; index < formDataFieldsArr.length; index++) {
          var field = formDataFieldsArr[index];
        }
        if (field == null) {
          this.notsent = true;
          this.sent = false;
        } else {
          // this.formDataFields.images = new FormData
          this.propertyRequestFormData(this.formDataFields).then(() => {
            if (this.$store.state.propertyRequestSent == true) {
              e.target.reset();
              this.notsent = false;
              this.sent = true;
              this.formDataFields.name = null;
              this.formDataFields.email = null;
              this.formDataFields.phone = null;
              this.formDataFields.area = null;
              this.formDataFields.space = null;
              this.formDataFields.images = [];
            } else {
              console.log("fields is empty");
            }
          });
        }
      } else {
        if (field == null) {
          this.notsent = true;
          this.sent = false;
        } else {
          this.notsent = false;
          this.sent = true;
        }
      }
    },
    onVerify: function (response) {
      console.log("Verify: " + response);
      this.verifiedRecapcha = true;
    },
  },
};
</script>

<style>
</style>