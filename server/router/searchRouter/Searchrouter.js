const { Router } = require('express');
const { Search }  = require('../../controller/Search/Searchcontroller');

const router = Router();

router.get('/api/search', Search);

module.exports = router;