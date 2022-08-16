const uuid = require("uuid")
const id = uuid.v4
const db = {
    schedules: [
        {
            id: id(),
            requisitioner: "pe.alberto",
            reqPhone: 85997658732,
            address:"Rua Antônio Jose",
            place: "igreja da barra",
            type: "Tocar na igreja",
            date: "2022-08-24",
            startTime: 19,
            endTime: 21,
        },
        {
            id: id(),
            requisitioner: "sr Jose",
            reqPhone: 85997354782,
            address:"Rua dos Passaros",
            place: "barraca do sr Jose",
            type: "Tocar na festa",
            date: "2022-09-05",
            startTime: 18,
            endTime: 20,
        }
    ],
    user:{
        name:"Francisco",
        password:"fr4n"
    }
}
module.exports = { db}