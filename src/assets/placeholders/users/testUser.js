const testUser = {
  firstName: "René", // Required, 50 char max, trim
  lastName: "Malleville",
  _id: "randomString", // Asigned at inscription by backend
  age: 12, // Required, do we ask the brithday to calculate actual age ?
  actualJob: "jardinier",
  actualStructure: "jardiland",
  phone: "",
  gender: "m",
  city: "Atlanta",
  country: "USA",
  email: "renelejardinier@gmail.com",
  description: "Je m'appelle René",
  profilePicture: "https://lesjours.fr/ressources/res1500/square/people/rene-malleville.jpeg",
  profileBanner: "https://www.1800flowers.com/blog/wp-content/uploads/2021/05/Birthday-Flowers-Colors.jpg",

  structures: "none",
  token: "",
  salt: "", // Check with bcrypt documentation
  hash: "", // Check with bcrypt documentation

  profileViews: 0, // Count how many times the user's profile has been clicked by other users

  posts: [
    {
      _id: "1",
      owner: "René",
      postedAt: "00/00/0000",
      content: "Post1",
      comments: [
        { _id: "7", author: "User1", content: "Post 1 : Comment placeholder1", date: "01/01/2001" },
        { _id: "8", author: "User2", content: "Post 1 : Comment placeholder2", date: "01/01/2001" },
        { _id: "9", author: "User3", content: "Post 1 : Comment placeholder3", date: "01/01/2001" },
      ],
      reactions: {
        like: 0,
        joy: 0,
        sad: 0,
        cheers: 0,
        thinking: 0,
      },
    },
    {
      _id: "2",
      owner: "René",
      postedAt: "00/00/0000",
      content: "Post2",
      comments: [
        { _id: "1", author: "User1", content: "Post 2 : Comment placeholder1", date: "01/01/2001" },
        { _id: "2", author: "User2", content: "Post 2 : Comment placeholder2", date: "01/01/2001" },
        { _id: "3", author: "User3", content: "Post 2 : Comment placeholder3", date: "01/01/2001" },
      ],
      reactions: {
        like: 0,
        joy: 0,
        sad: 0,
        cheers: 0,
        thinking: 0,
      },
    },
    {
      _id: "3",
      owner: "René",
      postedAt: "00/00/0000",
      content: "Post3",
      comments: [
        { _id: "4", author: "User1", content: "Post 3 : Comment placeholder1", date: "01/01/2001" },
        { _id: "5", author: "User2", content: "Post 3 : Comment placeholder2", date: "01/01/2001" },
        { _id: "6", author: "User3", content: "Post 3 : Comment placeholder3", date: "01/01/2001" },
      ],
      reactions: {
        like: 0,
        joy: 0,
        sad: 0,
        cheers: 0,
        thinking: 0,
      },
    },
  ], // ID OU REF     -- Posts made by the user
  contacts: [{}], // ID OU REF  -- People that are connected to the user
  followers: [{}], // ID OU REF -- People that are following the user
  following: [{}], // ID OU REF -- People followed by the user

  experiences: [
    {
      _id: "1",
      name: "Job1", // Required
      type: "CDD",
      structure: "Struct1", // Required
      city: "xpCity",
      fromDate: "12/12/2012", // Required
      toDate: "",
      description: "job desc 1",
    },
    {
      _id: "2",
      name: "Job2",
      type: "CDD",
      structure: "Struct2",
      city: "xpCity",
      fromDate: "12/09/2001",
      toDate: "09/10/2012",
      description: "job desc 2",
    },
    {
      _id: "3",
      name: "Job3",
      type: "CDD",
      structure: "Struct3",
      city: "xpCity",
      fromDate: "12/09/2001",
      toDate: "09/10/2012",
      description: "job desc 3",
    },
  ],

  formations: [
    {
      school: "School 1",
      degree: "",
      domain: "IT",
      results: "21/20",
      city: "formationCity",
      fromDate: "12/12/2012", // Required
      toDate: "",
      description: "Formation desc 1",
    },
    {
      school: "School 2",
      degree: "",
      domain: "IT",
      results: "21/20",
      city: "formationCity",
      fromDate: "01/02/1995",
      toDate: "12/12/2012",
      description: "Formation desc 2",
    },
  ],

  skills: ["", "", ""], // STRINGS FIRST, AUTOCOMPLETE WITH A SKILLS DB LATER

  projects: [
    // Projects made by the user, is displayed on the profile screen
    {
      _id: "1",
      name: "test project 1", // Required
      fromDate: "01/02/1990", // Required
      toDate: "01/02/1993", // Required
      projectURL: "test.com",
      description: "Test description project 1", // Required
    },
    {
      _id: "2",
      name: "test project 2", // Required
      fromDate: "01/02/1994", // Required
      toDate: "01/02/1995", // Required
      projectURL: "test2.com",
      description: "Test description project 2", // Required
    },
  ],

  notificationSettings: [
    { contactsNewPost: true }, // When a contact of mine post something
    { someoneFollowedMe: true }, // When someone following me
    { someoneFollowedMyStructure: true }, // When someone follow my structure
    { reactionToMyPost: true }, // When someone react to my post
  ],
};

export default testUser;
