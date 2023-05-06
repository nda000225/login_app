import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const verifyUser = async (req, res, next) => {
  try {
    const { username } = req.method === "GET" ? req.query : req.body;

    const userExist = await User.findOne({ username });
    if (!userExist) {
      return res
        .status(404)
        .json({ success: false, message: "Utilisateur introuvable" });
    }
    next();
  } catch (error) {
    return res
      .status(503)
      .json({ success: false, message: "Erreur d'authentification" });
  }
};

export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const { username, profile, email } = req.body;

    const existUsername = await User.findOne({ username });
    if (existUsername) {
      return res
        .status(404)
        .json({ success: false, message: "Ce pseudo est déjà occupé" });
    }
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res
        .status(404)
        .json({ success: false, message: "Cet email est déjà occupé" });
    }

    const newUser = new User({
      username,
      password: hash,
      profile: profile || "",
      email,
    });
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "Vous avez été bien enregistré" });
  } catch (err) {
    res.status(500).json(console.log(err), {
      success: false,
      message: "L'operation a echoué. Veuillez reprendre Svp!",
    });
  }
};

export const login = async (req, res) => {
  try {
    const username = req.body.username;

    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Ce pseudo n'existe pas" });
    }

    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      return res.status(401).json({
        success: false,
        message: "Votre mot de passe est incorrect",
      });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return res
      .status(200)
      .json({ token, username: user.username, email: user.email });
    //définir le token dans les cookies du navigateur et envoyer la réponse au client
    // res
    //   .cookie("accesToken", token, {
    //     httpOnly: true,
    //     expires: token.expiresIn,
    //   })
    //   .status(200)
    //   .json({ token, data: { ...rest }, role });
  } catch (err) {
    res.status(500).json({ success: false, message: "Echec de la connexion" });
    console.log(err);
  }
};

export const getUser = async (req, res) => {
 const {username} = req.params;
 try {
   const user = await User.findOne({username});
   res.status(200).json({
     success: true,
     message: "Votre demande a été trouvé",
     data: user,
   });
 } catch (err) {
   res.status(404).json({
     success: false,
     message: "Votre demande n'est pas traitée.",
   });
 }
};

export const updateUser = async (req, res) => {};

export const generateOTP = async (req, res) => {};

export const verifyOTP = async (req, res) => {};

export const resetSession = async (req, res) => {};

export const resetPassword = async (req, res) => {};
