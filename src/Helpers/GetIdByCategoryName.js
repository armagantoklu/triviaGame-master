import axios from 'axios';
import CategoryFetch from './CategoryFetch';
const GetIdByCategoryName = async categoryName => {
  let id;
  const result = await CategoryFetch();
  await result.map(item => {
    if (item.name == categoryName) {
      id = item.id;
    }
  });
  return id;
};
export default GetIdByCategoryName;
