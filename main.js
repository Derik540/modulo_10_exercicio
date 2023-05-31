$(document).ready(function () {
    $('button').click(function () {
        let emailInput = $('#email').val()
        let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (emailReg.test(emailInput)) {
            console.info('Email válido')
        } else {
            alert('Email invalido')
            console.info('email inválido')
        }

        let camposVazios = []

        $('input[type="text"]').each(function () {
            if ($(this).val() === '') {
                camposVazios.push($(this).attr('placeholder'))
            }
        })

        if (camposVazios.length > 0) {
            let mensagem = `Os campos a seguir estão vazios:\n ${camposVazios.join('\n')}`
            alert(mensagem)
        } else {
            alert('cadastro realizado, obrigado ! 😎')
        }

    })

    $('#nome').mask('A', {
        translation: {
            'A': { pattern: /[A-Za-zÀ-ú ]/, recursive: true }
        }
    });

    $('#cep').mask('00000-000')

    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: 'O campo de email é obrigatório',
                email: 'Insira um email válido'
            }
        }
    })

})

