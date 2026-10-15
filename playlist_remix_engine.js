const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(arr) {
  if(Array.isArray(arr)) {
    //prvý map nám vráti playlist teda [playlist1, 2 etc] a druhý map konkrétne skladby v playlistoch
   const arrModified = arr.map((playlist, pIndex) => playlist.map((currSong, sIndex) => ({
    ...currSong,
    source: [pIndex, sIndex]
   }))).flat()

    return arrModified
  } else {
    return [];
  }
}
//console.log(flattenPlaylists(playlists));


function scoreTracks(arrOfObjects) {
  const newArr = arrOfObjects.map(elem => ({
    ...elem,
    score: elem.votes * 10 - Math.abs(elem.bpm - 120),
  }))

  return newArr;
}

//console.log(scoreTracks(flattenPlaylists(playlists)));
/*
filter ide po poli a dá ti elem a jeho index.
findIndex prejde pole od začiatku a zastaví sa na prvom item, ktorého trackId sa rovná elem.trackId. Vráti jeho index.
Ak je ten index rovnaký ako index z filtra, je to prvý výskyt → nechaj. Ak nie, je to kópia → vyhoď.
 */
function dedupeTracks(arrObj) {
  return arrObj.filter((elem, index) => arrObj.findIndex(item => item.trackId === elem.trackId) === index);
}

//console.log(dedupeTracks(scoreTracks(flattenPlaylists(playlists))))
function enforceArtistQuota(arrObj, maxArtists) {
  const result = [];
  const count = {

  };

  for(let i = 0; i < arrObj.length; i++) {
    const pocet = count[arrObj[i].artist] || 0; // počet umelcov alebo 0
    if(pocet < maxArtists) {
      result.push(arrObj[i]);
      count[arrObj[i].artist] = pocet + 1; //pridá konkrétnemu umelcovi + 1 koľkokrát sa objavil v playliste
    }
  }
  return result
}

//console.log(enforceArtistQuota(dedupeTracks(scoreTracks(flattenPlaylists(playlists))), 1))

function buildSchedule(arrObj) {
  const result = [];

  for(let i = 0; i < arrObj.length; i++) {
    result.push({slot: i + 1, trackId: arrObj[i].trackId});
  }
  return result
}

//console.log(buildSchedule(enforceArtistQuota(dedupeTracks(scoreTracks(flattenPlaylists(playlists))), 1)))

function remixPlaylist(arrObj, maxArtists){
  return buildSchedule(enforceArtistQuota(dedupeTracks(scoreTracks(flattenPlaylists(arrObj))), maxArtists))
}

console.log(remixPlaylist(playlists, 1))