
const middlewareAPI = () => next => async action => {
    if (action.type === "RENAMEPRODUCT") {
        const url = "https://api.github.com/users/hadley/orgs"
        const http = await fetch(url);
        const userList = await http.json();
        console.log("middleware is working!!")
        console.log(userList)
        action.payload = userList[0].login
    }
    return next(action)
}
export default middlewareAPI;