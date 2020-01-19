//AppItem Factory function
//AppItem is a 'parent class'
const HTMLElement = (args) => {
    let _data = {
        tag: args.tag || 'div',
    }

    let elem = ''

    const get = () => {
        return elem
    }

    const logData = () => {
        console.log(_data)
    }

    const init = () => {
        elem = document.createElement(_data.tag)
    }

    init()

    return {
        logData
    }
}

export default HTMLElement;