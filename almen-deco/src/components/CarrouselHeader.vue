<template>
  <div class="carrousel-header">
    <div class="logo-container">
      <img class="logo" src="https://i.postimg.cc/VkdxWtFP/logo-con-fondo2.png" alt="almen-deco logo">
    </div>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-inner">
          <div v-for="(item, index) in carrouseles" :key="item.id"
            :class="{ 'carousel-item': true, 'active': index === 0 }">
            <img :src="item.urlimg" class="d-block w-100" alt="Slide">
            <div class="carousel-caption d-none d-md-block">
              <h1>{{ item.titulo }}</h1>
              <h4>{{ item.subtitulo }}</h4>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "CarrouselHeader",
  data() {
    return {
      url: 'http://localhost:5000/carrousel',
      carrouseles: [],
      cargando: true,
      error: false,
    }
  },

  mounted() {
    this.fetchData(this.url)
  },

  methods: {
    async fetchData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();

        this.carrouseles = data;
        this.cargando = false;
      } catch (err) {
        console.log(err);
        this.error = true;
      }
    },

  }



}


</script>
  
<style scoped>
.carrousel-header {
  max-height: 100vh;
  margin: 0 auto;
  position: relative;
}

.logo-container {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: top 0.3s ease;
}

.logo {
  max-width: 60%;
  height: auto;
  filter: brightness(1);
  transition: max-width 0.3s ease;
}

img {
  max-height: 85vh;
  min-height: 200px;
  object-fit: cover;
  transition: all 0.3s ease;
  filter: brightness(0.7);
}

.carousel-caption {
  color: rgb(231, 213, 241);
  font-size: 20px;
  font-weight: 700;
  backdrop-filter: blur(8px);
  background-color: rgba(10, 10, 10, 0.219);
}

@media (max-width: 767px) {
  .logo-container {
    top: 50%;
  }
}
</style>

  
