const git = new Git();
const ui = new UI();

const userInput = document.querySelector('#searchUser');

userInput.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== '') {

        git.getUser(userText)

            .then(data => {

            if(data.profileData.message === 'Not Found') {

                ui.showAlert('User Not Found', 'alert alert-danger')

            } else {

                ui.showProfile(data.profileData);
                ui.showRepos(data.repoData);
            }
        })
    } else {
        ui.clearProfile();
    }

})
