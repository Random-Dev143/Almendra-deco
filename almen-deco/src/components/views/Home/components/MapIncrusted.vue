<template>
  <div class="map-inscrusted">
    <h1>Próxima feria</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26793.34946239968!2d-66.33518486591299!3d-32.92014127870033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d458d4a7e6383f%3A0x1ad718835c6e50b4!2sNogol%C3%AD%2C%20San%20Luis!5e0!3m2!1ses!2sar!4v1702780180489!5m2!1ses!2sar" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script>
export default {
    name: "MapIncrusted",

}
</script>

<style scoped>
    div{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1{
        font-size: 2rem;
        font-weight: 400;
    }
</style>