<script setup>
import LogoTitle from '@/components/templates/LogoTitle.vue';
</script>
<template>
  <div class="logo_and_menu">
    <router-link to="/">
        <LogoTitle />
      </router-link>
      <div class="divider" />
      <div class="menu">
      <router-link to="/">
        <i class="icon mdi mdi-account-circle-outline" /> Perfil
      </router-link>
      <router-link to="/">
        <i class="icon mdi mdi-cart-outline" /> Carrinho
      </router-link>
      <router-link to="/login">
        <i class="icon mdi mdi-account" /> Login
      </router-link>
      <router-link to="/categorias">
        <i class="icon mdi mdi-car-multiple" /> Categorias
      </router-link>
      <router-link to="/acessorios">
        <i class="icon mdi mdi-list-box" /> Acessórios
      </router-link>
      <router-link to="/cores">
        <i class="icon mdi mdi-palette" /> Cores
      </router-link>
      <router-link to="/marcas">
        <i class="icon mdi mdi-car-info" /> Marcas
      </router-link>
    </div>
  </div>
</template>
<style scoped>

.button {
  border-color: #ffffff;
}

.icon {
  font-size: 2rem;
  align-self: center;
}

.divider {
  margin-top: 1rem;
  border-top: 1px solid #ffffff;
}

.menu {
  padding: 3rem;
  padding-top: 0;
}

.menu a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  gap: 1rem;
  font-size: 1.3rem;
  margin-top: 2.2rem;
}

.button {
  border: transparent;
}
.logo_and_menu {
  text-decoration: none;
}
</style>