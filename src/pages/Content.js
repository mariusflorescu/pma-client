import React from 'react'
import {Link} from "react-router-dom";

const Content = () => {
    return (
      <Link to="/project/create">
          <button
            className="p-2 mb-2 ml-6 text-gray-50 font-semibold transition duration-200 transform bg-black border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-black"
          >
              Create new project!
          </button>
      </Link>
    );
}

export default Content;