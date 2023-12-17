<template>
  <div class="hero-products mt-2 mb-4">
    <div class="background-overlay">
      <div class="contenedor-texto d-flex align-items-center overflow-hidden p-3 p-md-5 m-md-3 text-center" style="height: 100vh; padding: 20px;">
        <div class="d-flex flex-column align-items-center col-md-6 mx-auto my-5  w-100">
          <div class="overlay-texto" style="background-color: rgba(0, 0, 0, 0);">
            <h1 class="p-2 fw-bold text-light">{{ titulo }}</h1>
            <h3 class="p-2 fw-normal mb-3 text-light">{{ texto }}</h3>
            <div class="container fw-bold w-auto">
              <a class="icon-link" style="padding: 20px;" href="#">
                Mas Info
                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
              </a>
              <a class="icon-link" href="#">
                Comprar $$
                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroProducts",
  data() {
    return {
      heroimage: "https://i.postimg.cc/fLrsjB1g/image-4-1200.jpg",
      titulo: "FIESTAS NAVIDEÑAS OFERTAS %$$$",
      texto: "Comprá pinos para tenerlos guardados todo el año"
    };
  },
};
</script>

<style>
.hero-products {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("https://i.postimg.cc/fLrsjB1g/image-4-1200.jpg");
  background-size: cover;
  background-position: center;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.overlay-texto {
  background-color: rgba(0, 0, 0, 0.5);
}

.icon-link {
  font-size: 1.5rem;
  color: rgb(247, 219, 187); 
  text-decoration: none;
}
</style>
