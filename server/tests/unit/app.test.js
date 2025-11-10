import request from 'supertest';
import app from '../../index.js'; // This now imports the server we exported

// After all tests are done, close the server
afterAll(() => {
  app.close();
});

describe('Server Test', () => {
  it('should return success message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Server is running successfully/);
  });
});
