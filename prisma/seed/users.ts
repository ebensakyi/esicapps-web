var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash1 = bcrypt.hashSync("Kofi@2318", salt);
var hash2 = bcrypt.hashSync("12345678", salt);
var hash3 = bcrypt.hashSync("12345678", salt);
var hash4 = bcrypt.hashSync("12345678", salt);
var hash5 = bcrypt.hashSync("eo@12345678", salt);
var hashx = bcrypt.hashSync("87654321", salt);

export const users = [
  {
    userRoleId: 1,
    surname: "Sakyi",
    otherNames: "Ebenezer Agyemang",
    email: "ebensakyi@gmail.com",
    phoneNumber: "0543212322",
    password: hash1,
    userLevelId: 1,
    designation: "Enterprise Admin",
  },
  {
    userRoleId: 1,
    surname: "Oppong",
    otherNames: "Ebenezer",
    email: "oe@gmail.com",
    phoneNumber: "0242260004",
    password: hash5,
    userLevelId: 1,

    designation: "Enterprise Admin",
  },

  {
    userRoleId: 2,
    surname: "Google",
    otherNames: "Playstore",
    email: "ns@gmail.com",
    phoneNumber: "0541111111",
    password: hash3,
    districtId: 1,
    passwordChanged:1,
    userLevelId: 3,
    designation: "Super Admin",
  },
  // {
  //   userRoleId: 3,
  //   surname: "Regional",
  //   otherNames: "Admin",
  //   email: "ra@gmail.com",
  //   phoneNumber: "0542222222",
  //   password: hash3,
  //   regionId: 1,
  //   designation: "Admin",
  // }, {
  //   userRoleId: 4,
  //   surname: "Regional",
  //   otherNames: "Supervisor",
  //   email: "rs@gmail.com",
  //   phoneNumber: "0543333333",
  //   password: hash3,
  //   regionId: 1,
  //   designation: "Supervisor",
  // },

  // {
  //   userRoleId: 5,
  //   surname: "District",
  //   otherNames: "Admin",
  //   email: "da@gmail.com",
  //   phoneNumber: "0544444444",
  //   password: hash4,
  //   regionId: 1,
  //   districtId: 1,
  //   designation: " Admin",
  // },
  // {
  //   userRoleId: 6,
  //   surname: "District",
  //   otherNames: "Supervisor",
  //   email: "ds@gmail.com",
  //   phoneNumber: "0546666666",
  //   password: hashx,
  //   regionId: 1,
  //   districtId: 1,
  //   designation: "Supervisor",
  // },
  // {
  //   userRoleId: 7,
  //   surname: "Doe",
  //   otherNames: "John",
  //   email: "fu@gmail.com",
  //   phoneNumber: "0547777777",
  //   password: hash4,
  //   regionId: 1,
  //   districtId: 1,
  //   designation: "Field user",
  // },
  // {
  //   userRoleId: 7,
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
  //   userRoleId: 7,
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
  //   userRoleId: 7,
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
  //   userRoleId: 7,
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
  //   userRoleId: 7,
  //   surname: "District",
  //   otherNames: "User9",
  //   email: "districtuser4@gmail.com",
  //   phoneNumber: "0541111000",
  //   password: hash4,
  //   regionId: 1,
  //   districtId:3,
  //   designation: "Super Admin"
  // },{
  //   userRoleId: 7,
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
