import {
  createStore
} from 'vuex'
import axios from 'axios';
axios.defaults.baseURL = 'https://demoyoursite.net/minesy/aqary_admin/public/api/';
import router from '../router'

export default createStore({
  state: {
    loading: true,
    language: window.location.pathname.replace(/^\/([^/]+).*/i, "$1"),
    aboutApiData: [],
    userApiData: [],
    settingsApiData: [],
    homeApiData: [],
    contactApiData: [],
    propertiesApiData: [],
    formSent: null,
    filterProperity: null,
    searchParams: [],
    formpasswordSent: null,
    propertyRequestSent: null,
    formSubmit: null,
    formData: [],
    errorRegistration: null,
  },
  getters: {
    allAboutApiData: (state) => state.aboutApiData,
    userlogedApiData: (state) => state.userApiData,
    allContactApiData: (state) => state.contactApiData,
    allPropertiesApiData: (state) => state.propertiesApiData,
    allHomeApiData: (state) => state.homeApiData,
    allSettingsApiData: (state) => state.settingsApiData,

  },

  actions: {

    async getAboutApiData({
      commit
    }) {
      this.state.loading = true;
      axios
        .get("about", {
          headers: {},
          params: {
            lang: this.state.language
          }
        })
        .then((getData) => {
          let aboutApiData = getData.data;
          //  console.log(aboutApiData);
          this.state.loading = false;

          commit("setAboutApiData", aboutApiData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getSettingsApiData({
      commit
    }) {
      axios
        .get("setting", {
          headers: {},
          params: {
            lang: this.state.language
          }
        })
        .then((getData) => {
          let settingsApiData = getData.data.data;
          commit("setSettingsApiData", settingsApiData);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    async getContactApiData({
      commit
    }) {
      this.state.loading = true;
      axios
        .get("contact", {
          headers: {},
          params: {
            lang: this.state.language
          }
        })
        .then((getData) => {
          let contactApiData = getData.data;
          this.state.loading = false;

          commit("setContactApiData", contactApiData);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getPropertiesApiData({
      commit
    }) {
      this.state.loading = true;
      axios
        .get("properties", {
          headers: {},
          params: {
            lang: this.state.language
          }
        })
        .then((getData) => {
          let propertiesApiData = getData.data;
          this.state.loading = false;
          commit("setPropertiesApiData", propertiesApiData);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async storeFormData({
      commit
    }, formDataFields) {
      console.log(formDataFields);
      await axios
        .post("contact", {
          formDataFields
        })
        .then((result) => {
          this.state.formSent = true; //If Data Sent
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    async registerFormData({
      commit
    }, formDataFields) {
      await axios
        .post("register", 
          formDataFields
        )
        .then((result) => {
          this.state.formSent = true; //If Data Sent
          sessionStorage.setItem("tokenKey", result.data.data.token);
          sessionStorage.setItem("name", result.data.data.name);
          sessionStorage.setItem("email", result.data.data.email);
          sessionStorage.setItem("phone", result.data.data.phone);
          sessionStorage.setItem("id", result.data.data.id);
          window.location.href = `/${this.state.language}`
        })
        .catch((error) => {
          this.state.errorRegistration = error.response.data.data;
        });
    },

    async filterFormData({
      commit
    }, formDataFields) {
      await axios
        .post("filter", {
          formDataFields
        })
        .then((result) => {
          this.state.searchParams = result.data.data
          router.push('filter');
        })
        .catch((error) => {

        });
    },

    async filterCategoryData({
      commit
    }, formDataFields) {
      // console.log(formDataFields);
      await axios
        .get("categoryProperties", {
          headers: {},
          params: {
            formDataFields
          }
        })
        .then((result) => {
          // console.log(result);
          // this.state.searchParams = result.data.data
          // router.push('filter');
        })
        .catch((error) => {

        });
    },



    async updateProfileFormData({
      commit
    }, formDataFields) {
      let token = sessionStorage.getItem("tokenKey");

      await axios
        .post("update_prodile", {
          formDataFields
        }, {
          /** تحط هنا قوسين عشان ميضربش في وشك **/
          headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
          }
        })
        .then((result) => {
          this.state.formSent = true; //If Data Sent
          sessionStorage.setItem("tokenKey", token);
          sessionStorage.setItem("name", result.data.data.name);
          sessionStorage.setItem("email", result.data.data.email);
          sessionStorage.setItem("phone", result.data.data.phone);
          sessionStorage.setItem("id", result.data.data.id);
          // window.location.href = `/${this.state.language}`
          console.log(window.location.href);
        })
        .catch((error) => {
          this.state.errorRegistration = error.response.data.data;
        });
    },

    async updatePasswordForm({
      commit
    }, formDataFields) {
      let token = sessionStorage.getItem("tokenKey");

      await axios
        .post("update_password", {
          formDataFields
        }, {
          /** تحط هنا قوسين عشان ميضربش في وشك **/
          headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
          }
        })
        .then((result) => {
          this.state.formpasswordSent = true; //If Data Sent

          console.log(window.location.href);
        })
        .catch((error) => {
          this.state.errorRegistration = error.response.data.data;
        });
    },




    async loginFormData({
      commit
    }, formDataFields) {
      await axios
        .post("login",
          formDataFields
        )
        .then((result) => {
          console.log(result);
          this.state.formSent = true; //If Data Sent
          // this.$session.start()
          sessionStorage.setItem("tokenKey", result.data.data.token);
          sessionStorage.setItem("name", result.data.data.name);
          sessionStorage.setItem("email", result.data.data.email);
          sessionStorage.setItem("phone", result.data.data.phone);
          sessionStorage.setItem("id", result.data.data.id);
          window.location.href = `/${this.state.language}`
          // localStorage.setItem("tokenKey", result.data.data.token);
          // let token = localStorage.getItem("tokenKey");
        })
        .catch((error) => {

          this.state.errorRegistration = error.response.data.data;
        });
    },



    async propertyRequestFormData({
      commit
    }, propertyRequestFields) {

      await axios
        .post("propertyRequest", 
          propertyRequestFields
        )
        .then((result) => {
          console.log(result);
          this.state.propertyRequestSent = true; //If Data Sent
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getHomeApiData({
      commit
    }) {
      this.state.loading = true;
      axios
        .get("home", {
          headers: {},
          params: {
            lang: this.state.language
          }
        })
        .then((getData) => {
          let homeApiData = getData.data;
          this.state.loading = false;
          commit("setHomeApiData", homeApiData);
        })
        .catch((error) => {
          console.log(error);
        });
    },


  },
  mutations: {
    setAboutApiData: (state, aboutApiData) => (state.aboutApiData = aboutApiData),
    setUserApiData: (state, userApiData) => (state.userApiData = userApiData),
    setContactApiData: (state, contactApiData) => (state.contactApiData = contactApiData),
    setPropertiesApiData: (state, propertiesApiData) => (state.propertiesApiData = propertiesApiData),
    setHomeApiData: (state, homeApiData) => (state.homeApiData = homeApiData),
    setSettingsApiData: (state, settingsApiData) => (state.settingsApiData = settingsApiData),

  },

  modules: {}
})