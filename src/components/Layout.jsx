import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="projects">Project List</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <div>
          <h1 className="title">Mongo, Express, React CRUD App</h1>
        </div>
        <Outlet />
      </main>
      <footer>
        <p>&copy; Copyright 2024</p>
      </footer>
    </>
  );
}
