/**
 * Created by liuwensa on 2017/2/23.
 */

'use strict';

const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {title: 'Express'});
});

router.get('/test', (req, res) => {
  return res.json('==========');
});

module.exports = router;
