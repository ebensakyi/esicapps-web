import { SERVER_BASE_URL } from "../config";
import axios from "axios";
require("dotenv").config();
export const initiatePayment = async (body) => {

  console.log("paymentType=>", body);
  try {
    const options = {
      method: 'POST',
      url: process.env.TELLER_URL,
      rejectUnauthorized: false,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic d2VzdDVkZGY3ZjQ0YzkxZTg6TVRBMllqVmtaalJoTUdNd1pERTVZVEJoTkRNNU9XSmpPVEU0WTJSbU9HWT0='
      },
      data: body
      // data: {
      //   merchant_id: 'TTM-00001087',
      //   transaction_id: '118420124133',
      //   payment_method: paymentType,
      //   desc: 'Payment for WAEC PINs',
      //   amount: '000000000010',
      //   redirect_url: `${SERVER_BASE_URL}/checker-purchases`,
      //   email: "info@waecgh.org",
      // }
    };
    return new Promise((resolve, reject) => {
      axios.request(options).then(function (response) {
        // if (error) return reject(error);
        return resolve(response.data);
      });
    })

  } catch (error) {
    console.log("ERROR ", error);
  }

}



// export const initiatePayment = async (body) => {
//   console.log("paymentType=>", body);

//   try {
//     const options = {
//       method: "POST",
//       url: process.env.TELLER_URL,
//       rejectUnauthorized: false,
//       headers: {
//         "content-type": "application/json",
//         "Cache-Control": "no-cache",
//         Authorization: process.env.TELLER_API,
//       },
//       body,
//       // body: {
//       //   merchant_id: process.env.MERCHANT_ID,
//       //   transaction_id: paymentId,
//       //   desc: "Payment for WAEC PINs",
//       //   amount: amount,
//       //   redirect_url: constants.server_url + "/checker-purchases",
//       //   email: "info@waecgh.org",
//       //   payment_method: paymentType,
//       // },
//       json: true,
//     };

//     return new Promise((resolve, reject) => {
//       request(options, (error, response, body) => {
//         if (error) return reject(error);
//         return resolve(body);
//       });
//     });
//   } catch (e) {
//     console.log("ERROR ", e);
//   }
// };


export const completePayment = async (req, res) => {
  try {
    //get transactionId from theteller
    let paymentId = req.body.data.transaction_id;
    let statusCode = req.body.data.code;

    if (paymentId) {
      let invoice = await Invoice.findOne({
        where: {
          paymentId: paymentId,
        },
      });

      // let invCount = await CheckerInvoice.count({
      //   where: {
      //     invoiceId: invoice.id,
      //     //completed: 1,
      //     deleted: 0,
      //   },
      // });

      //if statuscode == 000, then payment is done
      //getCheckersFromApi(res, invoice.transactionId, invoice.userId);
      //console.log("INV", invoice);
      switch (statusCode) {
        case "000":
          getCheckersFromApi(res, invoice.transactionId, invoice.userId);
          break;
        case "100":
          getIssuedCheckers(res, invoice.userId, "100");
          break;

        case "101":
          getIssuedCheckers(res, invoice.userId, "101");
          break;

        case "102":
          getIssuedCheckers(res, invoice.userId, "102");
          break;

        case "103":
          getIssuedCheckers(res, invoice.userId, "103");
          break;

        case "104":
          getIssuedCheckers(res, invoice.userId, "104");
          break;

        case "105":
          getIssuedCheckers(res, invoice.userId, "105");
          break;

        case "107":
          getIssuedCheckers(res, invoice.userId, "107");
          break;

        case "111":
          getIssuedCheckers(res, invoice.userId, "111");
          break;
        case "114":
          getIssuedCheckers(res, invoice.userId, "114");
          break;
        default:
          break;
      }

      // if (statusCode == "000" || invCount != 0) {
      //   getCheckersFromApi(res, invoice.transactionId, invoice.userId);
      // } else {
      //   getIssuedCheckers(res, invoice.userId);
      // }
    }
  } catch (error) {
    console.error("checkerTransaction ", error.message);
    return res
      .status(400)
      .send({ statusCode: 0, message: "Unsuccessful", data: [] });
  }
};