const user = {
  firstName: 'Giovanna',
  lastName: 'Souza',
  birth_date: '28/08',
  age: 18,
  skills: ['JavaScript', 'React', 'TypeScript'],
  active: false,
}

// Spread (espalhar) operator
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Design'],
  active: true,
}

console.log(user)
console.log(updatedUser)