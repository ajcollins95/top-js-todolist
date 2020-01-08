//Project Factory function
//Project is a 'class'
const Project = (name, marker) => {

    const say = (index) => {
        alert('Project')
    }
    return {
        say
    }
}

  export default Project;