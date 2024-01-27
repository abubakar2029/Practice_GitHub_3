const contentful = require("contentful");

export const client = contentful.createClient({
  space: "95cvdteiepjn",
  environment: "master", // defaults to 'master' if not set
  accessToken: "nCCTGk_hRKB3-xW1UVidZ5SHf99syAyuBP8zWC4Cda4",
});

// client
//   .getEntry("nLJVU4oKNwmo4Q1hZoA4v")
//   .then((entry: any) => console.log(entry))
//   .catch(console.error);
