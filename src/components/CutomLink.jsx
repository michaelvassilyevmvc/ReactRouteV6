import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      style={{ color: match ? "rgb(159, 159, 230)" : "white" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
