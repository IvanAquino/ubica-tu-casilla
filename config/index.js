const config = {
  database: {
    connection: process.env.MONGODB_URI || '',
  },
}

module.exports = config
