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
                    page: 1
                },
                {
                    path: 1,
                    page: 0
                }
            ]
        },
        page1: {
            imgUrl: "img/test2.jpg",
            neighbours: [
                {
                    path: 0,
                    page: 0
                },
                {
                    path: 0,
                    page: 2
                }
            ]
        },
        page2: {
            imgUrl: "img/test3.jpg",
            neighbours: [
                {
                    path: 0,
                    page: 1
                },
                {
                    path: 0,
                    page: 3
                }
            ]
        },
        page3: {
            imgUrl: "img/test4.jpg",
            neighbours: [
                {
                    path: 0,
                    page: 2
                },
                {
                    path: 0,
                    page: 4
                }
            ]
        },
        page4: {
            imgUrl: "img/test5.jpg",
            neighbours: [
                {
                    path: 0,
                    page: 3
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
                    page: 1
                }
            ]
        },
        page1: {
            imgUrl: "img/test7.jpg",
            neighbours: [
                {
                    path: 1,
                    page: 0
                },
                {
                    path: 1,
                    page: 2
                }
            ]
        },
        page2: {
            imgUrl: "img/test8.jpg",
            neighbours: [
                {
                    path: 1,
                    page: 1
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
                    page: 1
                }
            ]
        },
        page1: {
            imgUrl: "img/test10.jpg",
            neighbours: [
                {
                    path: 1,
                    page: 0
                },
                {
                    path: 1,
                    page: 2
                }
            ]
        },
        page2: {
            imgUrl: "img/test11.jpg",
            neighbours: [
                {
                    path: 2,
                    page: 1
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
