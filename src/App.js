import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState([]);
    // useSttate retorna um array com 2 posicoes
    //1. Variavel com o seu valor inicial
    //2. Funcao para atualizarmos esse valor
    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data);
            console.log(response);      
        })
    }, []);

    async function handleAddProject(){
       // projects.push(`Novo Projeto ${Date.now()}`);
      // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
       const response = await api.post('projects', {
           title: `Javascript News ${Date.now()}`,
           owner: "T. Aditya"
       });
       console.log(projects);

       const project = response.data;

       setProjects([...projects, project]);
    }
    return (
    <>    
        <Header title="Projects">
            <img width={100} src={backgroundImage} />
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Add Project</button>
        </Header>
    </>
    );
};

export default App;