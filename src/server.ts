import express from 'express';
import { getPayloadClient } from './get-payload';


const app = express();

const port = Number(process.env.port) || 3000;



const start = () => {
    const payload = getPayloadClient({
        initOptions: {
            express: app,
            onInit: async (cms) =>{
                cms.logger.info(`Admin URL: ${cms.getAdminURL}`)
            }
        })
    
}

start();

