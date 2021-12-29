# InformedXYZ

Application to learn new topics. When given a topic, it will search and find youtube videos, posts on twitter, articles on that topic using different APIs.

## Client
Client side of the application written in typescript. 

### Technologies used
- Angular (with PrimeNg)
- Bootstrap

### Get started
- Go to the client folder
- Make sure the angular cli is installed and all dependencies are installed (install from package.json)
- Run ```ng serve```

## Server
Server side of the application written in python. 

### Technologies used
- Flask
- API (Youtube)
</br></br>

### Get started
- Get a youtube API key (https://developers.google.com/youtube/v3/quickstart/python)
- Clone the project
- Create a folder at the root called 'secret'
- Create a file named youtube.api that contains the API key
- Install dependencies using ```pip install -r requirements.txt```
- Run ```export FLASK_APP=main``` then ```flask run``` in the terminal

