describe('should handle login request', () => {
    test('should return status 204 with empty response', async (done) => {
        const response = await __.server.post('/api/login').set({ Accept: 'application/json' })
            .send();

        expect(response.statusCode).toBe(204);

        const {
            body: { data },
        } = response;

        expect(data).toBeUndefined();

        done();
    });
});

describe('should handle logout request', () => {
    test('should return status 204 with empty response', async (done) => {
        const response = await __.server.post('/api/logout').set({ Accept: 'application/json', ...__.authHeader})
            .send();

        expect(response.statusCode).toBe(204);

        const {
            body: { data },
        } = response;

        expect(data).toBeUndefined();

        done();
    });
});
