# Store App Project

Esse aplicativo é um pequeno projeto para a implementação de um carrinho de compras funcional em um aplicativo de loja. O aplicativo está usando esta [API externa](https://fakestoreapi.com/docs#products) para obter uma lista de produtos e de categorias.

### Pré-requisitos

Esse aplicativo foi desenvolvido com em uma máquina com as seguintes versões do Npm, Yarn e Node.js, e pode não funcionar corretamente em outras versões.

| Recurso                          | Versão  |
| -------------------------------- | ------- |
| [NPM](https://www.npmjs.com/)    | 9.6.7   |
| [Yarn](https://yarnpkg.com/)     | 1.22.19 |
| [Node Js](https://nodejs.org/en) | 18.17.0 |

Certifique-se também de ter o git instalado.

## Instalação

Siga as seguintes etapas para executar o projeto localmente.
Usando um terminal, vá até a pasta onde deseja clonar o repositório, então execute o seguinte comando:

```bash
git clone https://github.com/MatheusCordeiroP/store-app-project.git
```

Então navegue até o repositório:

```bash
cd store-app-project
```

Instale as dependências do projeto usando Yarn ou npm.

```bash
npm install
# ou
yarn
```

Uma vez que as dependências estejam devidamente instaladas, execute o projeto com o seguinte comando:

```bash
npx expo start
# ou
yarn start
```

## Apresentando o Projeto

Peguei alguns prints das telas do aplicativo apenas para mostrar superficialmente como é a sua navegação.
Antes de apresenta-las, devo fazer uma observação de que, apesar da API de produtos mostrar os nomes dos produtos e descrições em inglês, e o valor em dólar, todo o resto do aplicativo mostrado ao usuário, eu procurei manter em português.

Nessa primeira imagem, podemos ver na parte inferior do aplicativo 3 abas, que são a aba principal, a aba de carrinho, e a aba de categorias. A aba principal é a selecionada, portanto, o que há nela é uma lista de 30 produtos buscados na API sem um critério definido, onde o usuário pode navegar pela página e entrar nos produtos clicando neles.

<img src="https://github.com/MatheusCordeiroP/store-app-project/blob/main/assets/app_prints/image-01.jpeg?raw=true" alt="Produtos listados na tela principal." width="320"/>

Ao clicar em um produto, o aplicativo mostrará uma tela semelhante a essa, mostrando a imagem do produto em tamanho completo, junto com as avaliações do produto, e sua descrição, além de te permitir selecionar uma quantidade para adiciona-lo ao carrinho. (Se você adicionar ao carrinho um produto que você já possui, ele somará a quantidade adicionada ao produto já existente.)

<img src="https://github.com/MatheusCordeiroP/store-app-project/blob/main/assets/app_prints/image-02.jpeg?raw=true" alt="Parte superior da tela de  um produto selecionado, com seu título, avaliações e imagem do produto." width="320"/>

Seguindo, navegando para a parte inferior da tela de um produto, você poderá ver também recomendações de produtos similares, baseados na categoria do produto que você está no momento, ajudando você a encontrar outros possíveis produtos sem a necessidade de voltar para a tela principal ou buscar nas categorias.

<img src="https://github.com/MatheusCordeiroP/store-app-project/blob/main/assets/app_prints/image-03.jpeg?raw=true" alt="Parte inferior da tela de um produto selecionado, com um selecionador para quantidade, um botão para adicionar ao carrinho, e recomendações de produtos similares." width="320"/>

Ao selecionar um produto e adicioná-lo ao carrinho, o aplicativo mostrará um modal notificando que o produto foi adicionado, e também perguntando ao usuário se ele deseja ir para a tela do carrinho de compras, ou se ele prefere ficar na tela do produto.

<img src="https://github.com/MatheusCordeiroP/store-app-project/blob/main/assets/app_prints/image-04.jpeg?raw=true" alt="Modal notificando que o produto foi adicionado ao carrinho, com botões para ir para o carrinho ou para voltar ao produto." width="320"/>

Se ele clicar para ser redirecionado para a tela de carrinho de compras, ou se em qualquer momento ele clicar na aba central, a aba de carrinho, o usuário será enviado para essa tela, onde ele pode adicionar ou subtrair mais unidades dos produtos que já estão no carrinho, podendo também editar diretamente o valor do produto para a quantidade desejada, ou até mesmo remover completamente o produto.

<img src="https://github.com/MatheusCordeiroP/store-app-project/blob/main/assets/app_prints/image-05.jpeg?raw=true" alt="Aba do carrinho de compras, com o produto selecionado previamente, com botões para adicionar mais produtos, subtrair produtos, ou remover completamente o produto." width="320"/>

Por fim, temos a terceira aba, a aba de categorias, onde, ao clicar nela, será mostrado todas as categorias de produtos cadastradas, onde poderá procurar por um tipo de produto específico.

<img src="https://github.com/MatheusCordeiroP/store-app-project/blob/main/assets/app_prints/image-06.jpeg?raw=true" alt="A aba de categorias, onde há botões levando para cada uma das diferentes categorias de produtos." width="320"/>

Ao selecionar qualquer categoria, será mostrada uma lista de produtos de uma forma semelhante aos produtos mostrados na tela principal, com exceção desses produtos serem filtrados, mas ao clicar em qualquer produto aqui, também será aberto a mesma tela de produto acima, onde você poderá adicionar novos produtos ao seu carrinho.

<img src="https://github.com/MatheusCordeiroP/store-app-project/blob/main/assets/app_prints/image-07.jpeg?raw=true" alt="Uma lista de produtos, apenas com produtos de uma categoria selecionada." width="320"/>

E com isso, terminei de vez de apresentar o projeto, sinta-se a vontade para contribuir com ele, pretendo adicionar mais algumas coisinhas que não tive tempo de fazer até o momento, por exemplo, adicionar uma latinha de lixo no botão de subtrair o item do carrinho, uma vez que o mesmo esteja em 1, já que ao subtrair para 0 seria o mesmo que apagar o produto. Adicionar também uma animação de bolinhas rodando ou equivalente nas telas de carregando, ao invés de manter apenas o texto, pra deixar o aplicativo um pouco mais dinamico, talvez adicionar uma quarta aba de perfil de usuário, onde ele poderia editar seus dados (mesmo que não fosse uma mudança permanente, nesse caso, já que não tenho bancos de dados onde poderia guardar isso.), ou até mesmo fazer uma tela de finalizar compra e realizar pagamento, que também poderia fazer, mas decidi priorizar uma implementação funcional dos recursos que considerei mais importantes no momento.

Se tiver dúvidas, me enviem um email em matheuscordeirop@gmail.com ou comente no projeto.
