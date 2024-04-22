import { gql } from "apollo-server-express";
export const typeDefs = gql `
type User{
    id:ID
    nombre: String
    password: String
    usuario:String
    correo:String
}
type Login{
    user:User
    token:String
}
type Animal{
    id:ID
    nombreGanado:String
    edad:Int
    peso: Int
    especie: String
    alimentacion:String
    parcela:String
    raza:String
}
type Query{
    user(usuario:String, password:String):Login
    users: [User]
    animals: [Animal]
    animal(id:ID): Animal
    animalByEspecie(especie:String):Animal
}
input animalInput {
    nombreGanado:String 
    edad:Int
    peso: Int
    especie:String
    alimentacion:String
    parcela:String
    raza:String
}
input userInput {
    nombre: String
    password: String
    usuario: String
    correo: String
}
input animalPutInput{
    id: ID
    raza: String
}
input animalEdadInput{
    nombre:String
    edad: Int
}


type Mutation{
    createAnimal(animal:animalInput):Animal
    createUser(user: userInput):User
    createWebhook(url:String, events:[String]):String
    putAnimalEdad(animal:animalEdadInput):String
    putAnimalCategory(animal:animalPutInput):String
    deleteAnimal(id:Int):String
}
`;
