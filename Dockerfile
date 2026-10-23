FROM nginx:alpine
COPY security.conf /etc/nginx/security.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY robots.txt index.html impressum.html datenschutz.html style.css app.js favicon.svg latest.json altstore.json /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
