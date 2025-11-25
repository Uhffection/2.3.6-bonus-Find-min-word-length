function findMinLength(word1, word2) {
  var shortest;
  if (word1.length < word2.length) {
    shortest = word1.length;
  } else {
    shortest = word2.length;
  }

  return shortest;
}