module.exports = function toReadable (number) {
  const dictionary = {
    '0': ['zero', '', '', ''],
    '1': ['one', 'eleven', 'one hundred', 'one thousand'],
    '2': ['two', 'twenty', 'two hundred', 'two thousand'],
    '3': ['three', 'thirty', 'three hundred', 'three thousand'],
    '4': ['four', 'forty', 'four hundred', 'four thousand'],
    '5': ['five', 'fifty', 'five hundred', 'five thousand'],
    '6': ['six', 'sixty', 'six hundred', 'six thousand'],
    '7': ['seven', 'seventy', 'seven hundred', 'seven thousand'],
    '8': ['eight', 'eighty', 'eight hundred', 'eight thousand'],
    '9': ['nine', 'ninety', 'nine hundred', 'nine thousand'],
    'strangeNumbers': {
      '10': 'ten',
      '11': 'eleven', 
      '12': 'twelve', 
      '13': 'thirteen', 
      '14': 'fourteen', 
      '15': 'fifteen', 
      '16': 'sixteen', 
      '17': 'seventeen', 
      '18': 'eighteen', 
      '19': 'nineteen'}
    }   

    const strVal = String(number)
    const numberLength = strVal.length

    if (numberLength<2) { // oneNumeral
        return dictionary[String(number)][0]
    }

    else if (numberLength < 3) { // twoNumeral
        if (strVal[0] === '1') {
            return dictionary['strangeNumbers'][strVal]
        }
        else if (strVal[1] === '0') {
            return dictionary[strVal[0]][1]
        }
        else {
          return dictionary[strVal[0]][1] + " " + dictionary[strVal[1]][0]
        }
    }

    else if (numberLength < 4) { // threeNumeral
        if (Object.keys(dictionary['strangeNumbers']).includes(strVal.slice(strVal.length-2, strVal.length))) {
            return dictionary[strVal[0]][2] + " " + dictionary['strangeNumbers'][strVal.slice(strVal.length-2, strVal.length)]
        }
        else if (strVal[strVal.length-1] != '0' && strVal[strVal.length-2] != '0') {
            return dictionary[strVal[0]][2] + " " + dictionary[strVal[1]][1] + " " + dictionary[strVal[2]][0]
        }
        else if (strVal[strVal.length-1] === '0' && strVal[strVal.length-2] === '0') {
            return dictionary[strVal[0]][2]
        }
        else if (strVal[strVal.length-2] === '0' && strVal[strVal.length-1] != '0') {
            return dictionary[strVal[0]][2] + " " + dictionary[strVal[2]][0]
        }
        else if (strVal[strVal.length-1] === '0' && strVal[strVal.length-2] != '0') {
            return dictionary[strVal[0]][2] + " " + dictionary[strVal[1]][1]
        }
    }

    else if (numberLength < 5) { // // fourNumeral
        if (Object.keys(dictionary['strangeNumbers']).includes(strVal.slice(strVal.length-2, strVal.length))) {
            return dictionary[strVal[0]][2] + " " + dictionary['strangeNumbers'][strVal.slice(strVal.length-2, strVal.length)]
        }else {
            return dictionary[strVal[0]][3] + " " + dictionary[strVal[1]][2] + " " + dictionary[strVal[2]][1] + " " + dictionary[strVal[3]][0]
        }
    }
}
