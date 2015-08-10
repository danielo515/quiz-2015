// Definicion del modelo de comentario

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    	'Comment',
      { texto: {
          type: DataTypes.STRING,
          validate: { notEmpty: {msg: "-> Falta texto del comentario"}}
        }
      }
    );
}