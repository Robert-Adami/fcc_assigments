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
  return arrObj.filter((elem, index) => arrObj.findIndex(item => item.trackId === elem.trackId) === index)
}

//console.log(dedupeTracks(scoreTracks(flattenPlaylists(playlists))))