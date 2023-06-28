<template>
    <router-view>
    <div class="container">
      <button class="" v-on:click="nuevo()">
        Nuevo Paciente
      </button>
      <table class="">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Ciudad</th>
            <th>Teléfono</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="paciente in Listapacientes"
            :key="paciente.login"
            v-on:click="editar(paciente.login.uuid)"
          >
            <th>{{ paciente.login.uuid }}</th>
            <td>{{ paciente.name.first }}</td>
            <td>{{ paciente.location.city }}</td>
            <td>{{ paciente.phone }}</td>
            <td>{{ paciente.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </router-view>
</template>

<script>
import axios from "axios";
export default {
  name: "DashBoard",
  data() {
    return {
      Listapacientes: null,
      pagina: 1,
    };
  },
  components: {
  },
  methods: {
    editar(id) {
      this.$router.push("/editar/" + id);
    },
    nuevo(id) {
      this.$router.push("/nuevo/" + id);
    },
  },
  mounted: function () {
    let direction = "https://randomuser.me/api?results=5&noinfo";
    axios.get(direction).then((data) => {
      console.log(data.data)
      this.Listapacientes = data.data.results;
    });
  },
};
</script>
