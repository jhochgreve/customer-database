import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './removeClient.html';
import { Clients } from '../../../api/clients';

class RemoveClient {
  remove() {
    if (this.client) {
      Clients.remove(this.client._id);
    }
  }
}

const name = 'removeClient';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    client: '<'
  },
  controllerAs: name,
  controller: RemoveClient
});
