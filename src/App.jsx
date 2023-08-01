import './App.css';
import Card from './Card';
import data from './data';

function App() {

  return (
    <>
    <header>
      <h1>Collection of Projects</h1>
      <div className="underline"></div>
    </header>
    <section className="cards">
      {data.map((project) => (
        <Card key={project.id} title={project.title} desc={project.desc} link={project.link} />
      ))}
    </section>
    </>
  )
}

export default App
