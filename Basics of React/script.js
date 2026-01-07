function h1(){

    return React.createElement('h1', null, 'Hello from h1')
}

var root = ReactDOM.createRoot(document.querySelector('#container'))

root.render(h1())