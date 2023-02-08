import axios from "axios";

export const sendSMS = (phone, message) => {
    var options = {
        method: 'GET',
        url: 'https://smsc.hubtel.com/v1/messages/send',
        params: {
          clientsecret: 'okkczbvb',
          clientid: 'dhohvyyx',
          from: '233543212322',
          to: phone,
          content: message
        }
      };
  
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  

