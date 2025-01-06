function getBusRoute() {
    const routeId = document.getElementById("busRoute").value
    const fetchPromise = fetch(`https://api.umd.io/v1/bus/routes/${routeId}`)
    const content = document.getElementById('content')
    fetchPromise
        .then(response => {
            return response.json()
        })
        .then(route => {
            console.log(route)
            const busId = route[0].route_id
            console.log(busId)

            content.innerHTML = "Title: " + route[0].title
        })
        .catch(err => {
            content.innerHTML = "ERROR - INVALID"
        })
}