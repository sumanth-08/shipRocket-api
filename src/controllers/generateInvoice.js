const { default: axios } = require("axios");

const generateInvoice = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const orderDetails = {
      ids: ["434297525"],  // order_id
    };

    const response = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/orders/print/invoice",
      orderDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while tracking the shipment." });
  }
};

module.exports = { generateInvoice };
