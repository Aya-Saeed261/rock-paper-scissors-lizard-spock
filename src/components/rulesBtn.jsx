const RulesBtn = ({ onShowRules }) => {
  return (
    <button
      type="button"
      className="rules-btn main-fs btn d-block rounded-3 text-white border border-2 border-white letter-gap text-uppercase px-md-5"
      onClick={onShowRules}
    >
      Rules
    </button>
  );
};

export default RulesBtn;
