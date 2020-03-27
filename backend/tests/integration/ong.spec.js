const request = require('supertest');
const app = require('../../app');
const connection = require('../../app/database/connection');

describe('ONG', () => {
  beforeEach( async () =>{
    await connection.migrate.rollback(); //Desfaz todas as migrations
    await connection.migrate.latest(); //Cria todas as tabelas
  });

  afterAll(async () =>{
    await connection.destroy();
  });

  it('should able to create a new ONG', async () => {
    const res = await request(app)
    .post('/ongs')
    //.set('Authorization', 'value') //para setar param do header
    .send({
      name: 'APAD',
      email:'conta@apad.com',
      whatsapp:'37999999999',
      city: 'Divinópolis',
      uf: 'MG'
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toHaveLength(8);

    console.log(res.body);

  });
});
