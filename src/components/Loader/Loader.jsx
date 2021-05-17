import LoaderSpinner from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <LoaderSpinner type="Oval" color="#ff6262" height={100} width={100} />
    </div>
  );
};

export default Loader;
