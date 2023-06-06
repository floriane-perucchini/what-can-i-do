import { useEffect, useState } from 'react';
import InputRadio from '../InputRadio';
import './style.scss';

function Sidebar( {handleSubmit} ) {

  const [selectedType, setSelectedType] = useState('');

  const types = ['recreational', 'social', 'education', 'relaxation', 'cooking', 'diy', 'charity', 'music', 'busywork'];

  const radioChangehandler = (e) => {
    console.log(e.target.value);
    setSelectedType(e.target.value);
  }

  useEffect(() => { 
    handleSubmit(selectedType);
  },[selectedType]);


  return (
    <div className="Sidebar">
      <section className="Sidebar_search">
        <h2 className='Sidebar_search-title'>Search by type</h2>
        <form className='Sidebar_search-type'>
          {types.map((type) => ( 
            <InputRadio type={type} key={type} changed={radioChangehandler} />
          ))}
        </form>
      </section>
      <section className="Sidebar_categories">
      </section>
    </div>
  );
}

export default Sidebar;
