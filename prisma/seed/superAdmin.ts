var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash1 = bcrypt.hashSync("Kofi@2318", salt);
var hash2 = bcrypt.hashSync("esicapps@national", salt);
var hash3 = bcrypt.hashSync("esicapps@regional", salt);
var hash4 = bcrypt.hashSync("esicapps@mmda", salt);

export const superUser = [
  {
    userTypeId: 1,
    surname: "Sakyi",
    otherNames: "Ebenezer Agyemang",
    email: "ebensakyi@gmail.com",
    phoneNumber: "0543212322",
    password: hash1,
   
    designation: "Super Admin"
  },
  {
    userTypeId: 1,
    surname: "National",
    otherNames: "User",
    email: "nationaluser@gmail.com",
    phoneNumber: "0541111111",
    password: hash2,
    designation: "Admin"
  },
  {
    userTypeId: 1,
    surname: "Regional",
    otherNames: "User",
    email: "regionaluser@gmail.com",
    phoneNumber: "0542222222",
    password: hash3,
    regionId: 1,
    designation: "Super Admin"
  },
  {
    userTypeId: 1,
    surname: "District",
    otherNames: "User",
    email: "districtuser@gmail.com",
    phoneNumber: "0543333333",
    password: hash4,
    regionId: 1,
    districtId:1,
    designation: "Super Admin"
  },
  
];
