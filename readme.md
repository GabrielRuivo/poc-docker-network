# PDI DOCKER NETWORK

## Instale as deps

`yarn`

## Rode o compose

`docker-compose up -d`

## E teste o projeto feliz com os passos abaixo:

### CONEXÃO DE UM CONTAINER BRIDGE COM A INTERNET

- GET /

### CONEXÃO DE UM CONTAINER COM OUTRO CONTAINER

- GET /users

# NETWORK DOCKER

## TIPOS DE REDE (DRIVERS):
- BRIDGE -> entre containers
- HOST -> entre um container e a máquina host
- MACVLAN -> conexão a um container por um MAC address
- NONE -> remove todas as conexões de um container (fica totalmente isolado)
- PLUGINS -> permite extensão de terceiros para criar outras redes;


## TIPOS DE CONEXÃO:
- EXTERNA: CONEXÃO A UMA API REMOTA,
- COM O HOST: COMUNICAÇÃO COM A MÁQUINA QUE ESTÁ RODANDO O DOCKER.
- ENTRE CONTAINERS: UTILIZA O DRIVER BRIDGE.


## LISTANDO REDES:
- Docker network ls

## CRIANDO REDES:
- Docker network create <name_network>

## CRIANDO REDE COM UM DRIVER ESPECIFICO:
- Docker create -d macvlan my-macvlan-network 

## REMOVENDO REDES:
- Docker network rm <name_network>

## REMOVENDO REDES NAO UTILIZADOS NO MOMENTO:
- Docker network prune

CONECTANDO UM CONTAINER A UMA REDE:
- Docker network connect <nome_rede> <container>

DESCONECTANDO UM CONTAINER A UMA REDE:
- Docker network disconnect <nome_rede> <container>
