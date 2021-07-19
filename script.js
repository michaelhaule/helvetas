axios.get("https://belltro.xyz:129/numbers").then(function (response) {
  let users = response.data.data;
//   console.log(users)
  let output = "";
  users.forEach(function (user) {
    output += `
      <li>
      <a href="#" onclick="return myFunction();">
          <div class="d-flex">                            
              <div class="chat-user-img online align-self-center me-3 ms-0">
                  <img src="assets/images/users/avatar-3.jpg" class="rounded-circle avatar-xs" alt="">
              </div>

              <div class="flex-1 overflow-hidden">
                  <h5 class="text-truncate font-size-15" style="margin-top: 0.50rem;">${user.replace(
                    /whatsapp:/g,
                    ""
                  )}</h5>
              </div>
          </div>
      </a>
  </li>
  `;

  });
  document.getElementById("output").innerHTML = output;
  // console.log(response.status); // ex.: 200
});




