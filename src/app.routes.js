App.config(function($routeProvider, $locationProvider) {
    $routeProvider

    //mensagens
        .when('/cadastro/', {
            controller: 'cadastroController',
            templateUrl: 'apps/cadastro/cadastro.view.html',
            config: {
                nome: 'cadastro',
                selecaoMenu: 'cadastro'
            }
        })
        .when('/cadastro/edit/:id', {
            controller: 'cadastroEditController',
            templateUrl: 'apps/cadastro/cadastro-edit.view.html',
            config: {
                nome: 'Novo cadastro',
                selecaoMenu: 'cadastro'
            }
        })

    .otherwise({
        redirectTo: '/cadastro'
    });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('#');
});