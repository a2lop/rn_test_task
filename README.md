
# React native app submission

This a react native application to be used as submission for a react native position



## Features

The application works with [Marvel public api](https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0) to fetch some basic info. What is done is:

- A home page which paginate showing the Marvel characters
- A search engine to type any character name and displays the matched characters
- A character detail page, to show basic info and in which comics, events, series and stories the character appears

Technicaly, what was implemented is:

- Splash screen (iOS is having an issue that is showing a black screen)
- Icons for Android/iOS
- React navigation
- Axios to fetch the data
- Third party endpoints fetched
- Git usage
- React native good practices and standards
- Reusable code/components

Ideas to do:

- Connect with a firebase real time database through backend endpoints, to track some stats like how many times a character detail is fetched. At the same time a React front end will be needed to show this stats
- Add unit/e2e tests
- lint validation
- Use env variables to store private key
- Fix iOS splash screen



## Demo

![Untitled](https://user-images.githubusercontent.com/3137391/163751872-0c0cdaac-35c1-40c6-adae-4d4815203593.gif)


## Installation

Once the repository was cloned, go into the project root folder and run

```bash
  yarn
```
And then to install iOS pods:

```bash
  npx pod-install ios
```
To run in iOS simulator:
```bash
npx react-native run-ios
```
And to run in an Android simulator, open de Androd virtual device, and the run:
```
npx react-native run-android
```
## Troubleshooting
iOS:
- If `npx react-native run-ios` doesn't work, try opening the iOS project in xcode, go to `Product` menú, and then `Clean build folder`, after this in `Product` menu click on `Build` and finally try run the `npx react-native run-ios` command again
- If that not works, try run the project from xCode
Android:
- If the project fails to run, into the `android` folder, create a file name `local.properties` and add the next line:
```bash
sdk.dir=[path to android SDK]
```
- it should be something like:
```bash
sdk.dir=/Users/myuser/Library/Android/sdk
```

