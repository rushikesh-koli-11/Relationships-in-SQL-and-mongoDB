const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(()=> console.log("connection successful")).catch(err =>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema= new Schema({
    username: String,
    adresses: [
        {
            location:String,
            city:String
        },
    ],
});

const User = mongoose.model("user",userSchema);

const addUsers= async() =>{
    let user1=new User({
        username:"sherlock",
        adresses:[
            {
                location:"221B baker street",
                city:"London"
            }
        ],
    });
    //user1.addresses.push({location:"p32 garade",city:"pune"});
    let result=await user1.save();
    console.log(result);
};

addUsers();
