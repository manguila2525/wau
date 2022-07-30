export const handleChange = (event, set, setDataComplete, dataComplete) => {
  const {value, name} = event.target;
  handleSelectMultiply(value, name, set, setDataComplete, dataComplete);
};
const handleSelectMultiply = (
  value,
  name,
  set,
  setDataComplete,
  dataComplete,
) => {
  const excludeAll = value.filter((patente) => patente !== 0);

  if (value == [0]) {
    set(typeof value === 'string' ? value.split(',') : [0]);
    changeData(name, [0], setDataComplete, dataComplete);
  } else {
    value.shift();
    set(typeof excludeAll === 'string' ? excludeAll.split(',') : excludeAll);
    changeData(name, excludeAll, setDataComplete, dataComplete);
    if (value.includes(0)) {
      set(typeof value === 'string' ? value.split(',') : [0]);
      changeData(name, [0], setDataComplete, dataComplete);
    }
  }
};
export const handleChangeList = (event, set, setDataComplete, dataComplete) => {
  const {value, name} = event.target;
  changeData(name, value, setDataComplete, dataComplete);
  set(value);
};
export const handleChangeDate = (event, setDataComplete, dataComplete) => {
  const {value, name} = event.target;
  changeData(name, value, setDataComplete, dataComplete);
};

const changeData = (name, value, setdata, data) => {
  setdata({...data, [name]: value});
};
export const handleChangeVistaPedimento = (
  event,
  set1,
  set2,
  setDataComplete,
  dataComplete,
) => {
  set1(event.target.value);
  console.log(event.target.value);
  if (event.target.value === 'Simplificada') {
    set2('Simplificada');
  }
  if (event.target.value === 'Por Cliente') {
    set2('Por Cliente');
  }
  if (event.target.value === 'Técnico') {
    set2('Técnico');
  }
  changeData(
    event.target.name,
    event.target.value,
    setDataComplete,
    dataComplete,
  );
};
