const Reset = ({ onReset }) => {
  return (
    <button
      type="btn"
      className="btn main-fs bg-white blue-text align-self-center rounded-3 border border-2 border-white letter-gap text-uppercase px-2 py-1 px-md-4"
      onClick={onReset}
    >
      Reset
    </button>
  );
};

export default Reset;
