var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session')
var url = require('url');
var app = express()
app.use(express.urlencoded());
app.use(express.static('v1'))
app.use(session({
    secret: 'animeninjastream',
}));
app.set('view engine', 'ejs');
var data = {
    session: null,
    episode: 0,
    animeid: 0
}
app.get("/:episodenum", function (req, res) {
    data.session = req.session
    data.episode = parsetInt(req.params.episodenum)
    res.render("watch", data)
})
app.listen(81, () => console.log('Started at port 81'))