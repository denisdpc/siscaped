# Instalação

Procedimentos para instalação local do sistema.

## Clonando o repositório

Rodar o comando abaixo a partir de um prompt/terminal:

```bash
git clone https://github.com/denisdpc/siscaped.git
```

## Instalando os pacotes

```bash
cd app
npm i
```

## Iniciando o sistema

```bash
npm run dev
```

Abrir um navegador de internet e inserir o endereço:

```
http://localhost:5173/sobre
```

## Arquivo de distribuição (Tauri)

No diretório _app_ executar o comando:

```bash
npm run tauri build
```

Ao término do processo serão exibidos os diretórios do arquivo executável e de instalação da aplicação.

## Armazenamento de arquivo PDF

O arquivo PDF gerado na aba _relatório_ é armazenado no diretório padrão do sistema operacional de _download_.