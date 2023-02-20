const typeDefs=require('./typeDefs')
const resolvers=require('./resolvers')
const express=require('express');
const {ApolloServer}=require('apollo-server-express' );
 mongoose.connect("",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 const StrSrver=async()=>{
    const app=express();
    const apolloServer=new ApolloServer({
        typeDefs,resolvers
    });
    await apolloServer.start()
    apolloServer.applyMiddleware({app:app})
    app.listen(3333,()=>{
        console.log("Running")
    })
 }

 StrSrver();
 
