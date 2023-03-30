function addData(event) {
    event.preventDefault();
    let username = event.target[0].value;
    let useremail = event.target[1].value;
    let usermobile = event.target[2].value;
    let currentdate = new Date();

    let oldUserData = JSON.parse(localStorage.getItem('userData')) || [];

    let newUserData = {
        "username": username,
        "useremail": useremail,
        "usermobile": usermobile,
        "date": currentdate
    };

    oldUserData.push(newUserData);

    localStorage.setItem('userData', JSON.stringify(oldUserData));
    location.href = "Dashboard.html";
}