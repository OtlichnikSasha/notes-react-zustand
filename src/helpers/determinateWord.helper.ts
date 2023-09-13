export const determinateWordHelper = (
  count: number,
  textForms: string[],
  returnWithNumber = false,
): string => {
  const number = Math.abs(count) % 100;
  const count1 = (Math.abs(number) % 100) % 10;
  if (number > 10 && count < 20) {
    return returnWithNumber ? `${count} ${textForms[2]}` : textForms[2];
  }
  if (count1 > 1 && count1 < 5) {
    return returnWithNumber ? `${count} ${textForms[1]}` : textForms[1];
  }
  if (count1 == 1) {
    return returnWithNumber ? `${count} ${textForms[0]}` : textForms[0];
  }
  return returnWithNumber ? `${count} ${textForms[2]}` : textForms[2];
};
