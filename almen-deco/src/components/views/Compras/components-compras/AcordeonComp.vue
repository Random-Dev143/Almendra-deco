<template>
  <div class="acordeon-vue">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            Filtros
          </button>
        </h2>
        <div class="row">
          <div class="col">
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="d-flex justify-content-between align-items-center w-100">
                  <div v-if="categorias && categorias.length">
                    <div class="d-inline-flex align-items-center" v-for="categoria in categorias" :key="categoria">
                      <input type="checkbox" :id="categoria" :value="categoria" v-model="categoriasSeleccionadas"
                        @change="handleCheckboxChange(categoria)">
                      <label :for="categoria">{{ categoria }}</label>
                    </div>
                  </div>
                  <div v-else>
                    <p>No hay categorías disponibles.</p>
                  </div>
                  <button class="btn btn-outline-success" type="submit">Aplicar Filtros</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'AcordeonVue',
  data() {
    return {
      productos: [], 
      categorias: [], 
      categoriasSeleccionadas: [], 
      filtrosSeleccionados: [],
    };
  },
  async mounted() {
    await this.fetchProductos();
    this.obtenerCategorias(); 
    this.filtrosSeleccionados = []; 
  },

  methods: {
    async fetchProductos() {
      try {
        const response = await fetch('http://localhost:5000/producto'); 
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        this.productos = await response.json();
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    },
    obtenerCategorias() {
      
      this.categorias = [...new Set(this.productos.map(producto => producto.categoria))];
    },

    handleCheckboxChange(categoriaSeleccionada) {
     
      this.filtrosSeleccionados = this.filtrosSeleccionados || [];

      if (this.categoriasSeleccionadas.includes(categoriaSeleccionada)) {
       
        this.filtrosSeleccionados = this.filtrosSeleccionados.filter(filtro => filtro !== categoriaSeleccionada);
      } else {
        
        this.filtrosSeleccionados.push(categoriaSeleccionada);
      }
    },

  },

};
</script>

<style>
input {
  margin: 1rem;
}
</style>
