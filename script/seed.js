'use strict'

const db = require('../server/db')
const {User, Project} = require('../server/db/models')


async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  /* const users = await Promise.all([
    User.create({email: 'guest'}),
    User.create({email: 'cody@email.com', password: '456'}),
    User.create({email: 'murphy@email.com', password: '789'})
  ])*/

const projects = await Promise.all([
  Project.create({projectName: 'Test Project', author: 'John Smith', authorEmail: 'john@smith.com', authorPhone: '1234567890', authorAddress: '123 Main St',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', wireframe: 'https://wireframe.cc/'}),
  Project.create({projectName: 'Project A', author: 'Carol Freeman', authorEmail: 'freeman@carol.com', authorPhone: '0987654321', authorAddress: '456 Notmain St',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', wireframe: 'https://wireframe.cc/'}),
  Project.create({projectName: 'Project B', author: 'Ben Lin', authorEmail: 'ben@lin.com', authorPhone:'2345678901', authorAddress:'789 Main Blvd',
                  description: 'Mi tempus imperdiet nulla malesuada pellentesque. Libero volutpat sed cras ornare arcu dui vivamus. Arcu bibendum at varius vel pharetra. Curabitur vitae nunc sed velit dignissim sodales ut eu. Congue quisque egestas diam in. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Ultricies mi eget mauris pharetra et ultrices neque. A diam sollicitudin tempor id eu nisl nunc mi.', wireframe: 'https://wireframe.cc/'}),
  Project.create({projectName: 'Project C', author: 'Jennifer Singh', authorEmail:'jen@singh.com', authorPhone:'3456789012', authorAddress:'120 Notmain Blvd',
                  description: 'Mi tempus imperdiet nulla malesuada pellentesque. Libero volutpat sed cras ornare arcu dui vivamus. Arcu bibendum at varius vel pharetra. Curabitur vitae nunc sed velit dignissim sodales ut eu. Congue quisque egestas diam in. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Ultricies mi eget mauris pharetra et ultrices neque. A diam sollicitudin tempor id eu nisl nunc mi.', wireframe: 'https://wireframe.cc/'}),
  Project.create({projectName: 'Project D', author: 'Curtis Chen', authorEmail: 'chen@curtis.com', authorPhone: '2109876543', authorAddress: '987 Main Rd',
                  description: 'Quam elementum pulvinar etiam non. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Enim ut tellus elementum sagittis vitae et. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Convallis a cras semper auctor neque vitae. Turpis egestas maecenas pharetra convallis posuere morbi leo.', wireframe: 'https://wireframe.cc/'}),
  Project.create({projectName: 'Project E', author: 'Arnold Huff', authorEmail: 'huff@arnold.com', authorPhone: '8765432109', authorAddress: '654 Notmain Rd',
                  description: 'Quam elementum pulvinar etiam non. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Enim ut tellus elementum sagittis vitae et. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Convallis a cras semper auctor neque vitae. Turpis egestas maecenas pharetra convallis posuere morbi leo.', wireframe: 'https://wireframe.cc/'}),
  Project.create({projectName: 'Project F', author: 'Ivan Santiago', authorEmail: 'ivan@santiago.com', authorPhone: '7654321098', authorAddress: '436 Main Ave',
                  description: ' Ornare massa eget egestas purus. Proin nibh nisl condimentum id venenatis a condimentum vitae. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Sit amet consectetur adipiscing elit.', wireframe: 'https://wireframe.cc/'}),
  Project.create({projectName: 'Project G', author: 'Ashley Gibson', authorEmail: 'gibson@ashley.com', authorPhone: '5432109876', authorAddress: '937 Notmain Ave',
                  description: ' Ornare massa eget egestas purus. Proin nibh nisl condimentum id venenatis a condimentum vitae. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Sit amet consectetur adipiscing elit.', wireframe: 'https://wireframe.cc/'}),
  Project.create({projectName: 'Project H', author: 'Maryann Sanders', authorEmail: 'sanders@maryAnn.com', authorPhone: '4567890123', authorAddress: '235 Main St',
                  description: 'Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Quam id leo in vitae turpis. Sed viverra ipsum nunc aliquet bibendum enim. Viverra mauris in aliquam sem fringilla ut. At consectetur lorem donec massa sapien faucibus et. ', wireframe: 'https://wireframe.cc/'}),
  Project.create({projectName: 'Project I', author: 'Faith Yates', authorEmail: 'yates@faith.com', authorPhone: '473910293', authorAddress: '947 Notmain St',
                  description: 'Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Quam id leo in vitae turpis. Sed viverra ipsum nunc aliquet bibendum enim. Viverra mauris in aliquam sem fringilla ut. At consectetur lorem donec massa sapien faucibus et. ', wireframe: 'https://wireframe.cc/'}),
])


  //console.log(`seeded ${users.length} users`)

  console.log(`seeded ${projects.length} projects`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
