<template>
  <h2 class="title">Insertar Nuevo Libro</h2>
  <form class="container" v-on:submit.prevent="login">
    <div class="inputs">
      <label for="id" class="">ID</label>
      <input type="number" name="id" id="id" />
    </div>
    <div class="inputs">
      <label for="title" class="control-label col-sm-2">Nombre</label>
      <input type="text" name="title" id="title" class="" />
    </div>
    <div class="inputs">
      <label for="body" class="">Resumen</label>
      <input type="text" class="" name="body" id="body" />
    </div>
    <div class="inputs">
      <label for="userID" class="">Copias</label>
      <input type="text" class="" name="userID" id="userID" />
    </div>
    <div class="buttons">
      <button type="button" class="btn btn-primary" v-on:click="guardar()">
        Guardar
      </button>
      <button type="button" class="btn btn-dark margen" v-on:click="salir()">
        Salir
      </button>
    </div>
  </form>
</template>
<script>
import axios from "axios";
export default {
  name: "NuevoUsuario",
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
    async guardar() {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          this.form
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    salir() {
      this.$router.push("/dashboard/");
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: rgb(246, 131, 150);
  text-align: center;
  margin-top: 50px;
  margin-bottom: -100px;
}
.container {
  display: flex;
  flex-direction: column;
  height: 89vh;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  justify-content: center;
  align-content: center;
  align-items: center;

  .inputs {
    display: flex;
    flex-direction: column;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    gap: 5px;
    width: 200px;
    margin-bottom: 10px;
    input {
      border-radius: 5px;
      height: 25px;
    }
  }
}

.buttons {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  height: 25px;
  border-radius: 7px;
  width: 150px;
}
</style>
