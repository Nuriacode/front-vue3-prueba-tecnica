<template>
  <h2>Editar Información Libro</h2>
  <div class="container">
    <form action="" class="">
      <div class="">
        <label for="id" class="">ID</label>
        <div>
          <input type="number" name="id" v-model="form.id" class="" />
        </div>
      </div>
      <div class="">
        <label for="title" class="">Nombre</label>
        <div>
          <input type="text" name="title" v-model="form.title" class="" />
        </div>
      </div>
      <div class="">
        <label for="body" class="">Resumen</label>
        <div>
          <input type="text" class="" name="body" v-model="form.body" />
        </div>
      </div>
      <div class="">
        <label for="userID">Copias</label>
        <div>
          <input type="text" v-model="form.userId" name="userID" id="userID" />
        </div>
      </div>
      <div class="">
        <button type="button" class="btn btn-primary" v-on:click="editar()">
          Editar
        </button>
        <button type="button" class="" v-on:click="eliminar()">Eliminar</button>
        <button type="button" class="" v-on:click="salir()">Salir</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "EditarUsuario",
  data: function () {
    return {
      form: {
        id: "",
        title: "",
        body: "",
        userId: "",
      },
    };
  },
  methods: {
    async editar() {
      try {
        const id = this.form.id;
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/users/` + id,
          this.form
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    salir() {
      this.$router.push("/dashboard");
    },
    async eliminar() {
      try {
        await axios.delete(
          "https://jsonplaceholder.typicode.com/users/" + this.form.id
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted: async function () {
    this.form.id = this.$route.params.id;
    const data = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + this.form.id
    );
    console.log(data);
    console.log(this.form);
    this.form.id = data.data.id;
    this.form.title = data.data.title;
    this.form.body = data.data.body;
    this.form.userId = data.data.userId;
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 84vh;
  h2 {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    align-self: center;
    article {
      align-self: center;
      align-content: center;
      align-items: center;
    }
  }
}
</style>
