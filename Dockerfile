FROM node
WORKDIR /tmp
COPY /api/package.json /tmp
RUN npm install
COPY /api/. /tmp
CMD ["npm", "start"]