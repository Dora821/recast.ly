import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {
    youtubeApiKey: YOUTUBE_API_KEY,
    q: query
  })
    .done((items) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });

  // $.ajax({
  //   url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
  //   type: 'GET',
  //   data: query,
  //   // dataType: 'jsonp',
  //   //contentType: 'application/json',
  //   success: function() {
  //     callback();
  //   },
  //   error: function() { console.log(''); } || function(error) {
  //     console.error('SearchYoutube: Failed to fetch message', error);
  //   }
  // });
};

export default searchYouTube;

