export FINAL_FOLDER="dist"

cd site

npm run clean
npm run build

# git add --all
git add dist
git commit -m "Build site and publish at $(date)"
git push origin main