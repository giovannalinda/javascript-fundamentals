const products = [
  { name: 'IPhone', price: 3800, quantity: 2 },
  { name: 'MacBook Air', price: 7700, quantity: 3 },
  { name: 'AirPods', price: 950, quantity: 4 },
]

// .find(finds items)
const find = products.find((product) =>  product.price < 1000)
console.log({ find })

// .findIndex(find an item)
const findIndex = products.findIndex((product) =>  product.name === 'MacBook Air')
console.log({ findIndex })
console.log('Product:', products[findIndex])

// .some(someone follows this rule)
const some = products.some((product) => product.price > 1000)
console.log({ some })

// .every(everyone follows this rule)
const every = products.every((product) => product.price > 1000)
console.log({ every })

// .map(create an array based on the previous one with some modification)
const map = products.map((product) => {
  return {
    ...product,
    total: product.quantity * product.price,
  }
})
console.log({ map })