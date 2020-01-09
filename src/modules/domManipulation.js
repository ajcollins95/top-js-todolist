//DOM Manipulator module for HTML display
//use "class" data to display objects
const DOM = ((doc) => {

    const init = (marker,index) => {
        alert('DOM')
    };

    const dispTask = (task) => {
        console.log('task')
    }
    
    return {
      init
    };
  })(document);

  export default DOM;