import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './header.html';

const name = 'header';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name
});
