import React from 'react';

import Greetings from '../Head/Greetings';
import SearchTask from '../Head/SearchTask';
import Tasks from '../Tasks/Tasks';

const MainLeft = () => {
  return (
    <div>
        <Greetings/>
        <SearchTask/>
        <Tasks/>

    </div>
  )
}

export default MainLeft