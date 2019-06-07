#!/usr/bin/env node

require("@babel/register");
const Feed = require("../lib/feed.js");

let feed = new Feed();
feed.writeFeedJson(process.argv[2]);
