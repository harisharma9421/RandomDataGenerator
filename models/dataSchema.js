import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    Name: String,
    Salary: Number,
    Language:String,
    City: String,
    isManager: Boolean
});

export const empData = mongoose.model("employees", employeeSchema);