import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [item, setItem] = useState('');
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    msg: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [itemList, setItemList] = useState(() =>
    JSON.parse(localStorage.getItem('storage') || [])
  );
  const [index, setIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('storage', JSON.stringify(itemList));
  }, [itemList]);

  useEffect(() => {
    if (alert) {
      let i = setTimeout(() => {
        setAlert(false);
      }, 2000);
      return () => clearTimeout(i);
    }
  });
  // to update the input field state
  let handleChange = (e) => {
    let value = e.target.value;
    setItem(value);
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  //this is for the button in the form
  let handleSubmit = (e) => {
    e.preventDefault();
    showAlert(true, 'success', 'Item added successfully');
    item
      ? setItemList((prev) => [...prev, item])
      : showAlert(true, 'danger', 'Enter item into field');
    setItem('');
  };

  let handleEdit = (e) => {
    e.preventDefault();
    let newArray = [];
    itemList.map((parameter, x) => {
      return x !== index ? newArray.push(parameter) : newArray.push(item);
    });

    setItemList(newArray);
    setItem('');
    showAlert(true, 'success', 'List Updated');
    setEditMode(false);
  };

  //this is for the button attached to the list item
  let alterList = (btnName, keyProp) => {
    let result = mapData.filter((item) => item.props.id === keyProp);
    let del = result[0].props.itemName;
    if (btnName === 'edit-btn') {
      setEditMode(true);
      setItem(del);
      setIndex(result[0].props.position);
    } else {
      setItemList(itemList.filter((x) => x !== del));
      showAlert(true, 'danger', 'item Removed');
    }
  };

  //to map the  list
  let mapData = itemList.map((data, position) => {
    let value = Math.ceil(Math.random() * 10000);
    return (
      <List
        key={value}
        itemName={data}
        handleModify={alterList}
        id={value}
        position={position}
      />
    );
  });

  // empty list
  let clearAll = () => {
    setItem('');
    showAlert(true, 'danger', 'empty list');
    setItemList([]);
  };

  return (
    <section className='section-center'>
      {alert.show && <Alert condition={alert.type} message={alert.msg} />}
      <form className='grocery-form'>
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            type='text'
            placeholder='e.g eggs'
            value={item}
            name='item'
            onChange={handleChange}
            className='grocery'
          />
          <button
            type='submit'
            onClick={editMode ? handleEdit : handleSubmit}
            className='submit-btn'>
            {editMode ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>{mapData}</div>
      <button className='clear-btn' onClick={clearAll}>
        Clear Items
      </button>
    </section>
  );
}

export default App;
