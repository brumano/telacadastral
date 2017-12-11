App.service('repositoryTesting', ['$http', function($http) {

    var scope = this;

    scope.testList = [{
            _id: "3",
            nome: "Ut pariatur amet nostrud.",
            email: "fulano@teste.com",
            fones: [{ _id: 0, value: "31 99749-2051" }],
            contatoObeservacao: "Aliquip in amet eu ullamco nostrud elit ex nulla ut ut tempor nostrud et non.",
            enderecos: [{
                    _id: 0,
                    logradouro: "Id enim ut amet incididunt mollit laborum ad sed nulla sint id irure in laboris.",
                    localidade: "Lorem ipsum tempor cupidatat.",
                    uf: "MG",
                    cidade: "Belo horizonte",
                    numero: "123",
                    cep: "33030360"
                },
                {
                    _id: 1,
                    logradouro: "Id enim ut amet incididunt mollit laborum ad sed nulla sint id irure in laboris.",
                    localidade: "Lorem ipsum tempor cupidatat.",
                    uf: "MG",
                    cidade: "Belo horizonte",
                    numero: "123",
                    cep: "33030360"
                }
            ]
        },
        {
            _id: "1",
            nome: "Ut pariatur amet nostrud - 1.",
            email: "fulano1@teste.com",
            fones: [{ _id: 0, value: "31 99749-2051" }],
            contatoObeservacao: "Aliquip in amet eu ullamco nostrud elit ex nulla ut ut tempor nostrud et non.",
            enderecos: [{
                    _id: 0,
                    logradouro: "Id enim ut amet incididunt mollit laborum ad sed nulla sint id irure in laboris.",
                    localidade: "Lorem ipsum tempor cupidatat.",
                    uf: "MG",
                    cidade: "Belo horizonte",
                    numero: "123",
                    cep: "33030360"
                },
                {
                    _id: 1,
                    logradouro: "Id enim ut amet incididunt mollit laborum ad sed nulla sint id irure in laboris.",
                    localidade: "Lorem ipsum tempor cupidatat.",
                    uf: "MG",
                    cidade: "Belo horizonte",
                    numero: "123",
                    cep: "33030360"
                }
            ]
        },
    ]


    scope.ufList = [{
            _id: "1",
            nome: "AC"
        },
        {
            _id: "2",
            nome: "AL"
        },
        {
            _id: "3",
            nome: "AM"
        },
        {
            _id: "4",
            nome: "AP"
        },
        {
            _id: "5",
            nome: "BA"
        },
        {
            _id: "6",
            nome: "DF"
        },
        {
            _id: "7",
            nome: "ES"
        },
        {
            _id: "8",
            nome: "GO"
        },
        {
            _id: "9",
            nome: "MA"
        },
        {
            _id: "10",
            nome: "MG"
        },
        {
            _id: "11",
            nome: "MS"
        },
        {
            _id: "12",
            nome: "MT"
        },
        {
            _id: "13",
            nome: "PA"
        },
        {
            _id: "14",
            nome: "PB"
        },
        {
            _id: "15",
            nome: "PE"
        },
        {
            _id: "16",
            nome: "PI"
        },
        {
            _id: "17",
            nome: "PR"
        },
        {
            _id: "18",
            nome: "RJ"
        },
        {
            _id: "19",
            nome: "RN"
        },
        {
            _id: "20",
            nome: "RO"
        },
        {
            _id: "21",
            nome: "RR"
        },
        {
            _id: "22",
            nome: "RS"
        },
        {
            _id: "23",
            nome: "SC"
        },
        {
            _id: "24",
            nome: "SE"
        },
        {
            _id: "25",
            nome: "SP"
        },
        {
            _id: "26",
            nome: "TO"
        }
    ]


    this.getUfList = function() {
        return scope.ufList;
    };


    this.getList = function() {
        return scope.testList;
    };

    this.getItemListById = function(_id) {

        return scope.testList.filter(function(item) {
            return item._id === _id;
        })[0];
    };

    this.insertItemInList = function(item) {
        scope.testList.push(item);
    };

    this.searchLocaleByCEP = function(cep) {
        return $http({
            url: "http://api.postmon.com.br/v1/cep/" + cep,
            method: 'GET'
        });
        return
    };


}]);