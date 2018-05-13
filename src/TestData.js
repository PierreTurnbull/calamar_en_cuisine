const format = {
    maxChoices: 2
};

/*
data structure:

const data = {
    path: {
        page: {
            imgUlr: string,
            neighbours: [
                {
                    path: int
                    page: int
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
    page
}
*/

const data = {
    path0: {
        page0: {
            imgUrl: "img/test1.jpg",
            neighbours: [
                {
                    path: 0,
                    page: 1,
                    style: {
                        top: "10%",
                        left: "10%"
                    },
                    text: "page1path0"
                },
                {
                    path: 1,
                    page: 0,
                    style: {
                        bottom: "25%",
                        right: "15%"
                    },
                    text: "page0path1"
                }
            ]
        },
        page1: {
            imgUrl: "img/test2.jpg",
            neighbours: [
                {
                    path: 0,
                    page: 0,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    text: "page0path0"
                },
                {
                    path: 0,
                    page: 2,
                    style: {
                        top: "20%",
                        left: "50%"
                    },
                    text: "page2path0"
                }
            ]
        },
        page2: {
            imgUrl: "img/test3.jpg",
            neighbours: [
                {
                    path: 0,
                    page: 1,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    text: "page1path0"
                },
                {
                    path: 0,
                    page: 3,
                    style: {
                        top: "50%",
                        left: "20%"
                    },
                    text: "page3path0"
                }
            ]
        },
        page3: {
            imgUrl: "img/test4.jpg",
            neighbours: [
                {
                    path: 0,
                    page: 2,
                    style: {
                        top: "30%",
                        left: "30%"
                    },
                    text: "page2path0"
                },
                {
                    path: 0,
                    page: 4,
                    style: {
                        top: "50%",
                        left: "50%"
                    },
                    text: "page4path0"
                }
            ]
        },
        page4: {
            imgUrl: "img/test5.jpg",
            neighbours: [
                {
                    path: 0,
                    page: 3,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    text: "page3path0"
                }
            ]
        }
    },
    path1: {
        page0: {
            imgUrl: "img/test6.jpg",
            neighbours: [
                {
                    path: 1,
                    page: 1,
                    style: {
                        top: "0%",
                        left: "0%"
                    },
                    text: "page1path1"
                }
            ]
        },
        page1: {
            imgUrl: "img/test7.jpg",
            neighbours: [
                {
                    path: 1,
                    page: 0,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    text: "page0path1"
                },
                {
                    path: 1,
                    page: 2,
                    style: {
                        top: "70%",
                        left: "60%"
                    },
                    text: "page2path1"
                }
            ]
        },
        page2: {
            imgUrl: "img/test8.jpg",
            neighbours: [
                {
                    path: 1,
                    page: 1,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    text: "page1path1"
                }
            ]
        }
    },
    path2: {
        page0: {
            imgUrl: "img/test9.jpg",
            neighbours: [
                {
                    path: 2,
                    page: 1,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    text: "page1path2"
                }
            ]
        },
        page1: {
            imgUrl: "img/test10.jpg",
            neighbours: [
                {
                    path: 1,
                    page: 0,
                    style: {
                        top: "20%",
                        left: "20%"
                    },
                    text: "page0path1"
                },
                {
                    path: 1,
                    page: 2,
                    style: {
                        top: "35%",
                        left: "35%"
                    },
                    text: "page2path1"
                }
            ]
        },
        page2: {
            imgUrl: "img/test11.jpg",
            neighbours: [
                {
                    path: 2,
                    page: 1,
                    style: {
                        top: "0%",
                        left: "20%"
                    },
                    text: "page1path2"
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

export { format, data };
