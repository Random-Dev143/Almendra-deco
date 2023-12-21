<template>
  <div class="hero-products mt-2 mb-4">
    <div v-if="!cargando && !error" class="background-overlay" :style="{ height: '100vh', padding: '20px', backgroundImage: 'url(' + heros[0].img + ')', backgroundSize: 'cover', backgroundPosition: 'center' }">
      <div v-for="(hero, index) in heros" :key="index" class="contenedor-texto d-flex align-items-center overflow-hidden p-3 p-md-5 m-md-3 text-center" >
        <div class="d-flex flex-column align-items-center col-md-6 mx-auto my-5 w-100">
          <div class="overlay-texto" :style="{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }">
            <h1 class="p-2 fw-bold text-light">{{ hero.titulo }}</h1>
            <h3 class="p-2 fw-normal mb-3 text-light">{{ hero.texto }}</h3>
            <div class="container fw-bold w-auto">
              <a class="icon-link" style="padding: 20px;" href="#">
                Mas Info
                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
              </a>
              <a class="icon-link" href="#">
                Comprar $$
                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="cargando" class="text-center">Cargando...</div>
    <div v-if="error" class="text-center text-danger">Error al cargar los datos</div>
  </div>
</template>

<script>
export default {
  name: "HeroProducts",
  data() {
    return {
      url: 'http://localhost:5000/hero',
      heros: [],
      cargando: true,
      error: false,
    };
  },

  mounted() {
    this.fetchData(this.url);
  },

  methods: {
    async fetchData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();

        this.heros = data;
        this.cargando = false;
      } catch (err) {
        console.log(err);
        this.error = true;
      }
    },
  },
};
</script>

<style>
.hero-products {
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
}

.background-overlay {
  display: flex;
  justify-content: center;
}

.overlay-texto {
  background-size: cover;
  background-position: center;
}

.icon-link {
  font-size: 1.5rem;
  color: rgb(247, 219, 187); 
  text-decoration: none;
}
</style>
