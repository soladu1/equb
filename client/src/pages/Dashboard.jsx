import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const data = [
    {
      id: 1,
      bankKind: "1000",
      numberOfMembers: 120,
      startingDate: "2023-01-01",
      endingDate: "2023-12-31",
    },
    {
      id: 2,
      bankKind: "1500",
      numberOfMembers: 85,
      startingDate: "2023-02-15",
      endingDate: "2024-02-14",
    },
    {
      id: 3,
      bankKind: "3000",
      numberOfMembers: 85,
      startingDate: "2023-02-15",
      endingDate: "2024-02-14",
    },
    {
      id: 4,
      bankKind: "2500",
      numberOfMembers: 85,
      startingDate: "2023-02-15",
      endingDate: "2024-02-14",
    },
    // Add more card data here
  ];

  return (
    <div className="py-4 px-3 px-md-4">
      <div className="mb-3 mb-md-4 d-flex justify-content-between">
        <h3 className="mb-0">የእቁብ አይነቶች ዝርዝር</h3>
      </div>

      {/* Flexbox with wrap for responsiveness */}

      <div className="flex flex-wrap gap-6 justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-12px)] xl:w-[calc(25%-12px)]"
          >
            <Link to={`/categorays/${item.id}`}>
              <h4 className="text-lg font-bold mb-2">{item.bankKind}</h4>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">የአባላት ብዛት:</span>{" "}
                {item.numberOfMembers}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">የጀመረበት ቀን:</span>{" "}
                {item.startingDate}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">የሚያበቃበት ቀን:</span>{" "}
                {item.endingDate}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
