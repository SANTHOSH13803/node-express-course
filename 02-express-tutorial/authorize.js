const authorize = (req, res, next) => {
  if (req.query.user === "admin") {
    req.user = { name: "admin", id: 1 };
    next();
  } else {
    res.status(401).send("Unauthorized");
    next();
  }
};

module.exports = authorize;
