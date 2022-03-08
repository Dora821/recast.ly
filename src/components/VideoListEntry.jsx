var VideoListEntry = (props) => {
  return (<div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      {/* add event listener for title */}
      <div className="video-list-entry-title" onClick={props.eventHandler}>{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>);
};

// class VideoListEntry extends React.Component {
//   constructor(props) {
//     super(props);
//     this.videoTitle = props.items.snippet.title;
//     this.videoDes = props.items.snippet.description;
//     this.targetURL = props.items.snippet.thumbnails.default.url;
//     this.state = {
//     };
//   }
//   OnListItemClick() {

//   }
//   render() {
//     return (
//       <div className="video-list-entry media">
//         <div className="media-left media-middle">
//           <img className="media-object" src={this.targetURL} alt="" />
//         </div>
//         <div className="media-body">
//           {/* add event listener for title */}
//           <div className="video-list-entry-title"><em>{this.videoTitle}</em></div>
//           <div className="video-list-entry-detail">{this.videoDes}</div>
//         </div>
//       </div>);
//   }
// }



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
