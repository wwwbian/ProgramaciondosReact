import React from 'react';
import Card from './Card';

const cardData = [
  { title: 'Mario Cuenca 1 ', content: 'Posicion: Arquero' },
  { title: 'David Diaz 3', content: 'Posicion: Defensor ' },
  { title: 'Horacio Humoller 2', content: 'Posicion: Defensor' },
  { title: 'Marcelino Galoppo 4', content: 'Posicion: Defensor ' },
  { title: 'Andres Cabrera 6 ', content: 'Posicion: Defensor' },
  { title: 'Javier Villareal 5', content: 'Posicion: Mediocampista ' },
  { title: 'Fernando Clementz 11', content: 'Posicion: Mediocampista ' },
  { title: 'Daniel Albornós', content: 'Posicion: Mediocampista ' },
  { title: 'Diego Garay 10', content: 'Posicion: Mediocampista ' },
  { title: 'José Zelaya 9', content: 'Posicion: Delantero ' },
  { title: 'Ramón Medina Bello 7', content: 'Posicion: Delantero ' },
  { title: 'Ricardo Gareca', content: 'Director Tecnico ' },
];

const App = () => {
  return (
    <div className="App">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default App;
