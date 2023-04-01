<template> 


  <v-container fluid>
      <v-row dense>
            <v-col cols="12">
              <v-card
              class="mx-auto" 
              max-width="600" 
              color="white"
              dark
              >
                <v-card-title class="text-h5 primary--text">
                  Titulo de la matería
                </v-card-title>
    
                <v-card-subtitle class="text-subtitle-h5 black--text">Profesor Cristiano Ronaldo</v-card-subtitle>
    
                
                <v-card-actions>
                  <v-dialog
                  v-model="dialog"
                  width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-col class="text-right">
                        <v-btn text class="text-button primary--text" v-bind="attrs" v-on="on">
                          Ver Detalles
                        </v-btn>
                      </v-col>
                    </template>
  
            <v-card>
            <v-card-title class="primary--text justify-center align-center">
              Titulo de la Materia
            </v-card-title>
    
            <v-card-text>
              <p>Profesor: Cristiano Ronaldo</p>
              <p>Salón: La Conggeladora</p>
              <p>Días: Lunes, Miércoles & Viernes</p>
              <p>Horaío: 7:00-9:00</p>
            </v-card-text>
    
            <v-divider></v-divider>
    
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
                class="text-button primary--text"
              >
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
  
                  </v-dialog>
                </v-card-actions>
  
              </v-card>
            </v-col>
      </v-row>
  
  </v-container>
  </template>
        
  <script>
      export default{
          name: 'Materias',
      
      data() {
      return {
        dialog: false,
        
      }
    }
  }
  </script>
  
  <style>
  p{
      -webkit-text-fill-color: #7B7C9D;
      font-size: 1.5em;
    }
  </style>