import React from "react";
import "../index.css";

const Table = ({ users }) => {
  console.log(users);
  return (
    <div className=" flex flex-wrap mb-20">
      {users.map((users) => (
        <section
          key={users.id}
          className="h-[auto] w-52  bg-white rounded-md shadow-sm "
        >
          <table className=" outline w-[40rem] h-auto">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>

          </table>
          
        </section>
      ))}
    </div>
  );
};

export default Table;