# Microsservico Scheduling Job

Microservico desenvolvido para agendamentos de processos para execução respeitando os horarios e premissas da janela em aberto, janelas de agendamentos são considerados o horario atual mais 1 dia completando uma janela de 24horas.  

### Tecnologia

  - Nodejs

### Dependencias 


  - Express
  - Winston
  - Joi
  - yamljs
  - Moment
  - Jest

#### `Express:` Framework server 
#### `Winston:` Framework utilizado para loggers
#### `Joi:` Framework Validador de objetos , utilizado para validar os objetos json recebidos 
#### `yamljs:` Leitor Yaml utilizado para expor o swagger do microsservico
#### `Moment:` Utilizado para formatação de Datas
#### `Jest:` Framework para auxiliar nos teste unitários.


#  Instalação Depedencias

```
npm install 
```

# Start 

```
  npm run start
```

- Executando os teste


```
  npm run test
```

# Metodos

## `POST: /scheduling`
Agendamento de jobs, body de request. 

```
 [
    {
        "id": 1,
        "description": "Importação de arquivos de fundos",
        "maxDate": "2019-11-10 12:00:00",
        "estimatedTime": "2 horas"
    }
 ]

```

## `GET: /scheduling/healthcheck`  
Health check do microsservico.

## `GET: /scheduling/swagger` 
Exibe o swagger do microsservicos 


