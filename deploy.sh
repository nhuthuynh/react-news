echo 'Building application...'
yarn run build

echo 'Copying index.html as 404.html'
cp public/index.html public/404.html

echo 'Deploying...'
node_modules/.bin/surge --project ./public --domain SURGE_DOMAIN --token SURGE_TOKEN

echo 'Deployed 🚀'
