import React from "react";
import { Link } from "react-router-dom";
import { DollarSign } from "react-feather";

import { AuthContext } from "../context/auth";

const Layout = () => {
  const { user, logout } = React.useContext(AuthContext);

  const Layout = user ? (
    <nav className="flex bg-slate-50 flex-wrap items-center justify-between my-3 w-3/5 mx-auto p-2 font-mono">
      <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
        <Link
          className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-purple-900 text-xl font-semibold hover:text-purple-600"
          to="/"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 220 220"
              style={{ overflow: "visible" }}
            >
              <path
                d="M.046 9.9c.026 5.445.125 9.54.221 9.1.744-3.415 5.19-10.789 7.432-12.323.495-.34 1.482-1.126 2.193-1.747C11.718 3.332 17.18.599 19.2.271c.55-.089-3.545-.187-9.1-.217L0 0l.046 9.9zM380.8.271c2.02.328 7.482 3.061 9.308 4.659.711.621 1.698 1.407 2.193 1.747 1.336.914 4.29 5.001 5.512 7.624 1.57 3.371 1.737 3.799 1.916 4.899.089.55.187-3.545.217-9.1L400 0l-10.1.054c-5.555.03-9.65.128-9.1.217M202.113 194.594c-3.696 1.681-6.21 4.526-8.062 9.125-.536 1.329-.577 30.018-.185 129.015l.267 67.266 22.633-.009 22.634-.01-1.994-1.09c-2.801-1.532-4.901-4.665-5.429-8.101-.257-1.67-.359-28.817-.288-76.39l.111-73.8.842-1.82c1.214-2.623 3.255-4.768 5.555-5.839l2.003-.933 75.689-.004 75.688-.004 2.112.973c2.521 1.163 4.373 2.822 5.47 4.901l.806 1.526.017-22.634.018-22.633-67.266-.267c-36.997-.146-81.052-.256-97.9-.243l-30.634.023-2.087.948zM.054 389.9 0 400l10.1-.054c5.555-.03 9.65-.128 9.1-.217-2.245-.364-7.215-2.997-10.255-5.433-3.546-2.842-5.719-5.952-8.17-11.696-.188-.44-.415-1.25-.504-1.8-.089-.55-.187 3.545-.217 9.1m399.229 4.279c-.693 1.52-3.274 4.195-4.854 5.03l-1.429.756 3.5.017 3.5.018v-3.4c0-3.702-.053-3.88-.717-2.421"
                fill="#FEFFFE"
              />
              <path
                d="M240.2 232.674c-3.686.832-6.758 4.236-7.767 8.603-.644 2.79-.606 147.079.039 149.992.766 3.457 2.95 6.237 6.103 7.77l1.975.961h75.53c43.288 0 75.827-.152 76.225-.356.382-.195 1.389-.69 2.238-1.1 1.713-.826 3.266-2.514 4.584-4.985l.873-1.635V240.428l-1.036-1.914c-1.393-2.575-3.785-4.67-6.236-5.462-1.929-.623-149.822-.99-152.528-.378"
                fill="#5270FE"
              />
              <path
                d="M19.2.271c-2.02.328-7.482 3.061-9.308 4.659-.711.621-1.698 1.407-2.193 1.747-1.342.918-4.295 5.009-5.505 7.624a135.628 135.628 0 0 1-1.379 2.914c-.174.339-.429 1.419-.566 2.4-.282 2.016.143 1.316.981-1.615C3.498 10.067 13.4.895 19.8.8c.44-.007 1.07-.187 1.4-.4.653-.422.048-.461-2-.129M378.8.37c.33.23.96.423 1.4.43 6.4.095 16.302 9.267 18.57 17.2.82 2.866 1.248 3.642.993 1.8-.241-1.746-.365-2.096-1.95-5.499-1.222-2.623-4.176-6.71-5.512-7.624-.495-.34-1.482-1.126-2.193-1.747-1.167-1.021-4.71-2.994-7.308-4.07-1.486-.616-4.757-1.016-4-.49M103.134 94.387c-4.368 1.663-7.849 5.299-9.056 9.459-.669 2.305-.696 194.376-.027 196.035 2.306 5.728 5.016 8.345 10.302 9.95 1.535.466 9.19.561 45.347.565l43.5.004.057 24.3c.032 13.365.186 33.57.342 44.9.157 11.33.196-23.266.087-76.88-.158-77.18-.096-97.755.299-98.8 1.764-4.677 4.388-7.637 8.327-9.396l2.288-1.021 97.8.19c53.79.105 88.53.063 77.2-.094-11.33-.157-31.532-.31-44.893-.342l-24.293-.057-.107-44.1c-.101-41.809-.146-44.204-.849-46.1-1.432-3.863-4.456-6.859-8.611-8.533l-2.154-.867-96.846.038c-91.767.036-96.945.075-98.713.749m135.063 138.554c-2.3 1.071-4.341 3.216-5.555 5.839l-.842 1.82-.006 74.4-.006 74.4.213-74c.117-40.7.363-74.45.546-75 .992-2.981 3.063-5.53 5.853-7.201 1.593-.954 151.244-1.111 154.264-.161 2.464.775 4.966 2.918 6.164 5.279.479.945.951 1.637 1.049 1.539.941-.94-3.138-5.477-6.188-6.883l-2.112-.973-75.688.004-75.689.004-2.003.933zM.237 380.2c.24 1.743.366 2.097 1.935 5.469 2.742 5.891 7.706 10.336 15.028 13.459 1.457.621 4.769 1.037 4 .502-.33-.23-.997-.421-1.481-.424-1.988-.014-7.523-2.839-10.487-5.352-3.875-3.286-6.785-7.598-8.002-11.854-.82-2.866-1.248-3.642-.993-1.8m231.948 11.365c.285 3.215 6.287 9.696 7.685 8.298.119-.119-.478-.506-1.327-.861-2.786-1.164-5.124-4.031-6.029-7.396l-.485-1.806.156 1.765zm166.844 2.118c-1.34 2.822-3.377 4.637-6.429 5.725-.454.162-.596.362-.33.462 1.714.645 8.764-6.169 7.594-7.34-.108-.107-.483.412-.835 1.153"
                fill="#D9D8D8"
              />
              <path
                d="M20.8.415c-.55.181-1.81.554-2.8.829C10.689 3.272 3.338 10.618 1.23 18c-.282.99-.675 2.213-.872 2.719-.454 1.165-.472 3.171-.024 2.661.184-.209.538-1.55.787-2.98C2.78 10.862 13.832.8 22.649.8c.497 0 1.015-.18 1.151-.4.292-.473-1.547-.464-3 .015M376.167.347c.118.191 1.133.469 2.255.618 9.572 1.27 18.584 9.845 20.425 19.435.274 1.43.646 2.771.826 2.98.442.513.418-1.509-.031-2.661-.197-.506-.59-1.729-.872-2.719-2.108-7.382-9.463-14.732-16.77-16.756-.99-.274-2.353-.666-3.028-.871-1.545-.469-3.087-.483-2.805-.026M55.781 40.783c-7.654 2.008-13.372 7.864-15.219 15.589-.792 3.31-.792 287.946 0 291.256 1.884 7.877 7.705 13.721 15.758 15.82 1.762.459 13.444.552 69.3.552h67.18v18c0 13.426.118 18 .466 18 .352 0 .401-6.647.2-27.3-.146-15.015-.266-35.175-.266-44.8v-17.5l-43.5-.004c-36.157-.004-43.812-.099-45.347-.565-5.286-1.605-7.996-4.222-10.302-9.95-.669-1.659-.642-193.73.027-196.035 1.236-4.257 4.721-7.837 9.237-9.488 2.014-.736 4.861-.758 98.726-.758h96.652l2.154.867c4.155 1.674 7.179 4.67 8.611 8.533.703 1.896.748 4.291.849 46.1l.107 44.1h17.493c9.621 0 29.778.12 44.793.266 20.653.201 27.3.152 27.3-.2 0-.348-4.574-.466-18-.466h-18l-.014-67.1c-.015-70.936.029-69.156-1.807-73.128-2.837-6.142-8.067-10.412-14.655-11.965-4.351-1.026-287.813-.854-291.743.176M0 377.301c0 .584.161 1.475.358 1.98.197.506.59 1.729.872 2.719 2.117 7.414 9.377 14.632 16.87 16.772.825.235 2.098.608 2.828.828.731.22 1.732.4 2.224.4 1.54 0 .559-.676-1.364-.94-9.981-1.368-18.961-9.845-20.669-19.512C.637 376.819 0 375.541 0 377.301"
                fill="#545555"
              />
              <path
                d="M23.8.4c-.136.22-.654.4-1.151.4C13.925.8 2.811 10.836 1.165 20.2c-.232 1.32-.589 2.713-.794 3.095-.501.938-.501 352.472 0 353.41.205.382.567 1.771.805 3.086 1.722 9.496 10.727 17.914 20.612 19.269 1.009.139 1.93.407 2.047.596.117.19 37.901.344 84.589.344H192.8v-36h-67.18c-55.856 0-67.538-.093-69.3-.552-8.053-2.099-13.874-7.943-15.758-15.82-.792-3.31-.792-287.946 0-291.256 1.908-7.978 7.85-13.864 15.914-15.765 3.825-.902 287.223-.902 291.048 0 6.588 1.553 11.818 5.823 14.655 11.965 1.836 3.972 1.792 2.192 1.807 73.128l.014 67.1h36v-84.405c0-50.19-.148-84.687-.366-85.1-.201-.382-.576-1.775-.834-3.095-1.841-9.433-10.893-17.977-20.378-19.235-1.122-.149-2.137-.427-2.255-.618C375.855-.159 24.113-.106 23.8.4"
                fill="#000101"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-1/2 lg:text-right">
        <Link
          className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-purple-900 text-md hover:text-indigo-600"
          to="/subscriptions"
        >
          <strong>Dashboard</strong>
        </Link>
        <Link
          className="transition ease-in duration-200 block lg:inline-block mt-4 lg:mt-0 text-md font-semibold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-1 hover:scale-90 rounded-full"
          onClick={logout}
          to="/"
        >
          Logout
        </Link>
      </div>
    </nav>
  ) : (
    <nav className="flex bg-slate-50 flex-wrap items-center justify-between my-3 w-3/5 mx-auto p-2 font-mono">
      <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
        <Link
          className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-purple-900 text-xl font-semibold hover:text-purple-600"
          to="/"
        >
          <div className="flex flex-row justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 220 220"
                style={{ overflow: "visible" }}
              >
                <path
                  d="M.046 9.9c.026 5.445.125 9.54.221 9.1.744-3.415 5.19-10.789 7.432-12.323.495-.34 1.482-1.126 2.193-1.747C11.718 3.332 17.18.599 19.2.271c.55-.089-3.545-.187-9.1-.217L0 0l.046 9.9zM380.8.271c2.02.328 7.482 3.061 9.308 4.659.711.621 1.698 1.407 2.193 1.747 1.336.914 4.29 5.001 5.512 7.624 1.57 3.371 1.737 3.799 1.916 4.899.089.55.187-3.545.217-9.1L400 0l-10.1.054c-5.555.03-9.65.128-9.1.217M202.113 194.594c-3.696 1.681-6.21 4.526-8.062 9.125-.536 1.329-.577 30.018-.185 129.015l.267 67.266 22.633-.009 22.634-.01-1.994-1.09c-2.801-1.532-4.901-4.665-5.429-8.101-.257-1.67-.359-28.817-.288-76.39l.111-73.8.842-1.82c1.214-2.623 3.255-4.768 5.555-5.839l2.003-.933 75.689-.004 75.688-.004 2.112.973c2.521 1.163 4.373 2.822 5.47 4.901l.806 1.526.017-22.634.018-22.633-67.266-.267c-36.997-.146-81.052-.256-97.9-.243l-30.634.023-2.087.948zM.054 389.9 0 400l10.1-.054c5.555-.03 9.65-.128 9.1-.217-2.245-.364-7.215-2.997-10.255-5.433-3.546-2.842-5.719-5.952-8.17-11.696-.188-.44-.415-1.25-.504-1.8-.089-.55-.187 3.545-.217 9.1m399.229 4.279c-.693 1.52-3.274 4.195-4.854 5.03l-1.429.756 3.5.017 3.5.018v-3.4c0-3.702-.053-3.88-.717-2.421"
                  fill="#FEFFFE"
                />
                <path
                  d="M240.2 232.674c-3.686.832-6.758 4.236-7.767 8.603-.644 2.79-.606 147.079.039 149.992.766 3.457 2.95 6.237 6.103 7.77l1.975.961h75.53c43.288 0 75.827-.152 76.225-.356.382-.195 1.389-.69 2.238-1.1 1.713-.826 3.266-2.514 4.584-4.985l.873-1.635V240.428l-1.036-1.914c-1.393-2.575-3.785-4.67-6.236-5.462-1.929-.623-149.822-.99-152.528-.378"
                  fill="#5270FE"
                />
                <path
                  d="M19.2.271c-2.02.328-7.482 3.061-9.308 4.659-.711.621-1.698 1.407-2.193 1.747-1.342.918-4.295 5.009-5.505 7.624a135.628 135.628 0 0 1-1.379 2.914c-.174.339-.429 1.419-.566 2.4-.282 2.016.143 1.316.981-1.615C3.498 10.067 13.4.895 19.8.8c.44-.007 1.07-.187 1.4-.4.653-.422.048-.461-2-.129M378.8.37c.33.23.96.423 1.4.43 6.4.095 16.302 9.267 18.57 17.2.82 2.866 1.248 3.642.993 1.8-.241-1.746-.365-2.096-1.95-5.499-1.222-2.623-4.176-6.71-5.512-7.624-.495-.34-1.482-1.126-2.193-1.747-1.167-1.021-4.71-2.994-7.308-4.07-1.486-.616-4.757-1.016-4-.49M103.134 94.387c-4.368 1.663-7.849 5.299-9.056 9.459-.669 2.305-.696 194.376-.027 196.035 2.306 5.728 5.016 8.345 10.302 9.95 1.535.466 9.19.561 45.347.565l43.5.004.057 24.3c.032 13.365.186 33.57.342 44.9.157 11.33.196-23.266.087-76.88-.158-77.18-.096-97.755.299-98.8 1.764-4.677 4.388-7.637 8.327-9.396l2.288-1.021 97.8.19c53.79.105 88.53.063 77.2-.094-11.33-.157-31.532-.31-44.893-.342l-24.293-.057-.107-44.1c-.101-41.809-.146-44.204-.849-46.1-1.432-3.863-4.456-6.859-8.611-8.533l-2.154-.867-96.846.038c-91.767.036-96.945.075-98.713.749m135.063 138.554c-2.3 1.071-4.341 3.216-5.555 5.839l-.842 1.82-.006 74.4-.006 74.4.213-74c.117-40.7.363-74.45.546-75 .992-2.981 3.063-5.53 5.853-7.201 1.593-.954 151.244-1.111 154.264-.161 2.464.775 4.966 2.918 6.164 5.279.479.945.951 1.637 1.049 1.539.941-.94-3.138-5.477-6.188-6.883l-2.112-.973-75.688.004-75.689.004-2.003.933zM.237 380.2c.24 1.743.366 2.097 1.935 5.469 2.742 5.891 7.706 10.336 15.028 13.459 1.457.621 4.769 1.037 4 .502-.33-.23-.997-.421-1.481-.424-1.988-.014-7.523-2.839-10.487-5.352-3.875-3.286-6.785-7.598-8.002-11.854-.82-2.866-1.248-3.642-.993-1.8m231.948 11.365c.285 3.215 6.287 9.696 7.685 8.298.119-.119-.478-.506-1.327-.861-2.786-1.164-5.124-4.031-6.029-7.396l-.485-1.806.156 1.765zm166.844 2.118c-1.34 2.822-3.377 4.637-6.429 5.725-.454.162-.596.362-.33.462 1.714.645 8.764-6.169 7.594-7.34-.108-.107-.483.412-.835 1.153"
                  fill="#D9D8D8"
                />
                <path
                  d="M20.8.415c-.55.181-1.81.554-2.8.829C10.689 3.272 3.338 10.618 1.23 18c-.282.99-.675 2.213-.872 2.719-.454 1.165-.472 3.171-.024 2.661.184-.209.538-1.55.787-2.98C2.78 10.862 13.832.8 22.649.8c.497 0 1.015-.18 1.151-.4.292-.473-1.547-.464-3 .015M376.167.347c.118.191 1.133.469 2.255.618 9.572 1.27 18.584 9.845 20.425 19.435.274 1.43.646 2.771.826 2.98.442.513.418-1.509-.031-2.661-.197-.506-.59-1.729-.872-2.719-2.108-7.382-9.463-14.732-16.77-16.756-.99-.274-2.353-.666-3.028-.871-1.545-.469-3.087-.483-2.805-.026M55.781 40.783c-7.654 2.008-13.372 7.864-15.219 15.589-.792 3.31-.792 287.946 0 291.256 1.884 7.877 7.705 13.721 15.758 15.82 1.762.459 13.444.552 69.3.552h67.18v18c0 13.426.118 18 .466 18 .352 0 .401-6.647.2-27.3-.146-15.015-.266-35.175-.266-44.8v-17.5l-43.5-.004c-36.157-.004-43.812-.099-45.347-.565-5.286-1.605-7.996-4.222-10.302-9.95-.669-1.659-.642-193.73.027-196.035 1.236-4.257 4.721-7.837 9.237-9.488 2.014-.736 4.861-.758 98.726-.758h96.652l2.154.867c4.155 1.674 7.179 4.67 8.611 8.533.703 1.896.748 4.291.849 46.1l.107 44.1h17.493c9.621 0 29.778.12 44.793.266 20.653.201 27.3.152 27.3-.2 0-.348-4.574-.466-18-.466h-18l-.014-67.1c-.015-70.936.029-69.156-1.807-73.128-2.837-6.142-8.067-10.412-14.655-11.965-4.351-1.026-287.813-.854-291.743.176M0 377.301c0 .584.161 1.475.358 1.98.197.506.59 1.729.872 2.719 2.117 7.414 9.377 14.632 16.87 16.772.825.235 2.098.608 2.828.828.731.22 1.732.4 2.224.4 1.54 0 .559-.676-1.364-.94-9.981-1.368-18.961-9.845-20.669-19.512C.637 376.819 0 375.541 0 377.301"
                  fill="#545555"
                />
                <path
                  d="M23.8.4c-.136.22-.654.4-1.151.4C13.925.8 2.811 10.836 1.165 20.2c-.232 1.32-.589 2.713-.794 3.095-.501.938-.501 352.472 0 353.41.205.382.567 1.771.805 3.086 1.722 9.496 10.727 17.914 20.612 19.269 1.009.139 1.93.407 2.047.596.117.19 37.901.344 84.589.344H192.8v-36h-67.18c-55.856 0-67.538-.093-69.3-.552-8.053-2.099-13.874-7.943-15.758-15.82-.792-3.31-.792-287.946 0-291.256 1.908-7.978 7.85-13.864 15.914-15.765 3.825-.902 287.223-.902 291.048 0 6.588 1.553 11.818 5.823 14.655 11.965 1.836 3.972 1.792 2.192 1.807 73.128l.014 67.1h36v-84.405c0-50.19-.148-84.687-.366-85.1-.201-.382-.576-1.775-.834-3.095-1.841-9.433-10.893-17.977-20.378-19.235-1.122-.149-2.137-.427-2.255-.618C375.855-.159 24.113-.106 23.8.4"
                  fill="#000101"
                />
              </svg>
            </div>
            <div className="ml-8">
              <h1 className="text-bold text-3xl text-black">recur</h1>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
        <Link
          className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-purple-900 text-md hover:text-indigo-600"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="transition ease-in duration-200 block lg:inline-block mt-4 lg:mt-0 text-md font-semibold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-1 hover:scale-90 rounded-full"
          to="/register"
        >
          Register
        </Link>
      </div>
    </nav>
  );

  return Layout;
};

export default Layout;