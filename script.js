axios.get("https://belltro.xyz:129/numbers").then(function (response) {
  let users = response.data.data;
  // console.log(users)
  let userList = "";
  users.forEach(function (user) {
    userList += `
      <li>
      <a href="#" >
          <div class="d-flex">                            
              <div class="chat-user-img online align-self-center me-3 ms-0">
                  <img src="assets/images/users/user.png" class="rounded-circle avatar-xs" alt="">
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
  document.querySelector("#userList").innerHTML = userList;
});

function myFunction() {
  const userNumber = event.target.innerText;
   //  console.log(userNumber)
 
  axios.get(`https://belltro.xyz:129/conversations?number=whatsapp:${userNumber}`).then(function (response) {
  let messages = response.data.data;
  //   console.log(messages);
  let conversationList = "";
  messages.forEach(function (message) {
  conversationList += `
  <li id="message">
  <div class="conversation-list">
  <div class="chat-avatar">
  <img src="assets/images/users/user.png" alt="">
  </div>
  
  <div class="user-chat-content">
  <div class="ctext-wrap">
  <div class="ctext-wrap-content">
  <p class="mb-0">
  ${message.message }
  </p>
  </div>
  </div>
  </div>
  </div>
  </li> 
  
  <li class="right" id="last_message">
  <div class="conversation-list">
  <div class="chat-avatar">
  <img src="assets/images/users/tuji_avatar.png" alt="">
  </div>
  
  <div class="user-chat-content">
  <div class="ctext-wrap">
  <div class="ctext-wrap-content">
  <p class="mb-0">
  ${message.last_message.replace(
      /\n/g,
      "</br>"
  )}
  </p>
  </div>
  </div>
  </div>
  </div>
  </li> `;
  });
  document.getElementById("conversation-list").innerHTML = conversationList;
  let avatar = 
      `<h5 class="font-size-16 mb-0 text-truncate"><a  class="text-reset user-profile-show">${userNumber}</a></h5> `
          document.getElementById("avatar-number").innerHTML = avatar;
  });
                      }



