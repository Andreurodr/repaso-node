const mongoose = require("mongoose");

const Alumno = require("../api/models/alumno.model");

const arrayAlumnos = [
  {
    "nombre": "Pepe",
    "apellido": "Lopez",
    "edad": 34,        
    "aprobado": true,
    "notas": [3, 3, 6, 7]
  },{
    "nombre": "Pepe",
    "apellido": "Garcia",
    "edad": 22,        
    "aprobado": false,
    "notas": [3, 3, 6, 7]
  },{
    "nombre": "Pepe",
    "apellido": "Perez",
    "edad": 14,        
    "aprobado": true,
    "notas": [3, 3, 6, 7]
  },{
    "nombre": "Pepe",
    "apellido": "Cuellar",
    "edad": 78,        
    "aprobado": false,
    "notas": [3, 3, 6, 7]
  },{
    "nombre": "Pepe",
    "apellido": "Ramirez",
    "edad": 98,        
    "aprobado": true,
    "notas": [3, 3, 6, 7]
  },{
    "nombre": "Pepe",
    "apellido": "Gomez",
    "edad": 23,        
    "aprobado": false,
    "notas": [3, 3, 6, 7]
  }
];


mongoose.connect("mongodb+srv://andreurodr:Ar281997@cluster0.9eh2zpo.mongodb.net/testPT?retryWrites=true&w=majority")
.then(async () => {
    const allAlumnos = await Alumno.find();
    if (allAlumnos.length > 0){
        await Alumno.collection.drop()
        console.log("Alumnos borrados")
    }
})
.catch((error) => console.log(`Error borrando alumnos: ${error}`))
.then(async () => {
    const alumnosMap = arrayAlumnos.map(alumno => new Alumno(alumno));
    await Alumno.insertMany(alumnosMap);
    console.log("Se han insertado los alumnos");
})
.catch((error)=> console.log(`Error insertando alumnos: ${error}`))
.finally(()=>mongoose.disconnect());