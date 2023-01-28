var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash1 = bcrypt.hashSync("Kofi@2318", salt);
var hash2 = bcrypt.hashSync("12345678", salt);
var hash3 = bcrypt.hashSync("12345678", salt);
var hash4 = bcrypt.hashSync("12345678", salt);
var hash5 = bcrypt.hashSync("12345678", salt);

export const users = [
  {
    userTypeId: 1,
    surname: "Sakyi",
    otherNames: "Ebenezer Agyemang",
    email: "ebensakyi@gmail.com",
    phoneNumber: "0543212322",
    password: hash1,

    designation: "Enterprise Admin",
  },
  {
    userTypeId: 1,
    surname: "Oppong",
    otherNames: "Ebenezer",
    email: "oe@gmail.com",
    phoneNumber: "054000000000",
    password: hash5,

    designation: "Enterprise Admin",
  },
 
  {
    userTypeId: 1,
    surname: "Regional",
    otherNames: "User",
    email: "regionaluser@gmail.com",
    phoneNumber: "0542222222",
    password: hash3,
    regionId: 1,
    designation: "Super Admin",
  },
  
 
  {
    userTypeId: 1,
    surname: "Doe",
    otherNames: "John",
    email: "districtuser4@gmail.com",
    phoneNumber: "0546666666",
    password: hash4,
    regionId: 1,
    districtId: 1,
    designation: "Super Admin",
  },
  // {
  //   userTypeId: 7,
  //   surname: "District",
  //   otherNames: "User5",
  //   email: "districtuser4@gmail.com",
  //   phoneNumber: "054777777",
  //   password: hash4,
  //   regionId: 1,
  //   districtId:1,
  //   designation: "Super Admin"
  // },
  // {
  //   userTypeId: 7,
  //   surname: "District",
  //   otherNames: "User6",
  //   email: "districtuser4@gmail.com",
  //   phoneNumber: "05468888888",
  //   password: hash4,
  //   regionId: 1,
  //   districtId:1,
  //   designation: "Super Admin"
  // },
  // {
  //   userTypeId: 7,
  //   surname: "District",
  //   otherNames: "User7",
  //   email: "districtuser4@gmail.com",
  //   phoneNumber: "0549999999",
  //   password: hash4,
  //   regionId: 1,
  //   districtId:1,
  //   designation: "Super Admin"
  // },
  // {
  //   userTypeId: 7,
  //   surname: "District",
  //   otherNames: "User8",
  //   email: "districtuser4@gmail.com",
  //   phoneNumber: "0540000000",
  //   password: hash4,
  //   regionId: 1,
  //   districtId:4,
  //   designation: "Super Admin"
  // },
  // {
  //   userTypeId: 7,
  //   surname: "District",
  //   otherNames: "User9",
  //   email: "districtuser4@gmail.com",
  //   phoneNumber: "0541111000",
  //   password: hash4,
  //   regionId: 1,
  //   districtId:3,
  //   designation: "Super Admin"
  // },{
  //   userTypeId: 7,
  //   surname: "District",
  //   otherNames: "User10",
  //   email: "districtuser4@gmail.com",
  //   phoneNumber: "0542222000",
  //   password: hash4,
  //   regionId: 1,
  //   districtId:2,
  //   designation: "Super Admin"
  // },
];
