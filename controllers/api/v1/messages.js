const getAll = (req, res) => {
    res.send("GETTING messages");
}

const get = (req, res) => {
    res.send("GETTING message with ID " + req.params.id);
}

const create = (req, res) => {
    res.send("POSTING a new message for user Pikachu");
}

const update = (req, res) => {
    res.send("UPDATING a message with id " + req.params.id);
}

const remove = (req, res) => {
    res.send("DELETING a message with id " + req.params.id);
}

module.exports.getAll = getAll;
module.exports.get = get;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;