/**
 * Node-processed variables which will be passed to the PHP engine
 *
 * See dist/config/environment.json for raw output
 * See inc/environment.php for PHP management
 */
module.exports = JSON.stringify({
  HASH: module.compilation.hash,
  NODE: process.env.NODE_ENV || 'development',
  NAME: JSON.stringify(require('../package.json').name)
})
