(function() {
  'use strict'

  angular.module('app', [])
    .component('pokeapi', {
      controller: controller,
      templateUrl: './main.html',
    })

    controller.$inject = ['$http']

    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function controller ($http){
      const vm = this

      vm.generatePokemon = function (){
        vm.isLoading = true
        const pokeId = Math.ceil(Math.random() * 722)

        $http.get(`http://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then(response => {
          vm.pokemon = {
            name: capitalize(response.data.name),
            front_image: response.data.sprites.front_default,
          }
          vm.isLoading = false
        })
      }
    }
}());
