  axios.get('https://belltro.xyz:129/numbers')
  .then(function(response){
    let users = response.data.data;
    // console.log(users)
    let output = '';
    users.forEach(function(user) {
      output += `
      <li>
      <a href="#">
          <div class="d-flex">                            
              <div class="chat-user-img online align-self-center me-3 ms-0">
                  <img src="assets/images/users/avatar-3.jpg" class="rounded-circle avatar-xs" alt="">
                  <span class="user-status"></span>
              </div>

              <div class="flex-1 overflow-hidden">
                  <h5 class="text-truncate font-size-15 mb-1">${user.replace(/whatsapp:/g,'')}</h5>
                  <p class="chat-user-message text-truncate mb-0">Hey! there I'm available</p>
              </div>
              <div class="font-size-11">05 min</div>
          </div>
      </a>
  </li>`;
    });
    document.getElementById('output').innerHTML = output;
    // console.log(response.status); // ex.: 200
  });




