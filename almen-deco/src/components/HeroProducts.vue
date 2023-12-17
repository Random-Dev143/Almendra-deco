<template>
  <div class="hero-products">
    <div class="background-overlay">
      <div class="d-flex align-items-center overflow-hidden p-3 p-md-5 m-md-3 text-center "  style="height: 100vh; padding: 20px;">
        <div class="d-flex flex-column align-items-center col-md-6 mx-auto my-5 bg-black bg-gradient" style="--bs-bg-opacity: .5;">
          <h1 class="p-2 fw-bold text-light">Designed for engineers</h1>
          <h3 class="p-2 fw-normal mb-3 text-light">Build anything you want with Aperture</h3>
          <div class="d-flex gap-3 justify-content-center lead fw-normal">
            <a class="icon-link" style="padding: 20px;" href="#">
              Learn more
              <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
            </a>
            <a class="icon-link" href="#">
              Buy
              <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
            </a>
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

</style>
