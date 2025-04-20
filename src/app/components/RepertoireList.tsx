import React from 'react';
import { BsMusicNoteList } from 'react-icons/bs';

interface Compositions {
  [key: string]: string[];
}

interface Props {
  compositions: Compositions;
}

const RepertoireList: React.FC<Props> = ({ compositions }) => {
  return (
    <div>
      {Object.keys(compositions).map((composer, index) => (
        <div
          key={index}
          className="flex flex-row items-start justify-start gap-2 lg:w-[100%] lg:gap-8"
        >
          <BsMusicNoteList className="mt-[7px] w-[10%] lg:w-[auto]" />

          <h2 className="w-[35%] text-[20px]  text-yellow-500 lg:w-[auto] lg:text-[25px]">
            {composer}
          </h2>
          <ul className="ml-auto mt-[7px]  w-[55%] text-[15px] lg:w-[auto] lg:text-[20px]">
            {compositions[composer].map((composition, idx) => (
              <li key={idx} className="text-right">
                {composition}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RepertoireList;
