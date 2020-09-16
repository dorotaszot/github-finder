const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert
        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      })
  } else {
    // Clear Profile
  }

})