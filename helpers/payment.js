import { SERVER_BASE_URL } from "../config";
import axios from "axios";
// require("dotenv").config();
export const initiatePayment = async (body, redirectTo) => {
  let newBody = {
    ...body,
    merchant_id: process.env.MERCHANT_ID,
    redirect_url: process.env.REDIRECT_URL + redirectTo,
  };
  try {
    const options = {
      method: "POST",
      url: process.env.CHECKOUT_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.CHECKOUT_API,
      },
      data: newBody,
    };

    return new Promise((resolve, reject) => {
      axios.request(options).then(function (response) {
        // if (error) return reject(error);
        return resolve(response.data);
      });
    });
  } catch (error) {
    console.log("initiatePayment :", error);
  }
};

export const completePayment = async (req, res) => {
  try {
    //get transactionId from theteller
    // let paymentId = req.body.data.transaction_id;
    // let statusCode = req.body.data.code;

    // let statusCode = req.query.code
    // const mockBody = {
    //   transaction_id: "066668552489",
    //   r_switch: "MTN",
    //   subscriber_number: "0543212322",
    //   currency: "GHS",
    //   channel: "GHS",
    //   code: "000"
    // }
    return req.query || req.body;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
