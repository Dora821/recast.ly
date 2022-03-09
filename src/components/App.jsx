import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import searchYouTube from '../lib/searchYouTube.js';


class App extends React.Component {
  constructor(props) {
    // console.log(props.liveData);
    super(props);
    this.state = {allVideos: [], currentVideo: exampleVideoData[0], searchKey: ''};
    setInterval(this.renderVideo('beef'), 500);
  }

  // set up a render function to fetch data from API
  renderVideo(keyTitle) {
    var callBack = (data) => {
      this.setState({allVideos: data, currentVideo: exampleVideoData[0], searchKey: ''});
    };
    searchYouTube(keyTitle, callBack);
  }

  // Cerate a handleclicker to render video based on the input from search bar
  submitClick() {
    var newKey = document.querySelector('.form-control').value;
    this.renderVideo(newKey);
  }

  // change this.state and pass the selectedvideo title to videoplayer when listEntry title is selected
  SelectVideo(event) {
    var passToVideoTitle = event.target.textContent;
    // console.log('event.target.textcontent' + event.target.textContent);
    var selectVideo = this.findViedoWithTitle(passToVideoTitle);
    // console.log('selectVideo' + selectVideo);
    this.setState({currentVideo: selectVideo});
    // console.log('selectVideo' + selectVideo);
  }

  // helper function, when click the tile on video entry and get the title name, we locate the specific video object and return the object
  findViedoWithTitle(title) {
    // console.log('inputtitle :' + title);
    for (var each of this.state.allVideos) {
      // console.log('each title :' + each);
      if (each.snippet.title === title) {
        // console.log('each : ', each);
        return each;
      }
    }
    // console.log('did not find Video');
  }

  // render function to render the whole combinated element to the DOM
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchKey={this.submitClick.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.allVideos} eventHandler = {this.SelectVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
