import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
const TAREFAS = [
    {
        id: 1,
        titulo: 'APrenda React',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        
    },
    {
        id: 2,
        titulo: ' React Nativo',
        descricao: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text'
        
    },
    {
        id: 3,
        titulo: ' React',
        descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        
    }
];
class TarefasPage extends Component {
    render(){
        const tarefasLinks = TAREFAS.map((tarefa,index) => {
            return(
                <li>
                    <Link to={'/tarefas/'+ tarefa.id}>
                        {tarefa.titulo}
                    </Link>
                </li>
            )
        })
        return(
            <div>
                    <h1>Tarefas</h1>
                    <ul>
                        {tarefasLinks}
                    </ul>
                    <Route path="/tarefas/:tarefaId"
                    render={props => {
                        const tarefaId = Number(props.match.params.tarefaId);
                        const tarefa = TAREFAS.find(tar => tar.id === tarefaId);

                        return (
                            <div>
                            {tarefa.descricao}
                            </div>
                        )
                    }}
                    />
                        
                    
            </div>
        )
    }
}
export default TarefasPage;