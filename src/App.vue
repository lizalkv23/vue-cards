<template>
  <card-view />
</template>

<script>
import CardView from "./views/CardView.vue"
export default {
  components: {
    CardView,
  },
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Manrope:300,regular,700);
* {
  padding: 0;
  margin: 0;
  border: 0px;
  box-sizing: border-box;
}
img {
  max-width: 100%;
  vertical-align: top;
}
body {
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  font-family: Manrope;
  width: 100%;
  background: url("@/assets/900.jpg") center/ cover no-repeat;
  z-index: -1;
  &::-webkit-scrollbar {
    width: 0;
  }
}
input,
button {
  font-family: inherit;
  cursor: pointer;
  color: inherit;
}
</style>
