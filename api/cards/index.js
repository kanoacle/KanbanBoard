/*jshint esversion: 6*/
const express = require('express');
const Cards = express.Router();
const { Card, User } = require('../../models');

Cards.get('/', (req, res) => {
  Card.all({
    include: [
      {
        model: User,
        as: 'Creator'
      },
      {
        model: User,
        as: 'Assignee'
      }
    ],
    order: '"updatedAt" DESC'
  })
  .then(cards => {
    res.json(cards);
  });
});

Cards.post('/', (req, res) => {
  Card.create(req.body)
  .then(card => {
    return Card.find({
      where: {
        id: card.id
      },
      include: [
        {
          model: User,
          as: 'Creator'
        },
        {
          model: User,
          as: 'Assignee'
        }
      ]
    });
  })
  .then(card => {
    res.json(card);
  })
  .catch( (err) => {
    res.json(err);
  });
});

Cards.put('/:id', (req, res) => {
  Card.update({
    status: req.body.status
  }, {
    where: {
      id: req.params.id,
    }
  })
  .then(card => {
    return Card.find({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: User,
          as: 'Creator'
        },
        {
          model: User,
          as: 'Assignee'
        }
      ]
    });
  })
  .then(card => {
    res.json(card);
  })
  .catch( (err) => {
    res.json(err);
  });
});

Cards.delete('/:id', (req, res) => {
  Card.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((cards) => {
    Card.all({
    include: [
      {
        model: User,
        as: 'Creator'
      },
      {
        model: User,
        as: 'Assignee'
      }
    ],
    order: '"updatedAt" DESC'
  })
  .then(cards => {
    res.json(cards);
  });
  })
  .catch(() => {
    res.json({sucess: false});
  });
});

module.exports = Cards;