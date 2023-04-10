<template>
    <div class="header" style="margin-top: 100px;">
      <h1 style="color: #384FFE; margin-top: 0;">CREA UNA CUENTA</h1>
      <form>
        <input id="nombre_completo" type="text" placeholder="Nombre Completo" class="login-input" style="border: 2px solid #384FFE; border-radius: 10px; color: black; margin-bottom: 20px; padding: 10px; width: 300px;">
        <input id="matricula" type="text" placeholder="Matrícula" class="login-input" style="border: 2px solid #384FFE; border-radius: 10px; color: black; margin-bottom: 20px; padding: 10px; width: 300px;">
        <input id="correo_institucional" type="email" placeholder="Correo Institucional" class="login-input" style="border: 2px solid #384FFE; border-radius: 10px; color: black; margin-bottom: 20px; padding: 10px; width: 300px;">
        <input id="correo_personal" type="email" placeholder="Correo Personal" class="login-input" style="border: 2px solid #384FFE; border-radius: 10px; color: black; margin-bottom: 20px; padding: 10px; width: 300px;">
        <input id="contrasena" type="password" placeholder="Contraseña" class="login-input" style="border: 2px solid #384FFE; border-radius: 10px; color: black; margin-bottom: 20px; padding: 10px; width: 300px;">
        <input id="confirmar_contrasena" type="password" placeholder="Confirmar Contraseña" class="login-input" style="border: 2px solid #384FFE; border-radius: 10px; color: black; margin-bottom: 20px; padding: 10px; width: 300px;">
        <div style="display: flex; align-items: center; margin-bottom: 20px;">
          <input id="aceptar_terminos" type="checkbox" style="margin-right: 10px;">
          <label for="aceptar_terminos" style="color: grey;">Acepto términos y condiciones</label>
        </div>
        <button type="submit" class="login-button" @click="signUp">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script>
  import firebase from "firebase/compat"
  
  export default {
    name: 'signup',
  
    methods: {
      async signUp() {
        // Get form data
        const nombre_completo = document.getElementById('nombre_completo').value
        const matricula = document.getElementById('matricula').value
        const correo_institucional = document.getElementById('correo_institucional').value
        const correo_personal = document.getElementById('correo_personal').value
        const contrasena = document.getElementById('contrasena').value
        const confirmar_contrasena = document.getElementById('confirmar_contrasena').value
        const aceptar_terminos = document.getElementById('aceptar_terminos').checked
  
        // Validate form data
        if (!nombre_completo || !matricula || !correo_institucional || !correo_personal || !contrasena || !confirmar_contrasena || !aceptar_terminos) {
          alert('Por favor complete todos los campos.')
          return
        }
        if (contrasena !== confirmar_contrasena) {
          alert('Las contraseñas no coinciden.')
          return
        }
  
        // Send data to Firestore
        try {

            await firebase.auth().createUserWithEmailAndPassword(correo_institucional,contrasena)
            await firebase.firestore().collection('usuarios').doc(firebase.auth().currentUser.uid).set({
            nombre_completo,
            matricula,
            correo_institucional,
            correo_personal,
            contrasena
          })
          console.log('Usuario registrado con ID:')
          alert('Usuario registrado con éxito.')
        } catch (error) {
          console.error('Error al registrar usuario:', error)
          alert('Ocurrió un error al registrar el usuario.' + error.message)
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