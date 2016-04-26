

angular
  .module('starter')
  .config(configuration)

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider){

    $stateProvider

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
      controller: "TabCtrl as tab"
    })

    .state('tab.dash', {
      url: "/dash",
      views: {
        'tab-dashboard': {
          templateUrl: "templates/tab-dashboard.html",
          controller: 'DashCtrl as dash'
        }
      }
    })

    $urlRouterProvider.otherwise('tab/dash');
  }
