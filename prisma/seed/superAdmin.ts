var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0//", salt);

export const superUser = [
  {
    userTypeId: 1,
    surname: "Sakyi",
    otherNames: "Ebenezer Agyemang",
    email: "ebensakyi@gmail.com",
    phoneNumber: "0543212322",
    password: hash,
    userLevelId: 1,
  },
  
];
