<template>
  <header class="header">
    <div class="header__body">
      <router-link to="/" class="header__logo">
        <img src="@/assets/header/logo.png" alt="logo" />
      </router-link>
      <div class="header__menu menu">
        <nav class="menu__body">
          <router-link :to="{ name: 'card-view' }" class="menu__link"
            ><img src="@/assets/header/login.png" alt="" />
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: #383140d5;
  padding: 0.625rem;
  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 90rem;
    margin: 0 auto;
  }
  &__logo {
    img {
      max-width: 15rem;
      max-height: 5rem;
    }
    position: relative;
    z-index: 5;
  }
}
.menu {
  &__body {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    flex-wrap: wrap;
  }
  &__link {
    transition: filter 0.4s;
    img {
      max-width: 2.1875rem;
      max-height: 2.1875rem;
      @media (any-hover: hover) {
        &:hover {
          filter: drop-shadow(2px 2px 2px #0000);
        }
      }
    }
  }
}
</style>
