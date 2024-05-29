<template>
  <acordeon-comp :categorias="categoria" @filtros-seleccionados="aplicarFiltros" />
  
  <div class="tarjetas-compras" >
      <TransitionGroup class="row row-cols-1 row-cols-md-2 g-4 justify-content-center align-items-center" name="list" tag="ul">
        <div v-for="producto in productosFiltrados" :key="producto.id" class="card mx-auto" style="width: 18rem">
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
      </TransitionGroup>
  </div>

</template>

<script>
import AcordeonComp from '@/components/views/Compras/components-compras/AcordeonComp.vue';

export default {
  name: 'TarjetasCompras',
  components: {
    AcordeonComp,
  },
  props: {
    category: String,
  },
  data() {
    return {
      productos: [],
      categoria: [],
      productosFiltrados: [],
    };
  },
  mounted() {
  console.log('Prop "category" recibido:', this.category);
  this.fetchProductos();

  // Solo aplicar filtros si se proporciona una categoría inicial que no sea 'default'
  if (this.category && this.category !== 'default') {
    this.aplicarFiltros([this.category]);
  }
},

  methods: {
    async fetchProductos() {
      try {
        const response = await fetch('https://facundorua.pythonanywhere.com/producto');
        if (!response.ok) {
          throw new Error(`Error al obtener productos. Código de estado: ${response.status}`);
        }
        const data = await response.json();

        this.productos = data;
        this.categoria = [...new Set(this.productos.map(producto => producto.categoria))];

        // Si hay una categoría seleccionada, aplicar el filtro al cargar
        if (this.category) {
          this.aplicarFiltros([this.category]);
        } else {
          this.productosFiltrados = [...this.productos]; // Si no hay categoría, mostrar todos los productos
        }
      } catch (error) {
        console.error('Error al obtener productos:', error.message);
      }
    },

    aplicarFiltros(categoriasSeleccionadas) {
  if (categoriasSeleccionadas && categoriasSeleccionadas.length > 0) {
    // Filtrar productos solo si hay categorías seleccionadas
    this.productosFiltrados = this.productos.filter(producto => categoriasSeleccionadas.includes(producto.categoria));
  } else {
    // Mostrar todos los productos si no hay categorías seleccionadas
    this.productosFiltrados = [...this.productos];
  }
},

  },
};
</script>

<style scoped>

.list-move, 
.list-enter-active,
.list-leave-active {
  transition: all 0.8s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}

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
