const db = require('../db')
const Maker = require('../models/maker')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const makers = [
        { name: 'Margaret Atkins', location: 'Chicago,IL', summary: 'I am a welder who specializes in large sculpture and basic repairs.  Trained in TIG, MIG, and Stick welding', skillgroup:"construction", subskills: ["TIG","MIG","Stick","Sculpture"],email:"gloriaw@test.com" ,phone:"415-345-6545",status:"Fully Booked",rating:"4.8",featured:true },
        { name: 'Billy Joel', location: 'Niles,IL', summary: 'I am a painter with 20 years of industry experience. I specialize in impressionist and abstract portraiture', skillgroup:"art", subskills: ["painting","oil","acrylic","portraiture"],email:"goodonya@test.com",phone:"415-345-6555",status:"Open to Work",rating:"4.7",featured:true },
        { name: 'Adam Driver', location: 'Chicago,IL', summary: 'I am a baker who specializes in elegant cakes for special occasions. Come visit my shop!', skillgroup:"culinary", subskills: ["Baking", "Decoration", "Special Events"], email:"adriver@project.com", phone:"415-345-6546",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lasdiest.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fpastryartsmag_52804423_560550051093013_2071906762895236926_n-e1552118006561.jpg&f=1&nofb=1&ipt=27e2f625fd6b7df056c26511c07fea8cd2388bc728171a9137cd2871830851e7&ipo=images", status:"Open to work",rating:"4.9",featured:true },
        { name: 'Dugnut McKringleberry', location: 'Chicago,IL', summary: 'I am a music producer with 12 years of mixing and studio experience.', skillgroup:"music", subskills: ["Production","mixing","commercial","DJing", "Songwriting"],email:"ad@test.com",phone:"415-345-6545",status:"Fully Booked",rating:"4.7",featured:true },
        { name: 'Foster Jenkins', location: 'Chicago,IL', summary: 'I am a woodworker with expertise in furniture building and small to large scale home improvments.  I also dabble in plaster work and general remodeling', skillgroup:"construction", subskills: ["Woodworking","Home Improvement", "Furniture","Plaster"],email:"fjenkins@test.com",phone:"415-345-6545",status:"Looking for Work",rating:"4.9",featured:true },
       
      
    ]

    await Maker.insertMany(makers)
    console.log("Created some makers!")
}
const run = async () => {
    await main()
    db.close()
}

run()