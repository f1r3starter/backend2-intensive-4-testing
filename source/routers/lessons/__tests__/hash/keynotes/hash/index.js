const testingUrl = `/api/lessons/${__.hash}/keynotes/${__.hash}`;

describe('should /api/lessons/:hash/keynotes/:keyHash request', () => {
    beforeAll(() => {
        __.server.set(__.authHeader);
    });

    afterAll(() => {
        __.server.unset('Authorization');
    });

    test('should handle get request, response status 200', async (done) => {
        const response = await __.server.get(testingUrl).set({ Accept: 'application/json' })
            .send();

        expect(response.statusCode).toBe(200);

        const contentType = response.headers[ 'content-type' ];
        const {
            body: { data },
        } = response;

        expect(typeof data).toBe('object');
        expect(contentType).toMatch('application/json');

        done();
    });

    test('should handle delete request, response status 204', async (done) => {
        const response = await __.server.delete(testingUrl).set({ Accept: 'application/json' })
            .send();

        expect(response.statusCode).toBe(204);

        const {
            body: { data },
        } = response;

        expect(data).toBeUndefined();

        done();
    });
});
