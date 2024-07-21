# Cronología de La Marca del Este
[![pages-build-deployment](https://github.com/logoff/lmde-timeline/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/logoff/lmde-timeline/actions/workflows/pages/pages-build-deployment)
[![Publish page via GitHub Pages](https://github.com/logoff/lmde-timeline/actions/workflows/build.yml/badge.svg)](https://github.com/logoff/lmde-timeline/actions/workflows/build.yml)

https://logoff.github.io/lmde-timeline/

## Fichero de la cronología

https://docs.google.com/spreadsheets/d/1w5Q2N01Szz0vNKXoG2V4ORiXfsAvre6Vk_pckevYZLk


## Correr en local
```sh
docker container run --rm -it \
        -v $(pwd):/usr/src/app \
        -w /usr/src/app \
        -p 3000:3000 \
        node:lts-slim \
        npm start
```
