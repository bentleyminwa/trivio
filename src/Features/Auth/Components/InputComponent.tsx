import className from "classnames";

const Input = ({ ...rest }) => {
  const inputClasses = className(
    rest.className,
    "w-full p-2 border rounded-md"
  );

  return <input {...rest} className={inputClasses} required />;
};

export default Input;
