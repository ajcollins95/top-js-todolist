//Task Factory function
//Task is a 'class'
const Task = (name, marker) => {
 
    const say = (index) => {
        alert('Task')
    }
    return {
        say
    }
}

  export default Task;