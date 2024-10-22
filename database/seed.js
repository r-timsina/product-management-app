import { faker } from '@faker-js/faker'
const dummy = faker.airline.airport().iataCode
const personName = faker.person.fullName()
const bio = faker.person.bio()
console.log(`Hi my name is ${personName}. Here is my bio: ${bio}`)
