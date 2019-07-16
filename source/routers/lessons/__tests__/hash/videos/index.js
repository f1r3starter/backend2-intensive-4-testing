const testingUrl = `/api/lessons/${__.hash}/videos`;

describe('should handle post request', () => {
    test('should return status 200', async (done) => {
        const response = await __.server.post(testingUrl).set({ Accept: 'application/json' })
            .send(__.user);

        expect(response.statusCode).toBe(200);

        const contentType = response.headers[ 'content-type' ];
        const {
            body: { data },
        } = response;

        expect(typeof data).toBe('object');
        expect(contentType).toMatch('application/json');

        done();
    });
});
