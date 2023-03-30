const userData = JSON.parse(localStorage.getItem("userData")) || "";
if (userData === "") {
  document.getElementById(
    "msg"
  ).innerHTML = `<div class="alert alert-warning" role="alert">
    No User are there </div>`;
  setTimeout(() => {
    document.getElementById("msg").innerHTML = "";
  }, 1000);
} else {
  document.getElementById("passenger").innerHTML = userData.length;
  setTimeout(() => {
    document.getElementById("msg").innerHTML = "";
  }, 1000);
}

function addData() {
  userData.forEach((item, index) => {
    const username = item.username;
    const useremail = item.useremail;
    const usermobile = item.usermobile;
    const date = item.date;

    document.getElementById("user_data").innerHTML += `
    <tr>
        <th>${index+1}</th>
        <td>${username}</td>
        <td>${useremail}</td>
        <td>${usermobile}</td>
        <td>${date}</td>
    </tr>
    `;
    document.getElementById('income').innerHTML = ((index+1)*30);
  });
  
}

console.log(username);
