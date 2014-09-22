'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var calc = traceur.require(__dirname + '/../routes/calc.js');
  var dice = traceur.require(__dirname + '/../routes/dice.js');
  var cards = traceur.require(__dirname + '/../routes/cards.js');

  app.get('/', dbg, home.index);

  app.get('/sum', dbg, calc.addition);
  app.post('/sum', dbg, calc.sum);

  app.get('/power', dbg, calc.power);
  app.post('/power', dbg, calc.pow);

  app.get('/sumlist', dbg, calc.sumlist);
  app.post('/sumlist', dbg, calc.sumthelist);

  app.get('/roll', dbg, dice.roll);
  app.post('/roll', dbg, dice.rolldice);

  app.get('/pairs', dbg, dice.pairs);
  app.post('/pairs', dbg, dice.rollpairs);

  app.get('/getcard', dbg, cards.card);
  app.post('/getcard', dbg, cards.getcard);

  app.get('/help', dbg, home.help);
  console.log('Routes Loaded');
  fn();
}
