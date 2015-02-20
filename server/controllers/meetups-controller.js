var Meetup = require('../modals/meetup')


module.exports.create = function(req,res){
    var meetup = new Meetup(req.body);

    meetup.save(function(err,result){
        if (err) {
            handleError(res, err);
        }
        else {
            res.send(meetup);
        }
    });

}

module.exports.list = function(req,res){
    Meetup.find({},function(err,results){
        res.json(results);
    })
}