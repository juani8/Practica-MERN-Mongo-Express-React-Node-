const axios = require("axios");

const getImages = async (req, res) => {
  try {
    // Perform validation on query parameters, if any
    // Example: Validate query parameter 'search'
    if (req.query.search && !isAlphanumeric(req.query.search)) {
      return res.status(400).json({ error: 'Invalid search query' });
    }

    // Fetch images from external API
    const response = await axios.get('https://picsum.photos/v2/list');

    const imagesList = response.data.map( image => ({
      id: image.id,
      author: image.author,
      url: image.download_url,
    }));
    console.log(imagesList)

    // Send sanitized image to the client
    res.json(imagesList);

  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { getImages } 