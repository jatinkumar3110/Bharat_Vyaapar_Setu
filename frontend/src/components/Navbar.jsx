import React from "react";
import TopBar from "./TopBar";
import NotiFlow from "./NotiFlow";

const Navbar = ({ page }) => {
  return (
    <>
      <TopBar />
      <header className="py-3 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <svg
              fill="#000000"
              width="40px"
              height="32px"
              version="1.1"
              viewBox="144 144 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m441.5 618.8c-1.3789 0-2.6758-0.82812-3.207-2.1836l-9.3789-23.844c-0.69922-1.7695 0.17578-3.7695 1.9492-4.4688 1.7695-0.69922 3.7695 0.17578 4.4688 1.9492l9.3789 23.844c0.69922 1.7695-0.17578 3.7695-1.9492 4.4688-0.41406 0.15625-0.83984 0.23438-1.2617 0.23438z" />
                <path d="m635.98 401.74-34.43-143.75c-0.875-3.6523-4.7344-5.7188-8.2539-4.418l-52.359 19.227-2.0664-5.6289c-0.66016-1.7812-2.6367-2.6953-4.418-2.0469-1.7812 0.66016-2.707 2.6367-2.0469 4.418l6.582 17.938-12.605 4.3594c-10.488 3.6328-22.188 2.0156-31.293-4.3281l-26.832-18.676c-3.7188-2.5898-8.0781-4.1914-12.594-4.6133l-56.965-5.3906c-4.2695-0.40234-8.5508 0.72656-12.055 3.1875l-91.977 64.52c-6.1406 4.3086-8.9922 12.074-7.0859 19.336 1.9688 7.5195 8.5 12.91 16.254 13.422l26.281 1.7305c3.8359 0.25391 7.5664-0.69922 10.812-2.7461l38.406-24.215c3.7969-2.4023 8.6289-2.2812 12.309 0.27734l83.434 58.055c0.45312 0.31641 45.5 31.645 71.695 49.25 4.1133 2.7656 6.8867 6.9648 7.8047 11.836 0.92578 4.8984-0.15625 9.8789-3.0312 14.004l-0.33594 0.47266c-2.8125 4.043-7.0352 6.7227-11.887 7.5391-4.8516 0.82812-9.7227-0.31641-13.707-3.207l-41.406-30.051c-1.5352-1.1133-3.6914-0.77734-4.8125 0.76562-1.1133 1.5352-0.77734 3.6914 0.76562 4.8125l27.07 19.641c5.0977 6.1602 5.4805 14.965 0.89453 21.559-5.6172 8.0781-16.766 10.078-24.848 4.457l-34.609-24.078c-1.5664-1.082-3.7109-0.69922-4.793 0.85547-1.082 1.5664-0.69922 3.7109 0.85547 4.793l15.391 10.707c3.918 2.7266 6.5352 6.8086 7.3711 11.504 0.84766 4.6953-0.19531 9.4375-2.9141 13.344-5.6172 8.0781-16.766 10.078-24.848 4.457l-29.234-20.348c-1.5664-1.082-3.7109-0.69922-4.793 0.85547-1.082 1.5664-0.69922 3.7109 0.85547 4.793l10.223 7.1133c3.918 2.7266 6.5352 6.8086 7.3711 11.504 0.84766 4.6953-0.19531 9.4375-2.9141 13.344-5.6367 8.0977-16.867 10.184-25.031 4.6562l-8.5898-5.8242c-1.5742-1.0625-3.7188-0.66016-4.7812 0.91406-1.0625 1.5742-0.66016 3.7188 0.91406 4.7812l8.5898 5.8242c4.2617 2.8945 9.1328 4.2695 13.953 4.2695 7.9297 0 15.754-3.7383 20.594-10.695 3.7695-5.4219 5.207-11.996 4.043-18.5-0.03125-0.16797-0.070313-0.33594-0.10938-0.51172l4.9609 3.4531c4.3008 2.9922 9.2188 4.4297 14.09 4.4297 7.832 0 15.539-3.6992 20.34-10.598 4.0039-5.7578 5.2148-12.625 3.9258-19.012l5.1875 3.6094c4.3008 2.9922 9.2188 4.4297 14.09 4.4297 7.832 0 15.539-3.6992 20.34-10.598 3.6914-5.3047 5.0469-11.652 4.1641-17.711l3.6211 2.6289c4.3281 3.1406 9.418 4.7812 14.66 4.7812 1.4062 0 2.8242-0.11719 4.2422-0.35547 6.6914-1.1328 12.516-4.8203 16.395-10.402l0.33594-0.47266c3.9375-5.6562 5.4023-12.477 4.1445-19.207-1.2578-6.6992-5.0664-12.477-10.727-16.285-26.156-17.574-71.152-48.875-71.605-49.191l-83.434-58.055c-5.9648-4.1445-13.777-4.3203-19.926-0.45312l-38.395 24.227c-2.0078 1.2695-4.3203 1.8516-6.6797 1.6914l-26.281-1.7305c-4.793-0.31641-8.8281-3.6523-10.047-8.2969-1.1719-4.4883 0.58203-9.2891 4.3789-11.945l91.977-64.52c2.1641-1.5234 4.8125-2.2227 7.4492-1.9688l56.965 5.3906c3.3438 0.31641 6.5625 1.4961 9.3086 3.4141l26.844 18.676c10.914 7.5859 24.926 9.5234 37.48 5.1758l12.734-4.4102 41.172 112.08-7.9883 4.2891c-6.2188 3.3438-11.523 8.2461-15.352 14.188-1.0234 1.6055-0.5625 3.7305 1.0312 4.7617 0.58203 0.375 1.2188 0.55078 1.8594 0.55078 1.1328 0 2.2422-0.5625 2.9023-1.5859 3.1875-4.9609 7.6172-9.0547 12.812-11.848l7.1328-3.8281 6.543 17.809c0.51172 1.3984 1.832 2.2539 3.2383 2.2539 0.39453 0 0.79688-0.070313 1.1914-0.21484 1.7812-0.66016 2.707-2.6367 2.0469-4.418l-2.0664-5.6289 36.172-13.285c2.9805-1.0625 4.6719-4.2148 3.9219-7.3047z" />
                <path d="m384.72 471.95-3.5039-2.4414c-5.0859-3.5312-11.121-4.6836-16.785-3.6992 2.3711-4.4492 3.1992-9.5234 2.293-14.562-1.0625-5.9453-4.3789-11.109-9.3398-14.562l-3.5039-2.4414c-5.5898-3.8867-12.34-4.8906-18.48-3.3359 0.84766-3.168 1.0234-6.4961 0.42187-9.8203-1.0625-5.9453-4.3789-11.109-9.3398-14.562l-3.5039-2.4414c-4.9609-3.4453-10.953-4.7617-16.895-3.6914-5.1367 0.92578-9.6914 3.5312-13.059 7.418-1.0547-5.6289-4.2305-10.875-9.2891-14.395l-3.5039-2.4414c-10.234-7.1133-24.344-4.5859-31.457 5.6367l-8.9922 12.922-2.9219-9.5156c-2.5391-8.2852-7.5078-15.457-14.355-20.762l-6.3867-4.9492 59.484-103.72 10.629 5.7852c6.1875 3.3672 13.078 5.0664 19.965 5.0664 6.1016 0 12.211-1.3281 17.859-4.0039l29.227-13.844c3.207-1.5234 6.7812-2.1445 10.32-1.7812 1.8984 0.1875 3.582-1.1914 3.7695-3.0781 0.1875-1.8906-1.1914-3.582-3.0781-3.7695-4.793-0.48047-9.6133 0.35547-13.965 2.4102l-29.227 13.844c-10.027 4.7539-21.836 4.418-31.578-0.88672l-10.5-5.7188 9.6328-16.797c0.94531-1.6523 0.375-3.7578-1.2695-4.7031-1.6445-0.94531-3.7578-0.375-4.7031 1.2695l-2.9805 5.207-48.383-27.75c-3.2578-1.8711-7.3984-0.47266-8.875 2.9727l-58.105 135.94c-1.25 2.9219-0.10938 6.3164 2.6484 7.8906l33.438 19.168-2.9805 5.207c-0.94531 1.6523-0.375 3.7578 1.2695 4.7031 0.54297 0.30469 1.1328 0.45312 1.7109 0.45312 1.1914 0 2.3516-0.62109 2.9922-1.7305l9.2305-16.098 5.6367 4.3594c5.7188 4.4297 9.8711 10.422 11.984 17.34l4.5039 14.688-7.8906 11.344c-7.1133 10.234-4.5859 24.344 5.6367 31.457l3.5039 2.4414c3.9258 2.7344 8.4219 4.043 12.871 4.043 2.2422 0 4.4766-0.33594 6.6211-0.98438-0.48047 2.6289-0.51172 5.3438-0.03125 8.0586 1.0625 5.9453 4.3789 11.109 9.3398 14.562l3.5039 2.4414c3.9258 2.7344 8.4219 4.043 12.871 4.043 3.6992 0 7.3594-0.90625 10.648-2.6562 0.1875 6.9453 3.543 13.719 9.6719 17.977l3.5039 2.4414c3.9258 2.7344 8.4219 4.043 12.871 4.043 3.6797 0 7.3203-0.89453 10.598-2.6289 0.16797 6.957 3.5312 13.758 9.6719 18.027l3.5039 2.4414c3.9258 2.7344 8.4219 4.043 12.871 4.043 7.1523 0 14.199-3.3867 18.586-9.6836l17.211-24.727c7.1445-10.227 4.6133-24.348-5.6172-31.461zm-144.76-15.637-3.5039-2.4414c-7.1133-4.9492-8.875-14.762-3.9258-21.875l21.883-31.449c2.4023-3.4453 5.9922-5.7461 10.125-6.4961 0.93359-0.16797 1.8789-0.24609 2.8047-0.24609 3.1797 0 6.2773 0.96484 8.9453 2.8242l3.5039 2.4414c7.1133 4.9492 8.875 14.762 3.9258 21.875l-10.164 14.602-11.73 16.855c-4.9492 7.0977-14.758 8.8594-21.863 3.9102zm55.93 21.68c-0.011719 0.011718-0.011719 0.019531-0.019531 0.019531l-1.7305 2.4883c-4.9492 7.1133-14.762 8.875-21.875 3.9258l-3.5039-2.4414c-3.4453-2.4023-5.7461-5.9922-6.4961-10.125-0.73828-4.1328 0.16797-8.3047 2.5664-11.75l2.6367-3.7773v-0.011719l11.719-16.848 17.969-25.82c2.4023-3.4453 5.9922-5.7461 10.125-6.4961 0.93359-0.16797 1.8789-0.24609 2.8047-0.24609 3.1797 0 6.2773 0.96484 8.9336 2.8242l3.5039 2.4414c3.4453 2.4023 5.7461 5.9922 6.4961 10.125 0.73828 4.1328-0.16797 8.3047-2.5664 11.75l-4.0547 5.8242s0 0.011719-0.011719 0.011719zm36.656 21.891-1.6914 2.4297c-4.9492 7.1133-14.762 8.8672-21.875 3.9258l-3.5039-2.4414c-7.1055-4.9492-8.8672-14.75-3.9258-21.863l26.527-38.129c3.0508-4.3789 7.9414-6.7305 12.922-6.7305 3.1016 0 6.2188 0.91406 8.9531 2.8125l3.5039 2.4414c3.4453 2.4023 5.7461 5.9922 6.4961 10.125 0.73828 4.1328-0.16797 8.3047-2.5664 11.75l-13.477 19.336zm52.16-0.41016-17.211 24.727c-4.9492 7.1133-14.762 8.875-21.875 3.9258l-3.5039-2.4414c-7.1133-4.9492-8.8672-14.762-3.9258-21.863l11.375-16.344 5.8359-8.3945c3.0508-4.3789 7.9492-6.7305 12.922-6.7305 3.1016 0 6.2305 0.91406 8.9531 2.8125l3.5039 2.4414c7.1133 4.9414 8.875 14.762 3.9258 21.867z" />
                <path d="m356.31 580.5c-1.6328-0.97266-3.75-0.45312-4.7227 1.1797l-13.195 21.965c-0.98438 1.6328-0.45312 3.75 1.1797 4.7227 0.55078 0.33594 1.1719 0.49219 1.7695 0.49219 1.1719 0 2.3125-0.60156 2.9531-1.6719l13.195-21.965c0.98438-1.6328 0.45312-3.75-1.1797-4.7227z" />
                <path d="m378.23 209.42c0.57031 1.2695 1.832 2.0273 3.1406 2.0273 0.47266 0 0.95312-0.097656 1.418-0.30469 1.7305-0.77734 2.5078-2.8242 1.7227-4.5547l-10.527-23.359c-0.77734-1.7305-2.8242-2.5078-4.5547-1.7227-1.7305 0.77734-2.5078 2.8242-1.7227 4.5547z" />
                <path d="m457.64 215.29c0.52344 0.27734 1.0742 0.41406 1.625 0.41406 1.2305 0 2.4219-0.66016 3.0391-1.8203l12.102-22.582c0.89453-1.6719 0.26562-3.7695-1.4062-4.6641s-3.7578-0.26562-4.6641 1.4062l-12.102 22.582c-0.90625 1.6797-0.27734 3.7656 1.4062 4.6641z" />
              </g>
            </svg>
            <span className="fs-4">Bharat Vyapar Setu</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          {page === "buyer" && (
            <div className="d-flex align-items-center">
              <a
                href="#"
                className="nav-link link-body-emphasis fs-5 px-2"
                aria-current="page"
              >
                Orders
              </a>
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                version="1.1"
                viewBox="144 144 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="ms-2"
              >
                <path d="m620.17 328.12c-5.2188-6.4648-13.09-10.215-21.402-10.199h-330.34l-24.805-97.668c-1.5078-5.9414-4.9492-11.211-9.7891-14.973-4.8359-3.7617-10.789-5.8047-16.918-5.8008h-31.438c-6.5195 0-11.805 5.2852-11.805 11.809 0 6.5195 5.2852 11.809 11.805 11.809h31.438c1.8008 0 3.3711 1.2188 3.8164 2.9688l27.008 106.34c0.039063 0.15625 0.078125 0.32422 0.12109 0.48047l38.453 151.37h0.003906c2.5781 10.184 8.4805 19.215 16.773 25.664 8.2891 6.4492 18.496 9.9453 29 9.9414h219.7c10.82-0.039063 21.301-3.7773 29.707-10.59 8.4062-6.8164 14.23-16.297 16.504-26.875l27.73-131.23c1.7344-8.1289-0.30859-16.605-5.5586-23.051zm-45.281 149.39 0.003906 0.003906c-1.1367 5.2891-4.0508 10.031-8.2539 13.438s-9.4414 5.2734-14.852 5.293h-219.7c-5.25 0.003906-10.355-1.7461-14.5-4.9727-4.1445-3.2227-7.0977-7.7383-8.3906-12.828l-34.773-136.91h324.34c1.1875 0 2.3125 0.53516 3.0586 1.457 0.74609 0.91797 1.0391 2.1289 0.79297 3.2891zm-50.082 60.016 0.003906 0.003906c-11.25 0-21.645 6-27.27 15.746-5.625 9.7422-5.625 21.742 0 31.484 5.625 9.7461 16.02 15.746 27.27 15.746 11.211-0.054688 21.551-6.0703 27.141-15.789 5.5898-9.7188 5.5898-21.68 0-31.398-5.5898-9.7188-15.93-15.73-27.141-15.789zm0 39.359 0.003906 0.003906c-4.3477 0-7.8711-3.5234-7.8711-7.8711 0-4.3477 3.5234-7.8711 7.8711-7.8711s7.875 3.5234 7.875 7.8711c0 4.3477-3.5273 7.8711-7.875 7.8711zm-174.97-39.359 0.003906 0.003906c-11.25 0-21.645 6-27.27 15.746-5.625 9.7422-5.625 21.742 0 31.484 5.625 9.7461 16.02 15.746 27.27 15.746 11.215-0.054688 21.551-6.0703 27.141-15.789 5.5898-9.7188 5.5898-21.68 0-31.398-5.5898-9.7188-15.926-15.73-27.141-15.789zm0 39.359 0.003906 0.003906c-4.3477 0-7.8711-3.5234-7.8711-7.8711 0-4.3477 3.5234-7.8711 7.8711-7.8711s7.875 3.5234 7.875 7.8711c0 4.3477-3.5273 7.8711-7.875 7.8711z" />
              </svg>
            </div>
          )}
        </div>
      </header>
      <nav className="py-2 bg-body-tertiary border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            {/* Conditional rendering based on the 'page' prop */}
            {page === "home" ? (
              <>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link link-body-emphasis px-2 active"
                    aria-current="page"
                  >
                    How to ?
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    About
                  </a>
                </li>
              </>
            ) : page === "seller" ? (
              <>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link link-body-emphasis px-2 active"
                    aria-current="page"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    Business Oppertunities
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    About
                  </a>
                </li>
              </>
            ) : page === "buyer" ? (
              <>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link link-body-emphasis px-2 active"
                    aria-current="page"
                  >
                    Open Deals
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    Customer
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    Open Bidding
                  </a>
                </li>
              </>
            ) : null}
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <NotiFlow />
    </>
  );
};

export default Navbar;
