<template>
  <div class="header" style="margin-top: 100px;">
    <h1 style="color: #384FFE; margin-top: 0;">CREA UNA CUENTA</h1>
    <form>
      <input id="correo_institucional" type="email" placeholder="Correo Institucional" class="login-input" style="border: 2px solid #384FFE; border-radius: 10px; color: black; margin-bottom: 20px; padding: 10px; width: 300px;">
      <input id="contrasena" type="password" placeholder="Contraseña" class="login-input" style="border: 2px solid #384FFE; border-radius: 10px; color: black; margin-bottom: 20px; padding: 10px; width: 300px;">
      <button type="button" class="login-button" @click="logIn">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat"

export default {
  name: 'HomePage',

  methods: {
    async logIn() {
      const correo_institucional = document.getElementById('correo_institucional').value
      const contrasena = document.getElementById('contrasena').value

      if (!correo_institucional || !contrasena) {
        alert('Por favor complete todos los campos.')
        return
      }

      try {
        await firebase.auth().signInWithEmailAndPassword(correo_institucional, contrasena)
        alert('Inicio de sesión exitoso')
        // Redirect the user to the dashboard page
        this.$router.push('/User')
      } catch (error) {
        console.error('Error al iniciar sesión:', error)
        alert('Ocurrió un error al iniciar sesión.' + error.message)
      }
    }
  }
}
</script>

<style>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
.login-input {
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  border: 2px solid #384FFE;
  color: black;
  margin-bottom: 20px;
}
.login-button {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #384FFE;
  color: white;
}
.login-button:hover {
  background-color: #263F96;
}
.login-button:focus {
  outline: none;
}
</style>
