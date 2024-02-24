const { randomInt } = require('crypto'); // Use crypto's randomInt for better security

function getRandomNumberBetween1And50() {
  // Generate a random integer between 0 and 49 (inclusive)
  const randomNumber = randomInt(0, 49);

  // Add 1 to make the range 1 to 50 (inclusive)
  return randomNumber + 1;
}

// Generate and print a random number
module.exports={getRandomNumberBetween1And50}