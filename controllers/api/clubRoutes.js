const router = require('express').Router();
const { Club, Book } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const clubData = await Club.findAll({
            include: [{ model: Book }]
        });

        res.status(200).json(clubData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const clubData = await Club.findByPk(req.params.id, {
            include: [{ model: Book }]
        });

        if (!clubData) {
            res.status(404).json({message: 'No club found with this id.'});
        }

        res.status(200).json(clubData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    try {
        const newClub = await Club.create({ ...req.body, reader_id: req.session.reader_id });
        // console.log(newClub);
        res.json(newClub);
    } catch (err) {
        // console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const delClub = Club.destroy({
            where: {
                id: req.params.id
            }
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;