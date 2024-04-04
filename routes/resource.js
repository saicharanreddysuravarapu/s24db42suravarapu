var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var lighthouse_controller = require('../controllers/lighthouse');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/lighthouse', lighthouse_controller.lighthouse_create_post);
// DELETE request to delete Costume.
router.delete('/lighthouse/:id', lighthouse_controller.lighthouse_delete);
// PUT request to update Costume.
router.put('/lighthouse/:id', lighthouse_controller.lighthouse_update_put);
// GET request for one Costume.
router.get('/lighthouse/:id', lighthouse_controller.lighthouse_detail);
// GET request for list of all Costume items.
router.get('/lighthouse', lighthouse_controller.lighthouse_list);
module.exports = router;
// API for our resources
// exports.api = function(req, res) {
// res.write('[');
// res.write('{"resource":"lighthouse", ');
// res.write(' "verbs":["GET","PUT", "DELETE"] ');
// res.write('}');
// res.write(']')
// res.send();
// };
