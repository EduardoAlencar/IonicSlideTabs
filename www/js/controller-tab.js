(function(){
  'user strict';

  angular
  .module('starter')
  .controller('TabCtrl', TabCtrl);

  TabCtrl.$inject = ['$ionicSlideBoxDelegate', '$ionicTabsDelegate'];


  function TabCtrl($ionicSlideBoxDelegate, $ionicTabsDelegate){

    var vm = this;

    vm.selectedTab = 0;
    vm.selectTabWithIndex = selectTabWithIndex;
    vm.slideChanged = slideChanged;

    function selectTabWithIndex(index){
      vm.selectedTab = index;
      $ionicSlideBoxDelegate.slide(vm.selectedTab);
    }

    function slideChanged(index){
      switch (index) {
        case 0:
          vm.selectTabWithIndex(0);
          break;
        case 1:
          vm.selectTabWithIndex(1);
          break;
        case 2:
          vm.selectTabWithIndex(2);
          break;
      }
    }
  }
})();
