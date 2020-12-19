const fs = require('fs')
fs.writeFileSync('./.env', `REACT_APP_RESTAURANT_API_KEY=${process.env.REACT_APP_RESTAURANT_API_KEY}\n`)