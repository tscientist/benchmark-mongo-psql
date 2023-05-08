# Benchmark de consulta com objetivo comparativo entre os banco de dados MongoDB e PostgreSQL


Desenvolvedores: Caroline Evangelista, Andrei Majada e Pedro Marchand

## Proposta

Neste estudo, foi realizado um benchmark de consulta para comparar o desempenho de queries entre o MongoDB e o PostgreSQL em aplicações similares. Foram analisados aspectos como desempenho e facilidade de uso dos dois bancos de dados quando utilizando ORM(Object Relational Mapping) ou ODM (Object Data Modeling).

Consistindo em um projeto prático, serão desenvolvidas as aplicações e as conclusões serão baseadas nos resultados obtidos das execuções das queries. 

Estudo de caso: API de cadastro e busca de Universidades

Dataset: http://universities.hipolabs.com/search


## Tech

Bibliotecas e bancos de dados usados no projeto: 

- [TypeOrm] - ORM para utilização do PostgreSQL
- [NestJS] - Linguagem de programação Go.
- [Swagger] - Linguagem de programação Go.
- [Mongoose] - ODM para utilização do MongoDB 

E o projeto está disponível em um repositório publico no [GitHub].
## Instação

O projeto requer que tenha [Node.js] instalado na máquina, de preferência na versão v16.19.1.

Para que ambas as execuções funcionem é preciso ter o mongo rodando no **mongodb://localhost:27017** e o PostgreSQL rodando e adicionar as configurações de conexão do banco no arquivo **app.module.ts**
Após realizar o git clone do repositório. Dentro da pasta ms-psql-app ou ms-mongo-app execute os seguintes comandos: 

```sh
npm i
```

```sh
npm run build
```

```sh
npm run start:dev
```
O aplicativo conetado ao mongo estará rodando na porta 3001 e o aplicativo conectado ao PostgreSQL estará rorando na porta 3000.

## Objetivos
- Analisar a facilidade de uso entre os modelos de dados NoSQL e SQL quando utilizados em aplicações com ORM(Object Relational Mapping) ou ODM (Object Data Modeling). 
- Avaliar o desempenho de ambos utilizando diferentes operações e cargas de trabalho. 
- Observar como as abordagens de escalabilidade de ambos resultam neste estudo de caso.  
- Identificar o melhor sistema de banco de dados para esse projeto em específico.

## Operações
- Inserção de 10 mil objetos - Tabela vazia
- Busca de objetos pelo atributo nome - Tabela com 200 mil objetos
- Listagem de todos os objetos - Tabela com 200 mil objetos


   [TypeOrm]: <https://typeorm.io/>
   [GitHub]: <https://github.com/>
   [NestJS]: <https://nestjs.com/>
   [Swagger]: <https://swagger.io/>
   [Mongoose]: <https://mongoosejs.com/>
   [Node.js]: <https://nodejs.org/en>
