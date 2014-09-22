'use strict';

exports.roll = (req, res)=>{
  res.render('dice/roll', {title: 'Roll Dice'});
};

exports.rolldice = (req, res)=>{
  var num = Math.ceil(Math.random()* 6);
  console.log(num);
  res.send({side:num});
};

exports.pairs = (req, res)=>{
  res.render('dice/pairs', {title: 'Roll Dice'});
};

exports.rollpairs = (req, res)=>{

  var num1 = Math.ceil(Math.random()* 6);
  var num2 = Math.ceil(Math.random()* 6);
  var victory;

  if(num1 === num2){
    victory = true;
  } else {
    victory = false;
  }

  res.send({dice1: num1, dice2: num2, winner: victory});
};
