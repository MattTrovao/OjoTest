<template>
  <SectionTitle title="Reviews" />

  <div class="review">
    <input type="hidden" name="_captcha" value="false" />
    <div class="grid grid--2">
      <div class="review__field">
        <label for="Name">Name</label>
        <input id="Name" placeholder="Name Lastname" v-model="name" required />
      </div>

      <div class="review__field">
        <label for="Email">Email</label>
        <input
          id="Email"
          placeholder="email@client.com"
          v-model="email"
          required
        />
      </div>
    </div>

    <div class="review__field">
      <label for="Review">Review</label>
      <textarea
        name="Review"
        id="Review"
        placeholder="(...)"
        v-model="review"
        required
      ></textarea>

      <p :class="`count ${review.length < 30 ? 'negative' : 'positive'}`">
        {{ review.length }} / 30
      </p>
    </div>

    <div class="review__btn">
      <p>All the fields are required.</p>
      <button class="btn" @click="submitForm()">Publish</button>
    </div>
  </div>

  <Swiper
    v-if="reviewList"
    :slides-per-view="3"
    :space-between="20"
    :slidesPerGroup="3"
    :modules="modules"
    :navigation="true"
    :loop="true"
    :speed="1000"
    :autoplay="{
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
  >
    <template v-for="data, id in reviewList" :key="id">
      <SwiperSlide>
        <div class="comment">
          <div class="commentName">
            <h2>{{data.name}}</h2>
          </div>

          <div class="commentData">
            <p>{{data.review}}</p>
          </div>
        </div>
      </SwiperSlide>
    </template>
  </Swiper>
</template>

<script>
import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const name = ref("");
    const email = ref("");
    const review = ref("");

    const reviewList = ref(JSON.parse(localStorage.getItem("formData")));
    console.log(reviewList.value);


    async function submitForm() {

      let formData = {
        name: name.value,
        email: email.value,
        review: review.value,
      };

      let existingData = localStorage.getItem("formData");
      let formDataArray = existingData ? JSON.parse(existingData) : [];
      formDataArray.push(formData);
      localStorage.setItem("formData", JSON.stringify(formDataArray));

      name.value = ''
      email.value = ''
      review.value = ''

      reviewList.value.push(formData);
      console.log(reviewList.value);

    }

    return {
      modules: [Autoplay,  Navigation],
      name,
      email,
      review,
      submitForm,
      reviewList,
    };
  },
};
</script>

<style>
</style>