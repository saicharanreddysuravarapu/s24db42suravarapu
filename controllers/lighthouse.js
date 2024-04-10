var lighthouse = require('../models/lighthouse');
// List of all lighhouse
exports.lighthouse_list = function(req, res) {
res.send('NOT IMPLEMENTED: lighhouse list');
};
// for a specific lighthouse.
exports.lighthouse_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await lighthouse.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle lighthouse create on POST.
exports.lighthouse_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: lighthouse create POST');
};
// Handle lighthouse delete from on DELETE.
exports.lighthouse_delete = function(req, res) {
res.send('NOT IMPLEMENTED: lighthouse delete DELETE ' + req.params.id);
};
// Handle lighthouse update form on PUT.
exports.lighthouse_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await lighthouse.findById( req.params.id)
// Do updates of properties
if(req.body.lighthouse_type)
toUpdate.lighthouse_type = req.body.lighthouse_type;
if(req.body.size) toUpdate.size = req.body.cost;
if(req.body.cost) toUpdate.cost = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
}

const Lighthouse = require('../models/lighthouse');

exports.lighthouse_list = async function(req, res) {
    try {
        const theLighthouse = await Lighthouse.find();
        res.json(theLighthouse);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// VIEWS
// Handle a show all view
exports.lighthouse_view_all_Page = async function(req, res) {
    try{
    thelighthouse = await lighthouse.find();
    res.render('lighthouse', { title: 'lighthouse Search Results', results: thelighthouse });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // var express = require('express');
    // const lighthouse_controlers= require('../controllers/lighthouse');
    // var router = express.Router();
    // /* GET lighthouse */
    // router.get('/', lighthouse_controlers.lighthouse_view_all_Page );
    // module.exports = router;
    // Handle lighthouse create on POST.
exports.lighthouse_create_post = async function(req, res) {
    console.log(req.body)
    let document = new lighthouse();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"lighthouse_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle lighthouse delete on DELETE.
exports.lighthouse_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await lighthouse.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
    
    

    
