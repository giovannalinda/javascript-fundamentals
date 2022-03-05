const user = {
  firstName: 'Giovanna',
  lastName: 'Souza',
  birth_date: '28/08',
  age: 18,
  skills: ['JavaScript', 'React', 'TypeScript'],
}

// Rest operator
const { firstName, lastName, ...rest } = user

console.log(rest)