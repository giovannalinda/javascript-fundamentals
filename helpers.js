const tech = 'React.js'
const arrayTechs = ['React.js', 'TypeScript', 'JavaScript']

// case sensitive
const includes = tech.includes('react')
const includesArray = arrayTechs.includes('JavaScript')

const startsWith = tech.startsWith('React')
const endsWith = tech.endsWith('js')

console.log({ includes, includesArray, startsWith, endsWith })