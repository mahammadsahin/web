function makeApiCall(){
    const fetchApi = fetch('https://jsonplaceholder.typicode.com/users')
    fetchApi.then(value=>{
        console.log(value.json())
    })
}
makeApiCall();