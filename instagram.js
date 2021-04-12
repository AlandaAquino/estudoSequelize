const { Usuario, Post, Comentario, sequelize } = require('./models');
const {Op} = require('sequelize');

// Post.findAll()
// .then((result) => {
//     console.table(result.map(user => user.toJSON()))
// });

// Post.findByPk(2)
// .then((result) => {
//     console.table(result.toJSON());
// });

// Post.findOne({
//     where : {
//         texto : 'Como foi o fim de semana?'
//     }
// })
// .then((result) => {
//     console.table(result.toJSON());
// });

// Comentario.findAll()
// .then((result) => {
//     console.table(result.map(user => user.toJSON()))
// });

// Comentario.findByPk(2)
// .then((result) => {
//     console.table(result.toJSON());
// });

// Comentario.findOne({
//     where : {
//         texto : 'Oi gente é o !@#!$%! Meu nome agora é Zé Pequeno!'
//     }
// })
// .then((result) => {
//     console.table(result.toJSON());
// });


// Usando where
// Post.findAll({
//     where: {
//         texto:{[Op.like]: '%?'}
//     }
// })
// .then((result) => {
//     console.table(result.map(post => post.toJSON()))
// });

// Usando order, limit e offset
// Usuario.findAll({
//     order: [
//         ['id', 'ASC']
//     ],
//     limit: 2,
//     offset: 2
// })
// .then((result) => {
//     console.table(result.map(usuario => usuario.toJSON()))
// });

// Usuario.findAll({
//     where:{
//        nome:{[Op.like]: '%a%'}  
//     }
// })
// .then((result) => {
//     console.table(result.map(usuario => usuario.toJSON()))
// });

// Usuario.findAll({
//     where:{
//        nome:{[Op.notLike]: '%a%'}  
//     }
// })
// .then((result) => {
//     console.table(result.map(usuario => usuario.toJSON()))
// });

// Comentario.findAll({
//     order: [
//         ['id', 'DESC']
//     ],
//     limit: 2,
//     offset: 0
// })
// .then((result) => {
//     console.table(result.map(user => user.toJSON()))
// });

// Usuario.create({
//     nome: 'Natalia',
//     email: 'nat@digitalhouse.com',
//     senha: 'maravilhosaaaa123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });
// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id: 8
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })
// Usuario.destroy({
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// Usuario.create({
//     nome: 'Mylena',
//     email: 'mylena@digitalhouse.com',
//     senha: 'dev1234579'
// });
// Usuario.create({
//     nome: 'Alanda',
//     email: 'alanda@digitalhouse.com',
//     senha: 'dev1234579'
// });
// Usuario.create({
//     nome: 'Mateus',
//     email: 'mateus@digitalhouse.com',
//     senha: 'dev1234579'
// });
// Usuario.create({
//     nome: 'Cecilia',
//     email: 'cecilia@digitalhouse.com',
//     senha: 'dev1234579'
// });
// Usuario.create({
//     nome: 'K. Leticia',
//     email: 'kleticia@digitalhouse.com',
//     senha: 'dev1234579'
// });

// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

// Usuario.destroy({
//     where: {
//         id: 3
//     }
// });

// Post.create({
//     texto: 'Simbora!!!',
//     img: 'vamos.png',
//     n_likes: 10000,
//     usuarios_id: 7
// });



// Usuario.findAll().then((usuarios) => {
//     console.table(usuarios.map((usuario) => usuario.toJSON()));
// })

// Usuario.findByPk(1, {
//     include: [
//         {association: "posts"}
//     ]
// })
// .then((usuario) => {
//     console.table(usuario.post.map((post) => post.toJSON()));
// });

// Usuario.findByPk(1, {include: ['posts']}).then(usuario => {
//     console.log(usuario.toJSON());
//     sequelize.close();
// });

Post.findByPk(1, {include: ['comentarios']}).then(post => {
    console.log(post.toJSON());
    sequelize.close();
});