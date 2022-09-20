const mongoose = require('mongoose');
const db_name = 'post_db';
mongoose.connect(`mongodb://localhost/${db_name}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log('Established connection to database'+db_name))
    .catch(err=>console.log('Error connecting to database'));