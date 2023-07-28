const notFound = (req, res) => {
  res.status(404).send(`Route does not exit`);
};

export default notFound;
