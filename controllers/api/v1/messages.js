const Message = require('../../../models/Message');

const getAll = (req, res) => {
    Message.find({}, (err, docs) => {
        if (!err) {
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
                "message": "Could not get messages"
            });
        }
    });
}

const get = (req, res) => {
    Message.find({
        _id: req.params.id
    }, (err, docs) => {
        if (!err) {
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
                "message": "Could not find a message with id: " + req.params.id
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
        if (!err) {
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
    Message.findByIdAndUpdate({_id: req.params.id}, (err, doc) => {
        if(!err){
            res.json({
                "status" : "success",
                "data" : {
                    "message": "Updated message with id: " + req.params.id
                }
            })
        }
        if (err) {
            res.json({
                "status": "error",
                "data": {
                    "message": "Could not update message with id: " + req.params.id
                }
            });
        }
    })
}

const remove = (req, res) => {
    Message.findByIdAndDelete({_id: req.params.id}, (err, doc) => {
        if(!err){
            res.json({
                "status" : "success",
                "data" : {
                    "message": "Removed message with id: " + req.params.id
                }
            })
        }
        if (err) {
            res.json({
                "status": "error",
                "data": {
                    "message": "Could not remove message with id: " + req.params.id
                }
            });
        }
    })
}

const getByUser = (req, res) => {
    Message.find({
        user: req.params.user
    }, (err, doc) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": doc
                }
            })
        }
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not find messages for this user"
            });
        }
    })
}

//

module.exports.getAll = getAll;
module.exports.get = get;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;
module.exports.getByUser = getByUser;