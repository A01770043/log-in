<template>
  <v-app>
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
    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>


<script>
import HomePage from './views/User.vue'
import Materias from './views/Materias.vue';

  export default {
    name: 'App',

    components: {
    HomePage,
    Materias,
},

    data() {
      return {
                  
              }
    },
  }
</script>


