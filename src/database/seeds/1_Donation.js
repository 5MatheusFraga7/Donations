
module.exports = {
    async seed(knex) {
        return knex('donations').insert([
            {
              responsible: 'Fraga',
              sector: 'Comprar um PC gamer',
              values: 0.0
            },
            {
                responsible: 'João',
                sector: 'Comprar um carro',
                values: 0.0
            },
            {
                responsible: 'Lucas',
                sector: 'Comprar uma casa',
                values: 0.0
            }
          ]);
    }
}
