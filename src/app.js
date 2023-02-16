/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const { add, subtract, divide, multiply, remainder } = require('./lib/numbers');
const {
  getNthElement,
  arrayToCSVString,
  elementsStartingWithAVowel,
  addToArray2,
  removeNthElement2,
} = require('./lib/arrays');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

// Define a route for getting the first character(s) of a string
app.get('/strings/first-characters/:string', (req, res) => {
  // Get the `length` query parameter
  const n = req.query.length;
  // Get the `string` parameter from the URL
  const { string } = req.params;

  // If the `length` parameter is not present, return the first character of the string
  if (!n) {
    return res.status(200).json({ result: firstCharacter(string) });
  }
  // Otherwise, return the first `n` characters of the string
  return res.status(200).json({ result: firstCharacters(string, n) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

  res.status(200).json({ result: add(a, b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

  res.status(200).json({ result: subtract(b, a) });
});

app.post('/numbers/multiply', (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);

  if (!req.body.a || !req.body.b) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (a === null || b === null) {
    return res.status(400).json({ error: 'Parameters "a" and "b" cannot be null.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }

  res.status(200).json({ result: multiply(a, b) });
});

app.post('/numbers/divide', (req, res) => {
  let { a, b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    return;
  }

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    return;
  }

  a = Number(a);
  b = Number(b);

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
    return;
  }

  res.status(200).json({ result: divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  let { a, b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    return;
  }

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
    return;
  }

  a = Number(a);
  b = Number(b);

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
    return;
  }

  res.status(200).json({ result: remainder(a, b) });
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: getNthElement(req.params.index, array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});
app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const index = req.query.index !== undefined ? parseInt(req.query.index) : 0;
  res.status(200).json({ result: removeNthElement2(index, req.body.array) });
});

module.exports = app;
