import Calender from './Calender/Calender'
import Head from './Head/Head'
import Tasks from './Tasks/Tasks'


function Main(){
    const tasks = [
        {
          _id: 1,
          title: "Doctor",
          description: "Go to the doctor",
          progress: 50,
          dateToDo: "03/07/2023",
        },
        {
          _id: 2,
          title: "Run",
          description: "Go for a run",
          progress: 0,
          dateToDo: "04/07/2023",
        },
        {
          _id: 3,
          title: "Go Grocery",
          description: "Go buy food",
          progress: 30,
          dateToDo: "05/07/2023",
        },
        {
          _id: 4,
          title: "Fix the car",
          description: "get tires",
          progress: 40,
          dateToDo: "06/07/2023",
        },
        {
          _id: 5,
          title: "Fix the car",
          description: "get tires",
          progress: 40,
          dateToDo: "06/07/2023",
        },
      ];

    return(
        <div>
        <Head />   
        <Tasks />
        <Calender tasks={tasks}/>
        </div>
    )
}

export default Main