import { createServer } from 'http';

import app from './app';
import { connectDatabase } from './database';
import { config } from './config';

(async () => {
	await connectDatabase();

	const server = createServer(app.callback());

	server.listen(config.PORT, () => {
		console.log(`server running at http://localhost:${config.PORT}`);
	});
})();
