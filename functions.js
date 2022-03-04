/* This, arrow functions, constructor */

// metodo construtor transforma a função em um objeto podendo atribuir valores usando o this
function myFunctionExample() {
  this.name = 'Giovanna'

  // usa o this do contexto que foi criada
  const myArrowFunctionExample = () => {
    this.lastname = 'Souza'
  }

  myArrowFunctionExample()
}
// cria o próprio this a partir do momento que usa o new
console.log(new myFunctionExample())
console.log(this)

/* Operadores Destructuring, Rest, Spread operators and Arguments */

function soma(firstParam, ...rest) {
  // console.log(Object.values(arguments))
  console.log({ firstParam })
  console.log({ rest })
}

soma(1, 2, 3, 4)

const plus = () => {
  console.log(arguments)
}

plus(6, 7, 8, 9)

/* Short syntax */ 

const shortenedSyntax = () => 'Hello World'

const age = 18
const syntaxWithParentheses = () => (
  age >= 18 
  ? 'You are of legal age' 
  : 'You are underage'
)
console.log(syntaxWithParentheses())

const getUser = () => ({
  id: 1,
  name: 'Giovanna'
})

console.log(getUser())