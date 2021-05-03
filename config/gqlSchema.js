const fs = require('fs');
const gqltools = require('graphql-tools');
//const graphql = require('graphql');

module.exports = (schema, resolvers) => { // we can lode schema  
    let fdata = fs.readFileSync(schema, 'utf8');
    return gqltools.makeExecutableSchema(
        {
            typeDefs: fdata,
            resolvers: resolvers

        }
    );
}
// creat obj we can use