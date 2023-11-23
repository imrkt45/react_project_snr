import React, { useState } from 'react';

interface NestedItemProps {
  data: Record<string, any>;
}

const FolderIcon = () => (
  <span style={{ marginRight: '5px' }}>📁</span>
);
const DocumentIcon = () => (
    <span style={{ marginRight: '5px' }}>📄</span>
  );

const NestedItem: React.FC<NestedItemProps> = ({ data }) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleClick = (key: string) => {
    setOpenKeys((prevOpenKeys) => {
      if (prevOpenKeys.includes(key)) {
        return prevOpenKeys.filter((openKey) => openKey !== key);
      } else {
        return [...prevOpenKeys, key];
      }
    });
  };

  return ( 
    <ul>
      <div>sdfdg</div>
      {Object.entries(data).map(([key, value], index) => (
        <li key={index}>
          <span onClick={() => handleClick(key)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
            {typeof value === 'object' ? <FolderIcon /> : <DocumentIcon/>}
            {key}:
          </span>
          {openKeys.includes(key) && typeof value === 'object' ? <NestedItem data={value} /> : ` ${value}`}
        </li>
      ))}
    </ul>
  );
};

interface DataListProps {
  data: {
    downloads: {
      name: string;
      apps: {
        firstapp: string;
        secondapp: string;
        thirdapp: string;
      };
      projects: {
        firstproject: string;
        secondproject: string;
        thirdproject: string;
      };
      picture: string;
    };
    documents: {
      company: {
        snr: string;
        amazon: string;
        flipkart: string;
      };
      video: string;
      audio: string;
      pic: string;
    };
    newapp: {
      nodejs: string;
      reactnative: string;
      reactjs: string;
      oldapp: {
        vscode: string;
        msteam: string;
      };
      newapp: {
        expressjs: string;
        chrome: string;
        studio: string;
      };
    };
    practical: {
      mathfile: string;
      english: string;
      external: {
        math: string;
        art: string;
        DL: string;
      };
    };
    snr: {
      trainee: string;
      software: string;
      engineers: {
        raj: string;
        satyam: string;
        vivek: string;
      };
    };
  }[];
}

const DataList: React.FC<DataListProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <NestedItem data={item} />
        </div>
      ))}
    </div>
  );
};

export default DataList;
