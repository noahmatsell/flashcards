const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/', (req, res) => {
    
    const id = Math.floor(Math.random()*(cards.length));

    res.redirect(`/cards/${id}?side=question`);
});

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;
    const text = cards[id][side];
    const { hint } =  cards[id];
    const name = req.cookies.username;
    const templateData = { id, text, name, side };

    if (side === 'question'){
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    }else if(side === 'answer'){
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }
    if(side){
        return res.render('card', templateData);
    }else{
        return res.redirect(`/cards/${id}?side=question`)
    }
    
});

module.exports = router;