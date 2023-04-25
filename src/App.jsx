import FullName from "./FullName";

function App() {
  const friends = [
    "Carlo Dacuyan",
    "Mae Bisoles",
    "Luis Campus",
    "Ryan Paul Collado",
  ];

  return (
    <ul>
      {friends.map((friends) => (
        <FullName name={friends} />
      ))}
    </ul>
  );
}

export default App;
