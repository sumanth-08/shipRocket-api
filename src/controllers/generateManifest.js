const { default: axios } = require("axios");

const generateManifest = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const orderDetails = {
      shipment_id: [432517211],
    };

    const response = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/manifests/generate",
      orderDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ error: "An error occurred while tracking the shipment." });
  }
};

module.exports = { generateManifest };
