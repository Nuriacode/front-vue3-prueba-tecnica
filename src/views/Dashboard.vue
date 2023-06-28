<template>
  <router-view>
    <div class="container">
      <button class="" v-on:click="nuevo()">Nuevo Paciente</button>
      <v-table class="">
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Nombre</th>
            <th class="text-left">Apellido</th>
            <th class="text-left">Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="paciente in Listapacientes"
            :key="paciente.id"
            v-on:click="editar(paciente.id)"
          >
            <td>{{ paciente.id }}</td>
            <td>{{ paciente.first_name }}</td>
            <td>{{ paciente.last_name }}</td>
            <td>{{ paciente.email }}</td>
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
    let direction = "https://reqres.in/api/users";
    axios.get(direction).then((data) => {
      console.log(data.data.data);
      this.Listapacientes = data.data.data;
    });
  },
};
</script>
