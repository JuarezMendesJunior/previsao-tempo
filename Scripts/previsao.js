
function buscaPrevisao(paramCidade, paramEstado) {

	console.log(paramCidade);
	console.log(paramCidade);

  var previsaoApi = "http://developers.agenciaideias.com.br/tempo/json/" + paramCidade +"-" + paramEstado +"";
  console.log(previsaoApi);
  $.ajax({
          type: "POST",
          url: previsaoApi,
          dataType: "json",
          success: function (dados) {
                 $("hr").css("display", "block");
								 $("#nomeCidade").text(dados.cidade);
								 $("#descPrevisao").text(dados.agora.descricao);
								 $("#descTempAtual").text(dados.agora.temperatura + "°");
								 $("#imgPrevisao").attr("src", dados.agora.imagem);
								 $("#imgPrevisao").css("display", "block");
								 for (var i = 1; i <= 4; i++) {
									var max = "#descTempMaxDia" + i;
									var min = "#descTempMinDia" + i;
									var data = "#descDataDia" + i;
									var img = "#imgTempDia" + i;

								 	$(max).text(dados.previsoes[i].temperatura_max + "°");
									$(min).text(dados.previsoes[i].temperatura_min + "°");
									$(data).text(dados.previsoes[i].data);
									$(img).attr("src", dados.previsoes[i].imagem);
									$(img).css("display", "block");

								 }

             },
          error: function (exception) {
              console.log(exception);
          }
      });

}