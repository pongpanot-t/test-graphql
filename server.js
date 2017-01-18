import express from 'express';
import graphqlHTTP from 'express-graphql';
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';


var queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: function () {
    return {
      hello: {
        description: 'Get all user',
        type: GraphQLString,
        resolve: function () {
          return "world";
        }
      }
    }
  }
});

let MyGraphQLSchema = new GraphQLSchema({
  query: queryType
});


const app = express();
app.use('/graphql', graphqlHTTP({
  schema: MyGraphQLSchema,
  graphiql: true
}));

app.listen(4000);