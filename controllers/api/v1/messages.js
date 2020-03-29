const Message = require('../../../models/Message');

const getAll = (req, res) => {
    Message.find({}, (err, docs) => {
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "messages": docs
                }
            })
        }
    });
}

const get = (req, res) => {
    Message.find({_id: req.params.id}, (err, docs) => {
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "messages": docs
                }
            })
        }
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not find a message with this ID"
            });
        }
    });
}

const create = (req, res) => {
    console.log(req.body);
    let message = new Message();
    message.text = req.body.text;
    message.user = req.body.user;
    message.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not save message"
            });
        }
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "message": doc
                }
            });
        }
    })
}

const update = (req, res) => {
    res.send("UPDATING a message with id " + req.params.id);
}

const remove = (req, res) => {
    res.send("DELETING a message with id " + req.params.id);
}

//

module.exports.getAll = getAll;
module.exports.get = get;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;