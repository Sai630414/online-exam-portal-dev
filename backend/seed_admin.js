const mongoose = require('mongoose');
const config = require('config');
const adminModel = require('./models/admin');
const { hashPassword } = require('./services/tool');

const mongoUri = config.get('mongodb.connectionString');

mongoose.connect(mongoUri)
  .then(async () => {
    console.log('Connected to MongoDB');
    const username = 'Sai_reddy6304';
    const rawPassword = 'Sai@redy9866';

    let admin = await adminModel.findOne({ username });
    const hash = await hashPassword(rawPassword);

    if (admin) {
      admin.password = hash;
      await admin.save();
      console.log(`Admin user '${username}' updated successfully!`);
    } else {
      admin = new adminModel({ username, password: hash });
      await admin.save();
      console.log(`Admin user '${username}' created successfully!`);
    }
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error seeding admin user:', err);
    process.exit(1);
  });
