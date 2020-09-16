class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class='card card-body'>
      <div class='row'>
        <div class='col-md-3'>
          <img src='${user.avatar_url}' class='img-fluid'>
          <a class='btn btn-primary btn-block mt-3 mb-3' href='${user.url}'>Profile</a>
        </div>
      
        <div class='col-md-9'>
          <badge class='badge badge-success'>Public Repos: ${user.public_repos}</badge>
          <badge class='badge badge-primary'>Public Gists: ${user.public_gists}</badge>
          <badge class='badge badge-secondary'>Following: ${user.following}</badge>
          <badge class='badge badge-info'>Followers: ${user.followers}</badge>
        
          <ul class='list-group mt-3'>
            <li class='list-group-item'>Company: ${user.company}</li>
            <li class='list-group-item'>Location: ${user.location}</li>
            <li class='list-group-item'>Blog/Website: <a href='${user.blog}'>${user.blog}</a></li>
            <li class='list-group-item'>User since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    `
  }
}