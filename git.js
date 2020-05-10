class Git {
    constructor() {
        this.clientId = 'YOUR_CLIENT_ID';
        this.clientSecret = 'YOUR_CLIENT_SECRET';
        this.repoCount = 5;
        this.reposSort = 'created: asc';
    }

    async getUser(user) {

        const profileRes =  await fetch(`https://api.github.com/users/${user}
                                ?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const repoRes =  await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repoCount}&sort=${this.reposSort}
                                &client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profileData = await profileRes.json();
        const repoData = await repoRes.json();

        return {
            profileData,
            repoData
        }
        
    }

}