import React from "react";

function Price() {
  return (
    // flex h-full w-auto cursor-pointer flex-row items-center justify-around space-x-2 border-r-2 border-gray-vs-900 p-2 last:border-r-0
    <div className="flex w-auto flex-row items-center justify-around rounded-md p-1 shadow-md bg-white">
      <div>
        <span>50€</span>
      </div>
      <div>
        <p>
          <b>Included :</b>
        </p>
        <ol>
          <li>Blahblah</li>
          <li>Coucou</li>
        </ol>
        <p>
          <b>Not included :</b>
        </p>
        <ol>
          <li>Coucou avec un peu plus de mots</li>
          <li>Test ça et tout</li>
        </ol>
      </div>
    </div>
  );
}

export default Price;
