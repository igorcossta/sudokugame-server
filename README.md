
# Projeto Semestre

API para resolver partida de sudoku.

## Rodar Localmente

```bash
  git clone https://github.com/igorcossta/sudokugame-server.git
```
Vá até o diretório do projeto

```bash
  cd sudokugame-server
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  node app.js
```


## Como usar

```
Envie um POST request para o endpoint '/solve'

curl -d "json do sudoku" -X POST http://localhost:8080/solve
```
