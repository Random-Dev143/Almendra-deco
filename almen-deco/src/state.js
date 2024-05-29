import { reactive } from 'vue';

export const state = reactive({
  carro: [],
});

export const agregarAlCarro = (productoInfo) => {
  state.carro.push(productoInfo);
};
