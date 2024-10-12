### Formulário CEP - Desenvolvimento Web

#### **Documentação e Desenvolvimento:**
\- [Chrystian de Almeida](https://github.com/ESChrystian);

\- [Leonardo Rocha](https://github.com/leonardossrocha).



#### Descrição:
Este projeto é uma aplicação web que permite ao usuário preencher um formulário de endereço a partir da inserção de um CEP. Ao digitar o CEP, a aplicação faz uma consulta à API ViaCEP para obter informações sobre o endereço como rua, bairro, cidade, e estado. Essas informações são preenchidas automaticamente nos campos do formulário, facilitando o preenchimento de dados de  endereço.

#### Funcionalidades
* Formulário de Endereço: O usuário pode inserir seu CEP e obter automaticamente os dados do endereço.
API ViaCEP: Utilizada para buscar dados do endereço a partir do CEP inserido.
* Responsividade: A interface da aplicação é responsiva e ajusta-se a diferentes tamanhos de tela (celulares, tablets, desktops).
* Validação: Campos de texto específicos para rua, número, bairro, complemento, cidade e estado.
#### Estrutura de Arquivos
* HTML5: Estruturação da página e dos campos de formulário.
* CSS: Estilização da interface, com cores, layout e responsividade.
* JavaScript: Funções responsáveis pela requisição dos dados na API e pela manipulação dos dados do formulário.

#### ViaCEP
**ViaCEP** é uma API pública gratuita que permite a consulta de endereços a partir de CEPs no Brasil. Ela retorna informações detalhadas sobre o endereço correspondente ao CEP informado, como logradouro, bairro, cidade e estado.

#### Por que ViaCEP foi utilizada?
A [ViaCEP](https://viacep.com.br/) foi escolhida por ser uma API fácil de usar, gratuita e muito eficiente para busca de endereços em tempo real. Em poucos segundos, a aplicação consegue realizar a requisição e preencher os campos do formulário com os dados corretos. Isso automatiza o processo de preenchimento de endereços e reduz possíveis erros de digitação.

#### O que é uma API?
API (Interface de Programação de Aplicações) é um conjunto de definições e protocolos que permite a integração entre diferentes sistemas ou serviços. No caso deste projeto, a API ViaCEP é utilizada para obter informações de endereço a partir de um CEP, proporcionando uma interação dinâmica entre a aplicação web e a base de dados da ViaCEP.

#### Como Funciona o Projeto
1. O usuário digita o CEP no campo correspondente.
2. A aplicação faz uma requisição à API ViaCEP.
3. Se o CEP for válido, os dados de endereço são preenchidos automaticamente nos campos correspondentes (rua, bairro, cidade, estado, etc).
4. O usuário pode então revisar e completar as informações (ex: número da residência e complemento).

#### Resumo do fluxo:
1. O usuário insere o CEP.
2. Quando o campo perde o foco, a função pesquisarCep é acionada.
3. O formulário é limpo.
4. Verifica-se se o CEP é válido (8 números).
5. Se válido, faz-se a requisição à API ViaCEP.
6. Se o CEP for encontrado, o formulário é preenchido com os dados retornados.
7. Se houver erro (CEP inexistente), um alerta é exibido.


#### Termos Explicados

async e await
> O async e await são usados em JavaScript para trabalhar com operações assíncronas de forma mais simples e legível.

async: Define que uma função vai lidar com operações assíncronas. Uma função marcada com async sempre retorna uma Promise.

await: Pode ser usado dentro de uma função async para "esperar" que uma Promise seja resolvida. Em vez de usar then() para encadear operações assíncronas, você pode simplesmente usar await para obter o valor da Promise.
No contexto deste projeto, eles são usados para fazer a chamada à API ViaCEP e esperar que os dados retornem antes de preencher o formulário.

``fetch``
O fetch é uma função nativa do JavaScript que permite fazer requisições HTTP para servidores e obter dados. Ele retorna uma Promise que se resolve em uma resposta HTTP.

No nosso projeto, fetch é utilizado para buscar dados de endereço da API ViaCEP com base no CEP digitado pelo usuário.

#### Como Clonar o Repositório:
Para clonar um repositório baixe o [Git](https://git-scm.com/downloads)...
1. Abra o explorador de arquivo.
2. Clique o botão direito do mouse, após vá "Mostrar mais opções".
3. Clique em "Git Bash Here".
4. Execute o seguinte comando:

`````
    git clone https://github.com/ESChrystian/Form-CadEndereco.git
`````


|Tecnologias Utilizadas | Descrição da Utilização|
| :------------------: | :--------|
| HTML5 | Esqueleto do projeto  |
|CSS3 | Personalização Responsível  |
| JavaScript| Validação e consumo de API |
| VSCode| Editor de código-fonte |
| Git |Controle de Versão |
| GitHub| Hospedagem |
| Live Server | Recarga dinâmica de página |

