FROM nginx:1.28-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html privacy.html terms.html style.css site.js /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY levels /usr/share/nginx/html/levels
RUN chmod -R a+rX /usr/share/nginx/html
EXPOSE 8080
