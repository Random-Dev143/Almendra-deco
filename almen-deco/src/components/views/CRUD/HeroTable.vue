<template>
    <div>
      <table class="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Texto</th>
            <th>Título</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hero in heroes" :key="hero.id">
            <td>{{ hero.id }}</td>
            <td><img :src="hero.img" alt="Hero Image" class="hero-image" /></td>
            <td v-if="!hero.isEditing">{{ hero.texto }}</td>
            <td v-else><input v-model="hero.texto" /></td>
            <td v-if="!hero.isEditing">{{ hero.titulo }}</td>
            <td v-else><input v-model="hero.titulo" /></td>
            <td>
              <button v-if="!hero.isEditing" @click="enableEdit(hero)" class="edit-button">Modificar</button>
              <button v-else @click="updateHero(hero)" class="save-button">Guardar</button>
              <button v-if="hero.isEditing" @click="cancelEdit(hero)" class="cancel-button">Cancelar</button>
              <button @click="deleteHero(hero.id)" class="delete-button">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="add-hero-form">
        <input v-model="newHero.titulo" placeholder="Título" />
        <input v-model="newHero.texto" placeholder="Texto" />
        <input v-model="newHero.img" placeholder="Imagen URL" />
        <button @click="addHero" class="add-button">Agregar Hero</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        heroes: [],
        newHero: {
          titulo: '',
          texto: '',
          img: ''
        },
        apiUrl: 'https://facundorua.pythonanywhere.com/hero'
      };
    },
    methods: {
      fetchHeroes() {
        fetch(this.apiUrl)
          .then(response => response.json())
          .then(data => {
            this.heroes = data.map(hero => ({
              ...hero,
              isEditing: false,
            }));
          })
          .catch(error => {
            console.error('Error fetching heroes:', error);
          });
      },
      enableEdit(hero) {
        hero.isEditing = true;
      },
      cancelEdit(hero) {
        hero.isEditing = false;
        this.fetchHeroes(); // Re-fetch data to reset changes
      },
      updateHero(hero) {
        fetch(`${this.apiUrl}/${hero.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            titulo: hero.titulo,
            texto: hero.texto,
            img: hero.img
          })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la actualización del hero');
          }
          return response.json();
        })
        .then(() => {
          hero.isEditing = false;
          this.fetchHeroes();
        })
        .catch(error => {
          console.error('Error updating hero:', error);
        });
      },
      deleteHero(id) {
        fetch(`${this.apiUrl}/${id}`, {
          method: 'DELETE'
        })
        .then(() => {
          this.fetchHeroes();
        })
        .catch(error => {
          console.error('Error deleting hero:', error);
        });
      },
      addHero() {
        fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.newHero)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al crear el hero');
          }
          return response.json();
        })
        .then(data => {
          this.heroes.push({
            ...data,
            isEditing: false
          });
          this.newHero = {
            titulo: '',
            texto: '',
            img: ''
          };
        })
        .catch(error => {
          console.error('Error creating hero:', error);
        });
      }
    },
    created() {
      this.fetchHeroes();
    }
  };
  </script>
  
  <style scoped>
  .styled-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #f2f2f2;
  }
  
  .styled-table th, .styled-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .styled-table th {
    background-color: #e0e0e0;
  }
  
  .hero-image {
    width: 100px;
    height: auto;
  }
  
  .add-hero-form {
    margin-top: 20px;
  }
  
  .add-hero-form input {
    margin-right: 10px;
    padding: 5px;
  }
  
  .edit-button, .save-button, .cancel-button, .delete-button, .add-button {
    padding: 8px 16px;
    border-radius: 15px;
    cursor: pointer;
  }
  
  .edit-button {
    background-color: rgb(240, 240, 157);
  }
  
  .save-button {
    background-color: rgb(139, 241, 139);
  }
  
  .cancel-button, .delete-button {
    background-color: rgb(247, 179, 179);
  }
  
  .add-button {
    background-color: rgb(139, 241, 139);
  }
  </style>
  