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
            v-for="paciente in Listapacientes"
            :key="paciente.id"
            v-on:click="editar(paciente.id)"
          >
            <td>{{ paciente.id }}</td>
            <td>{{ paciente.title }}</td>
            <td>{{ paciente.body }}</td>
            <td>{{ paciente.userId }}</td>
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
      Listapacientes: null,
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
    axios.get(direction).then((data) => {
      console.log(data.data);
      this.Listapacientes = data.data;
    });
  },
};
</script>
