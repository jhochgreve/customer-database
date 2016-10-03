import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './clientList.html';
import { Clients } from '../../../api/clients';
import { name as ClientAdd } from '../clientAdd/clientAdd';
import { name as RemoveClient } from '../removeClient/removeClient';

class ClientList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      clients() {
        return Clients.find({});
      }
    });
  }
}

const name = 'clientList';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ClientAdd,
  RemoveClient
]).component(name, {
  template,
  controllerAs: name,
  controller: ClientList
})
.config(config);

function config($stateProvider) {
'ngInject';
$stateProvider
  .state('clients', {
    url: '/clients',
    template: '<client-list></client-list>'
  });
}
