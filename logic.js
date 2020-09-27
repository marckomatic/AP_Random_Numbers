var tablaNumAletarios = [
    [4751, 4847,4249, 4648, 5047, 4847, 5156, 8789],
    [5046, 4756, 4738, 5350, 4746, 4847, 4846, 2346],
    [3583, 8997, 1533, 6466, 8830, 7271, 3809, 4256],
    [7880, 586, 8482, 7811, 6807, 3309, 2729, 2235],
    [7600, 1077, 4455, 8806, 1822, 1669, 7501, 8330],
    
    [4092, 4223, 6454, 7632, 7577, 2816, 9002, 2365],
    [4846, 4647, 5034, 4646, 5139, 5355, 5249, 2224],
    [7236, 812, 4195, 5589, 830, 8261, 9232, 902],
    [377, 3590, 2209, 4839, 6332, 1490, 3092, 2390],
    [7203, 1231, 546, 6612, 1038, 1425, 2709, 3092],

    [8974, 3961, 2183, 5295, 3096, 8536, 9442, 2392],
    [6307, 2346, 1285, 7000, 5306, 414, 3383, 2303],
    [8843, 2112, 8567, 8131, 8116, 5270, 5994, 9092],
    [2192, 874, 2897, 262, 5092, 5541, 4014, 2113],
    [4247, 4859, 2660, 7852, 9096, 578, 97, 1324],

    [6612, 721, 3899, 2999, 1263, 7017, 8057, 3443],
    [3464, 1702, 9204, 3389, 5678, 2589, 288, 6343],
    [7551, 3380, 2152, 5411, 2647, 7242, 2800, 3432],
    [9691, 9562, 3252, 9848, 6030, 8472, 2266, 3255],
    [3167, 8552, 5409, 1556, 4247, 4652, 2953, 9854],
    
    [5457, 7703, 2758, 2963, 8167, 6712, 9820, 5324],
    [2315, 8030, 7651, 5189, 075, 9353, 1921, 222],
    [8204, 4143, 2677, 034, 8601, 3340, 8383, 3243],
    [390, 5579, 4620, 5650, 210, 2082, 4664, 5643],
    [3485, 741, 9069, 5920, 4326, 7704, 6525, 1249],

    [4141, 1521, 9104, 5563, 1392, 8238, 4882, 2324],
    [4612, 8252, 1062, 1757, 964, 2983, 2244, 7654],
    [7423, 3298, 3979, 2831, 2257, 1508, 7642, 1245],
    [7171, 7720, 6509, 7549, 2330, 5733, 4730, 4534],
    [6858, 1489, 2669, 3743, 1901, 4971, 8280, 835],

    [5933, 1137, 7583, 6450, 5658, 7678, 3444, 3754],
    [3753, 1859, 6043, 294, 5110, 6340, 9137, 6323],
    [163, 9717, 4118, 4276, 9465, 8820, 4127, 202],
    [5101, 1815, 7068, 6379, 7252, 1086, 8919, 2093],
    [5068, 7447, 1664, 9278, 1708, 3625, 2864, 204],

    [74, 6677, 8676, 222, 3335, 1976, 1645, 3203],
    [255, 5458, 6942, 8043, 6201, 1587, 972, 243],
    [6333, 1931, 9433, 2661, 8690, 2313, 6999, 3094],
    [1815, 7171, 8036, 1832, 2031, 6298, 6073, 9044],
    [7765, 3194, 3222, 4191, 2734, 4469, 8617, 3233]
];

var numeroCifrasTablaAleatoria = 4;


fillExampleTable(tablaNumAletarios);

function fillExampleTable(table){
    var tableRef = document.getElementById('mytable').getElementsByTagName('tbody')[0];
    for(let tableRow of table){
        let newRow = tableRef.insertRow();
        for(let tableCell of tableRow){
            let numeroEnCelda = parseInt(tableCell, 10);
            var newCell = newRow.insertCell();
            var newText = document.createTextNode(""+numeroEnCelda);
            newCell.appendChild(newText);
        }
    }   
}


window.addEventListener('load', function()
{
    
    var form = document.querySelector("#formulario");
    form.addEventListener("submit", function()
    {
        var msize = +document.querySelector("#msize").value;
        var psize = +document.querySelector("#psize").value;
        var initNumber = +document.querySelector("#initNumber").value;
        var lastNumber = +document.querySelector("#lastNumber").value;

        var wreplace = document.querySelector("#wreplace").checked;
        if(msize == null || psize == null || initNumber == null){
            alert('Todos los campos numericos deben tener un valor.')
            return false;
        }
        if(msize < 0 || psize < 0 || initNumber < 0){
            alert('Todos los campos numericos deben ser mayores a 0.')
            return false;
        }
        if(lastNumber == null){
            lastNumber = numeroCifrasTablaAleatoria-1;
        }
        if(lastNumber < 0 && lastNumber >= numeroCifrasTablaAleatoria){
            alert('El ultimo numero de indice no puede ser mayor a ' + numeroCifrasTablaAleatoria);
            return false;
        }
        if(lastNumber < initNumber){
            alert('El ultimo numero de indice no puede ser menor al primero');
            return false;
        }
        alert(`
            Tamaño Muestra: ${msize}
            Tamaño Poblacion: ${psize}
            Posicion donde inicia el numero aletario: ${initNumber}
            Con Reemplazo: ${wreplace}    
        `)
        if(initNumber >= numeroCifrasTablaAleatoria){
            alert('El numero de posicion inicial no es compatible con los numeros de la tabla de numeros aleatorios.')
            return false;
        }

        let numeroCifrasPoblacion = 0;
        let modulo = (psize / 1000);
        if((psize / 10000) > 1){
            numeroCifrasPoblacion = 5;
        }
        else if((psize / 1000) > 1){
            numeroCifrasPoblacion = 4;
        }
        else if((psize / 100) > 1){
            numeroCifrasPoblacion = 3;
        }else if((psize / 10) > 1){
            numeroCifrasPoblacion = 2;
        }
        else if((psize / 1) > 1){
            numeroCifrasPoblacion = 1;
        }

        if(numeroCifrasPoblacion > numeroCifrasTablaAleatoria){
            alert('La poblacion es demasiado grande para esta tabla de numeros aleatorios.')
            return false;
        }
        let listaMuestra = [];
        for(let fila of tablaNumAletarios){
            if(listaMuestra.length == msize){
                break;
            }
            for(let numeroEnCelda of fila){
                if(listaMuestra.length == msize){
                    break;
                }
                let numeroCifrasCelda = 0;
                if(numeroEnCelda / 10000 > 1){
                    numeroCifrasCelda = 5;
                }
                else if(numeroEnCelda / 1000 > 1){
                    numeroCifrasCelda = 4;
                }
                else if(numeroEnCelda / 100 > 1){
                    numeroCifrasCelda = 3;
                }else if(numeroEnCelda / 10 > 1){
                    numeroCifrasCelda = 2;
                }
                else if(numeroEnCelda / 1 > 1){
                    numeroCifrasCelda = 1;
                }

                let cerosAAgregar = '';
                for(let i = numeroCifrasCelda; i < numeroCifrasTablaAleatoria; i++){
                    cerosAAgregar += '0';
                }

                let stringNumero = cerosAAgregar + numeroEnCelda;
                stringNumero = stringNumero.substring(initNumber, lastNumber +1);
                let numeroAcomparar = parseInt(stringNumero, 10);
                if(numeroAcomparar <= psize && numeroAcomparar > 0){
                    if(!wreplace && !listaMuestra.includes(numeroAcomparar)){
                        listaMuestra.push(numeroAcomparar);
                    }
                    else if(wreplace){
                        listaMuestra.push(numeroAcomparar);
                    }
                }
            }

        }
        

        var tableRef = document.getElementById('mytable2').getElementsByTagName('tbody')[0];
        tableRef.innerHTML = '';
        for(let numero of listaMuestra){
            let newRow = tableRef.insertRow();
            var newCell = newRow.insertCell();
            var newText = document.createTextNode(numero);
            newCell.appendChild(newText);
        } 

        return false;
    });


});