var express = require('express');
var router = express.Router();

router.get('/:resource', function(req, res, next){

    var resources = req.params.resource

    res.json({
        confirmation: 'success',
        resource: resources
    })

})

module.exports = router
