import './App.css';

function Antonio() {
  return (
    <div>
      <span> Nome: Antonio Santana</span>
      <span> Curso: Fullstack Node</span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Alunos da Digital House</h1>
      <Antonio />
    </div>
  );
}

export default App;
