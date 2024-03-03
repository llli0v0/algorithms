function numberToWords(num: number, zero = 1): string {
  if (!num && zero) return 'Zero';
  let words1 = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'] as const;
  let words2 = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'] as const;
  if (num < 100) {
    if (num < 20) {
      return words1[num];
    }
    let s = numberToWords(num % 10, 0);
    return `${words2[Math.floor(num / 10)]}${s ? ' ' + s : ''}`;
  } else if (num < 1000) {
    let s = numberToWords(num % 100, 0);
    return `${words1[Math.floor(num / 100)]} Hundred${s ? ' ' + s : ''}`;
  } else if (num < 1000_000) {
    let s = numberToWords(num % 1000, 0);
    return `${numberToWords(Math.floor(num / 1000), 0)} Thousand${s ? ' ' + s : ''}`;
  } else if (num < 1000_000_000) {
    let s = numberToWords(num % 1000_000, 0);
    return `${numberToWords(Math.floor(num / 1000_000), 0)} Million${s ? ' ' + s : ''}`;
  }
  let s = numberToWords(num % 1000_000_000, 0);
  return `${numberToWords(Math.floor(num / 1000_000_000), 0)} Billion${s ? ' ' + s : ''}`;
};