const {gql}=require('apollo-server-express');
const typeDefs=gql`
 type Employee{
    id:ID
    first_name:String!
    last_name:String!
    email: String!
    gender: String!
    salary: String!
 }
 
 type Query{   
   hello:String
   EmpGet:[Employee!]!
   GET_Id_Post(id: ID):Employee
   input PstEmployee{
   }   
    first_name:String!
    last_name:String!
    email: String!
    gender: String!
    salary: String!
 }
 type Mutation{ 
  createEmployee(post: PostEmployee): Employee 
  UpdateEmployee(id:String,post:PostEmployee):Employee
  DeleteEmployee(id:String):String
 }
`;

module.exports=typeDefs;