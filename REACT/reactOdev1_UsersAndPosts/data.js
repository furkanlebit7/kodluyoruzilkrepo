import axios from "axios";
import isNumber from "is-number";

const getData = async (id) => {
  if (isNumber(id)) {
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const { data: userPosts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    return { user, userPosts };
  }
  console.log("parameter must be number type only");
};

export default getData;
