export default (await import('vue')).defineComponent({
name: 'TarjetasCompras',
components: {
AcordeonComp,
},

data() {
return {
productos: [],
categoria: [],
productosFiltrados: [],
categoriasFiltradas: [],
};
},
mounted() {
this.fetchProductos();
},
methods: {
async fetchProductos() {
try {
const response = await fetch('http://localhost:5000/producto');
if (!response.ok) {
throw new Error(`Error al obtener productos. Código de estado: ${response.status}`);
}
const data = await response.json();

this.productos = data;

this.categoria = [...new Set(this.productos.map(producto => producto.categoria))];
} catch (error) {
console.error('Error al obtener productos:', error.message);
}
},

aplicarFiltros(categoriasSeleccionadas) {
this.categoriasFiltradas = categoriasSeleccionadas;
this.productosFiltrados = this.productos.filter(producto => this.categoriasFiltradas.includes(producto.categoria));
},
},
});
