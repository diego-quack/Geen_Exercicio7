
$("#validarFormulario").validate({
    rules:{
        nome:{
            minlength: 2
        },
        sobreNome:{
            minlength: 2
        },
        email:{
            email:true
        },
        telefone:{
            number:true,
            minlength: 15,
            maxlength: 15
        }
    },
    messages:{
        nome: alert("O campo [nome] é necessário"),
        sobreNome: alert("O campo [sobrenome] é necessário"),
        email: ("O campo [email] é necessário"),
        telefone: ("O campo [telefone] é necessário"),
        descricao: ("O campo [descrição] é necessário")
    },
    submitHandler: function(form) {
      form.submit();
    }
   });