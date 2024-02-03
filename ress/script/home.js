// Home.js
import GitHubAPI from './githubApi.js';

class Home {
  constructor(username, repository) {
    this.gitHub = new GitHubAPI(username, repository);
    this.gitHub.setFile('media/video');
  }

  displayVideos() {
    this.gitHub.fetchData(data => {
      const shuffledVideos = shuffleArray(data).slice(0, 14);
      var items = document.querySelectorAll(".mediax-item");
      items.forEach(function(item, index) {
        const video = shuffledVideos[index];
        if (video) {
          fillItemWithData(item, video);
        }
      });
    });
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function fillItemWithData(item, video) {
  var img = item.querySelector(".imgx");
  var imgContent = item.querySelector(".imgx-content");
  var h3 = item.querySelector("h3");
  var link = item.querySelector("a");
  var playIcon = item.querySelector(".ri-play-circle-line");

  img.src = `./media/image/${video.name.includes(".mp4") ? video.name.replace(/\.mp4/g, '.jpg') : video.name}`;
  img.alt = formatText(video.name);
  h3.textContent = formatText(video.name);
  link.href = `#stream?vid=${video.name.replace(/\.mp4/g, '')}`;
}

function formatText(inputText) {
  let formattedText = inputText.replace(/\.mp4/g, ''); // Hilangkan .mp4 terlebih dahulu
  formattedText = capitalizeFirstLetter(formattedText);
  formattedText = replaceHyphensAndUnderscores(formattedText);
  return formattedText;
}

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function replaceHyphensAndUnderscores(text) {
  return text.replace(/[-_]/g, ' ');
}

const home = new Home('wanitamurahan', 'wanitamurahan.github.io');
home.displayVideos();

export default Home;