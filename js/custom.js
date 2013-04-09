function ContatosController($scope) {
	$scope.contatos = [
    {nome: 'Allyson Barros', email: 'allysonbarrosrn@gmail.com', telefone: '(84) 87263838', twitter: '@allysonbarros', facebook: 'fb.com/allysonbarros'}
  ];

  $scope.addContato = function() {
  	$scope.contatos.push($scope.novoContato);
	  	$scope.novoContato = {
	  	nome: '', email: '', telefone: '', twitter: '', facebook: ''
	  };
  }

  $scope.removeContato = function($position) {
  	if (confirm("Deseja realmente remover o contato?")) {
  		$scope.contatos.splice($position, 1);
  	}
  };
};