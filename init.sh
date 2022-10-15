#!/bin/bash

read -p 'Repo Name: ' projectName
read -p 'Repo Link: ' repoLink

sed -i "s/web-skeleton/$projectName" ./package.json
rm -rf .git
git init .
git remote add origin $repoLink
git add .
git commit -m 'init'
git branch -M main
git push -u origin main
rm -- "$0"