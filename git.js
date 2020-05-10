class Git {
    constructor() {
        this.clientId = '15a9876291d874228eca';
        this.clientSecret = '79fc624499d280840c315ec2e15971b232fcbd77';
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