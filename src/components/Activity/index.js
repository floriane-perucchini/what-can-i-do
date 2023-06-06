import './style.scss';

function Activity(activityItem) {

  
  const { activity, type, participants, link, accessibility, price } = activityItem;

  const getAccessibility = () => {
    if(accessibility <= 0.2) return 'Very easy';
    if(accessibility <= 0.4) return 'Easy';
    if(accessibility <= 0.6) return 'Medium';
    if(accessibility <= 0.8) return 'Hard';
    if(accessibility <= 1) return 'Very hard';
  }

  const getPrice = () => {  
    if(price === 0) return 'Free';
    if(price <= 0.2) return 'Very cheap';
    if(price <= 0.4) return 'Cheap';
    if(price <= 0.6) return 'Medium';
    if(price <= 0.8) return 'Expensive';
    if(price <= 1) return 'Very expensive'; 
  }

  return (
    <article className='Activity'>
      <h3 className='Activity_title'>{activity}</h3>
      <p className='Activity_type'>{type}</p>
      <p className='Activity_participants'>{participants} {participants <= 1 ? 'participant' : 'participants'}</p>
      {
        link ? <a href={link} target='_blank' rel='noreferrer'>need help ?</a> : null
      }
      <p className='Activity_accessibility'>Accessibility: {getAccessibility()}</p>
      <p className='Activity_price'>Price: {getPrice()}</p>
    </article>
  );
}

export default Activity;
