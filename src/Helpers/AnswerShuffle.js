import arrayShuffle from 'array-shuffle';
const AnswerShuffle = (incorrect, correct) => {
  if (incorrect.length < 4) {
    incorrect.push(correct);
    const shuffled = arrayShuffle(incorrect);
    return shuffled;
  }
  return arrayShuffle(incorrect);
};
export default AnswerShuffle;
