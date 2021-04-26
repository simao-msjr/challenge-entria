import Koa from 'koa';
import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import { buildSchema } from 'graphql';

const app = new Koa();
const router = new Router();

const schema = buildSchema(`
	type Query {
		hello: String
		name: String
	},

`);

const root = {
	hello: () => 'Hello challenge!',
	name: () => 'Naruto',
};

router.all(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
		rootValue: root,
	}),
);

app.use(router.routes()).use(router.allowedMethods());

app.listen(3333, () => {
	console.log('Server running on port 3333');
});
