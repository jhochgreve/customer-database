import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { name as Header } from '../header/header';

import template from './customers.html';
import { name as ClientList } from '../clientList/clientList';
import { name as ClientDetails } from '../clientDetails/clientDetails';

class Customers {}

const name = 'customers';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ClientList,
  ClientDetails,
  Header
]).component(name, {
  template,
  controllerAs: name,
  controller: Customers
})

  .config(config);

function config($locationProvider, $urlRouterProvider) {
'ngInject';

$locationProvider.html5Mode(true);

$urlRouterProvider.otherwise('/clients');
}
