'use strict';

exports.card = (req, res)=>{
  res.render('cards/getcard', {title: 'Get Random Card'});
};

exports.getcard = (req, res)=>{
  var cardNum = Math.floor(Math.random()* 13);
  var suitNum = Math.floor(Math.random()* 4);
  res.send({suit: suitNum, card: cardNum});
};
