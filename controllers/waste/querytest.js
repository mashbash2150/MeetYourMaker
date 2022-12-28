const db = require('./db')
const { Maker } = require('./models')

async function main() {
  try {
    const maker= await Maker.findOne({})
    const newMaker=await Maker.create({ name: "Asim Prses", location: "Chicago,IL", summary:"Fabricator", skills:["3D Printing"],gallery:['url'],phone:"856-578-9435",status:1,rating:"4.9"})
    console.log(maker)
    console.log(newMaker)

  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()
