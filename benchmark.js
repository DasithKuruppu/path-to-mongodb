var pathToMongodb = require('./');

var count = 1;

console.time('1 times');
while (count--) {
  pathToMongodb('/posts/:year/:skip/:limit', '/posts/2015/200/100?deliveryDate[$gte]=2015-01-01T00:00:00.000Z', {defaultDB: 'test'});
}
