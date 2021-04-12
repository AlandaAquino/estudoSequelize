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

Usuario.findAll({
    where:{
       nome:{[Op.like]: '%a%'}  
    }
})
.then((result) => {
    console.table(result.map(usuario => usuario.toJSON()))
});

Usuario.findAll({
    where:{
       nome:{[Op.notLike]: '%a%'}  
    }
})
.then((result) => {
    console.table(result.map(usuario => usuario.toJSON()))
});

Comentario.findAll({
    order: [
        ['id', 'DESC']
    ],
    limit: 2,
    offset: 0
})
.then((result) => {
    console.table(result.map(user => user.toJSON()))
});
