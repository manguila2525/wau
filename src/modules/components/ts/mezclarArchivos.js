// const fs = require('fs').promises;
// const path = require('path');
// var jp = require('jsonpath');
import axios from 'axios';
const campos = [
  {
    tipo: 'm3',
    clave: '501',
    data: {
      clave: '501',
      campos: [
        {
          tipo: 'number',
          descripcion: 'Numero de patente o autorización',
          longitudMaxima: 4,
          longitudMinima: 4,
          nombre: 'patente',
          permiteCero: false,
          permiteNull: false,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Numero de pedimiento asignado',
          longitudMaxima: 7,
          longitudMinima: 7,
          nombre: 'pedimento',
          permiteCero: false,
          permiteNull: false,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'Aduana-Sección de Despacho',
          longitudMaxima: 3,
          longitudMinima: 1,
          nombre: 'aduana',
          permiteCero: false,
          permiteNull: false,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Tipo de operacion',
          listadoValores: '1,2',
          longitudMaxima: 1,
          longitudMinima: 1,
          nombre: 'tipo',
          permiteCero: false,
          permiteNull: false,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'Clave de pedimento',
          listadoValores: 'clavesPedimento',
          longitudMaxima: 2,
          longitudMinima: 1,
          nombre: 'clave',
          permiteCero: false,
          permiteNull: false,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'Aduana-Sección de Despacho',
          listadoValores: 'mysql.aduana',
          longitudMaxima: 3,
          longitudMinima: 1,
          nombre: 'aduanaOperacion',
          permiteCero: false,
          permiteNull: false,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'CURP Importador Exportador',
          longitudMaxima: 18,
          longitudMinima: 1,
          nombre: 'curpImportadorExportador',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'RFC Importador Exportador',
          longitudMaxima: 13,
          longitudMinima: 1,
          nombre: 'rfcImportadorExportador',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'CURP agente aduanal',
          longitudMaxima: 18,
          longitudMinima: 1,
          nombre: 'curpAgente',
          permiteCero: false,
          permiteNull: false,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Tipo de cambio',
          longitudMaxima: 9,
          longitudMinima: 1,
          nombre: 'tipoCambio',
          permiteCero: false,
          permiteNull: false,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Fletes',
          longitudMaxima: 12,
          longitudMinima: 1,
          nombre: 'flete',
          permiteCero: true,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Seguros',
          longitudMaxima: 12,
          longitudMinima: 1,
          nombre: 'seguros',
          permiteCero: true,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Embalajes',
          longitudMaxima: 12,
          longitudMinima: 12,
          nombre: 'embalajes',
          permiteCero: true,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Otros Incrementales',
          longitudMaxima: 12,
          longitudMinima: 1,
          nombre: 'incrementales',
          permiteCero: true,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'Uso Futuro',
          longitudMaxima: 20,
          longitudMinima: 1,
          nombre: 'usoFuturo',
          permiteCero: true,
          permiteNull: true,
          permiteVacio: true,
        },
        {
          tipo: 'number',
          descripcion: 'Peso Bruto',
          longitudMaxima: 14,
          longitudMinima: 1,
          nombre: 'pesoBruto',
          permiteCero: true,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Medio de Transporte de Salida',
          listadoValores: 'transporte',
          longitudMaxima: 2,
          longitudMinima: 1,
          nombre: 'transporteSalida',
          permiteCero: true,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Medio de Transporte de Arribo',
          listadoValores: 'transporte',
          longitudMaxima: 2,
          longitudMinima: 1,
          nombre: 'transporteArribo',
          permiteCero: true,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Medio de Transporte de Entrada/Salida',
          listadoValores: 'transporte',
          longitudMaxima: 2,
          longitudMinima: 1,
          nombre: 'transporteEntradaSalida',
          permiteCero: true,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Origen o Destino',
          listadoValores: 'destinosMercancia',
          longitudMaxima: 2,
          longitudMinima: 1,
          nombre: 'origenDestino',
          permiteCero: false,
          permiteNull: false,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'Nombre del Importador o Exportador',
          longitudMaxima: 120,
          longitudMinima: 1,
          nombre: 'nombreImportadorExportador',
          permiteCero: false,
          permiteNull: false,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'Calle',
          longitudMaxima: 80,
          longitudMinima: 1,
          nombre: 'calle',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'Numero Interior',
          longitudMaxima: 10,
          longitudMinima: 1,
          nombre: 'numeroInterior',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'Numero Exterior',
          longitudMaxima: 10,
          longitudMinima: 1,
          nombre: 'numeroExterior',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'Codigo Postal',
          longitudMaxima: 10,
          longitudMinima: 1,
          nombre: 'codigoPostal',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'Municipio / Ciudad',
          longitudMaxima: 80,
          longitudMinima: 1,
          nombre: 'municipioCiudad',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'Entidad Federativa',
          longitudMaxima: 3,
          longitudMinima: 1,
          nombre: 'entidadFederativa',
          permiteCero: true,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'Pais del Importador o Exportador',
          listadoValores: 'mysql.pais',
          longitudMaxima: 3,
          longitudMinima: 1,
          nombre: 'paisImportadorExportador',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'string',
          descripcion: 'RFC de quien emite el CFDI o documento equivalente',
          longitudMaxima: 13,
          longitudMinima: 1,
          nombre: 'rfcEmisor',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Decrementables por Fletes',
          longitudMaxima: 12,
          longitudMinima: 1,
          nombre: 'decrementablesFletes',
          permiteCero: true,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Decrementables por Seguros',
          longitudMaxima: 12,
          longitudMinima: 1,
          nombre: 'decrementablesSeguros',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Decrementables por Carga',
          longitudMaxima: 12,
          longitudMinima: 1,
          nombre: 'decrementablesSeguros',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Decrementables por Descarga',
          longitudMaxima: 12,
          longitudMinima: 1,
          nombre: 'decrementablesDescarga',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
        {
          tipo: 'number',
          descripcion: 'Otros Decrementables',
          longitudMaxima: 12,
          longitudMinima: 1,
          nombre: 'decrementablesOtros',
          permiteCero: false,
          permiteNull: true,
          permiteVacio: false,
        },
      ],
      descripcion: 'Datos generales',
      nombre: 'datos',
      padres: [
        {
          index: 2,
          padre: 'pedimentos',
        },
      ],
      permiteMultiples: false,
    },
  },
];
function asignaRegistro(clave, detalle) {
  console.log('Asignando valores de ', clave.claveM3);
  let valores = [];
  // console.log(detalle)
  for (const c in clave) {
    if (c != 'claveM3' && c != 'linea') {
      const campo = detalle.campos.find((ca) => ca.nombre == c);
      if (campo != null) {
        valores.push({
          nombre: c,
          descripcion: campo.descripcion,
          valor: clave[c],
          detalleValor: clave[c + 'DetalleNombre'],
        });
      }
      // console.log(c,campo)
    }
  }
  // console.log(valores)
  return {
    claveM3: clave.claveM3,
    descripcionM3: clave.descripcion,
    valores: valores,
  };
}

function mezclarCampos(pedimento, campos) {
  let resultado = [];
  for (const clave in pedimento) {
    let esArreglo = true;
    if (!Array.isArray(pedimento[clave])) {
      esArreglo = false;
    }
    let detalleClave = null;
    if (!esArreglo) {
      detalleClave = campos.find((c) => c.clave == pedimento[clave].claveM3);
      if (detalleClave != null) {
        resultado.push(asignaRegistro(pedimento[clave], detalleClave));
      }
    } else {
      detalleClave = campos.find((c) => c.clave == pedimento[clave][0].claveM3);
      if (detalleClave != null) {
        pedimento[clave].forEach((clave) => {
          resultado.push(asignaRegistro(clave, detalleClave));
        });
      }
    }
  }
  // resultado = JSON.stringify(resultado, undefined, 2);
  return resultado;
}
export const cargarCampos = async (pedimento, set) => {
  const {data} = await axios(
    'https://ozib7lr4z1.execute-api.us-east-1.amazonaws.com/api/api/configuracion/m3',
  );
  const {result} = data;
  let final = [];
  final.push(JSON.stringify(mezclarCampos(pedimento, result), undefined, 2));
  console.log(final);
  console.log(JSON.parse(final));
  set(JSON.parse(final));
  return 'ok';
};
// async function processTest() {
//   const archivoM3 = './test.json';
//   const archivoCampos = './501.json';

//   const dataPedimentos = await fs.readFile(archivoM3, 'utf8');
//   let pedimentos = JSON.parse(dataPedimentos);
//   // console.log(pedimentos)

//   // const dataCampos = await fs.readFile(archivoCampos, 'utf8');
//   // let campos = JSON.parse(dataCampos);
//   // console.log(campos)
//   mezclarCampos(pedimentos.pedimentos[0], campos);
// }
