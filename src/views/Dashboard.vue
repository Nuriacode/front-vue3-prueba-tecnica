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
  mounted: async function () {
    let direction = "https://jsonplaceholder.typicode.com/posts";

    const libros = await axios.get(direction);
    this.Listalibros = libros.data;
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  button {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 120px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    border-radius: 5px;
    background-color: rgb(210, 240, 165);
  }
  v-table {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 13px;
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
