const db = require('../db')
const Maker = require('../models/maker')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const makers = [
        { name: 'Margaret Atkins', location: 'Chicago,IL', summary: 'welder and woodworker', skills: ["woodworking","welding"],gallery:["imgurl"],phone:"415-345-6545",status:1,rating:"4.1" },
        { name: 'Billy Joel', location: 'Chicago,IL', summary: 'painter and welder', skills: ["painting","welding"],gallery:["imgurl"],phone:"415-345-6555",status:1,rating:"4.7" },
        { name: 'Adam Driver', location: 'Chicago,IL', summary: 'baker', skills: ["baking"],gallery:["imgurl"],phone:"415-345-6546",status:1,rating:"4.9" },
        { name: 'Dugnut McKringleberry', location: 'Chicago,IL', summary: 'stuff and things', skills: ["3D printing"],gallery:["imgurl"],phone:"415-345-6545",status:1,rating:"4.7" },
        { name: 'Foster Jenkins', location: 'Chicago,IL', summary: 'woodworker and handyperson', skills: ["woodworking","home improvement"],gallery:["imgurl"],phone:"415-345-6545",status:1,rating:"4.9" },
       
      
    ]

    await Maker.insertMany(makers)
    console.log("Created some makers!")
}
const run = async () => {
    await main()
    db.close()
}

run()