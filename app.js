var express =require('express'),
    app =express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    meetupCtrl = require('./server/controllers/meetups-controller');



mongoose.connect('mongodb://krishna:krishna@ds043329.mongolab.com:43329/mongolab-test');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/client/index.html');
});


app.use('/js',express.static(__dirname + '/client/js'));

app.get('/api/krish',meetupCtrl.list)
app.post('/api/krish',meetupCtrl.create)

app.listen(1414,function(){
    console.log('Hey I am listinig on port 1414')
})