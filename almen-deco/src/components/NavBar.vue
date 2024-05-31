<template>
  <div class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <a class="navbar-brand" href="#">
        <span id="logo">-A-</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to= "{name:'ComprasVue'}">Productos</router-link>
          </li>
          <li class="nav-item position-relative">
            <router-link class="nav-link" to="/carro">
              Carro
              <div v-if="carroCantidad > 0" class="carro-cantidad">{{ carroCantidad }}</div>
            </router-link>
            <div v-if="carroTotal > 0" class="carro-total">${{ carroTotal }}</div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to= "{name:'CrudVue'}">CRUD</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
import { state } from '@/state';

export default {
  name: 'NavBar',
  computed: {
    carroCantidad() {
      return state.carro.reduce((acc, item) => acc + item.cantidad, 0);
    },
    carroTotal() {
      return state.carro.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0).toFixed(2);
    },
  },
};
</script>


<style scoped>
#logo {
  font-size: xx-large;
  color: rgb(0, 0, 0);
  font-family: 'Times New Roman', Times, serif;
}

.navbar {
  padding: 10px 20px;
  margin-top: 10px;
  position: sticky;
  top: 0;
  z-index: 3;
}

.navbar-nav .nav-item {
  margin-right: 15px;
}

li {
  cursor: pointer;
  transition: 0.4s ease-in-out;
}

li:hover {
  background-color: rgb(255, 194, 171);
  transform: scale(1.2);
}

.nav-link {
  font-size: 1.2rem;
  position: relative;
}

.position-relative {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carro-cantidad {
  position: absolute;
  top: -8px;
  right: -15px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8rem;
  font-weight: bold;
}

.carro-total {
  margin-top: 10px;
  font-size: 0.75rem;
  color: gray;
  text-align: center;
}
</style>
