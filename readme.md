<h1 align="center">Viewfinder - Back End
<br><br>
<img src="https://view-finder.netlify.app/static/media/Flixy.e9062796c0560f6d8471d05f97eb9f95.svg" alt="viewfinder logo" title="viewfinder logo" width="400">
<br>
</h1>

#### The problem:

Usually when you want to find a film to stream online, you need to search through all the different streaming services or google.

Both of these can be quite awkward.

If a film or TV show isn’t available anywhere, you would then need to repeat that same search at an arbitrary later date.

#### The Solution:

Viewfinder allows you to create a ‘watch list’ of films/TV shows which will show you where those are available to stream. The app also displays where the film / TV is available.

## Project Screen Shots

<img src="https://cdn.discordapp.com/attachments/928984546215612485/958733758499008572/unknown.png" alt="Screen shot login" title="Screen shot login" width="400">

<img src="https://cdn.discordapp.com/attachments/928984546215612485/958759012533432341/unknown.png" alt="Screen shot 2" title="Screen shot s" width="400">

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

### Environment Variables

- MONGO_URI = Insert the URI (Uniform Resource Identifier) of the database location.
- SECRET = (security phrase here)

### Installation:

### `npm install`

installs the relevant packages to run the app

### `npm start`

Runs the front end in the development mode.\
Opens [http://localhost:3000](http://localhost:3000) in your browser (click link if it doesn't).

The page will reload when you make changes.\
You may also see any lint errors in the console.

To Start Server:

### `npm run dev`

starts the back end of the app.

To Visit App:

### `localhost:3000/`

## Packages

The packages that are used in this app are:

- bcryptjs: ^2.4.3,
- cors: ^2.8.5,
- dotenv: ^16.0.0,
- express: ^4.17.3,
- jsonwebtoken: ^8.5.1,
- mongoose: ^6.2.7

## Credits

A project by:

- <a href="https://github.com/chromey85">Yusuf Ayyub</a>
- <a href="https://github.com/joelc95">Joel Conalty</a>
- <a href="https://github.com/thankinson">Tom Hankinson</a>
- <a href="https://github.com/Cha-M">Sha Megroff</a>
- <a href="https://github.com/GlennPS">Glenn Sculthorp</a>
- <a href="https://github.com/web-lynx">Alexander R. Wayland</a>

Also thank you to [https://www.themoviedb.org/](https://www.themoviedb.org/) for allowing us to use the API.
