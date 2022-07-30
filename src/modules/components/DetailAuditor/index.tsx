import InformationGeneral from './InformationGeneral';

const index = ({data}) => {
  console.log(data);
  return (
    <>
      <InformationGeneral data={data} />
    </>
  );
};

export default index;
