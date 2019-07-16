import request from 'supertest';
import { getPassword } from '../../source/utils/env';

const { app } = require('../../source/server');
const password = getPassword();
const authHeader = { Authorization: password };
const user = { email: 'test@enail.com', name: 'Test'};
const server = request.agent(app);
const hash = '123';
const dotenv = require('dotenv');

dotenv.config({ path: './../../.env' });
global.__ = {
    authHeader,
    user,
    hash,
    server,
};
