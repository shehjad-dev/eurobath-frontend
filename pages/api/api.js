const sanityClient = require("@sanity/client");
const client = sanityClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATA_SET,
    apiVersion: process.env.API_VERSION, // use current UTC date - see "specifying API version"!
    /* token: "skFqdfoQprme7pMMehmFquJFNQEiOaPfycNBVcutXUa75dJr7FjY9yuZAs4MMZobcC3fCPa42XB2QNhxu6rURXueTLESZly3XrxIET04X44bf5ctAZpwtw61oC6pLqmWaEwcVjSr8aeAhx60EF6AsGvbWt26HUTTowzbi0qLyaDTc1aq0Ju7", */ // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
