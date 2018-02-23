(() => {
  'use strict';
  angular
  .module('labFuneraria')
  .service('servicioUsuarios', servicioUsuarios);

  servicioUsuarios.$inject = ['$log','$http'];

  function servicioUsuarios($log, $http){

    let allClientes =[];

    let publicAPI = {
      addUsuario : _addUsuario,
      getUsuarios : _getUsuarios
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todos los usuarios
  
  }
})();