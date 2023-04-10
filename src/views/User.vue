<template>
  <v-container fluid>
      <center>
     <h1>Información del alumno</h1> 
      <v-img class="student" src="@/assets/juan_escutia.jpg" max-height="200" max-width="200"></v-img>
      <v-container>
          <v-row justify="center" class="pa-2 ma-2">
              <v-col align-self="start">
                  <h2>Nombre Completo</h2>
                  <p>Juan Escutia</p>
              </v-col>
              <v-col align-self="start" class="pa-2 ma-2">
                  <h2>Matrícula</h2>
                  <p>A01361234</p>
              </v-col>
          </v-row>
          <v-row justify="center" class="pa-2 ma-2">
              <v-col align-self="start">
                  <h2>Correo Institucional</h2>
                  <p>A01361234@tec.mx</p>
              </v-col>
              <v-col align-self="start">
                 <h2>Carrera</h2>
                 <p>ISC</p> 
              </v-col>
          </v-row>
          <v-row justify="center" class="pa-2 ma-2">
             <v-col align-self="start">
              <h2>Correo Personal</h2>
              <p>murioporlapatria@gmail.com</p>
             </v-col> 
             <v-col></v-col>
          </v-row>
      </v-container>
  </center>
</v-container>    
</template>
  

<script>

  export default{
          name: 'User',
          data(){
                  return{
                      
                  }
              }
  }

</script>

<style>
.student{
  border-radius: 50%;
}
.data02{
  justify-content: center;
  text-align: center;
}

h1{
  -webkit-text-fill-color: #384FFE;
}

h2{
  -webkit-text-fill-color: #384FFE;
}

p{
  -webkit-text-fill-color: #7B7C9D;
  font-size: 1.5em;
}
</style>