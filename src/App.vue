<template>
  <v-app>
    <v-app-bar color="#384FFE" app max-height="64">
      <v-responsive>
        <v-img
          src="@/assets/logoTec.png"
          max-height="100%"
          max-width="200"
          contain
        ></v-img>
      </v-responsive>
      <v-spacer></v-spacer>
      <v-form>
        <v-row class="justify-end" no-gutters>
          <v-col cols="auto" xs="auto">
            <v-btn to="/iniciasesion" color="primary" small>Inicia sesión</v-btn>
          </v-col>
          <v-col cols="auto" xs="auto">
            <v-btn to="/nuevacuenta" color="primary" small>Nueva cuenta</v-btn>
          </v-col>
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
import Materias from './views/Materias.vue'
import iniciosesion from './views/iniciosesion.vue';
import nuevacuenta from './views/nuevacuenta.vue';

export default {
  name: 'App',

  components: {
    HomePage,
    Materias,
    iniciosesion,
    nuevacuenta,
  },

  data() {
    return {}
  },
}
</script>

<style>
.v-btn {
  font-size: 14px;
  padding: 6px 12px;
  margin-left: 8px;
  margin-right: 8px;
}
</style>