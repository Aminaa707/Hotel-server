exports.view = (req, res) => {
  res.status(200).send(req.params.msg);
};
