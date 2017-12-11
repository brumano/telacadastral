App.service('$serviceValidateTesting', ['repositoryTesting', function($repository) {

    this.validate = function() {
        self = this;

        self.messages = [];

        function validateRepeatedValues(arr) {

            var sorted_arr = arr.slice().sort();

            var results = [];
            for (var i = 0; i < sorted_arr.length - 1; i++) {
                if (sorted_arr[i + 1] == sorted_arr[i]) {
                    results.push(sorted_arr[i]);
                }
            }

            if (results.length > 0) return false;

            return true;
        }

        self.validateFoneNumbers = function(list) {

            var arr = list.map(function(item) { return item.value });
            if (!validateRepeatedValues(arr)) {
                self.messages.push("Existem telefones repetidos para o mesmo cadastro.")
                return false;
            }

            return true;

        };

        self.validateEmails = function() {

            var list = $repository.getList();

            var arr = list.map(function(item) { return item.email });
            if (!validateRepeatedValues(arr)) {
                self.messages.push("Existem e-mails repetidos para o mesmo cadastro.")
                return false;
            }

            return true;

        };

        self.validateCEP = function(list) {
            var arr = list.map(function(item) { return item.cep });
            if (!validateRepeatedValues(arr)) {
                self.messages.push("Existem CEPs repetidos para o mesmo cadastro.")
                return false;
            }

            return true;
        };



    }

}]);