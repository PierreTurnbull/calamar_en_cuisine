how is data structured:
- several objects representing each a path
- each path contains objects representing each a page.
- each page contains the following data:
    - img URL
    - list of page relations:
        - for each page that can be reached from the current one:
            - index of it
            - index of its path

data fetched:
- page list:
    - imgUrl
    - infos concerning surrounding pages

what to load:
- all pages are loaded via AJAX on mount

how to load:
- the infos concerning the page list to load are:
    - retrieved from the server with an AJAX call
    - stored in PageSystem state's 'pageList'
- these infos are retrieved from the server in the following case:
    - the app starts and loads every page
- they are stored in the following case:
    - the app retrieves all the data from the server in order to load every page
- a loaded page gets the following props:
    - img URL
    - index of path
    - index of page in path
    - list of neighbours, containing for each item:
        - index of neighbour's path
        - index of neighbour's page

how to change page:
- hide the currently displayed page
- display the new page
- update PageSystem's state to reflect these changes
    - modify currentPage

how to show/hide a page:
- data corresponding to the classes of a page is modified in PageSystem's state

how to start the app:
- fetch all data
- load all pages
- display the first page

// pageList in PageSystem's state contains:
// - the list of all pages (array)
//     - page (object)
