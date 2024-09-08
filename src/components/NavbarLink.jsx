import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavbarLink = ({ to, children, ...props }) => {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default NavbarLink;
