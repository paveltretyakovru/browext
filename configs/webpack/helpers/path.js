const path = require('path');
module.exports = (pathArr = [], pathFrom = '') => {
  return pathFrom === ''
    ? path.join(__dirname, '../../../', ...pathArr)
    : path.join(pathFrom, ...pathArr)
}
