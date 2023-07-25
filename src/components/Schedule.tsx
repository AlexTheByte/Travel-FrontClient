import React from "react";

function Schedule() {
  const scheduleData = [
    { hour: "08:00", description: "Wake up" },
    { hour: "08:00", description: "Wake up" },
    { hour: "08:00", description: "Wake up" },
  ];

  return (
    <div className="rounded-md p-1 shadow-md">
      <div className="flex h-full w-full flex-col divide-y-4 divide-solid divide-gray-950">
        {scheduleData.map((schedule) => (
          <div className="flex w-full flex-row divide-x-2 divide-solid divide-gray-950 p-1">
            <div className="basis-1/5 p-1">
              <div className="flex justify-center align-middle">
                <p className="inline-block">{schedule.hour}</p>
              </div>
            </div>
            <div className="basis-4/5 p-1">
              <p>{schedule.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
