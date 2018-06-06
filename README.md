# Calamar en cuisine

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
