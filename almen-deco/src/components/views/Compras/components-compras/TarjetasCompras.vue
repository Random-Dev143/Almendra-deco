<template>
    <div class="tarjetas-compras d-flex flex-wrap justify-content-around">
      <div class="card mb-3 ml-2 mr-2" v-for="(product, index) in products" :key="index" style="width: 18rem;">
        <img :src="product.image" class="card-img-top" alt="Product Image" />
        <div class="card-body text-center">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <a :href="product.link" class="btn btn-custom">Ver +</a>
        </div>
      </div>
    </div>
  </template>
  
    <script>
    export default {
      name: 'TarjetasCompras',
      data() {
        return {
          products: [
            {
              title: 'Product 1',
              description: 'Reciclados.',
              image: 'https://i.postimg.cc/XJJ3CT1C/pinos.jpg',
              link: '#',
            },
            {
              title: 'Product 2',
              description: 'Tejidos.',
              image: 'https://i.postimg.cc/XJJ3CT1C/pinos.jpg',
              link: '#',
            },
            {
              title: 'Product 3',
              description: 'Madera.',
              image: 'https://i.postimg.cc/XJJ3CT1C/pinos.jpg',
              link: '#',
            },
            {
              title: 'Product 4',
              description: 'Fumada cosmica.',
              image: 'https://i.postimg.cc/XJJ3CT1C/pinos.jpg',
              link: '#',
            },
        
          ],
        };
      },
    };
    </script>
    
    <style scoped>
  .categories-products {
    padding: 10px;
  }
  .card {
    background-color: #edf1ee;
  }
  img {
    padding: 5px;
    object-fit: cover;
  }
  .btn-custom {
    background-color: #bc9c8e;
    border-color: #bc9c8e;
    color: #ffffff; /* Color del texto */
  }
  
  .btn-custom:hover {
    background-color: #7c5e44;
    border-color: #7c5e44;
  }
  </style>