<template>
<h2>Nuevo Paciente</h2>
  <div class="">
        <label for="id" class="">ID</label>
        <div>
          <input
            type="number"
            name="id"
            id="id"
            class=""
          />
        </div>
      </div>
  <div class="container">
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
      <div class="">
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
      <div class="">
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
      <!-- <div class=""> -->
        <!-- <div class="">
            <label for="" class="control-label col-sm-3">Correo</label>
            <div class="">
              <input
                type="text"
                class=""
                name="correo"
                id="correo"
                v-model="form.correo"
              />
            </div>
          </div> -->
        <!-- <div class="col">
            <label for="" class="control-label col-sm-5">codigo Postal</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="codigopostal"
                id="codigopostal"
                v-model="form.codigoPostal"
              />
            </div>
          </div>
        </div> -->
        <!-- <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-2">Genero</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="genero"
                id="genero"
                v-model="form.genero"
              />
            </div>
          </div> -->
        <!-- <div class="col">
            <label for="" class="control-label col-sm-2">Telefono</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="telefono"
                id="telefono"
                v-model="form.telefono"
              />
            </div>
          </div>
        </div> -->
        <!-- <div class="form-group left">
          <label for="" class="control-label col-sm-2">Fecha nacimiento</label>
          <div class="col-sm-4">
            <input
              type="text"
              class="form-control"
              name="fechanacimineto"
              id="telefono"
              v-model="form.fechaNacimiento"
            />
          </div>
        </div> -->
        <!-- <div class="col">
          <label for="" class="control-label col-sm-2">DNI</label>
          <div class="col-sm-7">
            <input
              type="text"
              class="form-control"
              name="dni"
              id="dni"
              v-model="form.dni"
            />
          </div> -->
      <!-- </div> -->
      <div class="">
        <button type="button" class="btn btn-primary" v-on:click="guardar()">
          Guardar
        </button>
        <button type="button" class="btn btn-dark margen" v-on:click="salir()">
          Salir
        </button>
      </div>
    </form>
  </div>
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
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', (this.form),
        // console.log(response)
      )}
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
