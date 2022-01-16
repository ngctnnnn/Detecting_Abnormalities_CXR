#!/bin/sh
git init 
heroku git:remote -a cxr-abnormalities
heroku buildpacks:clear
heroku buildpacks:set heroku/nodejs
heroku ps:scale web=1 --app cxr-abnormalities 
git add .
git branch -m main
git commit -am "deploy"
git push heroku main