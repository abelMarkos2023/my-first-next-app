import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({
    email:{
        type : String,
        required:true,
        unique:true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

 const EmailModel = mongoose.models.emails || mongoose.model('emails',EmailSchema);
 export default EmailModel;