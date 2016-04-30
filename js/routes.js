angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.ionic', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ionic.html',
        controller: 'ionicCtrl'
      }
    }
  })

  .state('menu.objetivoDoCurso', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/objetivoDoCurso.html',
        controller: 'objetivoDoCursoCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.contatoDosProfessores', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contatoDosProfessores.html',
        controller: 'contatoDosProfessoresCtrl'
      }
    }
  })

  .state('menu.principaisInformaEs', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/principaisInformaEs.html',
        controller: 'principaisInformaEsCtrl'
      }
    }
  })

  .state('menu.detalhes', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detalhes.html',
        controller: 'detalhesCtrl'
      }
    }
  })

  .state('menu.redesSociais', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/redesSociais.html',
        controller: 'redesSociaisCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});