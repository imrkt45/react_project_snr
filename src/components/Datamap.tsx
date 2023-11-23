import React from 'react';
import DataList from './Datalist';
import { database } from './CardData';

const MainComponent: React.FC = () => {
  return (
    <div>
      <h1>Data List</h1>
      <DataList data={database} />
    </div>
  );
};

export default MainComponent;
