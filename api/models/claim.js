let db = require('mongoose')
let claimSchema = new db.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    ssn: {
      type: String,
      required: true
    },
    dob: {
      type: String,
      required: true
    },
    married: {
        type: String,
        required: true
      },
    children: {
        type: String,
        required: true
      },  
      date_of_condition: {
        type: String,
        required: true
      },
      condition_description: {
        type: String,
        required: true
      }   
  })

  db.model('Claim', claimSchema);

  