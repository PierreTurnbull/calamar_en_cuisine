# Calamar en cuisine

## Story

Onizuko is a restaurant owner. His business is going very bad and he struggles to survive. Maybe the right choices will help him become great..

## How to use this website

- Donwload the [``V1.1 release``](https://github.com/PierreTurnbull/calamar_en_cuisine/releases/tag/V1.1).
- From the root directory, launch a server on port 3000 (eg: ``php -S localhost:3000``).
- Visit ``http://localhost:3000``
- Enjoy :)

## Data structure

### How it works

1. Data is composed of one or several paths.
2. A path is composed of one or several pages.
3. A page is composed of its informations and informations concerning its neighbours
4. Page's neighbour informations correspond to the coordinates of the page it represents, and the style of the button representing the neighbour.

### Arborescence

- Data object
    - paths
        - pages
            - style
                - background image
                - background color
            - neighbours list
                - neighbour
                    - path index
                    - page index
                    - style
                        - _some style properties_
                    - image url

### Example sample

    {
        "path0": {
            "page0": {
                "style": {
                    "backgroundImage": "url(img/path0/path0page0.jpg)",
                    "backgroundColor": "#882625"
                },
                "neighbours": [
                    {
                        "pathIndex": 0,
                        "pageIndex": 1,
                        "style": {
                            "width": "218px",
                            "height": "276px",
                            "top": "80%",
                            "left": "0",
                            "right": "0"
                        },
                        "imgSrc": "img/next.png"
                    }
                ]
            },
            "page1": {
                "style": {
                    "backgroundImage": "url(img/path0/path0page1.gif)",
                    "backgroundColor": "#892726"
                },
                "neighbours": [
                    {
                        "pathIndex": 0,
                        "pageIndex": 0,
                        "style": {
                            "width": "218px",
                            "height": "276px",
                            "top": "0%",
                            "left": "0",
                            "right": "0"
                        },
                        "imgSrc": "img/prev.png"
                    }
                ]
            }
        }
    }
