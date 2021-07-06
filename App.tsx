import React from 'react';
import { StatusBar } from 'react-native';
import { createServer, Model } from 'miragejs';

import Header from './src/components/Header';
import Principal from './src/pages/Principal';

createServer({
  models: {
    user: Model,
  },

  seeds(server) {
    server.db.loadData({
      users: [
        {
          id: 1,
          name: 'Felipe Fonseca Alves Ribeiro',
          age: '25',
          gender: 'Masculino',
          type: 'Administrador',
        },
        {
          id: 2,
          name: 'Margareth Rosswell',
          age: '17',
          gender: 'Feminino',
          type: 'Usuario',
        },
        {
          id: 3,
          name: 'João da Silva',
          age: '22',
          gender: 'Masculino',
          type: 'Administrador',
        },
        {
          id: 4,
          name: 'Guilherme',
          age: '22',
          gender: 'Masculino',
          type: 'Administrador',
        },
        {
          id: 5,
          name: 'Maria de Lourdes',
          age: '22',
          gender: 'Feminino',
          type: 'Administrador',
        },
        {
          id: 6,
          name: 'Rochelle',
          age: '22',
          gender: 'Feminino',
          type: 'Administrador',
        },
        {
          id: 7,
          name: 'Ricardo Pereira',
          age: '22',
          gender: 'Masculino',
          type: 'Administrador',
        },
        {
          id: 8,
          name: 'João da Silva',
          age: '22',
          gender: 'Masculino',
          type: 'Administrador',
        },
        {
          id: 9,
          name: 'Guilherme Augusto',
          age: '22',
          gender: 'Masculino',
          type: 'Administrador',
        },
        {
          id: 10,
          name: 'Renata Tailor',
          age: '22',
          gender: 'Feminino',
          type: 'Administrador',
        },
        {
          id: 11,
          name: 'Taylor Smurf',
          age: '22',
          gender: 'Feminino',
          type: 'Administrador',
        },
        {
          id: 12,
          name: 'Will Reshow',
          age: '22',
          gender: 'Masculino',
          type: 'Administrador',
        },
        {
          id: 13,
          name: 'Maira',
          age: '24',
          gender: 'Feminino',
          type: 'Administrador',
        },
        {
          id: 14,
          name: 'Leticia',
          age: '22',
          gender: 'Feminino',
          type: 'Administrador',
        },
        {
          id: 15,
          name: 'Gabriela',
          age: '22',
          gender: 'Feminino',
          type: 'Administrador',
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/users', () => {
      return this.schema.all('user');
    });

    this.get('/users/:id/:name', (schema, request) => {
      const id = request.params.id;
      const name = request.params.name.trim();

      if (name !== '') {
        return schema.db.users.findBy({ name: name });
      } else {
        return schema.db.users.find(id);
      }
    });

    this.post('/users', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('user', data);
    });

    this.delete('/users/:id', (schema, request) => {
      const id = request.params.id;
      const user = schema.db.users.find(id);
      schema.db.users.remove(user);

      return schema.db.users;
    });

    this.put('/users/:id', (schema, request) => {
      const id = request.params.id;
      const data = JSON.parse(request.requestBody);
      const user = schema.db.users.find(id);
      schema.db.users.update(user, data);

      return schema.db.users;
    });
  },
});
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header />
      <Principal />
    </>
  );
};

export default App;
