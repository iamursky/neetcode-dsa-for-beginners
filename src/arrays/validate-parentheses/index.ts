function isOpenningBracket(char: string): boolean {
  return "({[".includes(char);
}

function isClosingBracket(char: string): boolean {
  return ")}]".includes(char);
}

function isPair(leftChar: string, rightChar: string): boolean {
  const PAIRS: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  return PAIRS[leftChar] === rightChar;
}

function isValid(s: string): boolean {
  // String has an odd number of characters, return false
  if (s.length % 2 !== 0) return false;

  // First character is a closing bracket, return false
  if (!isOpenningBracket(s[0])) return false;

  let i: number = 0;

  while (i < s.length) {
    // Reached the end of the string
    if (!s[i + 1]) return false;

    // Next char is an openning bracket, set index to it and continue
    if (isOpenningBracket(s[i + 1])) {
      i++;
      continue;
    }

    // Mext char is a closing bracket and it's not a pair, return false
    if (isClosingBracket(s[i + 1]) && !isPair(s[i], s[i + 1])) {
      return false;
    }

    // Found a pair, remove brackets from the string and start over
    const before = s.slice(0, i);
    const after = s.slice(i + 2);
    s = `${before}${after}`;
    i = 0;
  }

  return true;
}

console.log(isValid("[]")); // Output: true
console.log(isValid("([{}])")); // Output: true
console.log(isValid("[(])")); // Output: false
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("((")); // Output: false
console.log(isValid("]()")); // Output: false
