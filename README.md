# Frontend (client) of the RouseLab website
Self-motivated project - Written in JavaScript using React with AntDesign CSS; infrasturture is set up mostly following this youtube tutorial https://youtu.be/98BzS5Oz5E4; 

Current frontend deploy (with Netlify): https://idyllic-belekoy-f5ddfa.netlify.app/

## Updates
**v3.3 update 24/10/2022 - Added a new breakpoint for Mac resolution in PeoplePage; Added alumni in PeoplePage**

**v3.2 update 16/10/2022 - Adopted the banner & logo design in mobile version**

**v3.1 update 13/10/2022 - Added a new banner (pc version only atm), new logo design**

**v3 update 06/10/2022 - introduced a responsive breakpoints system (greater mobile compatibility), improved infrastructure**

**v2.2 update 01/10/2022 - added a new Gallery page, minor bug fixes**

**v2.1 update 08/09/2022 - added a new Projects page**

**v2 update 07/09/2022 - updated new navigation bar design and mobile compatibility**

##
Backend (server) is deployed using Heroku <br />
Database used: MongoDB

Reported issue: Slow loading in the People Pages - this is caused by the Heroku server falling asleep when there's no traffic for 30 mins. We will upgrade the Heroku plan later to resolve this issue.  (Solved)
