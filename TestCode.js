function createHollowDiamond(targetSize) {
  let diamondPattern = "";
  for (let row = 1; row <= targetSize; row++) {
    for (let space = 1; space <= targetSize - row; space++) {
      diamondPattern += " ";
    }

    diamondPattern += "*";

    if (row > 1) {
      for (let space = 1; space <= (2 * row) - 3; space++) {
        diamondPattern += " ";
      }
      diamondPattern += "*";
    }

    diamondPattern += "\n";
  }

  for (let row = targetSize - 1; row >= 1; row--) {
    for (let space = 1; space <= targetSize - row; space++) {
      diamondPattern += " ";
    }

    diamondPattern += "*";

    if (row > 1) {
      for (let space = 1; space <= (2 * row) - 3; space++) {
        diamondPattern += " ";
      }
      diamondPattern += "*";
    }

    diamondPattern += "\n";
  }

  console.log(diamondPattern);
}

createHollowDiamond(5);  