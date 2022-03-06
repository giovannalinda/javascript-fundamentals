const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve('Sucess!')
   // reject('Error!')
  }, 1000)
})

// call stack doesn't hang until the promise is resolved
apiCall
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log(error)
})

console.log('After of promise...')

// call stack stands still until the promise is resolved
async function run() {
  try {
    const response = await apiCall
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

run()