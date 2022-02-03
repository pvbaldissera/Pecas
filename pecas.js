//Aluno Paulo Victor Baldissera
//Verificar o peso da peça

let PesoPeca = 200
	
	console.log("Verifica peso da peça.")
	if (PesoPeca > 100)
	{
		console.log("Peso informado:",PesoPeca,"g.\nPeso em conformidade. Cadastro realizado.\n")
	}else{
		console.log("Peso informado:",PesoPeca,"g.\nPeso da peça em não-conformidade. Não foi possível cadastrar.\n")
	     }

//Verificar o espaço na caixa

let NumeroPeca = 5

	console.log("Verifica espaço de armazenamento.")
	if (NumeroPeca < 10)
	{
		console.log("Numero de ordem da peça:",NumeroPeca,".\nEspaço suficiente na caixa.\n")
	}else{
	     	console.log("Numero de ordem da peça:",NumeroPeca,".\nEspaço insuficiente na caixa.\n")
	     }

//Verificar o comprimento do nome da peça

let NomePeca = "Parafuso"

	console.log("Verifica padrão no nome da peça.")
	if (NomePeca.length < 3)
	{
		console.log("Peça:",NomePeca,".\nNome cadastrado para a peça fora padrão.\n")
	}else{
             	console.log("Peça:",NomePeca,".\nNome cadastrado conforme o padrão. Cadastro realizado.\n")
	     } 		 	
