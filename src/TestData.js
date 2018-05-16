/*
data structure:

const data = {
    pathIndex: {
        pageIndex: {
            imgUlr: string,
            neighbours: [
                {
                    pathIndex: int
                    pageIndex: int
                }
            ]
        }
    }
}

const data = {
    path,
    path,
    path
}
path = {
    page,
    page,
    page
}
page = {
    imgUrl,
    neighbours
}
neighbours = {
    path,
    page,
    style,
    textContent
}
*/

const data = {
    path0: {
        page0: {
            imgUrl: "img/test1.jpg",
            neighbours: [
                {
                    pathIndex: 0,
                    pageIndex: 1,
                    style: {
                        top: "10%",
                        left: "10%"
                    },
                    textContent: "page1path0"
                },
                {
                    pathIndex: 1,
                    pageIndex: 0,
                    style: {
                        bottom: "25%",
                        right: "15%"
                    },
                    textContent: "page0path1"
                }
            ]
        },
        page1: {
            imgUrl: "img/test2.jpg",
            neighbours: [
                {
                    pathIndex: 0,
                    pageIndex: 0,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    textContent: "page0path0"
                },
                {
                    pathIndex: 0,
                    pageIndex: 2,
                    style: {
                        top: "20%",
                        left: "50%"
                    },
                    textContent: "page2path0"
                }
            ]
        },
        page2: {
            imgUrl: "img/test3.jpg",
            neighbours: [
                {
                    pathIndex: 0,
                    pageIndex: 1,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    textContent: "page1path0"
                },
                {
                    pathIndex: 0,
                    pageIndex: 3,
                    style: {
                        top: "50%",
                        left: "20%"
                    },
                    textContent: "page3path0"
                }
            ]
        },
        page3: {
            imgUrl: "img/test4.jpg",
            neighbours: [
                {
                    pathIndex: 0,
                    pageIndex: 2,
                    style: {
                        top: "30%",
                        left: "30%"
                    },
                    textContent: "page2path0"
                },
                {
                    pathIndex: 0,
                    pageIndex: 4,
                    style: {
                        top: "50%",
                        left: "50%"
                    },
                    textContent: "page4path0"
                }
            ]
        },
        page4: {
            imgUrl: "img/test5.jpg",
            neighbours: [
                {
                    pathIndex: 0,
                    pageIndex: 3,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    textContent: "page3path0"
                }
            ]
        }
    },
    path1: {
        page0: {
            imgUrl: "img/test6.jpg",
            neighbours: [
                {
                    pathIndex: 1,
                    pageIndex: 1,
                    style: {
                        top: "0%",
                        left: "0%"
                    },
                    textContent: "page1path1"
                }
            ]
        },
        page1: {
            imgUrl: "img/test7.jpg",
            neighbours: [
                {
                    pathIndex: 1,
                    pageIndex: 0,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    textContent: "page0path1"
                },
                {
                    pathIndex: 1,
                    pageIndex: 2,
                    style: {
                        top: "70%",
                        left: "60%"
                    },
                    textContent: "page2path1"
                }
            ]
        },
        page2: {
            imgUrl: "img/test8.jpg",
            neighbours: [
                {
                    pathIndex: 1,
                    pageIndex: 1,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    textContent: "page1path1"
                }
            ]
        }
    },
    path2: {
        page0: {
            imgUrl: "img/test9.jpg",
            neighbours: [
                {
                    pathIndex: 2,
                    pageIndex: 1,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    textContent: "page1path2"
                }
            ]
        },
        page1: {
            imgUrl: "img/test10.jpg",
            neighbours: [
                {
                    pathIndex: 1,
                    pageIndex: 0,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    textContent: "page0path1"
                },
                {
                    pathIndex: 1,
                    pageIndex: 2,
                    style: {
                        top: "35%",
                        left: "35%"
                    },
                    textContent: "page2path1"
                }
            ]
        },
        page2: {
            imgUrl: "img/test11.jpg",
            neighbours: [
                {
                    pathIndex: 2,
                    pageIndex: 1,
                    style: {
                        top: "0%",
                        left: "20%"
                    },
                    textContent: "page1path2"
                }
            ]
        }
    }
};

// const data = {
//     pageList0: {
//         page0: {
//             position: 0,
//             imgUrl: "img/test1.jpg"
//         },
//         page1: {
//             position: -1,
//             imgUrl: "img/test1_2.jpg"
//         },
//         page2: {
//             position: 1,
//             imgUrl: "img/test1_3.jpg"
//         },
//         isLastPage: false
//     },
//     pageList1: {
//         page0: {
//             position: 0,
//             imgUrl: "img/test2.jpg"
//         },
//         isLastPage: false
//     },
//     pageList2: {
//         page0: {
//             position: 0,
//             imgUrl: "img/test3.jpg"
//         },
//         isLastPage: false
//     },
//     pageList3: {
//         page0: {
//             position: 0,
//             imgUrl: "img/test4.jpg"
//         },
//         isLastPage: false
//     },
//     pageList4: {
//         page0: {
//             position: 0,
//             imgUrl: "img/test5.jpg"
//         },
//         isLastPage: true
//     }
// }

export { data };
