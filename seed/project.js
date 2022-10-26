const db = require('../db')
const Project = require('../models/project')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const projects = [
        { title: 'Oak Table', description:"Handcrafted solid oak dining room table that seats 10", maker: 'Margaret Atkins',image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftarzantables.co.uk%2Fwp-content%2Fuploads%2F2014%2F05%2FIMG_4186.jpeg&f=1&nofb=1&ipt=5a17cb31debfa6de696282de3c04b6f0d6168096a57b3cb4673b7e08dc90f80b&ipo=images", gallery:[],featured:true},
        { title: 'Metal Mind', description:"Sculpture of Skull from welded bolts", maker: 'Margaret Atkins',image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FaCXYKry2H1U%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=1d5a3085a62a539ef083e754c6f21bcaa67b45d7c3264914af4180528e5b04a2&ipo=images", gallery:[],featured:true},
        { title: 'Woodland Wedding Cake', description:"Woodland themed wedding cake for gardener client", maker: 'Kevin Fox',image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fb2%2F3a%2F00b23a2564247549ac3389b712285cbc.jpg&f=1&nofb=1&ipt=8ef3c6fc2722777b64f964d677d85addd2a84db9db40c1577ef0e5d8c2a7f4dd&ipo=images", gallery:[],featured:true},
        { title: 'Custom Auto Emblems', description:"Designed and printed for client's vehicle", maker: 'Asim Prses',image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2Bs9vigZIuXbUBVWeSWOYAHaDR%26pid%3DApi&f=1&ipt=faf71d679b689afa91c99f943ec0e20aed7200665d98af9acaab824f5a1f152e&ipo=images", gallery:[],featured:true},
        { title: 'Linen Ensemble', description:"Handsewn linen loungewear", maker: 'Torrence Foxworthy',image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shantima.com%2Fwp-content%2Fuploads%2F2020%2F07%2FFEN_1360.jpg&f=1&nofb=1&ipt=17c632ba6255ad4a2083149e4ed544df3d44b9e0dccf7175da0ca7047924a3c7&ipo=images", gallery:[],featured:true},
        { title: 'Surfboard', description:"Handcrafted surfboard", maker: 'Beezer Washngbeard',image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5be2655f25bf0246ad753ae3%2F1568266452023-E1U57PPX4QA432CYVUB9%2Fbywater%2Bdesign%2Bgould%2Bsurfboard.jpg&f=1&nofb=1&ipt=bd48208c1dfc8ea1201cc77e5cf4c7cd90adff25503fb72ddf6480dcd8db2424&ipo=images", gallery:[],featured:true},
       
      
    ]

    await Project.insertMany(projects)
    console.log("Created some projects!")
}
const run = async () => {
    await main()
    db.close()
}

run()