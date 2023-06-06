import './style.scss';

function InputRadio({type, changed}) {
  return (
      <div className='Sidebar_search-input-container'>
        <input className='Sidebar_search-input' type="radio" name='type' id={type} value={type} onChange={changed} />
        <label className='Sidebar_search-label' htmlFor={type}>{type.toUpperCase()}</label>
      </div>
  );
}

export default InputRadio;
