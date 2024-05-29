<template>
    <div class="carro-container">
      <h1>Carro de Compras</h1>
      <div v-if="carro.length === 0" class="carro-vacio">
        <p>No hay productos en el carro</p>
      </div>
      <div v-else>
        <ul class="carro-lista">
          <li v-for="(item, index) in carro" :key="index" class="carro-item">
            <div class="carro-imagen-container">
              <img :src="item.producto.urlimg[0]" alt="Imagen del producto" class="carro-imagen" />
            </div>
            <div class="carro-detalles">
              <h2>{{ item.producto.nombre }}</h2>
              <p>Precio: ${{ item.producto.precio }}</p>
            </div>
            <div class="cantidad-controles">
              <button @click="ajustarCantidad(index, -1)" class="btn-cantidad">-</button>
              <p>{{ item.cantidad }}</p>
              <button @click="ajustarCantidad(index, 1)" class="btn-cantidad">+</button>
            </div>
          </li>
        </ul>
        <div class="carro-total">
          <h3>Total: ${{ total }}</h3>
        </div>
        <div class="carro-acciones">
          <button class="btn-vaciar" @click="vaciarCarro">Vaciar Carro</button>
          <button class="btn-finalizar" @click="finalizarCompra">Finalizar Compra</button>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
import { state } from '@/state';

export default {
  name: 'CarroCompra',
  computed: {
    carro() {
      return state.carro;
    },
    total() {
      return state.carro.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
    },
  },
  methods: {
    ajustarCantidad(index, cantidad) {
      const item = state.carro[index];
      item.cantidad += cantidad;
      if (item.cantidad <= 0) {
        state.carro.splice(index, 1);
      }
    },
    vaciarCarro() {
      state.carro = [];
    },
    finalizarCompra() {
      alert('Compra finalizada');
      state.carro = [];
    },
  },
};
</script>



<style scoped>
.carro-container {
  margin-top: 1rem;
  max-width: 800px;
  margin: 1rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.carro-vacio {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
}

.carro-lista {
  list-style-type: none;
  padding: 0;
}

.carro-item {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  align-items: center;
  margin-bottom: 1.5rem;
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.carro-imagen-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carro-imagen {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.carro-detalles {
  padding-left: 1rem;
}

.carro-detalles h2 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}

.carro-detalles p {
  margin: 0.25rem 0;
  font-size: 1rem;
  color: #555;
}

.cantidad-controles {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
}

.btn-cantidad {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-cantidad:hover {
  background-color: #0056b3;
}

.cantidad-controles p {
  margin: 0;
  font-size: 1rem;
  text-align: center;
  width: 2rem;
}

.carro-total {
  text-align: right;
  margin-top: 1.5rem;
}

.carro-total h3 {
  font-size: 1.8rem;
  color: #333;
}

.carro-acciones {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.btn-finalizar,
.btn-vaciar {
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-finalizar {
  background-color: #007bff;
}

.btn-finalizar:hover {
  background-color: #0056b3;
}

.btn-vaciar {
  background-color: #e09090;
}

.btn-vaciar:hover {
  background-color: #d07070;
}
</style>
