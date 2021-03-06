//functions for handling forms 
function change(e) {
    this.setState({
        [e.target.name]: e.target.value
    });
}
function submit(e, data, path, func, redirect,globalState) {
    e.preventDefault();
    const url = "http://localhost:9999" + path;
    func(url, data,redirect,globalState);
}

export {
    change,
    submit
}