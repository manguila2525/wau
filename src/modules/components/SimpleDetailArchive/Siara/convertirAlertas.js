// export const convertirAlertas = (alerta) => {
//   let convertir = alerta.split('\n');
//   let alert = convertir.filter((text) => text.includes('Alerta'));
//   let alertas = alert.map((text) => {
//     let resumen = text.replace(/\s+/g, ' ');
//     return resumen;
//   });
//   let informativo = convertir.filter((text) => text.includes('Informativo'));
//   let informativos = informativo.map((text) => {
//     let resumen = text.replace(/\s+/g, ' ');
//     return resumen;
//   });
//   alertas = alertas.concat(informativos);
//   return alertas;
// };
export const convertirAlertas = (alerta) => {
  let convertir = alerta.split('\n');
  let alert = convertir.filter((text) => text.includes('Alerta'));
  let alertas = alert.map((text) => {
    let resumen = text.replace(/\s+/g, ' ');
    let cortar = resumen.split(' ', 8);
    let des = (cortar[4] = cortar[4].concat(' ', cortar[5], ' ', cortar[6]));
    des = resumen.indexOf(des);
    des = resumen.substr(des);
    if (cortar[1].includes('.')) {
      cortar[1] = cortar[1].concat(cortar[2]);
      cortar[2] = cortar[3];
      cortar[3] = cortar[4][0];
      cortar[5] = cortar[5].concat(' ', cortar[6], ' ', cortar[7]);
      des = resumen.indexOf(cortar[5]);
      des = resumen.substr(des);
    }
    return {
      tipo: cortar[0],
      registro: cortar[1],
      campo: cortar[2],
      linea: cortar[3],
      descripcion: des,
    };
  });
  let informativo = convertir.filter((text) => text.includes('Informativo'));
  let informativos = informativo.map((text) => {
    let resumen = text.replace(/\s+/g, ' ');
    let cortar = resumen.split(' ', 8);
    let des = (cortar[4] = cortar[4].concat(' ', cortar[5], ' ', cortar[6]));
    des = resumen.indexOf(des);
    des = resumen.substr(des);
    if (cortar[1].includes('.') || cortar[2].includes('.')) {
      cortar[1] = cortar[1].concat(cortar[2]);
      cortar[2] = cortar[3];
      cortar[3] = cortar[4][0];
      cortar[5] = cortar[5].concat(' ', cortar[6], ' ', cortar[7]);
      des = resumen.indexOf(cortar[5]);
      des = resumen.substr(des);
    }
    if (cortar[1].includes(' ')) {
      cortar[1] = cortar[1].concat(cortar[2]);
      cortar[2] = cortar[3];
      cortar[3] = cortar[4][0];
      cortar[5] = cortar[5].concat(' ', cortar[6], ' ', cortar[7]);
      des = resumen.indexOf(cortar[5]);
      des = resumen.substr(des);
    }
    return {
      tipo: cortar[0],
      registro: cortar[1],
      campo: cortar[2],
      linea: cortar[3],
      descripcion: des,
    };
  });
  alertas = alertas.concat(informativos);
  return alertas;
};

const recorrerAlerta = (alerta) => {
  alerta.map((text) => {
    let resumen = text.replace(/\s+/g, ' ');
    let cortar = resumen.split(' ', 8);
    let des = (cortar[4] = cortar[4].concat(' ', cortar[5], ' ', cortar[6]));
    des = resumen.indexOf(des);
    des = resumen.substr(des);
    if (cortar[1].includes('.')) {
      cortar[1] = cortar[1].concat(cortar[2]);
      cortar[2] = cortar[3];
      cortar[3] = cortar[4][0];
      cortar[5] = cortar[5].concat(' ', cortar[6], ' ', cortar[7]);
      des = resumen.indexOf(cortar[5]);
      des = resumen.substr(des);
    }
    return {
      tipo: cortar[0],
      registro: cortar[1],
      campo: cortar[2],
      linea: cortar[3],
      descripcion: des,
    };
  });
};
