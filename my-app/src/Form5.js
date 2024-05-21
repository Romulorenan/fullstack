import React, { /*useEffect,*/ useState } from 'react';
import axios from 'axios';

function Form5(){

    const [campos, setCampos] = useState({
        txtNome: '',
        txtEnd: '',
        txtTel: ''
    });

    const [ret, setRet] = useState('');

    function handleInputChange(event){
        if(event === undefined){
            console.log('evento undefined');
        }else{
            campos[event.target.name] = event.target.value;
            console.log(event.target.name)
            setCampos(campos);
        }
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(campos);
        axios.post('http://localhost:5000/api/cadastro', campos).then(response => {
            setRet(response.data.first_name);
        })
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastro</h2>
                    </legend>
 
                    <div>
                        <label>Nome:
                            <input type="text" name="txtNome" id="txtNome" onChange={handleInputChange} />
                        </label>
                    </div>

                    <div>
                        <label>Endereço:
                            <input type="text" name="txtEnd" id="txtEnd" onChange={handleInputChange} />
                        </label>
                    </div>

                    <div>
                        <label>Telefone:
                            <input type="text" name="txtTel" id="txtTel" onChange={handleInputChange} />
                        </label>
                    </div>
 
                    <input type="submit" value="Salvar" />
                    <div><p>Retornou: {ret}</p></div>
                </fieldset>
            </form>
        </div>
    )
}
export default Form5;