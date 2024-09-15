import React from 'react'
import Form from './Form/Form';
import Tarefas from './Tarefas/Tarefas';

import "./main.css"

export default class Main extends React.Component {
    state = {
        novaTarefa: ' ',
        tarefas: [],
        index: -1,
    };

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if (!tarefas) return;

        this.setState({
            tarefas
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { tarefas } = this.state;

        if (tarefas === prevState.tarefas) return;

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    handleInput = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    }

    handleSumit = (e => {
        e.preventDefault();
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if (tarefas.indexOf(novaTarefa) !== -1) return;

        if (index === -1) {
            this.setState({
                tarefas: [...tarefas, novaTarefa],
                novaTarefa: '',
            });
        } else {
            const novasTarefas = [...tarefas];

            novasTarefas[index] = novaTarefa;

            this.setState({
                tarefas: [...novasTarefas],
                novaTarefa: '',
                index: -1,
            })
        }

        if (tarefas.includes(novaTarefa)) {
            return alert('Essa tarefa já existe em sua lista');
        }
    })

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas],
        })
    }

    handleEdit = (e, index) => {
        const { tarefas } = this.state;

        this.setState({
            index: index,
            novaTarefa: tarefas[index],
        })
    }

    render() {
        const { novaTarefa, tarefas } = this.state;

        return (
            <div className='main'>
                <h1>Lista de tarefas</h1>

                <Form
                    novaTarefa={novaTarefa}
                    handleSumit={this.handleSumit}
                    handleInput={this.handleInput}
                />

                <Tarefas
                    tarefas={tarefas}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                />

            </div>
        );
    }
}
