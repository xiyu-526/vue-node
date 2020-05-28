import mongoose from 'mongoose'

let person = new mongoose.Schema({
	name:String,
	age:Number
})

export default mongoose.model('Person',person);