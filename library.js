function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}
Library.prototype.insertPlaylist = function (newPlaylist) {
  this.playlists[newPlaylist.name] = newPlaylist;
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.insertTrack = function (title, rating, length) {
  let newTrack = {};
  newTrack[title] = {
    title,
    rating,
    length
  };
  this.tracks.push(newTrack[title]);
};

Playlist.prototype.overallRating = function () {
  let rating = [];
  this.tracks.map((curTrack, i) => {
    rating[i] = curTrack.rating;
  });
  return Math.floor(rating.reduce((a, b) => {
    return a + b;
  }) / this.tracks.length)
}

Playlist.prototype.totalDuration = function () {
  let duration = [];
  this.tracks.map((curTrack, i) => {
    duration[i] = curTrack.length;
  });
  return duration.reduce((a, b) => {
    return a + b;
  })
}
let musicLibrary = new Library("Yeezy", "Seanye West");
let hi = new Playlist("Bob");

hi.insertTrack("hello", 99, 5);
hi.insertTrack("bye", 9, 55);
hi.insertTrack("no", 19, 23);
musicLibrary.insertPlaylist(hi);

console.log(musicLibrary);
console.log(musicLibrary.playlists["Bob"].tracks);

hi.overallRating();
hi.totalDuration();
console.log(hi.overallRating());
console.log(hi.totalDuration());
