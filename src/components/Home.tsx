import React, { useState, useEffect } from "react";
import Card from "./card";
import Header from "./Header";
import { useSelector } from 'react-redux';
import { selectResources } from '../Reduxfeature/userslice';
import { RootState } from '../Reduxfeature/store';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { setDeletedResources } from "../Reduxfeature/userslice";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  const [char, setChar] = useState("Item");
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [newdiv, setnewdiv] = useState(false);
  const resources = useSelector((state: RootState) => selectResources(state));
  const [carddata, setcarddata] = useState<any[]>(resources);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Selected Items:", selectedItems);
  }, [selectedItems]);

  const handleSelect = (index: number, resourceId: string) => {
    setCount(count + 1);
    updateChar(count + 1);
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, resourceId]);
    dispatch(setDeletedResources([...selectedItems, resourceId]));
  };

  const handleUnselect = (index: number, resourceId: string) => {
    if (count > 0) {
      setCount(count - 1);
    }
    updateChar(count - 1);
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((itemIndex) => itemIndex !== resourceId)
    );
    dispatch(
      setDeletedResources(
        selectedItems.filter((item) => item !== resourceId)
      )
    );
  };


  const handleDeleteAll = () => {
    const updatedResources = carddata.filter(
      (val) => !selectedItems.includes(val.resourceId)
    );

    setcarddata(updatedResources);
    setCount(0);
    updateChar(0);
    setSelectedItems([]);
    setnewdiv(false);
    dispatch(setDeletedResources([]));
  };


  const handlecloseall = () => {
    const updatedCards = carddata.map((val, ind) => (
      <Card
        key={ind}
        ind={ind}
        details={val}
        onSelect={() => handleSelect(ind, val.resourceId)}
        onUnselect={() => handleUnselect(ind, val.resourceId)}
      />
    ));

    setcarddata(updatedCards);
    setSelectedItems([]);
    setCount(0);
    updateChar(0);
    setnewdiv(false);
    dispatch(setDeletedResources([]));
  };


  const updateChar = (newCount: number) => {
    setChar(newCount > 1 ? "Items" : "Item");
    setnewdiv(newCount >= 1 ? true : false);
  };

  return (
    <>
      <div className="HomeCards">
        <Header name="Raj" />
        {newdiv && (
          <div className="additional-icons">
            <span className="icon" onClick={handlecloseall}>
              <CloseIcon />
            </span>
            <h4>
              {count} {char} selected
            </h4>
            <span className="icon" onClick={handleDeleteAll}>
              <DeleteIcon />
            </span>
          </div>
        )}
        {carddata.map((val, ind) => (
          <Card
            details={val}
            ind={ind}
            key={ind}
            onSelect={() => handleSelect(ind, val.resourceId)}
            onUnselect={() => handleUnselect(ind, val.resourceId)}
           
          />
        ))}
      </div>
    </>
  );
};

export default Home;
