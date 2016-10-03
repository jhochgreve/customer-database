import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './clientAdd.html';
import { Clients } from '../../../api/clients';

class ClientAdd {
  constructor() {
    this.client = {};
  }

  submit() {
    Clients.insert(this.client);
    this.reset();
  }

  reset() {
    this.client = {};
  }
}

const name = 'clientAdd';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: ClientAdd
});
