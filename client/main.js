import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { name as Customers } from '../imports/ui/components/customers/customers';

function escapeRegExp(string){
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

angular.element(document).ready(function(){
  var clientForm = $('.clientAdd');
  clientForm.hide();
  $('.submitNew').on('click', function(){
    clientForm.slideToggle(250);
  });
  $('.customerSubmit').on('click', function(){
    clientForm.slideToggle(250);
  });
});
