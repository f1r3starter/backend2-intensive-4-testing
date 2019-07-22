const testingUrl = `/api/classes/${__.hash}/`;

describe('should handle enroll request', () => {
    test('should return status 200', async (done) => {
        const response = await __.server.post(testingUrl + 'enroll').set(__.authHeader)
            .send({});

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

describe('should handle expel request', () => {
    test('should return status 201', async (done) => {
        const response = await __.server.post(testingUrl + 'expel').set(__.authHeader)
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
