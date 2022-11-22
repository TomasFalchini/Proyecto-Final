const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();
//COMENTARIO DE PRUEBA

module.exports = { admin, db };
