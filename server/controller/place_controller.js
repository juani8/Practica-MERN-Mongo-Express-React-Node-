const PlaceModel = require('../models/place.js');

const createPlace = async (req,res) => {
  const { owner, title, address, photos, description, extraInfo, checkin, checkout, guests } = req.body;

  try {
      const Place = new PlaceModel(
        {
          owner: owner, 
          title: title, 
          address: address, 
          photos: photos, 
          description: description, 
          extraInfo: extraInfo, 
          checkin: checkin, 
          checkout: checkout, 
          guests: guests
        }
      );

      await Place.save();
      res.status(200).send({data: User, message: 'Place created succesfully'})
  } catch (err) {
      res.status(422).json(err);
  } 
};

module.exports = { createPlace }