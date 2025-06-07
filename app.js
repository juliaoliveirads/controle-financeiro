var arr = [
  {tipo: 1, descricao: "Pagamento do Freela", data: "2025-06-07", valor: 2500},
  {tipo: 2, descricao: "Pagamento conta de luz", data: "2024-02-23", valor: 209},
  {tipo: 1, descricao: "Pagamento do Freela 2", data: "2025-05-14", valor: 4700},
  {tipo: 1, descricao: "Pagamento do Freela 3", data: "2025-06-01", valor: 700},
  {tipo: 2, descricao: "Pagamento de Água", data: "2025-04-12", valor: 35}
];

function formatacaoData(data){

    var data_array = data.split("-");

    data_array = data_array[2] +"/"+ data_array[1]+"/"+ data_array[0];

    return data_array;

}

function alimentaTabela(arrRecebe) {
  var html = "";

  for (var i = 0; i < arr.length; i++) {
    html += "<tr>";

        if(arrRecebe[i].tipo ==1){

            html+='<td> <div class="alert alert-success"> Entrada <div/> </td>';

        }else{

            html+='<td> <div class="alert alert-danger"> Saída <div/> </td>';
        }

        html += "<td>" + arrRecebe[i].descricao + "</td>";
        html += "<td>" + formatacaoData(arrRecebe[i].data) + "</td>";
        html += "<td>" + "R$ "+ arrRecebe[i].valor + "</td>";


    html += "</tr>";
  }

    document.getElementById("corpoTabela").innerHTML = "";
    document.getElementById("corpoTabela").innerHTML = html;
}

function totalEntradasSaídas(arr, tipo, alimentaTabela = true){

    var total = 0;

    for(var i =0; i<arr.length; i++){

        if(arr[i].tipo == tipo){

            total += arr[i].valor;

        }
    }

    if(alimentaTabela == true){

        var html = '';

        if(tipo == 1){
            
            html += '<div class="alert alert-success">'+ "R$ "+ total+ '</div>';

            document.getElementById("totalEntradas").innerHTML = "";
            document.getElementById("totalEntradas").innerHTML = html;

        }else{

             html += '<div class="alert alert-danger">'+ "R$ "+ total+ '</div>';

            document.getElementById("totalSaidas").innerHTML = "";
            document.getElementById("totalSaidas").innerHTML = html;

        }
    }else{

        return total;

    }

}

function totalGeral(totalEntradas, totalSaidas){

    var valorTotal = totalEntradas - totalSaidas;
    var html = ""; 

    if(valorTotal < 0){

        html +='<div class ="alert alert-danger">' + valorTotal+ '</div>';

    }else{

         html +='<div class ="alert alert-success">' + valorTotal+ '</div>';
    }

    document.getElementById("totalGeral").innerHTML = "";
    document.getElementById("totalGeral").innerHTML = html;

}

document.getElementById('btRegistrar').addEventListener('click', function(event){

    event.preventDefault();

    var tipo = document.getElementById('tipo').value;
    var descricao = document.getElementById('descricao').value;
    var data = document.getElementById('data').value;
    var valor = document.getElementById('valor').value;

    var obj = {tipo: parseInt(tipo), descricao:descricao, data:data, valor: parseFloat(valor)};

    arr.push(obj);

    alimentaTabela(arr);

totalEntradasSaídas(arr, 1);
totalEntradasSaídas(arr, 2);

var totalEntradas = totalEntradasSaídas(arr, 1, false);
var totalSaidas = totalEntradasSaídas(arr, 2, false);

totalGeral(totalEntradas, totalSaidas);

document.getElementById('tipo').value = "";
document.getElementById('descricao').value = "";
document.getElementById('data').value = ""; 
document.getElementById('valor').value = "";


});

alimentaTabela(arr);

totalEntradasSaídas(arr, 1);
totalEntradasSaídas(arr, 2);

var totalEntradas = totalEntradasSaídas(arr, 1, false);
var totalSaidas = totalEntradasSaídas(arr, 2, false);

totalGeral(totalEntradas, totalSaidas);