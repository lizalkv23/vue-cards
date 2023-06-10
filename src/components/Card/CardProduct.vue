<template>
  <div class="cards-creators__body">
    <div class="cards-creators__img">
      <img :src="strMealThumb" alt="avatar" />
    </div>
    <div class="cards-creators__element">#{{ idMeal }}🥧🌮</div>
    <div class="cards-creators__text">
      <div class="cards-creators__title">{{ strMeal }}</div>
      <div class="cards-creators__total">{{ strMeal }}</div>
    </div>
    <my-button class="cards-creators__btn"> See More ⚜</my-button>
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton.vue"
export default {
  name: "card-product",
  components: {
    MyButton,
  },
  props: {
    idMeal: String,
    strMealThumb: String,
    strMeal: String,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.cards-creators {
  &__body {
    //  display: grid;
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    //  grid-template-rows: 1fr;
    background-color: #f4ed71e1;
    box-shadow: 5px 2px 20px 10px #8a8504b9;
    border-radius: 1.25rem;
    padding: 1.25rem;
  }
  &__img {
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;
    @media (max-width: 29.6875rem) {
      padding-bottom: 80%;
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      object-fit: cover;
      border-radius: 0.5rem;
      transition: all 0.4s;
      @media (any-hover: hover) {
        &:hover {
          transform: scale(1.025);
          filter: saturate(1.2);
        }
      }
    }
  }
  &__element {
    font-size: 0.625rem;
    color: #383140;
    font-style: italic;
  }
  &__text {
    flex: 1 1 auto;
  }
  &__title {
    font-weight: 700;
    text-align: center;
    font-size: 1.25rem;
    color: #190331;
    &:not(:last-child) {
      margin-bottom: 1.25rem;
    }
  }
  &__total {
    font-size: 0.875rem;
    text-align: center;
    color: #5c3c69;
    font-style: italic;
  }
  &__btn {
    justify-self: end;
  }
}
</style>
