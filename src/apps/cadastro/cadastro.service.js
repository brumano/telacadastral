App.service('$serviceTesting', ['repositoryTesting', function($repository) {

    this.Grid = function() {
        self = this;

        self.list = [];
        self.fill = function() {

            return self.list = $repository.getList();
        };



    }



    this.Edit = function() {


        self = this;
        self.form = {};

        self.fill = function(_id) {
            self.ufList = $repository.getUfList();
            self.form = $repository.getItemListById(_id);
            if (self.form)
                return self.form
            else
                return self.form = {
                    nome: null,
                    email: null,
                    fones: [{ _id: 0, value: null }],
                    contatoObeservacao: null,
                    enderecos: [{
                        _id: 0,
                        logradouro: null,
                        localidade: null,
                        uf: null,
                        cidade: null,
                        numero: null,
                        cep: null
                    }]
                }


        };

        self.save = function(form) {

            var itemTosave = form;
            itemTosave.uf = form.ufSelected;
            if (!itemTosave._id) {
                itemTosave._id = new Date().getTime();
                $repository.insertItemInList(itemTosave)
            }


        }

        self.searchLocaleByCEP = function(cep, index) {

            return $repository.searchLocaleByCEP(cep).then(function(response) {
                return response.data;
            }).catch(function(error) {
                throw (error);
            });
        }

    }



}]);