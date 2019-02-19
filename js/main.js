import express from 'express';

var app = express();

app.get('/', (req, res) => res.send('hello world'))

app.listen('3002', () => console.log('app started'));