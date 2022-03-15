<template>
  <!--hero-->
  <section class="hero-header h-video transparent">
    <div id="video_container">
      <video id="background_video" loop muted></video>

      <div id="video_cover"></div>
    </div>
    <div class="hero-content">
      <div class="container">
        <div class="hero-text">
          <h1>{{ $t("hello_aquary") }}</h1>
        </div>
        <div class="hero-search">
          <form @submit="onFilterFormSubmit" ref="main_form" action>
            <div class="row">
              <div class="col-lg-3 col-md-6" v-if="type">
                <div class="select-area input-area">
                  <label class="form-label" for="">{{ $t("address") }}</label>
                  <select
                    class="form-control"
                    v-model="formDataFields.location"
                    name="location"
                  >
                    <option>{{ $t("ChooseAddress") }}</option>
                    <option
                      v-for="typ in type"
                      :key="typ.id"
                      v-bind:value="typ.id"
                    >
                      {{ typ.title }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="select-area input-area">
                  <label class="form-label" for="">{{
                    $t("categories")
                  }}</label>
                  <select
                    class="form-control"
                    v-model="formDataFields.category_id"
                    name="category_id"
                  >
                    <option>{{ $t("Choose_category") }}</option>
                    <option
                      v-for="cat in categories"
                      :key="cat.id"
                      v-bind:value="cat.id"
                    >
                      {{ cat.title }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="input-area">
                  <label class="form-label" for="">{{
                    $t("price_from")
                  }}</label>
                  <input
                    class="form-control"
                    id="search_text"
                    name="price_from"
                    v-model="formDataFields.price_from"
                    :placeholder="$t('price_from')"
                    type="text"
                  />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="input-area">
                  <label class="form-label" for="">{{ $t("price_to") }}</label>
                  <input
                    class="form-control"
                    :placeholder="$t('price_to')"
                    id="search_text"
                    name="price_to"
                    v-model="formDataFields.price_to"
                    type="text"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="input-area">
                  <label class="form-label" for="search_text">{{
                    $t("enter_text")
                  }}</label>
                  <input
                    class="form-control"
                    :placeholder="$t('enter_text')"
                    id="EnterText"
                    name="EnterText"
                    v-model="formDataFields.EnterText"
                    type="text"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="buttons-area">
                  <button class="btn submit" type="submit">
                    <div class="spinner-border text-light" role="status">
                      <span class="visually-hidden">{{ $t("Loading") }}</span>
                    </div>
                    {{ $t("search") }}<i class="bi bi-search"></i>
                  </button>
                  <button class="btn btn-outline-light reset" type="reset">
                    {{ $t("reset") }}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!--hero-->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Filter",
  data() {
    return {
      formDataFields: {
        price_to: null,
        price_from: null,
        EnterText: null,
        location: null,
        category_id: null,
      },
    };
  },

  props: { type: Array, categories: Array },

  methods: {
    ...mapActions(["filterFormData"]),
    onFilterFormSubmit(e) {
      e.preventDefault();
      let formDataFieldsArr = Object.values(this.formDataFields);
      //  console.log(this.formDataFields);
      for (let index = 0; index < formDataFieldsArr.length; index++) {
        var field = formDataFieldsArr;
        // console.log(field);
      }
      if (field == null) {
        this.notsent = true;
        this.sent = false;
      } else {
        this.filterFormData(this.formDataFields).then((result) => {});
      }
    },
  },

  mounted() {
    let bv = new Bideo();
    bv.init({
      // Video element
      videoEl: document.querySelector("#background_video"),
      // Container element
      container: document.querySelector("body"),
      // Resize
      resize: true,
      // autoplay: false,
      isMobile: window.matchMedia("(max-width: 768px)").matches,
      playButton: document.querySelector("#play"),
      pauseButton: document.querySelector("#pause"),
      // Array of objects containing the src and type
      // of different video formats to add
      src: [
        {
          src: "https://fsd72021.github.io/video/video.mp4",
          type: "video/mp4",
        },
        {
          src: "assets/videos/video.webm",
          type: 'video/webm;codecs="vp8, vorbis"',
        },
      ],
      // What to do once video loads (initial frame)
      onLoad: function () {
        document.querySelector("#video_cover").style.display = "none";
      },
    });

    /* Hero Video Header - Mouse Effect */
    let image,
      appending,
      imageCanvas,
      imageCanvasContext,
      lineCanvas,
      lineCanvasContext,
      pointLifetime,
      points = [];

    function start() {
      document.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", resizeCanvases);
      appending.appendChild(imageCanvas);
      resizeCanvases();
      tick();
    }

    function onMouseMove(event) {
      let scroll = 0;
      if (!$(".search-popup").length) scroll = $(document).scrollTop();
      points.push({
        time: Date.now(),
        x: event.clientX,
        y: event.clientY + scroll,
      });
    }

    function resizeCanvases() {
      if (!("disableRubber" in window)) {
        setTimeout(function () {
          let c = setInterval(function () {
            if ($(".hero-header canvas").length) {
              imageCanvas.width = lineCanvas.width = $(".hero-header canvas")
                .parent()
                .width();
              imageCanvas.height = lineCanvas.height = $(".hero-header canvas")
                .parent()
                .height();
            }
          }, 1);
          setTimeout(function () {
            clearInterval(c);
          }, 200);
        }, 200);
      }
    }

    function tick() {
      points = points.filter(function (point) {
        let age = Date.now() - point.time;
        return age < pointLifetime;
      });
      drawLineCanvas();
      drawImageCanvas();
      requestAnimationFrame(tick);
    }

    function drawLineCanvas() {
      let minimumLineWidth = 150;
      let maximumLineWidth = 150;
      let lineWidthRange = maximumLineWidth - minimumLineWidth;
      let maximumSpeed = 50;
      lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
      lineCanvasContext.lineCap = "round";
      lineCanvasContext.shadowBlur = 20;
      lineCanvasContext.shadowColor = "#000";
      for (let i = 1; i < points.length; i++) {
        let point = points[i];
        let previousPoint = points[i - 1];
        let distance = getDistanceBetween(point, previousPoint);
        let speed = Math.max(0, Math.min(maximumSpeed, distance));
        let percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
        lineCanvasContext.lineWidth =
          minimumLineWidth + percentageLineWidth * lineWidthRange;
        let age = Date.now() - point.time;
        let opacity = (pointLifetime - age) / pointLifetime;
        lineCanvasContext.strokeStyle = "rgba(0, 0, 0, " + opacity + ")";
        lineCanvasContext.beginPath();
        lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
        lineCanvasContext.lineTo(point.x, point.y);
        lineCanvasContext.stroke();
      }
    }

    function getDistanceBetween(a, b) {
      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }

    function drawImageCanvas() {
      let top = 0,
        left = 0;
      let width = imageCanvas.width;
      let height =
        (imageCanvas.width / image.naturalWidth) * image.naturalHeight;
      if (height < imageCanvas.height) {
        width = (imageCanvas.height / image.naturalHeight) * image.naturalWidth;
        height = imageCanvas.height;
        left = -(width - imageCanvas.width) / 2;
      } else {
        top = -(height - imageCanvas.height) / 2;
      }

      imageCanvasContext.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
      imageCanvasContext.globalCompositeOperation = "source-over";
      imageCanvasContext.drawImage(image, left, top, width, height);
      imageCanvasContext.globalCompositeOperation = "destination-in";
      imageCanvasContext.drawImage(lineCanvas, 0, 0);
    }

    function addCanvasEffect() {
      image = document.querySelector(".clear-image");
      appending = document.querySelector(".bg-container");
      imageCanvas = document.createElement("canvas");
      imageCanvasContext = imageCanvas.getContext("2d");
      lineCanvas = document.createElement("canvas");
      lineCanvasContext = lineCanvas.getContext("2d");
      pointLifetime = 1000;
      points = [];
      if (image.complete) {
        start();
      } else {
        image.onload = start;
      }
    }

    function setCanvasEffect() {
      if (!("disableRubber" in window)) {
        let href = window.location.href;
        let dir = href.substring(0, href.lastIndexOf("/")) + "/";
        let bgImage;
        let cElement;
        if ($(".h-video").length) cElement = $(".h-video");
        else if ($(".h-slideshow").length) cElement = $(".h-slideshow");
        else if (
          $(".hero-header").not(".login-popup,.review-popup,.pm-popup").length
        )
          cElement = $(".hero-header").not(
            ".login-popup,.review-popup,.pm-popup"
          );
        bgImage = cElement.find(".hero-image").css("background-image");
        if (bgImage !== "none") {
          bgImage = bgImage.replace(dir, "");
          bgImage = bgImage
            .replace(" ", "")
            .replace(" ", "")
            .replace(" ", "")
            .replace(" ", "")
            .replace(" ", "");
          bgImage = bgImage
            .replace('url("', "")
            .replace("url('", "")
            .replace("url(", "")
            .replace('")', "");
          bgImage = bgImage.replace("')", "").replace(")", "");
          cElement.append(
            '<div class="bg-container bg-media"><img class="clear-image" src="' +
              bgImage +
              '"></div>'
          );
          addCanvasEffect();
        }
      }
    }

    /* Prepare Interface */
    let he_ = $(".hero-header");
    he_.prepend('<div class="hero-image"></div>');
    he_.prepend('<div class="overlay"></div>');
    he_.prepend('<div class="dot-overlay"></div>');
    setCanvasEffect();
  },
};
</script>

<style>
</style>