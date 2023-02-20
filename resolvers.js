const Emp =require('./model/Employee');
const Usr =require('./model/User')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const resolvers={
    Query:{
    
        EmpGet:async()=>{
            return await Emp.find();
        },
        GET_Id_Post:async(args,)=>{
            const {id}=args;
            return await Emp.findById(id);

        },
    },
    Mutation:{
        createEmployee: async (args)=>{
            const {first_name,last_name,email,gender,salary}=args.post
            const post= await new Emp({first_name,last_name,email,gender,salary}).save();
            return post;
        },
        UpdateEmployee: async (args)=>{
            const {id}=args;
            const {first_name,last_name,email,gender,salary}=args.post

            const post= await  Emp.findByIdAndUpdate(
                id,
                {first_name,
                last_name,
                email
                ,gender,
                salary},{new:true});
            return post;
        },
        DeleteEmployee:async(args)=>{
            const {id}=args;
            const post=await Emp.findByIdAndDelete(id)
            return "DELETED ";
        },

        
    },
};

module.exports=resolvers;


