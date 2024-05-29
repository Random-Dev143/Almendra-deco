<template>
  <div class="overlay" @click.self="cerrarComponente">
    <div class="info-product">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(imagen, imgIndex) in producto.urlimg" :key="`imagen-${producto.id}-${imgIndex}`" :class="['carousel-item', { active: imgIndex === 0 }]">
            <img :src="imagen" class="d-block w-100" :alt="`Imagen ${imgIndex + 1}`" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="info">
        <p class="card-categoria">{{ producto.categoria }}</p>
        <h2 class="card-title">{{ producto.nombre }}</h2>
        <p class="card-text">{{ producto.descripcion }}</p>
        <p class="card-text"><strong>Precio:</strong> ${{ producto.precio }}</p>
        <div class="cantidad-container">
          <label for="cantidad">Cantidad:</label>
          <input type="number" id="cantidad" v-model.number="cantidad" min="1" />
        </div>
        <button class="btn-agregar" @click="agregarAlCarro">Agregar al Carro</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoProduct',
  props: {
    productId: Number,
  },
  data() {
    return {
      producto: {},
      cantidad: 1,
    };
  },
  mounted() {
    this.fetchProducto();
    document.addEventListener('keydown', this.handleEsc);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
  },
  methods: {
    async fetchProducto() {
      try {
        const response = await fetch(`https://facundorua.pythonanywhere.com/producto/${this.productId}`);
        if (!response.ok) {
          throw new Error(`Error al obtener producto. Código de estado: ${response.status}`);
        }
        const data = await response.json();
        this.producto = data;
      } catch (error) {
        console.error('Error al obtener producto:', error.message);
      }
    },
    cerrarComponente() {
      this.$emit('cerrar');
    },
    handleEsc(event) {
      if (event.key === 'Escape') {
        this.cerrarComponente();
      }
    },
    agregarAlCarro() {
      this.$emit('agregar-al-carro', { producto: this.producto, cantidad: this.cantidad });
      this.cerrarComponente();
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: 1000;
}

.info-product {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 80vw;
  max-height: 80vh;
  overflow-y: auto;
}

.carousel-inner img {
  border-radius: 10px;
  object-fit: cover;
  max-width: 40vw;
  min-width: 300px;
  height: auto;
}

.info {
  text-align: center;
}

.cantidad-container {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cantidad-container label {
  margin-right: 0.5rem;
}

.card-categoria {
  font-size: 1.2rem;
  color: #007bff;
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.card-text {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.card-text strong {
  font-size: 1.2rem;
  color: #333;
}

.btn-agregar {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.btn-agregar:hover {
  background-color: #0056b3;
}
</style>
