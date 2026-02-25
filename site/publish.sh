export FINAL_FOLDER="dist"

cd site

npm run build

git add --all
git commit -m "Build site and publish at $(date)"
git push origin master