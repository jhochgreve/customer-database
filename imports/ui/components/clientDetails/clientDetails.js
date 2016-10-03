import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './clientDetails.html';
import { Clients } from '../../../api/clients';

class ClientDetails {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.clientId = $stateParams.clientId;

    this.helpers({
      client() {
        return Clients.findOne({
          _id: $stateParams.clientId
        });
      }
    });
  }
  save() {
    Clients.update({
      _id: this.client._id
    }, {
      $set: {
        firstName: this.client.firstName,
        lastName: this.client.lastName,
        email: this.client.email,
        phone: this.client.phone,
        address: this.client.address
      }
        }, (error) => {
             if (error) {
               alert('Oops, unable to update the client...');
             } else {
               alert('Client successfully saved!');
            }
    });
  }
}

const name = 'clientDetails';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: ClientDetails
})
.config(config);

function config($stateProvider) {
 'ngInject';

 $stateProvider.state('clientDetails', {
   url: '/clients/:clientId',
   template: '<client-details></client-details>'
 });
}
