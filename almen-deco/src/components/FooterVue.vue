<template>
    <div class="footer-vue">
      <footer>
        <div class="footer-section logo">
          <p>-A-</p>
        </div>
        <div class="footer-section">
          <p>&copy; 2023 Almendra Decoraciones - Nogolí, San Luis</p>
          <p>blackSheep_dev</p>
        </div>
        <div class="footer-section social">
          <h2>SÍGUENOS</h2>
          <div class="social-icons">
            <a href="https://www.facebook.com" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook']" size="1x" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']" size="1x" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <font-awesome-icon :icon="['fab', 'instagram']" size="1x" />
            </a>
            <a href="https://wa.me/your-phonenumber" target="_blank">
              <font-awesome-icon :icon="['fab', 'whatsapp']" size="1x" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
  
  library.add(faFacebook, faTwitter, faInstagram, faWhatsapp);
  
  export default {
    name: 'FooterVue',
    components: {
      FontAwesomeIcon
    }
  };
  </script>
  
  <style scoped>
  .footer-vue {
    background-color: #3b3b37;
  }
  
  footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
  }
  
  .footer-section {
    color: #bcb78a;
    text-align: center;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-section.logo p {
    font-size: 2rem;
    font-family: 'Times New Roman', Times, serif;
  }
  
  .social {
    order: 3;
  }
  
  .social h2 {
    color: #bcb78a;
  }
  
  .social-icons {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  
  .social-icons a {
    cursor: pointer;
    text-decoration: none;
    font-size: 24px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    border-radius: 50%;
  }
  
  .social-icons a:focus {
    outline: none;
    box-shadow: 0 0 3px 2px rgba(255, 255, 255, 0.5);
  }
  
  
  @media (max-width: 850px) {
    footer {
      flex-direction: column;
    }
  
    .footer-section {
      margin: 0.5rem;
    }
  }
  </style>
  