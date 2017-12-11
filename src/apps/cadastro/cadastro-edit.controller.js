App.controller('cadastroEditController', function($scope, $http, $routeParams, $serviceTesting, $serviceValidateTesting, $location) {

    var _id = $routeParams.id;



    $scope.itemEdit = {};

    $scope.save = function(isValid) {

        $scope.messagesError = [];
        var validate = new $serviceValidateTesting.validate();
        $scope.validateFoneNumbers = validate.validateFoneNumbers($scope.itemEdit.form.fones);
        $scope.validateEmails = validate.validateEmails();
        $scope.validateCEP = validate.validateCEP($scope.itemEdit.form.enderecos);
        $scope.messagesError = validate.messages;


        if (!isValid || !$scope.validateFoneNumbers || !$scope.validateEmails || !$scope.validateCEP)
            return;


        $scope.itemEdit.save($scope.itemEdit.form);
        $location.path('/');


    }

    $scope.setUfByCode = function(index) {

        $scope.itemEdit.form.enderecos[index].ufSelected = $scope.itemEdit.ufList.filter(function(item) {
            return item.nome === $scope.itemEdit.form.enderecos[index].uf;
        })[0];

    }

    $scope.onCepChange = function(index) {
        if ($scope.itemEdit.form.enderecos[index].cpfVerified)
            $scope.itemEdit.form.enderecos[index].cpfVerified = false;
    }

    $scope.addNewFoneNumberInFoneNumberLists = function() {
        id = $scope.itemEdit.form.fones.length + 1;
        $scope.itemEdit.form.fones.push({
            id: id,
            value: null
        });
    }

    $scope.removeNumberInFoneNumberLists = function(index) {
        if (index > -1) {
            $scope.itemEdit.form.fones.splice(index, 1);
        }
    }

    $scope.addNewLocaleInLists = function() {
        id = $scope.itemEdit.form.enderecos.length + 1;
        $scope.itemEdit.form.enderecos.push({
            _id: id,
            logradouro: null,
            localidade: null,
            uf: null,
            cidade: null,
            numero: null,
            cep: null
        });
    }

    $scope.removeLocaleInLists = function(index) {
        if (index > -1) {
            $scope.itemEdit.form.enderecos.splice(index, 1);
        }
    }

    $scope.searchLocaleByCEP = function(cep, index) {

        $scope.itemEdit.form.enderecos[index].cpfVerified = false;

        $scope.itemEdit.searchLocaleByCEP(cep).then(function(response) {

            $scope.itemEdit.form.enderecos[index].logradouro = response.logradouro;
            $scope.itemEdit.form.enderecos[index].localidade = response.bairro;
            $scope.itemEdit.form.enderecos[index].uf = response.estado;
            $scope.itemEdit.form.enderecos[index].cidade = response.cidade;
            $scope.itemEdit.form.enderecos[index].cpfVerified = true;
            $scope.setUfByCode(index);

        }).catch(function(error) {
            throw (error);
        });
    }


    ! function init() {

        $scope.itemEdit = new $serviceTesting.Edit();
        $scope.itemEdit.fill(_id);


    }();

});