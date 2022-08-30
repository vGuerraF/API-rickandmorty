const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['src/personagens/personagens.route.js', 'src/users/users.route.js']

swaggerAutogen(outputFile, endpointsFiles)