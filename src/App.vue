<template>
  <v-app>
    <div v-if="routename=='Home' || routename=='signup'">
    <v-app-bar color="#384FFE" app>
      <v-img src="@/assets/logoTec.png" max-height="200" max-width="200" contain></v-img>
      <v-spacer></v-spacer>
      <v-form>
        <v-row class="justify-end">
          <v-btn to="/" color="primary">Inicio de sesión</v-btn>
          <v-btn to="/signup" color="primary">Registrarse</v-btn>
        </v-row>
      </v-form>
    </v-app-bar>
  </div>
  <div v-if="routename=='Materias' || routename=='User'">
    <v-app-bar color="#384FFE" app>
      <v-img src="@/assets/logoTec.png" max-height="200" max-width="200" contain></v-img>
      <v-spacer></v-spacer>
      <v-form>
        <v-row class="justify-end">
          <v-btn to="/Materias" color="primary">Materias</v-btn>
          <v-btn to="/User" color="primary">User</v-btn>
        </v-row>
      </v-form>
    </v-app-bar>
  </div>
    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>


<script>
import HomePage from './views/HomePage.vue'
import Materias from './views/Materias.vue';

  export default {
    name: 'App',

    components: {
    HomePage,
    Materias,
  },

  computed: {
    routename() {
      return this.$route.name
    }
  },
    data() {
      return {
                  
              }
    },
  }
</script>


