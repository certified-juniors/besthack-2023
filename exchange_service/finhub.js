const swagger = require('swagger-client');

const finhubApi = new swagger({
    url: 'https://finnhub.io/api/v1/swagger.json',
    usePromise: true
});




module.exports = initFinhubApi;