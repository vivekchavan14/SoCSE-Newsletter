import React from 'react';
import PropTypes from 'prop-types';
 

const Newsletter = ({ title, image }) => {
  return (
    <div className ="border border-gray-300 rounded-lg p-5 text-center w-72 bg-white shadow-md transition-transform duration-300 ease-in-out mb-5 hover:transform hover:-translate-y-5">
      <img src={image} alt={title} className ="w-full h-auto rounded-md" />
      <h3 className ="mt-4 text-lg font-medium text-gray-700">{title}</h3>
      <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700" onClick={()=>{ alert(`View article ${title}`)}}>View article</button>
    </div>
  );
};

Newsletter.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Newsletter;