const { User, Property } = require("./model");

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: error.message });
  }
};

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({ username, email, password });

  try {
    const user = await newUser.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json(error.message);
    console.log(error);
  }
};

const createProperty = async (req, res) => {
  const {
    title,
    description,
    price,
    location,
    bedrooms,
    bathrooms,
    area,
    image,
    owner,
  } = req.body;

  const newProperty = new Property({
    title,
    description,
    price,
    location,
    bedrooms,
    bathrooms,
    area,
    image,
    owner,
  });

  try {
    const property = await newProperty.save();
    res.status(200).json({ property });
  } catch (error) {
    res.status(401).json("Enter full information of Property");
    console.log(error);
  }
};

const getPropertyById = async (req, res) => {
  const { id } = req.params;

  try {
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ property });
  } catch (error) {
    console.error("Error fetching property:", error);
    res.status(500).json({ message: error.message });
  }
};

const getProperties = async (req, res) => {
  try {
    let query = {};

    if (req.query.location) {
      query.location = req.query.location;
    }
    if (req.query.type) {
      query.type = req.query.type;
    }
    if (req.query.bedrooms) {
      query.bedrooms = req.query.bedrooms;
    }
    if (req.query.minPrice && req.query.maxPrice) {
      query.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice };
    } else if (req.query.minPrice) {
      query.price = { $gte: req.query.minPrice };
    } else if (req.query.maxPrice) {
      query.price = { $lte: req.query.maxPrice };
    }

    const properties = await Property.find(query);
    console.log("Properties found:", properties);
    res.status(200).json({ properties });
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
  createProperty,
  getPropertyById,
  getProperties,
};
