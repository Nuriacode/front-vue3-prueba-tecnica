<template>
  <router-view>
    <div class="container">
      <button class="" v-on:click="nuevo()">Nuevo Libro</button>
      <v-table class="">
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Título</th>
            <th class="text-left">Resumen</th>
            <th class="text-left">Copias</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="libros in Listalibros"
            :key="libros.id"
            v-on:click="editar(libros.id)"
          >
            <td>{{ libros.id }}</td>
            <td>{{ libros.title }}</td>
            <td>{{ libros.body }}</td>
            <td>{{ libros.userId }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </router-view>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";
export default {
  name: "DashBoard",
  data() {
    return {
      Listalibros: null,
    };
  },
  components: {},
  methods: {
    editar(id) {
      this.$router.push("/editar/" + id);
    },
    nuevo() {
      this.$router.push("/nuevo/");
    },
  },
  mounted: function () {
    let direction = "https://jsonplaceholder.typicode.com/posts";
    axios.get(direction).then((libros) => {
      console.log(libros.data);
      this.Listalibros = libros.data;
    });
  },
};
</script>
