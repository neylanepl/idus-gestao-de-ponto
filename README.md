# Gestão de Ponto de Jornada de Trabalho

Um sistema para gerenciar e monitorar o registro de pontos e a jornada de trabalho dos funcionários.

## Ferramentas Utilizadas

### Backend
- **Linguagem**: Java (versão 21)
- **Framework**: Spring Boot (versão 3.4.0)
- **Conexão com Banco de Dados**: MySQL Connector/J (versão 8.0.33)
- **Documentação de API**: Springdoc OpenAPI (versão 2.5.0)

### Frontend
- **Linguagem**: JavaScript
- **Framework**: React (versão 18.3.1)
- **Estilização**:
  - Styled Components (versão 6.1.13)
  - Styled Icons (versão 10.47.1)
  - Bootstrap (versão 5.3.3)
  - React Bootstrap (versão 2.10.6)
- **Comunicação HTTP**: Axios (versão 1.7.8)

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Java 21** (JDK)
- **Maven**
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **MySQL** (para o banco de dados)

## Execução

A compilação e execução do projeto podem ser realizadas utilizando Maven para o backend e npm ou yarn para o frontend.

### Como executar o servidor (Backend)
1. Após clonar o repositório, entre na pasta `ponto-backend`:
    ```bash
    cd idus-gestao-de-ponto/ponto-backend
    ```

2. Configure o banco de dados:
    - Crie um banco de dados MySQL conforme a configuração definida no arquivo `application.properties`.
    - Atualize as credenciais e URL do banco de dados se necessário.

3. Instale as dependências:
    ```bash
    mvn clean install
    ```

4. Execute o servidor:
    ```bash
    mvn spring-boot:run
    ```

O servidor estará disponível em [http://localhost:8080](http://localhost:8080).

### Como executar a aplicação (Frontend)
1. Após clonar o repositório, entre na pasta `ponto-frontend`:
    ```bash
    cd idus-gestao-de-ponto/ponto-frontend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```
    ou, se estiver usando yarn:
    ```bash
    yarn install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```
    ou, se estiver usando yarn:
    ```bash
    yarn start
    ```

A aplicação estará disponível em [http://localhost:3001](http://localhost:3001).

### Executando Backend e Frontend Simultaneamente
Certifique-se de iniciar o backend primeiro para que o frontend possa se conectar corretamente à API.

## Funcionalidades

O sistema possui várias funcionalidades que ajudam no gerenciamento de pontos e jornadas de trabalho. Algumas estão implementadas, enquanto outras apenas foram idealizadas.

### Funcionalidades Implementadas
- Registrar ponto;
- Resumo de jornada do dia atual;
- Previsão para completar jornada;
- Horas excedidas da jornada;
- Login (apenas no front-end).

### Funcionalidades Idealizadas
- Relatório de jornada completo, que possibilite filtrar por dias.
- Ajuste de ponto, onde o usuário pode solicitar um ajuste no horário do seu ponto.
- Anexar atestados médicos para o gestor visualizar.
