import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-green-200 rounded-lg inline-block p-3 m-2 shadow-lg hover:scale-[1.05] ease-out duration-300 cursor-pointer">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <>
        <h2 className="my-3">{name}</h2>
        <p className="mb-2">{email}</p>
      </>
    </div>
  );
};

export default Card;
