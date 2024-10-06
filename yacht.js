//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (dices, category) => {
  const normalCategory = {
    ones: 1,
    twos: 2,
    threes: 3,
    fours: 4,
    fives: 5,
    sixes: 6
  }

  function frequencyOfTheNumber(setOfNumber) {
    const count = {}
    for (let num of setOfNumber) {
      count[num] = count[num] ? count[num] + 1 : 1
    }
    return count
  }

  function sumOfANormalCategory(setOfNumber, category) {
    const occurenceOfNumber = frequencyOfTheNumber(setOfNumber)
    const sum = category * occurenceOfNumber[category]
    console.log(sum);
    return sum
  }
  
  function sumOfSpecialCategory(setOfNumber, category) {
    if (category === "full house") {
      const occurenceOfNumber = frequencyOfTheNumber(setOfNumber)
      const filteredNumber = Object.keys(occurenceOfNumber).filter((key) => occurenceOfNumber[key] === 2 || occurenceOfNumber[key] === 3)
      for (let num of filteredNumber) {
        
      }
      return 
    }
  }

  //sumOfANormalCategory(dices, normalCategory[category])
  sumOfSpecialCategory(dices, category)
};

score([1, 1, 1, 3, 3, 5], "full house")
