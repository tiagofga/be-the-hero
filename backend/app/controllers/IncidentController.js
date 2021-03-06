const connection = require('../database/connection');
const offset = 10;
module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(offset)
      .offset((page - 1) * offset)
      .select(['incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);

    res.header('X-Total-Count', count['count(*)']);
    res.header('X-Total-Pages', count['count(*)']);

    return res.status(200).json(incidents);
  },
  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;    

    const result = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });
    return res.status(200).json(result[0]);
  },
  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permited;' });
    }

    await connection('incidents')
      .where('id', id)
      .delete();
    return res.status(204).send();
  }
};
