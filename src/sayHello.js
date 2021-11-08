function sayHello(person){
    console.log(`
        Hi there, my name is ${person.name}!
        I am ${person.age} years old, I was born in ${new Date().getFullYear() - person.age} and I live in ${person.city}.
        Nice to meet you!
    `)
}

module.exports =  sayHello;