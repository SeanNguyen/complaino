/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Complaint from '../api/complain/complain.model';

Complaint.find({}).removeAsync()
  .then(function() {
    Complaint.create({
      content: "The service is very bad",
      userEmail: "abc@gmail.com",
      company: "M1",
      rate: 4,
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
    }, {
      content: "The service is very bad",
      userEmail: "abc@gmail.com",
      company: "M1",
      rate: 2,
      messages: [
        {
          content: "Hello",
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
    }, {
      content: "The service is very bad",
      userEmail: "abc@gmail.com",
      company: "Singtel",
      rate: 1,
      messages: [
        {
          content: "Hello",
          isFromUser: false
        },
        {
          content: "We can surely try! May I please have a copy of your bill so I can contact them directly and reference your account? Second, may I please have your phone number, address, and your full name please? Once I have that, I will be able to call in! Thanks,",
          isFromUser: true
        },
        {
          content: "Hello",
          isFromUser: false
        }
      ]
    }, {
      content: "The service is very bad",
      userEmail: "abc@gmail.com",
      company: "Singapore Airline",
      rate: 2,
      messages: [
        {
          content: "Hello",
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
    }, {
      content: "The service is very bad",
      userEmail: "abc@gmail.com",
      company: "M1",
      rate: 3,
      messages: [
        {
          content: "Hello",
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
    }, {
      content: "The service is very bad",
      userEmail: "abc@gmail.com",
      company: "M1",
      rate: 5,
      messages: [
        {
          content: "Hello",
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

