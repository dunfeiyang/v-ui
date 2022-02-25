rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@github.com:dunfeiyang/v-ui-web.git &&
git push -f -u origin master &&
cd ..
echo https://dunfeiyang.github.io/v-ui-web/index.html