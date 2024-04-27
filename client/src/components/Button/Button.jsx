import "./button.css"

const Button = ({ as, children, filled, secondary,className ,...rest }) => {
  const that = {
    as,
  };
  return (
    <that.as
      className={`dir-control ${secondary ? "dir-control--secondary" : ""} ${
        filled ? "dir-control--filled" : ""
      } ${className}`}
      {...rest}
    >
      {children}
      <span />
      <span />
      <span />
      <span />
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
    </that.as>
  );
};
Button.defaultProps = {
  as: "button",
};

export {
    Button
}