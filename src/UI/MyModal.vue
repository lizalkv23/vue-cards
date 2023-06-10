<template>
  <div :class="show ? 'show' : ''" class="home">
    <my-button class="home__btn" @click="openPage()"> Get Started ✌</my-button>
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton.vue"
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    openPage() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #040007;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.5s;
  &__ {
    border-radius: 0;
    background-color: #f4ed71e1;
  }
  &.show {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
