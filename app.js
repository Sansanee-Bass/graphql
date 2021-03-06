const express = require('express');
const path = require('path');
const dbLayer = require('./config/db');
const cookieParser = require('cookie-parser');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const port = 9000;

const schemaLoader = require('./config/gqlSchema');


//const User = require('./model/User');

app.use('/', express.static(path.join(__dirname, 'public')));

const gqlr = require('./gql/resolvers');
const schema = schemaLoader('./gql/school.gql', gqlr);


app.use(cookieParser());
app.use(express.json());

app.use('/gql',
	graphqlHTTP({
		schema: schema,
		//rootValue: gqlr.Query,
		graphiql: true // user interface
	})
);

app.listen(port, () => {
	dbLayer.init();
	console.log(`listening on port: ${port}`);
});
