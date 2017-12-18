new Vue({
  el: '#crud',
  created: function () {
  	this.getKeeps(); //muestra todo lo que el metodo mostrar (index o refresh)
  }, 
  data: {
  	keeps: [],
    newKeep: '',
    paginate: {
        'total': 0, 
        'current_page': 0, 
        'per_page': 0, 
        'last_page': 0, 
        'from': 0, 
        'to': 0 
    },
    fillKeep: {'id': '', 'keep': ''},
    errors: [],
    offset: 3,
  },
  computed:{
    isActived: function (){
      return this.paginate.current_page;

    },
    pagesNumber: function () {
      if (!this.paginate.to) {
        return [];
      }
      var from = this.paginate.current_page-this.offset; //todo
      if (from<1) {
        from = 1;
      }
      var to = from+ (this.offset*2); //todo
      if (to>=this.paginate.last_page) {
        to = this.paginate.last_page;
      }
      var pageArray = [];
      while(from<=to){
        pageArray.push(from);
        from++;
      } return pageArray;
    }
  },
  methods: {
  	getKeeps: function (page){
  		var urlKeeps = 'task?page='+page; //url de controlador
  		axios.get(urlKeeps).then(response =>{
  			this.keeps = response.data.task.data,
        this.paginate = response.data.paginate
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
    },
    editKeep: function (keep) {
      this.fillKeep.id = keep.id;
      this.fillKeep.keep = keep.keep;
      $('#edit').modal('show');
    },
    updatekeep: function(id){
      var urlUpdate = 'task/'+id;
      axios.put(urlUpdate,  this.fillKeep).then(response=>{
        this.getKeeps();
        this.fillKeep = {'id': '', 'keep': ''};
        this.errors = [];
        $('#edit').modal('hide');
        toastr.success('Successfully updated');
      }).catch(error=>{
        this.errors = error.response.data
      });
    },
    changePage: function (page) {
      this.paginate.current_page =page;
      this.getKeeps(page);
    } 
  }

});﻿