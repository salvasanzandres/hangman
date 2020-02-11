# Hangman

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.
<br>using angular 9.

## Running project

You can run the project locally via ng serve.
- ```ng serve```

You can also build project and then serve the built project via http server: apache or http-server tool...
- ```ng build --prod```  and then  ```http-serve dist/```


## Project Architecture

The project has been separated in features, in order to make it easier to scalate or lazyload on future.<br><br>
There are two routes: /home and /play. play can only be activated when user inputs name.<br><br>
There are two singletone services provided across project : 
- **AuthService**: Saves users name, used in url's canActivate in order to allow acces to game only to knonw users.  
- **GameService**: Game business implementation. 

## Game Rules

After choosing your user name you pick up letters in order to find out the hidden word. Player can get wrong eleven times maximum before being hanged. You can start game over and over by just clicking 'new game' link.
 <br><br>You have to submit your user name before playing.  

## Word Dictionary

In order to retrieve the words for the game a free API is being used:
https://api.datamuse.com/words


#### author
salvador sanz 
