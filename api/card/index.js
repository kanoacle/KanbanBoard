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
    ]
  })
  .then(cards => {
    res.json(cards);
  });
});

Cards.get('/:id', (req, res) => {
  Card.find({
    where: {
      id: req.params.id,
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
  })
  .then( (Card) => {
    res.json(Card);
  });
});

Cards.post('/', (req, res) => {
  Card.create(req.body)
  .then( (Card) => {
    res.json(Card);
  })
  .catch( (err) => {
    res.json(err);
  });
});

Cards.put('/:id', (req, res) => {
  Card.update({
    title: req.body.title,
    status: parseInt(req.body.status),
    priority: parseInt(req.body.priority),
    created_by: req.body.created_by,
    assigned_to: req.body.assigned_to
  }, {
    where: {
      id: req.params.id,
    }
  })
  .then( (Card) => {
    return Card.find( {
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
  .then( (Card) => {
    res.json(Card);
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
  .then( () => {
    res.json({success: true});
  })
  .catch( () => {
    res.json({sucess: false});
  });
});

module.exports = Cards;