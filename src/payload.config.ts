import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import { Users } from './collections/Users';



dotenv.config({
	path: path.resolve(__dirname, '../.env')
});

export default buildConfig({
	serverURL: process.env.NEXT_PUBLICK_SERVER_URL || '',
	collections: [Users],
	routes: {
		admin: '/sell'
	},
	admin: {
		user: 'users',
		bundler: webpackBundler(),
		meta: {
			titleSuffix: '- Shopvista',
			favicon: '/favicon.ico',
			ogImage: '/thumbnail.jpg'
		}
	},
	rateLimit: {
		max: 2000,
	},
	db: mongooseAdapter({
		url: process.env.MONGODB_URL!,
	}),
	editor: slateEditor({}),
    typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts')
	}, 
})