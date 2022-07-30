import styles from './style';
const index = ({state, onDeleteUploadFile, file}) => {
  const stateValidate = () => {
    if (state === '') {
      return '';
    }
    if (state === 'RUNNING') {
      return 'RUNNING';
    }
    if (state === 'SUCCEEDED') {
      setTimeout(() => {
        onDeleteUploadFile(file);
      }, 3000);
      return 'SUCCEEDED';
    }
    if (state === 'ERROR') {
      return 'ERROR';
    }
  };
  return (
    <>
      <span className={stateValidate()}>{stateValidate()}</span>
      <style jsx>{styles}</style>
    </>
  );
};
export default index;
