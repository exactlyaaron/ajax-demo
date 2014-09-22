'use strict';

var total = 0;

exports.addition = (req, res)=>{
  res.render('calc/addition', {title: 'Get Sum'});
};

exports.sum = (req, res)=>{
  var answer = (req.body.num1 * 1) + (req.body.num2 * 1);
  res.send({sum:answer});
};

exports.power = (req, res)=>{
  res.render('calc/power', {title: 'EXponentiate'});
};

exports.pow = (req, res)=>{
  var answer = Math.pow((req.body.num1 * 1),(req.body.num2 * 1));
  res.send({result:answer});
};

exports.sumlist = (req, res)=>{
  res.render('calc/sumlist', {title: 'Sum the List'});
};

exports.sumthelist = (req, res)=>{
  req.body.nums.split(',').map(strip).forEach(addemup);
  res.send({result:total});
};


function strip(x){
  return x.trim();
}

function addemup(x){
  total += (x * 1);
  return total;
}
