<template>
    <v-container fluid class="text-center">
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
              <v-btn to="/" color="primary" small>Inicio</v-btn>
            </v-col>
            <v-col cols="auto" xs="auto">
              <v-btn to="/materias" color="primary" small>Materias</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-app-bar>
  
      <h1 class="mt-8">Inicio de sesión</h1>
  
      <v-form class="mt-8">
        <v-row>
          <v-col cols="12" sm="6" offset-sm="3">
            <v-text-field
              v-model="email"
              label="Correo institucional"
              required
              type="email"
            ></v-text-field>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12" sm="6" offset-sm="3">
            <v-text-field
              v-model="password"
              label="Contraseña"
              required
              type="password"
            ></v-text-field>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12" sm="6" offset-sm="3">
            <v-btn color="primary" block @click="login()">Iniciar sesión</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
  
  <script>

  import { auth } from '@/firebase'
  
  export default {
    name: 'iniciosesion',
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      login() {
        auth.signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            // handle success
            console.log('Logged in successfully')
            this.$router.push('/dashboard')
          })
          .catch(error => {
            // handle error
            console.error(error)
            this.$toast.error(error.message)
          })
      },
    },
  }
  </script>