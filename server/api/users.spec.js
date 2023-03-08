/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const { db, models: { User } } = require('../db')
const seed = require('../../script/seed');
const app = require('../app')
//comeback
describe('User routes', () => {
  beforeEach(async() => {
    await seed();
  })

  describe('https://mspiggygraceshopper.onrender.com/api/users/', () => {

    it('GET https://mspiggygraceshopper.onrender.com/api/users', async () => {
      const res = await request(app)
        .get('https://mspiggygraceshopper.onrender.com/api/users')
        .expect(200)

      expect(res.body).to.be.an('array');
      expect(res.body.length).to.equal(2);
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
