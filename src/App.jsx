import './App.css'

function App() {
  const arr = [1, 2, 3, 4];
  const newArr = arr.map((item) => item * item);
  // console.log(newArr);
  console.log(arr);

  arr.forEach((item, index, arr) => {
    arr[index] = item * 2;
  })
  console.log(arr);
  return (
    <>
      <h1>Welcome to React Practice</h1>
    </>
  )
}

export default App
