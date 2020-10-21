import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    //Variável de estado onde a resposta da API será armazenada.
    const [deviceData, setDeviceData] = useState([]);
    //Variável de estado onde o searchTerm inserido na barra de pesquisa é armazenado.
    const [searchDeviceElement, setSearchDeviceElement] = useState();
    //Variável de estado usada para armazenar uma mensagem de status durante chamadas de API
    const [statusMsg, setStatusMsg] =useState();
    // Variável que está pegando o número de valores booleanos 'True' no array deviceData
    let activeDevices = deviceData.filter(device => device.active).length;
    //Variável que está obtendo o número de valores booleanos 'False' na matriz deviceData
    let inactiveDevices = deviceData.filter(device => !device.active).length;
    //Variável que amplia a chamada do Axios para buscar os dados da API
    const fetchData = () => {
        //Mostra uma mensagem 'Atualizando' enquanto a chamada de API está sendo feita
        setStatusMsg(
            <h3>Atualizando...</h3>
        );
        //Chamada de Axios para obter os dados da API de back-end
        axios.get('http://127.0.0.1:8888/devices')
        .then((response) => {
            //definindo a resposta como estado
            setDeviceData(response.data.data);
            //registrando a resposta no console
            console.log(response.data);
            //Remova a mensagem 'Atualizando' assim que a chamada da API for apagada
            setStatusMsg();
        })
        .catch((error) => {
            //lidar com erro
            console.log(error);
            //Exibir mensagem 'Falha na chamada' é falha na chamada de API
            setStatusMsg(
                <h3 style={{color: "red"}}>Falha na chamada!</h3>
            );
        })
    }

    useEffect(() => {
        //Chamada inicial do Axios para obter os dados da API de back-end quando a página é carregada
        fetchData();
    }, []);

    //Função que procura o nome do dispositivo
    function searchDevices() {
        console.log(document.getElementById('searchParameter').value);
        //Quando o botão 'Pesquisar' é clicado, armazene o valor da entrada na variável 'searchTerm'
        const searchTerm = document.getElementById('searchParameter').value;
        //Pesquisar na matriz deviceData um objeto que corresponda ao valor searchTerm e armazená-lo em uma variável. O valor retornará indefinido se nada na matriz corresponder.
        const searchDevices = deviceData.find((device) => device.name === searchTerm);
        
        if(searchDevices !== undefined) {
            //se searchDevices não for indefinido, gere um div com os dados do dispositivo
            setSearchDeviceElement(
                <div>
                    <h2>Device Name: {deviceData[deviceData.indexOf(searchDevices)].name}</h2>
                    <p>Device Unit: {deviceData[deviceData.indexOf(searchDevices)].unit}</p>
                    <p>Device Timestamp: {deviceData[deviceData.indexOf(searchDevices)].timestamp}</p>
                    <p>Device Value: {deviceData[deviceData.indexOf(searchDevices)].value}</p>
                    <p>Device Active: {String(deviceData[deviceData.indexOf(searchDevices)].active)}</p>
                    <button data-value={deviceData.indexOf(searchDevices)} onClick={() => toggleDeviceStatus(deviceData[deviceData.indexOf(searchDevices)])}>Toggle Active Status</button>
                    {statusMsg}
                </div> 
            );
            
        } else {
            //se searchDevices retornar indefinido, gerar mensagem 'não encontrado'
            setSearchDeviceElement(
                <p>Desculpe! Infelizmente, nenhum dispositivo corresponde a esse nome. Digite o nome completo do dispositivo que você está tentando encontrar.</p>
            );
        }
        document.getElementById('searchParameter').value = '';
    }

    function toggleDeviceStatus(deviceValues) {
        console.log('Button Clicked');
        console.log(deviceValues);
        let readingName = deviceValues.name;
        let active = !deviceValues.active;

        //Chamada de patch do Axios para enviar os dados atualizados para a API de back-end
        axios.patch('http://127.0.0.1:8888/devices/' + readingName + '?active=' + active + '')
        .then(function (response) {
            console.log(response);
            //Chamada do Axios para reenviar os dados se a chamada do patch for eliminada
            fetchData();
        })
        .catch(function (error) {
            console.log(error);
            //se a chamada do patch falhar, envie a mensagem 'Falha na solicitação'
            setStatusMsg(
                <h3 style={{color: "red"}}>O pedido falhou! Por favor, tente novamente mais tarde</h3>
            );
        });
    }

    return (
        <div>
            <div className='instructions'>
                <h1>Device Dashboard</h1>
            </div>
            <div className='instructions'>
                <h1>Buscar Dispositivo</h1>
                <input type='text' placeholder='Digite o nome do Dispositivo' id='searchParameter'/>
                <button onClick={searchDevices}>Buscar</button>
                {searchDeviceElement}
                
            </div>
            <div className='instructions'>
                <h1>Device Status</h1>
                <h2>Active Devices: {activeDevices}</h2>
                <h2>Inactive Devices: {inactiveDevices}</h2>
            </div>
            {deviceData.map((device, index) => (
                <div className='instructions' key={index}>
                    <h1>Device Name: {device.name}</h1>
                    <p>Device Unit: {device.unit}</p>
                    <p>Device Timestamp: {device.timestamp}</p>
                    <p>Device Value: {device.value}</p>
                    <p>Device Active: {String(device.active)}</p>
                    <button data-value={index} onClick={() => toggleDeviceStatus(device)}>Alternar status ativo</button>
                    {statusMsg}
                </div>
            ))}
        </div>
    );
}

export default App;
