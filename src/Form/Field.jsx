const Field = ({ label, children, error, htmlFor }) => {
  return (
    <div className="form-control">
      {label && (
        <label id={htmlFor} className="auth-label">
          {" "}
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div role="alret" className="text-red-600">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Field;
