const db = require('../db')
const Skill = require('../models/skills')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const skills = [
        { skillgroup: 'Construction & Building', category:"construction", subskills:["Woodworking","Home Improvement","Building"], media:["Wood","Brick","Cement"], makers: [],projects:[], image:""},
        { skillgroup: 'Digital Media', category:"digital",subskills:["Animation","Production","Photography", "Graphic Design"], media:["Web","Editing Software","Film"],makers: [],projects:[], image:""},
        { skillgroup: 'Music', category:"music",subskills:["Songwriting","Performing"], media:["Keyed Instruments","Stringed Instruments","Woodwinds","Brass","Percussion","Other"],makers: [],projects:[], image:""},
        { skillgroup: 'Fine Art', category:"art",subskills:["Painting","Sculpting","Illustration","Drawing"], media:["Oil","Graphite","Watercolor","Acrylic","Mixed"],makers: [],projects:[], image:""},
        { skillgroup: 'Culinary', category:"culinary",subskills:["Baking","Cooking","Mixology"], media:[],makers: [],projects:[], image:""},
        { skillgroup: 'Engineering & Mechanics', category:"engineering",subskills:["Fabrication","3D Modeling", "3D Printing","Machining","Electrical", "Automotive", "IOT"],media:["Electric","Combustion Engines","SLA","FDM"], makers: [],projects:[], image:""},
        { skillgroup: 'Textiles & Fashion', category:"textiles",subskills:["Sewing","Knitting","Clothing"],media:["Leather","Natural Fabrics","Synthetic Fabrics"], makers: [],projects:[], image:""},
      
       
    ]

    await Skill.insertMany(skills)
    console.log("Created some skill buckets!")
}
const run = async () => {
    await main()
    db.close()
}

run()