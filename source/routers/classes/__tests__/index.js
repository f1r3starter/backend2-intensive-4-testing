const testingUrl = '/api/classes';

describe('should handle post request', () => {
    test('should return status 201 for correct class data', async (done) => {
        const response = await __.server.post(testingUrl).set(__.authHeader)
            .send({});

        expect(response.statusCode).toBe(201);

        const contentType = response.headers[ 'content-type' ];
        const {
            body: { data },
        } = response;

        expect(typeof data).toBe('object');
        expect(contentType).toMatch('application/json');

        done();
    });
});

describe('should handle get request', () => {
    test('should return status 200 with classes array', async (done) => {
        const response = await __.server.get(testingUrl).set({ Accept: 'application/json' })
            .send();

        expect(response.statusCode).toBe(200);

        const contentType = response.headers[ 'content-type' ];
        const {
            body: { data },
        } = response;

        expect(Array.isArray(data)).toBeTruthy();
        expect(contentType).toMatch('application/json');

        done();
    });
});