# Documentação da API Express.js

## Visão Geral
Esta é uma API simples em Express.js executando em **http://localhost:8080**

## Iniciando

### Instalação
```bash
npm install
```

### Executando o Servidor
```bash
node app.js
```

O servidor será iniciado e você verá a mensagem: `>> servidor executando`

---

## Endpoints da API

### Obter Status do Produto

**Endpoint:** `GET /product`

**URL:** `http://localhost:8080/product`

**Descrição:** Retorna as informações de status de um produto.

#### Requisição
```
GET /product HTTP/1.1
Host: localhost:8080
```

#### Resposta
**Código de Status:** `200 OK`

**Content-Type:** `application/json`

**Corpo da Resposta:**
```json
{
    "name": "Bolacha",
    "brand": "Trakinas"
}
```

#### Campos da Resposta
- **name** (string): O nome do produto
- **brand** (string): A marca do produto

#### Exemplos de Uso
Usando cURL:
```bash
curl http://localhost:8080/product
```

Usando JavaScript (Fetch API):
```javascript
fetch('http://localhost:8080/product')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));
```

Usando Postman:
1. Defina o método da requisição como `GET`
2. Digite a URL: `http://localhost:8080/product`
3. Clique em Enviar
