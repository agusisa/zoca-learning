
let personas = [
    { owner: "Carlos", tarasca: 12, autos: [{ id: 22 }, { id: 2122 }, { id: 25512 }, { id: 22 }] },
    { owner: "Jose", tarasca: 420, autos: [{ id: 22 }, { id: 24142 },{ id: 24142 }, { id: 2452 }] },
    { owner: "German", tarasca: 25112, autos: [{ id: 11 }, { id: 11 },{ id: 11 }, { id: 11 }] }
]

let personasArregladas = []

const limpiar = (personaID) => {
    let nuevaPersona = personas[personaID]
    let autos = nuevaPersona.autos
        .map(auto => auto.id)
        .filter((value, index, self) => self.indexOf(value) === index)
    autosBienGuardados = autos.map((v) => { return { id: v } })

    nuevaPersona.autos = autosBienGuardados
    personasArregladas.push(nuevaPersona)
}

function comprar(personaID, persona, cash, autoID) {
    let auto4 = 1500
    let puedeComprar = cash >= auto4
    console.log(puedeComprar)
    if (puedeComprar) {
        personas[personaID].autos.push({ id: autoID })
        console.log("tenia " + personas[personaID].tarasca)
        personas[personaID].tarasca = personas[personaID].tarasca + (cash - auto4)
        console.log("tiene " + personas[personaID].tarasca)
    }

}

comprar(0, { owner: "Carlos" }, 3234, 2321)

personas.forEach((element,i) => {
    limpiar(i)
});

// limpiar(0)
// limpiar(1)
console.log()
console.log("personas")
console.table(JSON.stringify(personas))
console.log()
console.table("personasArregladas" )
console.log(JSON.stringify(personasArregladas))

