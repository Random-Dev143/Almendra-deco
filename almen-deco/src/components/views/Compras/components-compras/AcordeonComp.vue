<template>
  <div class="acordeon-vue mt-2">
    <div class="row">
      <div class="col">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#acordeon" aria-expanded="false" aria-controls="acordeon">
                Filtros
              </button>
            </h2>
            <div id="acordeon" class="accordion-collapse collapse" aria-labelledby="acordeon" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="d-flex justify-content-between align-items-center w-100">
                  <div v-if="categorias && categorias.length">
                    <div class="d-inline-flex align-items-center" v-for="categoria in categorias" :key="categoria">
                      <input type="checkbox" :id="categoria" :value="categoria" v-model="categoriasSeleccionadas">
                      <label :for="categoria">{{ categoria }}</label>
                    </div>
                  </div>
                  <div v-else>
                    <p>No hay categorías disponibles.</p>
                  </div>
                  <button class="btn btn-outline-success" @click="aplicarFiltros" type="submit">Aplicar Filtros</button>
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
  name: 'AcordeonComp',
  props: {
    categorias: Array,
  },
  data() {
    return {
      categoriasSeleccionadas: [],
      isAcordeonExpanded: false,
    };
  },
  methods: {
    aplicarFiltros() {
      this.$emit('filtros-seleccionados', this.categoriasSeleccionadas);
    }
  },
};
</script>

<style>
input {
  margin: 1rem;
}
</style>
