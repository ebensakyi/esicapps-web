
import axios from "axios";

exports.send = (phone, message) => {
  var options = {
    method: "GET",
    url: "https://api.widepaycash.com/v1.1/sms/send-quick/",
    params: {
      sender_id: "ESICAPPS",
      message: message,
      recipient: phone, //'233543212322',
      apiKey: "QAFvsRuTddlg",
      apiSecret: "ncW5tlFIrsonvZGhKzDlk3co1o6AUScPmHT",
    },
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
