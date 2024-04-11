import React from "react";

const ULli = ({ title, content }) => {
  return (
    <div className="flex flex-col">
      <ul className="flex flex-col">
        <li>
          <h2 className="font-semibold size-1">{title}</h2>
        </li>
        <li>
          {content.forEach((ele) => (
            <p>{ele}</p>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default ULli;
