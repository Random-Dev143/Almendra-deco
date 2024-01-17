<template>
  <div class="tarjetas-compras row row-cols-1 row-cols-md-2 g-4 justify-content-center align-items-center" >
    <div v-for="producto in productos" :key="producto.id" class="card mx-auto" style="width: 18rem;">
      <div :id="'carousel-' + producto.id" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(imagen, imgIndex) in producto.urlimg" :key="`imagen-${producto.id}-${imgIndex}`" :class="{ 'carousel-item': true, 'active': imgIndex === 0 }">
            <img :src="imagen" class="d-block w-100" :alt="`Imagen ${imgIndex + 1}`" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel-' + producto.id" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="'#carousel-' + producto.id" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="card-body">
        <p class="card-categoria">{{ producto.categoria }}</p>
        <h5 class="card-title">{{ producto.nombre }}</h5>
        <p class="card-text">{{ producto.descripcion }}</p>
        <p class="card-text"><strong>Precio:</strong> ${{ producto.precio }}</p>
        <a href="#" class="btn btn-primary">+ Info</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarjetasCompras',
  data() {
    return {
      productos: [],
    };
  },
  mounted() {
    this.fetchProductos();
  },
  methods: {
    async fetchProductos() {
      try {
        const response = await fetch('http://localhost:5000/producto');
        const data = await response.json();
        this.productos = data;
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    },
  },
};
</script>

<style scoped>
.tarjetas-compras{
  margin-top: 1rem;
  padding: 1rem;
  margin:1rem;
  max-width: 100%;
}
.card {
  margin: 1rem;
}

.carousel-inner img {
  margin-top: 1rem;
  border-radius:10px;
  min-height: 300px;
  object-fit: cover;
  }

  p{
    margin-bottom: 8px;
  }
</style>
