import className from "classnames";

const Input = ({ ...rest }) => {
  const inputClasses = className(
    rest.className,
    "w-full p-2 border rounded-md outline-none text-sm text-gray-500"
  );

  return <input {...rest} className={inputClasses} required />;
};

export default Input;
