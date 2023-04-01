<template>


  <v-app>
    <v-app-bar color=#384FFE app>

      <v-img
        src="@/assets/logoTec.png"
        max-height="200"
        max-width="200"
        contain>
      </v-img>
      <v-spacer></v-spacer>
        <v-form>
      <v-row class="justify-end">
        <v-btn to="/" color="primary">Inicio</v-btn>
        <v-btn to="/materias" color="primary">Materias</v-btn>
      </v-row>
      </v-form>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>    
    
  </v-app>
</template>

<script>
import HomePage from './views/HomePage.vue'
import Materias from './views/Materias.vue';
import loop from './views/loop.vue';

  export default {
    name: 'App',

    components: {
    HomePage,
    Materias,
    loop
},

    data() {
      return {
                  
              }
    },
  }
</script>


