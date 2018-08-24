const helloWorld = (req, res) =>  {
    const message = 'hello world';
    res.status(200).send(message);
}

module.exports = helloWorld;