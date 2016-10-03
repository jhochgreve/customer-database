import { Meteor } from 'meteor/meteor';
import { Clients } from '../imports/api/clients';

Meteor.startup(() => {
  if (Clients.find().count() === 0) {
    const clients = [{
      'firstName': 'Tom',
      'lastName': 'Jones',
      'email': 'tjones@gmail.com',
      'phone': '248-555-1212',
      'streetAddress': '124 Main St',
      'streetAddress2': '',
      'city': 'Hudson',
      'state': 'MI',
      'zip': '48123'
    }];

    clients.forEach((client) => {
      Clients.insert(client)
    });
  }
});
