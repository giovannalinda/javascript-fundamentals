const user = {
  firstName: 'Giovanna',
  lastName: 'Souza',
  birth_date: '28/08',
  age: 18,
  skills: ['JavaScript', 'React', 'TypeScript'],
}

// Destructuring
const { firstName, lastName, skills, birth_date: birthDate } = user
const [ primary, secondary, tertiary ] = skills

console.log(firstName, lastName, skills[1], birthDate)