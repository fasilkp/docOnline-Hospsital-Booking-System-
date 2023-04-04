import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    hospitalId:{
        type: String,
        required:true
    }
})

const DepartmentModel=mongoose.model("Department", schema)
export default DepartmentModel