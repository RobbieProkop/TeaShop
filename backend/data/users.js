import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Robbie Prokop",
    email: "robbieprokop@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Yuli Prokop",
    email: "yuliprokop@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
