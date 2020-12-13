Usuarios = {

    add: () => {

        var t = {};
        t.Nome = $("#nome").val();
        t.CPF = $("#cpf").val();
        t.Datanascimento = $("#datan").val();
        t.Telefone = $("#telefone").val();
        t.Profissao = $("#profissao").val();
        t.Escolaridade = $("#escolaridade").val();
        t.Habilidades = $("#habilidade").val();

        console.log(t);
        $.ajax({
            type: 'POST',
            url: '/',
            data: t,
            dataType: 'json',
            success: () => {
                console.log(t);
                alert("Inserido com sucesso!");
                setTimeout(() => {
                    window.location.href = '/' // recarrega pagina
                }, 2000); //segundos
            }
        })

        return false;

    },


    template: (dados) => {

        $("#nome").attr("value", dados.Nome);
        $("#datan").attr("value", dados.Datanascimento);
        $("#telefone").attr("value", dados.Telefone);
        $("#profissao").attr("value", dados.Profissao);
        $("#escolaridade").attr("value", dados.Escolaridade);
        $("#habilidade").html(dados.Habilidades);
        
        var btExcluir = $("<button></button>").attr("class", "btn btn-primary").html("Excluir");

        $(btExcluir).on("click", (event) =>{
            Usuarios.exclui(event.target);
        })

    },
    
    consultaNomeDataCPF: function () {

        
        const nome = $('#Nome').val();
        const cpf = $('#CPF').val();
        const data = $('#Datanascimento').val();

        $.ajax({
            type: 'POST',
            url: '/consulta',
            data: { "Nome": nome, "CPF": cpf, "Datanascimento": data},
            success: (dados) => {
                Usuarios.template(dados)
            }


        })

    },
  

    consulta: function () {

        const vcpf = $('#CPF').val();

        $.ajax({
            type: 'POST',
            url: '/busca',
            data: { "CPF": vcpf },
            dataType: 'json',
            success: (dados) => {
                Usuarios.template(dados)
            }


        })

    },

    edita: () => {

        var t = {};
        t.Nome = $("#nome").val();
        t.CPF = $("#CPF").val();
        t.Datanascimento = $("#datan").val();
        t.Telefone = $("#telefone").val();
        t.Profissao = $("#profissao").val();
        t.Escolaridade = $("#escolaridade").val();
        t.Habilidades = $("#habilidade").val();

        console.log(t);
        $.ajax({
            type: 'PUT',
            url: '/edicao',
            data: t,
            dataType: 'json',
            success: () => {
                alert("Alterado com sucesso!");
                setTimeout(() => {
                    window.location.href = '/edicao' // recarrega pagina
                }, 2000); //segundos
            }
        })

        return false;

    },


    exclui: () => {

       var cpf = $("#CPF").val();
   
        $.ajax({
            type: 'DELETE',
            url: '/consulta',
            data: {"CPF": cpf},
            success: (dados) => {
                alert("Excluido com sucesso!");
                setTimeout(() => {
                    window.location.href = '/consulta' // recarrega pagina
                }, 2000); //segundos
            }
        })

        return false;

    },


}


$(() => {
    $('#telefone').mask('(00) 0 0000-0000');
    $('#cpf').mask('000.000.000-00', { reverse: true });
    $('#CPF').mask('000.000.000-00', { reverse: true });
})


