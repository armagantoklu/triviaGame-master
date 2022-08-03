import axios from 'axios';
import GetIdByCategoryName from './GetIdByCategoryName';
const QuestionFetch = async (categoryName, difficulty) => {
  const id = await GetIdByCategoryName(categoryName);
  const uri = `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${difficulty}&type=multiple`;
  const result = await axios
    .get(uri)
    .then(res => {
      return res.data;
    })
    .then(data => {
      return data.results;
    })
    .catch(err => {
      return err;
    });
  return result;
};
export default QuestionFetch;
