<template>

<v-main>

<v-row no-gutters>
    <v-col fluid cols="2"></v-col>
    <v-col fluid cols="12">
      <Materias v-for="c in 10" :key="c" />
    </v-col>

    <v-col fluid cols="3"></v-col>
  </v-row>

</v-main>
</template>

<script>
import Materias from '../views/Materias.vue'
export default{
    name: 'loop',
    components: {
    Materias
          }
      }
