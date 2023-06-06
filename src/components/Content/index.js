
import Activity from '../Activity';
import './style.scss';

function Content(activityItem) {

  return (
    <section className='Content'>
      <Activity {...activityItem} />
    </section>
  );
}

export default Content;
