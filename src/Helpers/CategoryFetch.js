
import axios from 'axios';
const CategoryFetch = async () => {
  const result = await axios
    .get('https://opentdb.com/api_category.php')
    .then(res => {
      return res.data;
    })
    .then(data => {
      return data.trivia_categories;
    })
    .catch(err => {
      return err;
    });
  return result;
};

export default CategoryFetch;
