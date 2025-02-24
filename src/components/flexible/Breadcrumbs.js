import { Link } from "react-router-dom";

const Breadcrumbs = ({ fullSlug ="" }) => {

  const correctedSlug = fullSlug.startsWith("/") ? fullSlug : `/${fullSlug}`;
  const pathSegments = correctedSlug.split("/").filter(Boolean);


  return (
    <div className="breadcrumbs" data-src={fullSlug} typeof="BreadcrumbList" vocab="https://schema.org/">
      <span property="itemListElement" typeof="ListItem">
        <Link property="item" typeof="WebPage" title="" to="/" className="home">
          <span property="name">Home</span>
        </Link>
      </span>
      {pathSegments.map((crumb, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        let name = pathSegments.slice(0, index + 1).join("/");
          name = name.replace(/-/g, " ");
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
              <path
                d="M1.37267 6.44929C1.04128 6.68126 0.585937 6.44418 0.585937 6.03967L0.585937 0.960328C0.585937 0.555817 1.04128 0.31874 1.37267 0.550712L5.00077 3.09038C5.28513 3.28944 5.28513 3.71057 5.00077 3.90962L1.37267 6.44929Z"
                fill="white"/>
            </svg>
            <span  key={index} property="itemListElement" typeof="ListItem">
                <Link property="item" typeof="WebPage" to={path}>{name}</Link>
            </span>
          </>
        )
      }
      )}
    </div>
  );
};

export default Breadcrumbs;
