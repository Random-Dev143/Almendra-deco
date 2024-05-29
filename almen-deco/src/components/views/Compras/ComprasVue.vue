<template>
  <div>
    <tarjetas-compras :category="category" @producto-seleccionado="mostrarInfoProducto"/>
    <info-product v-if="selectedProductId" :productId="selectedProductId" @agregar-al-carro="agregarAlCarro" @cerrar="selectedProductId = null"/>
  </div>
</template>

<script>
import TarjetasCompras from './components-compras/TarjetasCompras.vue';
import InfoProduct from './components-compras/InfoProduct.vue';
import { agregarAlCarro } from '@/state';

export default {
  name: 'ComprasVue',
  components: {
    TarjetasCompras,
    InfoProduct,
  },
  props: {
    category: String,
  },
  data() {
    return {
      selectedProductId: null,
    };
  },
  methods: {
    mostrarInfoProducto(productId) {
      this.selectedProductId = productId;
    },
    agregarAlCarro(productoInfo) {
      agregarAlCarro(productoInfo);
      this.selectedProductId = null; 
    },
  },
};
</script>

<style scoped>
.compras-container {
  margin-top: 1rem;
}
</style>
