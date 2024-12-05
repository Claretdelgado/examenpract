import {Schema, model} from "mongoose";

const Esquema = new Schema({
    name : String,
    apellido : String,
    edad : Number
})
export const Modelos = new model("datosControladores", Esquema)
console.log("el modelo funciona")