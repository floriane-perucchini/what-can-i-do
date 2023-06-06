import Content from '../Content';
import { useEffect, useState } from 'react';
import activitiesAPI from '../../services/activities';
import Sidebar from '../Sidebar';
import './style.scss';

function Main() {

  const [loading, isloading] = useState(true);
  const [activityItem, setActivityItem] = useState({});




  const getActivities = async () => {
    const newActivity = await activitiesAPI.getRandomActivity();
    setActivityItem({...newActivity});
    isloading(false)
  }

  const handleSubmit = async (selectedActivity) => {
    const newActivity = await activitiesAPI.getActivityByType(selectedActivity);
    setActivityItem({...newActivity});
  };

  useEffect(() => { 
    getActivities();
    console.log('je passe ici');
  },[loading]);

  useEffect(() => { 
    console.log(activityItem);
  },[activityItem]);

  return (
    <main className='Main'>
      <Sidebar handleSubmit={handleSubmit} />
      <Content {...activityItem} />

    </main>

  );
}

export default Main;
