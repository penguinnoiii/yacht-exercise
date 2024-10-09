//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { AsyncLocalStorage } from "async_hooks";
import { CLIENT_RENEG_LIMIT } from "tls";

export const score = (dices, category) => {
  category = category.toLowerCase()
  
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
    if (isNaN(sum) || sum === 0) {
      console.log(0);
      return 0
    } else {
      console.log(sum);
      
    }
    return sum
  }
  
  function sumOfSpecialCategory(setOfNumber, category) {
    if (category === "full house") {
      const occurenceOfNumber = frequencyOfTheNumber(setOfNumber)
      const filteredNumber = Object.keys(occurenceOfNumber).filter((key) => occurenceOfNumber[key] === 2 || occurenceOfNumber[key] === 3)      
      let sum = 0
      let hasTwo = false
      let hasThree = false
      for (let findThree of filteredNumber) {
        if (occurenceOfNumber[findThree] === 3) {
          hasThree = true
        } else if (occurenceOfNumber[findThree] === 2) {
          hasTwo = true
        }
      }
      
      if (hasThree && hasTwo && filteredNumber.length === 2) {
        for (let num of filteredNumber) {
          sum = sum + (num * occurenceOfNumber[num])
        }
        console.log(sum);
        return sum
      } else {
        console.log(0);
        return 0
      }
    }

    if (category === "four of a kind") {
      const occurenceOfNumber = frequencyOfTheNumber(setOfNumber)
      const filteredNumber = Object.keys(occurenceOfNumber).filter((key) => occurenceOfNumber[key] >= 4)
      let sum = 0
      if (true) {
        sum = filteredNumber * 4
      }
      console.log(sum);
      return sum
    }

    if (category === "yacht") {
      const occurenceOfNumber = frequencyOfTheNumber(setOfNumber)
      const filteredNumber = Object.keys(occurenceOfNumber).filter((key) => occurenceOfNumber[key] === 5)
      if (occurenceOfNumber[filteredNumber] === 5) {
        console.log(50);
        return 50
      } else {
        console.log(0)
        return 0
      }
    }
  }

  function sumOfSpecificCategory(setOfNumber, category) {
    if (category === "little straight") {
      const sortedNumber = setOfNumber.sort((a, b) => a - b)
      const number = JSON.stringify(sortedNumber)
      const availableNumber = JSON.stringify([1, 2, 3, 4, 5])
      if (number.includes(availableNumber)) {
        console.log(30);
        return 30
      } else {
        console.log(0);
        return 0
      }
    }

    if (category === "big straight") {
      const sortedNumber = setOfNumber.sort((a, b) => a - b)
      const number = JSON.stringify(sortedNumber)
      const availableNumber = JSON.stringify([2, 3, 4, 5, 6])      
      if (number.includes(availableNumber))  {
        console.log(30);
        return 30
      } else {
        console.log(0);
        return 0
      }
    }

    if (category === "choice") {
      let sum = 0
      for (let num of setOfNumber) {
        sum = sum + num
      }
      console.log(sum);
      return sum
    }
  }

  const normal = ["ones", "twos", "threes", "fours", "fives", "sixes"]
  const special = ["full house", "four of a kind", "yacht"]
  const specific = ["little straight", "big straight", "choice"]
  if (normal.includes(category)) {
    return sumOfANormalCategory(dices, normalCategory[category])
  } else if (special.includes(category)) {
    return sumOfSpecialCategory(dices, category)
  } else if (specific.includes(category)) {
    return sumOfSpecificCategory(dices, category)
  } else {
    throw new Error("Cannot Found")
  }
};

score([5, 3, 3, 5, 3], "full house")