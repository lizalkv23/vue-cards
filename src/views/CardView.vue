<template>
  <header-layout />
  <my-modal />
  <div class="cards-creators">
    <div class="cards-creators__inner">
      <card-product
        v-for="card in cardsList"
        :key="card.idMeal"
        :idMeal="card.idMeal"
        :strMealThumb="card.strMealThumb"
        :strMeal="card.strMeal"
      />
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/Card/CardProduct.vue"
import HeaderLayout from "@/components/HeaderLayout.vue"
import MyModal from "@/UI/MyModal.vue"
import result from "@/api.js"
export default {
  components: { CardProduct, HeaderLayout, MyModal },
  data() {
    return {
      cardsList: [],
    }
  },
  mounted() {
    this.cardsList = result
  },
}
</script>

<style lang="scss" scoped>
.cards-creators {
  max-width: 76.875rem;
  padding: 10rem 0.9375rem 1.875rem 0.9375rem;
  margin: 0 auto;
  &__inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 1.875rem;
    @media (max-width: 61.9988rem) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 47.9988rem) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 29.6875rem) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
