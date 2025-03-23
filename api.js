const express = require('express');
const app = express();
const { musicard, comunismo, bolsonaro, bnw, blurr, affect, beautiful, circle, del, gay, lgbt, invert, facepalm, dither, jail, magik, pixelate, rip, sepia, rotate, trash, wanted, wasted, bobross, mms, karaba } = require('./canvas.js');

// Definindo as rotas
app.get('/api/canvas/musicard', musicard);
app.get('/api/canvas/comunismo', comunismo);
app.get('/api/canvas/bolsonaro', bolsonaro);
app.get('/api/canvas/bnw', bnw);
app.get('/api/canvas/affect', affect);
app.get('/api/canvas/blur', blurr);
app.get('/api/canvas/beautiful', beautiful);
app.get('/api/canvas/circle', circle);
app.get('/api/canvas/del', del);
app.get('/api/canvas/invert', invert);
app.get('/api/canvas/gay', gay);
app.get('/api/canvas/lgbt', lgbt);
app.get('/api/canvas/facepalm', facepalm);
app.get('/api/canvas/dither', dither);
app.get('/api/canvas/jail', jail);
app.get('/api/canvas/magik', magik);
app.get('/api/canvas/rip', rip);
app.get('/api/canvas/sepia', sepia);
app.get('/api/canvas/rotate', rotate);
app.get('/api/canvas/pixelate', pixelate);
app.get('/api/canvas/trash', trash);
app.get('/api/canvas/wasted', wasted);
app.get('/api/canvas/wanted', wanted);
app.get('/api/canvas/bobross', bobross);
app.get('/api/canvas/karaba', karaba);
app.get('/api/canvas/mms', mms);

// Inicializando o servidor na porta 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});