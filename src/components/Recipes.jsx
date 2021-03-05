import { useState } from 'react';

const myObj = {
  id: 1,
  name: 'khaled',
  age: 33
};

const myObj2 = {
  ...myObj,
  email: 'khalednehad@gmail.com',
  no: 12
};

console.log(myObj);
console.log(myObj2);

const Recipes = () => {
  const [data, setData] = useState({});
  return (
    <div>
      <h3>Current data</h3>
      <button onClick={() => setData(myObj)}>Set Data</button>
      <button onClick={() => setData(myObj2)}>Set second Data</button>

      <ul>
        {Object.keys(data).map((item) => (
          <li key={item}>
            {item}: {data[item]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
