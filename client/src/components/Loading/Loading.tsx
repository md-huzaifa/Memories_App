const Loading: React.FC = ({}) => {
  return (
    <div className="gird place-items-center">
      <div
        className="spinner-border animate-spin inline-block w-30 h-30  rounded-full"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
