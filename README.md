# Preparação de ambiente #

## Bower ##

Responsável pelos pacotes utilizados no frontend (bootstrap, jquery, angular ...)  
O pacote do deve ser instalado globalmente para ser utilizado.

> sudo npm install __bower -g__

## Gulp ##

Responsável pelas tarefas de gerar build, copiar e organizar a pasta de distribuição.
O pacote deve ser instalado globalmente para ser utilizado.

> sudo npm install __gulp -g__

## Preparar os arquivos ##

Para preparar o ambiente para desenvolvimento há 3 comandos principais de inicialização.

- npm install `(instalação dos pacotes do node)`
- bower install `(instalação dos pacotes de frontend (angular, jquery, bootstap...) )`
- gulp `(gera e copia os arquivos para visualização "distribuição")`

> Estes comandos devem ser executados na respectiva ordem.  
> Utilizar sempre ao alterar arquivos do desenvolvimento ou atualizar o repositório do projeto

# Estrutura de pastas #

- bin
- dist `(distribuição)`
- src `(source do projeto)`
    - assets
        - fonts
        - images
        - styles
    - pages `(controllers e views da aplicação)`
    - shared `(diretivas e servicos compartilhados)`
        - directives
        - services
    - app-module.js `(modulo principal)`
    - app-routes.js `(configuração das rotas)`
    - index.html `(html principal)`


# Configuração por rota #

Na rota é passado um objeto de configuração para exibição

```javascript
.when('/', {
    controller: 'HomeController',
    templateUrl: 'pages/home/home.html',
    config: {
        selecaoMenu: 'home'
    }
})
```

Este objeto é lido no evento de mudar de rota __'$routeChangeSuccess'__ que se encontra no __app-controller.js__  
Não é necessário passar todos os parametros, somente os diferentes do valor padrão.

Estrutura do objeto de configuração (setado no __configRouteDefaults__ do __app-controller.js__):

```javascript
configRouteDefaults = {
    nome: null, //Nome a exibir da área atual.
    selecaoMenu: null, //Área atual para seleção no menu de navegação
}
```

A configuração da rota atual fica exposta no __$scope.routeConfig__ principal, visível para todos os __$scope__

# Componentes de grid #

## Directiva para th ordenável ##
Para criar th ordenáveis simplesmente adicione o `ng-click=...` no th que a directiva `table-th` irá adicionar o ícone e classes.

## Directiva para listagem ##
Para criar listagem de strings (utilizado em operações, clientes e outros).  
para utilizar basta adicionar o `td-combo-array td-combo-list="[lista de string]" td-combo-type="'nome do tipo'"`  

>Ex:  
>`<td td-combo-array td-combo-list="messagem.operacoes" td-combo-type="'Operações'"></td>`

