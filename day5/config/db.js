const mongoose = require('mongoose');

mongoose
    .connect(    "mongodb+srv://"+ process.env.DB_USER_PASS + "@cluster0.vtgre.mongodb.net/mern-project",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    )
    .then(() => console.log('connected to mongo'))
    .catch((err) => console.log('Failed', err))
