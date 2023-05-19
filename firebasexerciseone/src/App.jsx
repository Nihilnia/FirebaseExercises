import { useState, useEffect } from "react";
import { notesCollection } from "./firebase";
import { onSnapshot, addDoc } from "firebase/firestore";

function App() {
  const [data, setData] = useState({
    name: "",
    nick: "",
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
      console.log("Things are changing!");
    });

    return unsubscribe;
  }, []);

  function handleChange(e) {
    let { name, value } = e.target;
    console.log(name);
    console.log(value);
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleEnter(e) {
    if (e.key == "Enter") {
      console.log("Smt");
    }
  }

  return (
    <>
      <form onKeyPress={handleEnter}>
        <input
          type="text"
          name="name"
          placeholder="Name.."
          onChange={handleChange}
          value={data.name}
        />
        <input
          type="text"
          name="nick"
          placeholder="Nick.."
          onChange={handleChange}
          value={data.nick}
        />
      </form>
    </>
  );
}

export default App;
