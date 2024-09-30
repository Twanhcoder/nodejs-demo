const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
} = require("../services/CRUDServices");

const getHomePage = async (req, res) => {
  const listUsers = await getAllUsers();
  return res.render("home.ejs", { users: listUsers });
};

const getEditPage = async (req, res) => {
  const userId = req.params.id;
  const userById = await getUserById(userId);
  res.render("edit.ejs", { user: userById });
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email , name , city )
    VALUES (?, ?, ?);`,
    [email, name, city]
  );

  res.send("Create success");
};

const postUpdateUser = async (req, res) => {
  let { email, name, city, id } = req.body;
  await updateUserById(email, name, city, id);

  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  const userById = await getUserById(userId);
  res.render("delete.ejs", { user: userById });
};

const postRemoveUser = async (req, res) => {

  await deleteUserById(req.body.id);
  res.redirect("/");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomePage,
  getEditPage,
  postCreateUser,
  getCreatePage,
  postUpdateUser,
  postDeleteUser,
  postRemoveUser
};
