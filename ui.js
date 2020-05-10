class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
        this.container = document.querySelector('.searchContainer');

    }
      showProfile(user) {

        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_black" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followres: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${new Date(user.created_at).toDateString()}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
        
        }

        showRepos(repos) {
            let output = '';

            repos.forEach(repo => {
                output += `
                    <div class="card card-body mb-2">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="${repo.html_url}" target="_black">${repo.name}</a>
                            </div>
                            <div class="col-md-6">
                                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                                <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                            </div>
                        </div>
                    </diV>
                `;
            });

            document.querySelector('#repos').innerHTML = output;

        }



        showAlert(msg, className) {
            this.clearAlert();

            const div = document.createElement('div');
            div.className = className;
            div.append(document.createTextNode(msg));
            this.container.insertAdjacentElement('afterbegin', div);

            setTimeout(() => {
                this.clearAlert();
            }, 2000);

        }

        clearAlert() {
            const currentAlert = document.querySelector('.alert');
            if(currentAlert) {
                currentAlert.remove();
            }
        }

        clearProfile() {
            this.profile.innerHTML = "";
        }

}