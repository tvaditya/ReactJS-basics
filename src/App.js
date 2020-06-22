import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['App Dev','Front-End Web']);
    // useSttate retorna um array com 2 posicoes
    //1. Variavel com o seu valor inicial
    //2. Funcao para atualizarmos esse valor

    function handleAddProject(){
       // projects.push(`Novo Projeto ${Date.now()}`);
       setProjects([...projects, `Novo Projeto ${Date.now()}`]);
       console.log(projects);
    }
    return (
    <>    
        <Header title="Projects">
            <img width={300} src={backgroundImage} />
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Add Project</button>
        </Header>
    </>
    );
};

export default App;