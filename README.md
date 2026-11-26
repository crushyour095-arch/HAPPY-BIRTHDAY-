# Birthday Website

A simple, mobile-friendly birthday surprise website. Your two photos are already placed in `images/`.

## Preview locally
Open `index.html` in a browser.

## Publish free with GitHub Pages
1. Sign in to GitHub and create a new **public** repository.
2. Upload everything inside this `Birthday-Website` folder (not just the ZIP).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose **main** and **/(root)**, then Save.
6. Wait a minute or two. GitHub will show your website link in the Pages section.

## Add your song later
1. Put your audio file in this folder, for example `birthday-song.mp3`.
2. Open `index.html` and add this just before `</body>`:
   `<audio controls loop src="birthday-song.mp3"></audio>`
3. Commit the changed file to GitHub.

## Personalize the page
- Edit the birthday wording in `index.html`.
- Replace `images/photo-1.jpg` or `images/photo-2.jpg` with other photos using the same filenames.
- Change the page title in the `<title>` element.
- The website currently uses a generic greeting so you can customize the recipient's name and birthday message.
