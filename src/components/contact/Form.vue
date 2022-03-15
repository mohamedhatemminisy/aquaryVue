<template>
  <div class="form-area">
    <div class="main-title">
      <h2>{{ $t('contact_us') }} !<span class="line"></span></h2>

    </div>
    <div class="contact-box">
      <div class="form-content">

      	<form @submit="onSubmitForm" ref="main_form" enctype="multipart/form-data" action>
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group position-relative">
              	<input type="text" class="form-control" v-bind:class="{ 'invalid': notsent }" name="name" v-model="formDataFields.name" 
                :placeholder="$t('name')" />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-group position-relative">
                <input
                  class="form-control"
                  type="number"
                  :placeholder="$t('phone')"
                  name="phone"
                   v-bind:class="{ 'invalid': notsent }" v-model="formDataFields.phone"
                />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-group position-relative">
                <div class="input-group has-validation">
                  <input
                    class="form-control"
                    type="email"
                     v-model="formDataFields.email"
                     v-bind:class="{ 'invalid': notsent }"
                    name="email"
                    :placeholder="$t('email')"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-group position-relative">
                <textarea
                  class="form-control"
                  rows="6"
                  name="message"
                  :placeholder="$t('yourmessage')"
                   v-bind:class="{ 'invalid': notsent }" v-model="formDataFields.message"
                ></textarea>
              </div>
            </div>
            <div class="col-lg-12 ">
                        	<vue-recaptcha @verify="onVerify" ref="recaptcha" sitekey="6LdrMI4eAAAAADtunFeo5BxM7h2wG76W380cxfhm"></vue-recaptcha>

              <div class="form-group position-relative mt-3">
                <button class="btn btn-danger hvr-sweep-to-top" type="submit">
                  {{ $t('send') }}
                </button>
              </div>
            </div>
            <div class="col-lg-12" v-if="sent">
              <div class="text-center">
                <p class="successfully">{{ $t('Message_send') }}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { VueRecaptcha } from "vue-recaptcha";

export default {
  name: "Form",
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
				message: null,
			},
		};
	},
	methods: {
		...mapActions(["storeFormData"]),
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
					this.storeFormData(this.formDataFields).then(() => {
						if (this.$store.state.formSent == true) {
							e.target.reset();
							this.notsent = false;
							this.sent = true;
							this.formDataFields.name = null;
							this.formDataFields.email = null;
							this.formDataFields.phone = null;
							this.formDataFields.message = null;
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