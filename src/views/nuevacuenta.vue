<template>
    <div>
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
  
      <h1>Crea una cuenta</h1>
      <form @submit.prevent="register">
        <label for="nombre_completo">Nombre Completo:</label><br>
        <input type="text" v-model="nombre_completo" id="nombre_completo" name="nombre_completo"><br>
  
        <label for="matricula">Matrícula:</label><br>
        <input type="text" v-model="matricula" id="matricula" name="matricula"><br>
  
        <label for="correo_institucional">Correo Institucional:</label><br>
        <input type="email" v-model="correo_institucional" id="correo_institucional" name="correo_institucional"><br>
  
        <label for="correo_personal">Correo Personal:</label><br>
        <input type="email" v-model="correo_personal" id="correo_personal" name="correo_personal"><br>
  
        <label for="contraseña">Contraseña:</label><br>
        <input type="password" v-model="contraseña" id="contraseña" name="contraseña"><br>
  
        <label for="confirmar_contraseña">Confirmar Contraseña:</label><br>
        <input type="password" v-model="confirmar_contraseña" id="confirmar_contraseña" name="confirmar_contraseña"><br>
  
        <input type="checkbox" v-model="acepto_terminos" id="acepto_terminos" name="acepto_terminos">
        <label for="acepto_terminos">Acepto términos y condiciones</label><br>
  
        <button type="submit" :disabled="!acepto_terminos">Crear cuenta</button>
      </form>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/app'
  import 'firebase/database'
  import { ref } from 'vue'
  
  export default {
    name: 'nuevacuenta',
    data() {
      return {
        nombre_completo: '',
        matricula: '',
        correo_institucional: '',
        correo_personal: '',
        contraseña: '',
        confirmar_contraseña: '',
        acepto_terminos: false,
      }
    },
  
    methods: {
      register() {
        if (this.contraseña !== this.confirmar_contraseña) {
          alert('Las contraseñas no coinciden')
          return
        }
  
        const usersRef = firebase.database().ref('users')
        usersRef.push({
          nombre_completo: this.nombre_completo,
          matricula: this.matricula,
          correo_institucional: this.correo_institucional,
          correo_personal: this.correo_personal}        