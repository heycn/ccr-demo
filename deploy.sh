rm -rf build &&
yarn build &&
cd build &&
git init &&
git add -A &&
git commit -m 'deploy' &&
git remote add origin git@github.com:heycn/ccr-demo-website.git &&
git branch -M master &&
git push -f origin master &&
cd - &&
echo '部署成功'
