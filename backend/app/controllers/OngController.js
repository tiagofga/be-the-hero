const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.status(200).json({ id });
  },
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.status(200).json(ongs);
  }
};
