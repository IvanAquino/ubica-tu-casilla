module.exports = {
  apps : [
    {
      name: "ubicatucasilla",
      script: "./bin/www",
      instances: 2,
      exec_mode: "cluster",
      watch: true,
      increment_var : 'PORT',
      env: {
        "PORT": 3000,
        "NODE_ENV": "development",
        "MONGODB_URI": "mongodb://mongo:27017/ubica_tu_casilla",
      }
    }
  ]
}