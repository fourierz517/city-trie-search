const express = require('express');
const {DICT, NUMBER_OF_KEYS, dfs, listNames} = require('./trie/trieMethods.js');
const trie = require('./trie/citiesTrie.json');
const app = express();
const port = process.env.PORT || 5000;
//const API_ID = process.env.API_ID;
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/listcities', (req, res)=>{
    res.send({data: listNames(trie, req.query.prefix)});
});