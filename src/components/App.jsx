import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import searchYouTube from '../lib/searchYouTube.js';


class App extends React.Component {
  constructor(props) {
    console.log(props.liveData);
    super(props);
    this.state = {allVideos: exampleVideoData, currentVideo: exampleVideoData[0], searchKey: ''};
  }
  submitClick() {
    var newKey = document.querySelector('.form-control').value;
    this.setState({allVideos: exampleVideoData, currentVideo: exampleVideoData[0], searchKey: newKey});
    console.log('search clicked');
  }

  SelectVideo(event) {
    var passToVideoTitle = event.target.textContent;
    // console.log('event.target.textcontent' + event.target.textContent);
    var selectVideo = this.findViedoWithTitle(passToVideoTitle);
    this.setState({allVideos: exampleVideoData, currentVideo: selectVideo});
    // var passToVideo = {}
    // passToVideo.id = document.eventtarget.videoID.value;
    // passToVideo.title = document.eventtarget.videoID.value;
    // return passToVideo

    // console.log('selectVideo' + selectVideo);
  }
  findViedoWithTitle(title) {
    // console.log('inputtitle :' + title);
    for (var each of exampleVideoData) {
      // console.log('each title :' + each.snippet.title);
      if (each.snippet.title === title) {
        // console.log('each : ', each);
        return each;
      }
    }
    // console.log('did not find Video');
  }
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
            <VideoList videos = {exampleVideoData} eventHandler = {this.SelectVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// }= () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer currentVideo={exampleVideoData} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videoArray = {exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );
console.log(exampleVideoData);
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
