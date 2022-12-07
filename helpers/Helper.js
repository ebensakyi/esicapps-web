const regions = require("./MyConstants").regions;
const id = require("./generators").generateId;
const date = require("./generators").getDate;
const request = require("request");
const nodemailer = require("nodemailer");
const constants = require("./MyConstants");

require("dotenv").config();

exports.sendSMS = async (phoneNumber, content) => {
  let options = {
    method: "POST",
    url: "http://api.sms.qikli.com/sms/2/text/advanced",
    headers: {
      "content-type": "application/json",
      authorization: "Basic c3VwcG9ydEBpY2Vzc3Bvb2wubmV0OlN1cHBvcnRAPzEyMw==",
    },
    body: {
      messages: [
        {
          from: "ICESSPOOL",
          destinations: [{ to: phoneNumber, messageId: messageId }],
          text: content,
        },
      ],
      bulkId: "BULK-ID-123-xyz",
      tracking: { track: "SMS", type: "ICESSPOOL" },
    },
    json: true,
  };

  return await request(options);
};



exports.getDate = () => {
  const currentDate = new Date();

  let day = currentDate.getDate();
  let month = currentDate.getMonth(); //Be careful! January is 0 not 1
  let year = currentDate.getFullYear();

  if (date < 10) {
    date = "0" + date;
  }
  month = month + 1;
  if (month < 10) {
    month = "0" + month;
  }

  let dateString = year + "-" + month + "-" + day;

  return dateString;
};

exports.getTime = () => {
  return new Date().toTimeString().split(" ")[0];
};

exports.checkDuplicates = (Model, object) => {
  const count = Model.count(object);
  return count;
};

exports.isLogin = async (req, res) => {
  // console.log("Sessions:=> ",req.session.user)
  if (!req.session.user) res.redirect("/");
};


exports.app233 = async (number) => {
  if (number.charAt(0) == "0") {
    console.log("number.replace()", number.replace("0", "+233"));
    return number.replace("0", "+233");
  }
};
