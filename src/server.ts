import express from 'express';
import { getPayloadClient } from './get-payload';
import { nextApp, nextHandler } from './next-utils';

const app = express();

const port = Number(process.env.port) || 3000;

const start = () => {
	const payload = getPayloadClient({
		initOptions: {
			express: app,
			onInit: async (cms) => {
				cms.logger.info(`Admin URL: ${cms.getAdminURL}`);
			}
		}
	});

	app.use((req, res) => nextHandler(req, res));
	
	nextApp.prepare().then()

	
};

start();
