import { useState, useEffect } from 'react';

function ListaTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== '') {
            const nova = {
                texto: novaTarefa,
                concluida: false
            };

            setTarefas([...tarefas, nova]);
            setNovaTarefa('');
        }
    };

    const removerTarefa = (indice) => {
        setTarefas(tarefas.filter((_, i) => i !== indice));
    };

    const toggleConcluida = (indice) => {
        const novas = [...tarefas];
        novas[indice].concluida = !novas[indice].concluida;
        setTarefas(novas);
    };

    return (
        <div>
            <h2>Lista de Tarefas</h2>

            <input
                type='text'
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder='Digite uma nova tarefa'
            />

            <button onClick={adicionarTarefa}>Adicionar</button>

            <ul>
                {tarefas.map((tarefa, indice) => (
                    <li
                        key={indice}
                        style={{
                            textDecoration: tarefa.concluida ? 'line-through' : 'none'
                        }}
                    >
                        <span onClick={() => toggleConcluida(indice)}>
                            {tarefa.texto}
                        </span>

                        <button onClick={() => toggleConcluida(indice)}>✔</button>

                        <button onClick={() => removerTarefa(indice)}>
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaTarefas;