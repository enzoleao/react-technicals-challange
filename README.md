# 80Lines - Desafio técnico React

Neste desafio serão testadas suas habilidades frontend, o uso de hooks, tailwindcss, pensamento lógico, organização de código, e padrão de arquitetura

## Qual o desafio?

O desafio consiste em reproduzir uma página de produtos de um e-commerce, buscando a fidelidade de um design pré-estabelecido e utilizando os melhores padrões de código e arquitetura ReactJS

![Figma mockup](https://img001.prntscr.com/file/img001/PubIQ-9sQwWmi1xM0Zrtrw.png)

## Instruções

- Faça um fork deste repositório para começar a desenvolver
- Siga [o protótipo no figma](https://www.figma.com/file/KBB54D2KTmlfULGXrU4cRK/Desafio-t%C3%A9cnico-React-%2F-80Lines)
- Utilize a aplicação NextJS + TypeScript já configurada na pasta apps/frontend
- Os componentes da pasta `apps/frontend/src/features/core/components` não estão estilizados, e podem ser alterados mediante a necessidade do dev (no entanto devem ser alterados com cautela)
- Utilize apenas classes do tailwindcss para a estilização (também sendo liberado customizações no arquivo `tailwind.config.js` e `global.css`)
- Sinta-se livre para incluir comentários que avalia necessário para entendimento do código (lembrando sempre que o melhor código não necessita de explicações)
- Consumir os dados vindos do backend utilizando Strapi disponíveis neste repositório.

## Instruções do backend

- Para iniciar a aplicação rode `yarn dev` na pasta `apps/backend`
- Para acessar o painel admin do Strapi acesse `http://localhost:1337/admin` com o usuário `80lines@80lines.com` e a senha `80LinesChallenge`
- A API encontra-se no endereço `http://localhost:1337/api`
- A documentação está em `http://localhost:1337/documentation`
- Para entender mais sobre como funcionam os filtros e populações no Strapi acesso [aqui](https://docs.strapi.io/dev-docs/api/rest) a documentação oficial

## O que será avaliado?

- Seguir e reproduzir com máxima fidelidade o protótipo apresentado nas instruções.
- Todas as funcionalidades da aplicação (filtros, ordenação, pesquisa, etc)
- Gerenciamento de estados
- Integração com os dados da aplicação backend contida neste repositório (como o foco do teste é frontend, também poderá ser utilizadas outras fontes de dados. Desde que acessadas via API REST e com os mesmos dados apresentados no design)
- Procure não utilizar outras bibliotecas prontas além das que já existem no repositório
- Responsividade (considere telas acima de 500px)
- Padrão de commits (Conventional)
- O prazo para a realização do teste é de 7 dias após o envio ao participante. Sendo os commits feitos após o período desconsiderados
