import request from 'supertest';
import App from '../app';
import { db } from '../models/index';
import mockRequest from './__mocks__/goodRequest';
import mockBadRequest from './__mocks__/badRequest';

describe('test POST api/register', () => {
  test('It should return 204', async (done) => {
    const response = await request(App)
      .post('/api/register')
      .send(mockRequest.body);
    await expect(response.statusCode).toBe(204);
    done();
  });
  test('It should return 400 with a bad request body', async (done) => {
    const response = await request(App)
      .post('/api/register')
      .send(mockBadRequest.body);
    await expect(response.statusCode).toBe(400);
    done();
  });
  afterAll(async (done) => {
    db.sequelize.close();
    done();
  });
});
