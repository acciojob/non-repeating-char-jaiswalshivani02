function firstNonRepeatedChar(str) {
  // Create an object to store the character counts
  const charCount = {};

  // Iterate through the string and count the characters
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Test cases
console.log(firstNonRepeatedChar('aabbcdd')); // 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // null
