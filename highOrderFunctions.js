const products = [
  { name: 'IPhone', price: 3800, quantity: 2 },
  { name: 'MacBook Air', price: 7800, quantity: 3 },
  { name: 'AirPods', price: 950, quantity: 4 },
]

// .find
const find = products.find((product) =>  product.price < 1000)
console.log({ find })

// .findIndex
const findIndex = products.findIndex((product) =>  product.name === 'MacBook Air')
console.log({ findIndex })
console.log('Product:', products[findIndex])
