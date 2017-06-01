(function() {
  'use strict'

  angular.module('app', [])
    .component('pokeapi', {
      controller: controller,
      templateUrl: './main.html',
    })
    controller.$inject = ['$http']
    function controller ($http){
      const vm = this
      const randomPokemon = []
      vm.$onInit = function (){}

      vm.generatePokemon = function (){
        const pokeId = Math.ceil(Math.random() * 722)
        console.log('generating...');
        $http.get(`http://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then(response => {
          vm.pokemon = {
            name: response.data.name,
            front_image: response.data.sprites.front_shiny,
          }
        })
      }
    }
}());
