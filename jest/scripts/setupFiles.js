import request from 'supertest';
import {getPassword} from '../../source/utils/env';

const { app } = require('../../source/server');
const password = getPassword();
const authHeader = { Authorization: password };
const email = 'test@enail.com';

global.server = request.agent(app);
global.__ = {
    authHeader,
    email,
};
