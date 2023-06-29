<template>

<h2 class="title">Nuevo Paciente</h2>
<form class="container" v-on:submit.prevent="login">
  <article>
        <label for="id" class="">ID</label>
        <div>
          <input
            type="number"
            name="id"
            id="id"
            class=""
          />
        </div>
      </article>
  <div>
    <form action="" class="">
      <div class="">
        <label for="title" class="control-label col-sm-2">Nombre</label>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            class=""
          />
        </div>
      </div>
      <div>
        <label for="body" class="">Resumen</label>
        <div>
          <input
            type="text"
            class=""
            name="body"
            id="body"
          />
        </div>
      </div>
      <div>
        <label for="userID" class="">Copias</label>
        <div>
          <input
            type="text"
            class=""
            name="userID"
            id="userID"
          />
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-primary" v-on:click="guardar()">
          Guardar
        </button>
        <button type="button" class="btn btn-dark margen" v-on:click="salir()">
          Salir
        </button>
      </div>
    </form>
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
         userId: ""
      },
    };
  },
  methods: {
    async guardar() {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', (this.form)) 
        console.log(response)
      } 
      catch(error) {
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
.container{
  display: flex;
  flex-direction: column;
  height: 84vh;
  h2{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  align-self: center;
  article{
    align-self: center;
    align-content: center;
    align-items: center;
   
  }
}
}
</style>
