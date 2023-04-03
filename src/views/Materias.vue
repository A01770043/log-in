<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" v-for="(item, index) in items" :key="index">
        <v-card
          class="mx-auto" 
          max-width="600" 
          color="white"
          dark
        >
          <v-card-title class="text-h5 primary--text">
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle class="text-subtitle-h5 black--text">
            {{ item.profesor }}
          </v-card-subtitle>
          <v-card-actions>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-col class="text-right">
                  <v-btn text class="text-button primary--text" v-bind="attrs" v-on="on">
                    Ver Detalles
                  </v-btn>
                </v-col>
              </template>
              <v-card>
                <v-card-title class="primary--text justify-center align-center">
                  {{ item.title }}
                </v-card-title>
                <v-card-text>
                  <p>Profesor: {{ item.profesor }}</p>
                  <p>Salón: {{ item.salon }}</p>
                  <p>Días: {{ item.dias }}</p>
                  <p>Horario: {{ item.horario }}</p>
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
export default {
  name: 'Materias',
  data() {
    return {
      dialog: false,
      items: [
        {
          title: 'Titulo de la materia 1',
          profesor: 'Cristiano Ronaldo',
          salon: 'La Conggeladora',
          dias: 'Lunes, Miércoles & Viernes',
          horario: '7:00-9:00',
        },
        {
          title: 'Titulo de la materia 2',
          profesor: 'Lionel Messi',
          salon: 'La Heladería',
          dias: 'Martes, Jueves & Sábado',
          horario: '10:00-12:00',
        },
        {
          title: 'Titulo de la materia 3',
          profesor: 'Neymar Jr',
          salon: 'La Cafetería',
          dias: 'Lunes, Miércoles & Viernes',
          horario: '14:00-16:00',
        },
      ],
    };
  },
};
</script>

  
  <style>
  p{
      -webkit-text-fill-color: #7B7C9D;
      font-size: 1.5em;
    }
  </style>