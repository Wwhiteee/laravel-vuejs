new Vue({
  el: '#crud',
  created: function () {
  	this.getKeeps(); //muestra todo lo que el metodo mostrar (index o refresh)
  }, 
  data: {
  	keeps: [],
    newKeep: '',
    errors: [],
  },
  methods: {
  	getKeeps: function (){
  		var urlKeeps = 'task'; //url de controlador
  		axios.get(urlKeeps).then(response =>{
  			this.keeps = response.data
  		});
  	},
    deletekeep: function (keep) {
      var urlDelete = 'task/' + keep.id; //url del controllador destroy
      axios.delete(urlDelete).then(response=>{
        this.getKeeps(); // refresca la vista
        toastr.success('Successfully remove'); //mensaje de eliminado correctamente
      });
    },
    createkeep: function(){
      var urlCreate = 'task';
      axios.post(urlCreate, { 
        keep: this.newKeep
      }).then(response=>{
        this.getKeeps();//si todo sale bien lista
        this.newKeep = ''; //vacia la variable
        this.errors = [];// los errores no se llenan
        $('#create').modal('hide'); //y la venta se oculta
        toastr.success('Successfully created'); //muestra mensaje que todo esta bien
      }).catch(error=>{
        this.errors = error.response.data
      });
    }
  }

});﻿