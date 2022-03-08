import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

console.log(YOUTUBE_API_KEY);

var searchYouTube = (query, callback, errorCB = null) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: 'cat',
    //contentType: 'application/json',
    dataType: 'json',
    success: console.log(''),
    error: console.log('') || function(error) {
      console.error('chatterbox: Failed to fetch message', error);
    }
  });
};

export default searchYouTube;

