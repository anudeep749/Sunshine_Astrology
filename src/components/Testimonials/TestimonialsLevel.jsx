import React from "react";

const TestimonialsLevel = ({ TestimonialsName, percentage }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-black dark:text-white">{TestimonialsName}</span>
        <span className="text-sm text-slate-500 dark:text-slate-300">{percentage}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full mt-2">
        <div
          className="bg-teal-500 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: percentage }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default TestimonialsLevel;
