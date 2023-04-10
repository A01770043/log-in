<template>
  <div class="header" style="margin-top: 100px;">
    <h1 style="color: #384FFE">INICIO DE SESIÓN</h1>
    <form>
      <input id="email" type="email" placeholder="correo institucional" class="login-input" style="border: 2px solid #384FFE; border-radius: 10px; color: black; margin-bottom: 20px; padding: 10px; width: 300px;">
      <input id="password" type="password" placeholder="contraseña" class="login-input" style="border: 2px solid #384FFE; border-radius: 10px; color: black; margin-bottom: 20px; padding: 10px; width: 300px;">
      <button type="submit" class="login-button">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
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
  box-shadow: 0 0 0 3px #AED6FF;
}
</style>
