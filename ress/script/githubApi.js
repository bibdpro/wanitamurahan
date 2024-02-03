// githubApi.js

class GitHubAPI {
  constructor(username, repository) {
    this.username = username;
    this.repository = repository;
    this.baseUrl = 'https://api.github.com/repos/';
    this.apiUrl = '';
  }

  setFile(file) {
    this.apiUrl = `${this.baseUrl}${this.username}/${this.repository}/contents/${file}`;
  }

  fetchData(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.apiUrl, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          const filteredData = data.filter(item => {
            const fileName = item.name.toLowerCase();
            return fileName.endsWith('.mp4') || fileName.endsWith('.jpg');
          });
          callback(filteredData);
        } else {
          console.error('Request failed with status:', xhr.status);
        }
      }
    };
    xhr.send();
  }
}

export default GitHubAPI;