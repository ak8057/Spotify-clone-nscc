//   For the Navbar
const user = {
  username: "Abhay",
  pfp: "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg",
};

const artists = [
  {
    name: "Pritam",
    type: "Artist",
    image: "https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca",
    playButton: true,
  },
  
  {
    name: "A.R Rahman",
    type: "Artist",
    image: "https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c",
    playButton: false,
  },
  {
    name: "Anirudh...",
    type: "Artist",
    image: "https://i.scdn.co/image/ab67616100005174fc7c542c04b5f7dc8f1b1c16",
    playButton: false,
  },
  {
    name: "Sachin-Jigar",
    type: "Artist",
    image: "https://i.scdn.co/image/ab67616100005174a038d7d87f8577bbb9686bd3",
    playButton: false,
  },
  
  {
    name: "Atif Aslam",
    type: "Artist",
    image: "https://i.scdn.co/image/ab67616100005174c40600e02356cc86f0debe84",
    playButton: false,
  },
];



//   For the Sidebar
const playlists = [
  {
    title: "Hot Hits 2024",
    image: "https://i.scdn.co/image/ab67616d0000b273a9e7a62f38a0b7636e23b65d",
    link: "",
  },
  {
    title: "Viral Hits | TikTok 2024",
    image: "https://i.scdn.co/image/ab67706c0000bebbdf73e4fbb637abc6f7689a59",
    link: "",
  },
  {
    title: "AI Generated Vibes",
    image: "https://i.scdn.co/image/ab67706c0000bebbc023f1c86a78ab4e2fb0a6e4",
    link: "",
  },
  {
    title: "LoFi Beats for Work",
    image: "https://i.scdn.co/image/ab67616d0000b273e1c9eaf9b94e354a60354bdf",
    link: "",
  },
  {
    title: "K-Pop Hits | 2024",
    image: "https://i.scdn.co/image/ab67706f00000003c524b3bc689f4867ea77a510",
    link: "",
  },
  {
    title: "Chill Vibes",
    image: "https://i.scdn.co/image/ab67706c0000bebb72ed8aee19d0b0e5c8a02a9f",
    link: "",
  },
  {
    title: "Top Hits India 2024",
    image: "https://i.scdn.co/image/ab67706c0000bebbb15fd27d0bda9f936b73c143",
    link: "",
  },
  {
    title: "EDM Bangers 2024",
    image: "https://i.scdn.co/image/ab67706c0000bebbc6736d7d6cfeb1d0e4b40397",
    link: "",
  },
  {
    title: "Bollywood Retro Revival",
    image: "https://i.scdn.co/image/ab67616d0000b273cf2236fbd7fa8abf1e566437",
    link: "",
  },
  {
    title: "Classical Fusion",
    image: "https://i.scdn.co/image/ab67706c0000bebb95dfd8462f9f6f0629eebd98",
    link: "",
  },
];


//   For the Rectangular Cards - 6 only
const topLists = [
  {
    title: "Liked Songs",
    image:
      "https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg",
    link: "",
  },
  {
    title: "Pritam Mix",
    image: "https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj",
    link: "",
  },
  {
    title: "KK mix",
    image: "https://i.scdn.co/image/ab6761610000e5ebb09a31f853166e721d4d46b2",
    link: "",
  },
  {
    title: "Shaan at its best",
    image: "https://i.scdn.co/image/ab67616d00001e02a8d0b674cbb1198edcdfc487",
    link: "",
  },
  {
    title: "Top 50 Bollywood Love",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84ec782462ad3e757fce6a1c11",
    link: "",
  },
  {
    title: "Hits 2024",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8425b9d66462b890805706db99",
    link: "",
  },
];

// For different sections with Cards
const sections = [
  {
    category: "Best of Artists",
    playlists: [
      {
        title: "This is Selena Gomez",
        subtitle:
          "Listen to Selena's latest releases, plus all her essential hits.",
        image:
          "https://i.scdn.co/image/ab67706f000000037cda1a881997b0bb1ca0eb92",
        artist: false,
      },
      {
        title: "This is KK",
        subtitle:
          "You'll Never Be The Same after listening to all his biggest hits.",
        image:
          "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2uagOI-default.jpg",
        artist: false,
      },
      {
        title: "This is Arijit Singh",
        subtitle: "The Bollywood crooner's best songs.",
        image:
          "https://i.scdn.co/image/ab67706f000000033ec51dd9c17a9add42c2e249",
        artist: false,
      },
      {
        title: "This is B Praak",
        subtitle:
          "This is B Praak. The essential tracks, all in one playlist.",
        image: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO30bXT4-default.jpg",
        artist: false,
      },
      {
        title: "This is Shreya Ghoshal",
        subtitle:
          "This is Shreya Ghoshal. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0arULD-large.jpg",
        artist: false,
      },
      {
        title: "This is Sunidhi Chauhan",
        subtitle:
          "This is Sunidhi Chauhan. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1SfCKv-large.jpg",
        artist: false,
      },
      {
        title: "This is A. R. Rahman",
        subtitle:
          "This is A.R. Rahman. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0KEAbC-large.jpg",
        artist: false,
      },
      {
        title: "This is Halsey",
        subtitle: "The essential Halsey, all in one place.",
        image:
          "https://i.scdn.co/image/ab67706f00000003a39589c9b0a3606aa6bac46b",
        artist: false,
      },
      {
        title: "This is Coldplay",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f00000003a231f671c289555cfd09f716",
        artist: false,
      },
    ],
  },
  {
    category: "Your Top Mixes",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Top-Trending Ghazals",
        subtitle: "By Spotify",
        image:
          "https://c.saavncdn.com/391/Top-Trending-Ghazals-Hindi-2020-20200129085248-500x500.jpg",
        artist: false,
      },
      {
        title: "Let's Play KK",
        subtitle: "Artist",
        image:
          "https://c.saavncdn.com/editorial/Let_sPlayKKHindi_20240530172021.jpg",
        artist: true,
      },
      {
        title: "Now Trending",
        subtitle: "Brahmastra",
        image:
          "https://c.saavncdn.com/editorial/NowTrending_20220914084524.jpg",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "Made for You",
    playlists: [
      {
        title: "Discover Weekly",
        subtitle:
          "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.",
        image:
          "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/1hOQbRi213JeaYwxaa4gdmrx7g2k9-eUbA8EtGNNKyW09kMy20Q23LWwjGBBP2xvcCMtFglKraGrB7foVW0-DKBNBzZGVo4irckiud6AwEk=/NzU6ODA6OTBUNTItNzAtMg==",
        artist: false,
      },
      {
        title: "Daily Mix 1",
        subtitle: "Pritam, Rahul Sharma, Jatin-Lalit and more",
        image:
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebcb6926f44f620555ba444fca/1/en/large",
        artist: false,
      },
      {
        title: "Daily Mix 2",
        subtitle: "BTS, AgustD, j-hope and more",
        image:
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb5704a64f34fe29ff73ab56bb/2/en/large",
        artist: false,
      },
      {
        title: "Daily Mix 3",
        subtitle: "Eminem, Mac Miller, Logic and more",
        image:
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/3/en/large",
        artist: false,
      },
      {
        title: "Daily Mix 4",
        subtitle: "Bob Marley & The Wailers, Aswad, Black Roots and more",
        image:
          "https://dailymix-images.scdn.co/v2/img/4cd57e5e12ea2c24644c40886d65a9b22eca9802/4/en/large",
        artist: false,
      },
      {
        title: "Daily Mix 5",
        subtitle: "Disturbed, Breaking Benjamin, Three Days Grace and more",
        image:
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb012addc95f5b2e7283f45446/5/en/large",
        artist: false,
      },
    ],
  },
  {
    category: "Recently Played",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Top-Trending Ghazals",
        subtitle: "By Spotify",
        image:
          "https://c.saavncdn.com/391/Top-Trending-Ghazals-Hindi-2020-20200129085248-500x500.jpg",
        artist: false,
      },
      {
        title: "Let's Play KK",
        subtitle: "Artist",
        image:
          "https://c.saavncdn.com/editorial/Let_sPlayKKHindi_20240530172021.jpg",
        artist: true,
      },
      {
        title: "Now Trending",
        subtitle: "Brahmastra",
        image:
          "https://c.saavncdn.com/editorial/NowTrending_20220914084524.jpg",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },

  {
    category: "Spotify original & exclusive shows",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Top-Trending Ghazals",
        subtitle: "By Spotify",
        image:
          "https://c.saavncdn.com/391/Top-Trending-Ghazals-Hindi-2020-20200129085248-500x500.jpg",
        artist: false,
      },
      {
        title: "Let's Play KK",
        subtitle: "Artist",
        image:
          "https://c.saavncdn.com/editorial/Let_sPlayKKHindi_20240530172021.jpg",
        artist: true,
      },
      {
        title: "Now Trending",
        subtitle: "Brahmastra",
        image:
          "https://c.saavncdn.com/editorial/NowTrending_20220914084524.jpg",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "Based on your recent listening",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Top-Trending Ghazals",
        subtitle: "By Spotify",
        image:
          "https://c.saavncdn.com/391/Top-Trending-Ghazals-Hindi-2020-20200129085248-500x500.jpg",
        artist: false,
      },
      {
        title: "Let's Play KK",
        subtitle: "Artist",
        image:
          "https://c.saavncdn.com/editorial/Let_sPlayKKHindi_20240530172021.jpg",
        artist: true,
      },
      {
        title: "Now Trending",
        subtitle: "Brahmastra",
        image:
          "https://c.saavncdn.com/editorial/NowTrending_20220914084524.jpg",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "India's Best",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Top-Trending Ghazals",
        subtitle: "By Spotify",
        image:
          "https://c.saavncdn.com/391/Top-Trending-Ghazals-Hindi-2020-20200129085248-500x500.jpg",
        artist: false,
      },
      {
        title: "Let's Play KK",
        subtitle: "Artist",
        image:
          "https://c.saavncdn.com/editorial/Let_sPlayKKHindi_20240530172021.jpg",
        artist: true,
      },
      {
        title: "Now Trending",
        subtitle: "Brahmastra",
        image:
          "https://c.saavncdn.com/editorial/NowTrending_20220914084524.jpg",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "Throwback",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Top-Trending Ghazals",
        subtitle: "By Spotify",
        image:
          "https://c.saavncdn.com/391/Top-Trending-Ghazals-Hindi-2020-20200129085248-500x500.jpg",
        artist: false,
      },
      {
        title: "Let's Play KK",
        subtitle: "Artist",
        image:
          "https://c.saavncdn.com/editorial/Let_sPlayKKHindi_20240530172021.jpg",
        artist: true,
      },
      {
        title: "Now Trending",
        subtitle: "Brahmastra",
        image:
          "https://c.saavncdn.com/editorial/NowTrending_20220914084524.jpg",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
];

export { user, playlists, topLists, sections, artists };
