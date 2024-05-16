const ListModel = require('../models/list.js');

const createList = async (req, res) => {
  try {
    const { name, userId } = req.body;
    const newList = new ListModel({ name: name, user: userId });
    await newList.save();
    res.status(201).json(newList);
  } catch (error) {
    console.error('Error creating list:', error);
    res.status(500).json({ message: 'Error creating list' });
  }
}

const deleteList = async (req, res) => {
  try {
    const list = await ListModel.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }
    await list.remove();
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting list:', error);
    res.status(500).json({ message: 'Error deleting list' });
  }
}

const updateList = async (req, res) => {
  try {

  } catch (error) {
    console.error('Error updating list:', error);
    res.status(500).json({ message: 'Error updating list' });
  }
}

const addToList = async (req, res) => {
  try {

  } catch (error) {
    console.error('Error when adding to list:', error);
    res.status(500).json({ message: 'Error when adding to list' });
  }
}

const getList = async (req, res) => {
  try {
    
  } catch (error) {
    console.error('Error getting list:', error);
    res.status(500).json({ message: 'Error getting list' });
  }
}

const getAllLists = async (req, res) => {
  try {
    const { userId } = req.body;
    const lists = await ListModel.find({ user: userId });
    res.json(lists);
  } catch (error) {
    console.error('Error getting all lists:', error);
    res.status(500).json({ message: 'Error getting all lists' });
  }
}

module.exports = { 
  createList, 
  deleteList,
  updateList,
  addToList,
  getList,
  getAllLists
}