function calPoints(operations: string[]): number {
  const record: number[] = [];

  for (const operation of operations) {
    switch (operation) {
      case "+":
        record.push(record[record.length - 1] + record[record.length - 2]);
        break;

      case "C":
        record.pop();
        break;

      case "D":
        record.push(2 * record[record.length - 1]);
        break;

      default:
        record.push(parseInt(operation));
        break;
    }
  }

  return record.reduce((sum, score) => sum + score, 0);
}

console.log(calPoints(["1", "2", "+", "C", "5", "D"])); // Output: 18
console.log(calPoints(["5", "D", "+", "C"])); // Output: 15
