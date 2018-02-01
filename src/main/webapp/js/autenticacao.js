			//classe
			Autenticacao = function(){}

			//método
			Autenticacao.prototype.validarCampos= function(){
				
				eleu = document.getElementById("txtUsuario");
				textodu = ele.value;
				
				eles = document.getElementById("txtSenha");
				textods = eles.value;
				
				if (textodu=="" || textods=="" ){
					window.alert("#Os campos devem ser preenchidos!");
					return false;
				} else{

				return true;
				
				}
			}		
		
		aut = new Autenticacao();