import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const Categorays = () => {
  const { id } = useParams();
  
  // State to manage the dynamic columns (10 days)
  const [days, setDays] = useState(10);
  
  // Function to add more days (columns)
  const addDay = () => {
    setDays(days + 1);
  };

  // Example data for users
  const users = [
    { id: 1, name: "አንተነ ውጅራ", fullPayment: false, received: false, money: 100 },
    { id: 2, name: "ናሆም ታዮ", fullPayment: false, received: false, money: 150 },
    // Add more users as needed
  ];

  return (
    <div className="py-4 px-3 px-md-4">
      <div className="card mb-3 mb-md-4">
        <div className="card-body">
          <div className="mb-3 mb-md-4 d-flex justify-content-between">
            <div className="h3 mb-0">አባላት ዝርዝር {id}</div>
          </div>

          <div className="table-container overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-white p-2 border font-semibold min-w-[150px]">ስም</th>
                  <th className=" left-20 bg-white p-2 border font-semibold min-w-[100px]">ደርሶታል</th>

                  {/* Loop through the number of days */}
                  {Array.from({ length: days }, (_, i) => (
                    <th key={i} className="p-2 border font-semibold min-w-[100px]">
                      ቀን {i + 1}
                    </th>
                  ))}
                  <th className="p-2 border font-semibold min-w-[150px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="sticky left-0 bg-white p-2 border min-w-[150px]">{user.name}</td>
                  
                    <td className="left-40 bg-white p-2 border min-w-[100px]">
                      <input type="checkbox" />
                    </td>

                    {/* Loop through days and provide input fields */}
                    {Array.from({ length: days }, (_, i) => (
                      <td key={i} className="p-2 border min-w-[100px]">
                        <input
                          type="number"
                          placeholder="Amount"
                          className="border rounded w-full p-1"
                          defaultValue={user.money}
                          style={{ minWidth: "80px" }} // Ensure input does not shrink too much
                        />
                      </td>
                    ))}

                    <td className="p-2 border min-w-[150px]">
                    <a className="link-dark d-inline-block mr-5 " href="#">
                        <i className="gd-trash icon-text"></i>
                      </a>
                      <a className="link-dark d-inline-block" href="#">
                        <i className="gd-pencil icon-text"></i>
                      </a>
                    </td>
                  </tr>
                ))}

                {/* Row for Add Day Button */}
                <tr>
                  <td colSpan={days + 3} className="p-2 text-right">
                    <button
                      onClick={addDay}
                      className="bg-green-500 text-white px-4 py-2 rounded mt-3"
                    >
                      + Add Day
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-5">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
