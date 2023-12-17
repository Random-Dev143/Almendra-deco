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
          <li class="nav-item">
            <router-link class="nav-link" to="/carro">Carro</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
#logo {
  font-size: xx-large;
  color: rgb(0, 0, 0);
  font-family:'Times New Roman', Times, serif;
}

.navbar {
  padding: 10px 20px;
  margin-top: 10px;
  position: sticky;
  top:0;
  z-index: 3;
}

.navbar-nav .nav-item {
  margin-right: 15px;
}

li {
  cursor: pointer;
  transition: 0.4s ease-in-out;
}

li:hover{
  background-color: rgb(255, 194, 171);
  scale: 1.2;
}

.nav-link{
  font-size: 1.2rem;
}


</style>
