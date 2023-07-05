const mongoose = require('mongoose')

const UserTransaction = new mongoose.Schema(
	{
		email : {type : String, required: true},
		role : {type : String, required : true},
        account: {type: String, required: true},
		id: { type: String, required: true },
		gasUsed : {type : String, required : true},
		from : {type :String,required : true},
		to : {type : String , required : true},
        description: {type : String, required: true}
	},
	{timestamps:true},
	{ collection: 'user-transcation-details'}
)

const model = mongoose.model('UserTranscationData', UserTransaction, "user-transcation-details")

module.exports = model