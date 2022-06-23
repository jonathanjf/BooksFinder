# Seja bem vindo ao BookFinder 

Aqui irei lhe auxiliar a como utilizar a aplicação sem dificuldades

## primeiro passo

Copie o código ssh ou o https e realize o clone desse repositório em sua máquina

## segundo passo

Após clonado, abra a aplicação com uma Ide de sua preferência, ( recomendo o vscode ).
Dentro do vscode, abra uma aba do terminal e utilize o comando 'npm install' para instalar
todas as dependências necessárias para o projeto rodar normalmente.

## terceiro passo

Após instalado tudo, no terminal, digite o comando 'npm start' e pronto, a aplicação estará rodando
na porta 3000.

## OBS ( CASO O JSON SERVER NÃO ESTEJA CONFIGURADO, SIGA ESSES PASSOS )

1° - realize um fork desse repositório (https://github.com/beonica/jsonserver)
2° - clone o repositório para o seu computador.
3° - acesse o diretório do projeto clonado e realize um 'npm install'
4° - Faça a instalação do pacote npm JSON Server através do comando 'npm install -g json-server'
5° - Execute o comando 'json-server --watch db.json'