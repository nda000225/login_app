import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    // res.json(decodedToken);
    next()
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Authentification échouée" });
  }
};

export const localVariable = async (req, res, next) => {
  req.app.locals = {
    OTP: null,
    resetSession: false
  }
  next()
};
