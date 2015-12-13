/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Complaint from '../api/complain/complain.model';

var moment = require('moment');

Complaint.find({}).removeAsync()
  .then(function() {
    Complaint.create({
      content: "The service is very bad",
      userEmail: "abc@gmail.com",
      company: "M1",
      rate: 4,
      category: 'Others',
      timestamp: moment(),
      customerId: 10,
      referenceId: 9,
      status: false,
      messages: [
        {
          content: "We can surely try! May I please have a copy of your bill so I can contact them directly and reference your account? Second, may I please have your phone number, address, and your full name please? Once I have that, I will be able to call in! Thanks,",
          isFromUser: false
        },
        {
          content: "Hi",
          isFromUser: true
        },
        {
          content: "Hello",
          isFromUser: false
        }
      ]
    });
  });

