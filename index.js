const express = require("express");
const dotenv = require("dotenv");
const routerAlumno = require("./src/api/routes/alumno.routes");

dotenv.config();
const {connect} = require("./src/utils/db")

const app = express();
const PORT = process.env.PORT || 5000;
connect();
app.use(express.json())


app.use("/alumnos", routerAlumno);

app.listen(PORT, () => console.log("Server listening on port", PORT));