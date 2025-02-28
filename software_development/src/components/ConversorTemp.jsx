import React, { useState } from 'react';
import './ConversorTemp.css'

const ConversorTemperatura = () => {
  const [tempEntrada, setTempEntrada] = useState('');
  const [unidadeEntrada, setUnidadeEntrada] = useState('Celsius');
  const [tempSaida, setTempSaida] = useState('');
  const [unidadeSaida, setUnidadeSaida] = useState('Fahrenheit');

  const converterTemperatura = () => {
    // let temp = parseFloat(tempEntrada);
    // if (isNaN(temp)) return;
    let temp = Number(tempEntrada);
    if (isNaN(temp)) return;

    let resultado;

    switch(unidadeEntrada){
        case 'Celsius':
            if(unidadeSaida === 'Celsius'){
                resultado = temp
            }
            if(unidadeSaida === 'Fahrenheit'){
                resultado = (temp * 9/5) + 32;
            } else if (unidadeSaida === 'Kelvin'){
                resultado = temp + 273.15;
            }
            break;

        case 'Fahrenheit':
            if(unidadeSaida === 'Fahrenheit'){
                resultado = temp
            }
            if (unidadeSaida === 'Celsius') {
                resultado = (temp - 32) * 5/9;
            } else if (unidadeSaida === 'Kelvin') {
                resultado = (temp - 32) * 5/9 + 273.15;
            }
              break;

        case 'Kelvin':
            if(unidadeSaida === 'Kelvin'){
                resultado = temp
            }
            if (unidadeSaida === 'Celsius') {
                resultado = temp - 273.15;
            } else if (unidadeSaida === 'Fahrenheit') {
                resultado = (temp - 273.15) * 9/5 + 32;
            }
              break;
        
    }

    setTempSaida(resultado.toFixed(2));
  };

  return (
    <div className='container-temperatura'>
      
      <h1>Conversor de Temperatura</h1>
      <div>
        
        <input
          type="number"
          value={tempEntrada}
          onChange={(e) => setTempEntrada(e.target.value)}
          placeholder="Insira a temperatura"
        />
        
        <select value={unidadeEntrada} onChange={(e) => setUnidadeEntrada(e.target.value)}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>

      </div>
      
      <button onClick={converterTemperatura}>Converter</button>
      
      <div>
        
        <h2>Temperatura Convertida</h2>
       
        <select value={unidadeSaida} onChange={(e) => setUnidadeSaida(e.target.value)}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
        
        <p>
          {tempSaida} {unidadeSaida}
        </p>
       
      </div>
    </div>
  );
};

export default ConversorTemperatura;
