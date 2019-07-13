// Core
import request from 'supertest';
import { getPassword } from '../../../utils/env';

// Instruments
const { app } = require('../../../server');
const password = getPassword();
let server = request.agent(app);

describe('should handle post request', () => {
    test('should return status 201 for correct user data', async (done) => {
        const response = await server.post('/api/users').set({ Authorization: password, Accept: 'application/json' })
            .send({ name: 'abcd', email: 'test@test.com' });

        expect(response.statusCode).toBe(201);

        const contentType = response.headers[ 'content-type' ];
        const {
            body,
        } = response;

        expect(typeof body).toBe('object');
        expect(contentType).toMatch('application/json');
        done();
    });
});
