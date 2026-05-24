import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  const crumbs = pathParts.map((part, index) => {
    const path = "/" + pathParts.slice(0, index + 1).join("/");
    const label = part
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return { label, path };
  });

  return (
    <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/dashboard" className="text-[#D91429] font-semibold">
            Dashboard
          </Link>
        </li>

        {crumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center space-x-2">
            <span>/</span>
            {index === crumbs.length - 1  (
              <span className="font-semibold text-gray-800">{crumb.label}</span>
            ) : (
              <Link to={crumb.path} className="text-[#D91429] font-semibold">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}











