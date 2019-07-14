describe('should handle post request', () => {
    test('should return status 201 for correct user data', async (done) => {
        const response = await server.post('/api/users').set({ Accept: 'application/json', ...__.authHeader })
            .send({ name: 'abcd', email: 'test@test.com' });

        expect(response.statusCode).toBe(201);

        const contentType = response.headers[ 'content-type' ];
        const {
            body,
        } = response;

        expect(body).toBeInstanceOf('object');
        expect(contentType).toMatch('application/json');
        done();
    });
});
