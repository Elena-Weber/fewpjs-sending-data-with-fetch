// Add your code here
let formData = { name: "Steve", email: "steve@steve.com"};
function submitData() {
let obj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};
    return fetch("http://localhost:3000/users", obj)
    .then(function(response) {
        return response.json() })
        .then(function(object) {
            document.body.innerHTML = object[ "id" ] })
            .catch(function(error) {
                document.body.innerHTML = error.message })
}