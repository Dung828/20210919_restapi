
function consolelog (req,spacex) { 
    console.log('modules - ',spacex);
    console.log(req.params.userId);
    console.log(req.params.userId,req.url, req.method, req.headers.host, 
        req.route, req.params);
    console.log('---------------------------------------');
    
}
//-----------------------------------------
var blink17 = require('./blink17.js');

module.exports.getGpio = (req, res) => {
    // Code here
    res.send('GET HTTP method on GPIO');
    blink17.ledBlink(17);
    consolelog(req,'getGpio');
}
//-----------------------------------------
module.exports.get1 = (req, res) => {
    // Code here
    res.send('GET HTTP method on user resource');
    consolelog(req,'get1');
}

module.exports.post1 = (req, res) => {
    // Code here
    res.send('POST HTTP method on user resource');
    consolelog(req,'post1');
}

module.exports.put1 = (req, res) => {
    // Code here
    res.send(`PUT HTTP method on user/${req.params.userId} resource`,);
    consolelog(req,'put1');
}

module.exports.del1 = (req, res) => {
    // Code here
    res.send(`DELETE HTTP method on user/${req.params.userId} resource`,);
    consolelog(req,'del1');
}


