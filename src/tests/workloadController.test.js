import request from 'supertest';
import App from '../app';

describe('test GET workload API ', () => {
  test('It should return 200', async (done) => {
    const response = await request(App).get('/api/workload');
    await expect(response.statusCode).toBe(200);
    done();
  });
});
