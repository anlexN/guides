html-minifier --collapse-boolean-attributes --collapse-inline-tag-whitespace --collapse-whitespace --minify-css {level:2} --minify-js true --remove-comments

cleancss --debug -O2 --format beautify -o public/stylesheets/homepage.css public/stylesheets/index.css public/stylesheets/homepage/index.css public\stylesheets\drawer\index.css public/stylesheets/description/index.css
cleancss --debug --level 2 -o public/stylesheets/homepage.min.css public/stylesheets/homepage.css

cleancss --debug -O2 --format beautify -o public/stylesheets/convention.css public/stylesheets/index.css public/stylesheets/convention/index.css public\stylesheets\lefter\index.css public/stylesheets/description/index.css
cleancss --debug --level 2 -o public/stylesheets/convention.min.css public/stylesheets/convention.css

cleancss --debug --level 2 --format beautify -o public/stylesheets/donate.css public/stylesheets/index.css public/stylesheets/donate/index.css public\stylesheets\lefter\index.css
cleancss --debug --level 2 -o public/stylesheets/donate.min.css public/stylesheets/index.css public/stylesheets/donate/index.css public\stylesheets\lefter\index.css

rollup -c

uglifyjs --compress --mangle --beautify --verbose public/javascripts/homepage.js
uglifyjs --compress --mangle --verbose -o public/javascripts/homepage.min.js public/javascripts/homepage.js
uglifyjs --compress --mangle --beautify --verbose public/javascripts/convention.js
uglifyjs --compress --mangle --verbose -o public/javascripts/convention.min.js public/javascripts/convention.js



pug -O "{basedir: '.', development: true}" -P ./
pug -O "{basedir: '.', development: true}" ./
pug -O "{basedir: '.', development: false}" -P ./
pug -O "{basedir: '.', development: false}" ./