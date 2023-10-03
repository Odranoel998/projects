import mongoose from 'mongoose';
// import  {MongoClient, ServerApiVersion}  from 'mongodb';

const username = encodeURIComponent("fullstack");
const password = encodeURIComponent("u3HBMmwIT1SbyIPp");
const cluster = encodeURIComponent ("cluster0");

const uri =
  `mongodb+srv://${username}:${password}@${cluster}.pjyaqvk.mongodb.net/noteapp?retryWrites=true`
// mongodb+srv://fullstack:u3HBMmwIT1SbyIPp@cluster0.pjyaqvk.mongodb.net/noteapp?retryWrites=true
  console.log('connecting to ', uri)  
mongoose.connect(uri)
.then(result=>{
  console.log('connect to MongoDB',)
})
.catch((error)=>{
  console.log('error connecting', error.message)
})


const userSchema = new mongoose.Schema({
  username:String,
  password: String,
  phone: Number,
  legalEntity: Boolean
})

const User= mongoose.model('User',userSchema)

export default{User}

const user= new User({
  "username": "random",
  "password": "12345",
  "phone": "26123456789",
  "legalEntity": true
})

user.save().then(result=>{
  console.log('user save ');
  mongoose.disconnect();
})

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
