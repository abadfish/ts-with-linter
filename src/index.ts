import sum from "./sum"
import sayHello, { Person } from "./sayHello"


const personExample:Person = {
    name: "Jane",
    city: "New York",
    age: 34
}

const sumFivePlusFive = sum(5,parseInt("5"))
console.log(sumFivePlusFive)

sayHello(personExample)