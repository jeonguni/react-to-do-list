import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = event => setToDo(event.target.value);
  //setToDo는 toDo값을 수정하는 함수,
  //toDo값은 input 이랑 연결되어 있음
  const onSubmit = event => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo('');
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={toDo} placeholder="Write yout to do" />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
