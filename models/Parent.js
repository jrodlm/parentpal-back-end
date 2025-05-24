const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
  },
  hashedPassword: { 
    type: String, 
    required: true 
  },
});

parentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword
    }
})

const Parent = mongoose.model('Parent', parentSchema)

module.exports = Parent
