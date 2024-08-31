import mongoose from 'mongoose'


export const connectToDB = async () => {
   const mongodbURI = process.env.MONGODB_URI;
   try
   {
    await mongoose.connect(mongodbURI);
    //`mongodb+srv://dbUser2:helloworld123@cluster01.ccpm02x.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster01`
     // helloworld123
      // mongodb+srv://<username>:<password>@cluster01.ccpm02x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01

      //mongodb+srv://<username>:<password>@cluster01.ccpm02x.mongodb.net/

    console.log("Connected to Db")
   }
   catch(error)
   {
    console.log('couldn\' t connect to DB',error.message)
   }
}