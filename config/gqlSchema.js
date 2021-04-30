const fs = require('fs');
const graphql = require('graphql');

module.exports = (schema) => { // we can lode schema  
    let fdata = fs.readFileSync(schema, 'utf8');
    return graphql.buildSchema(fdata);
}