module.exports.match = function(hash) {
  // RegEx pattern
  let pattern = /card expire date/;
  let data = [];

  // Find keys from the hash that match the RegEx pattern
  Object.keys(hash).forEach(key => {
    if (pattern.test(key)) {
      data.push(key)
    }
  })
  
  return data;
}
