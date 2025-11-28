(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/new/nextjs-site/lib/strapi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getArtistBySlug",
    ()=>getArtistBySlug,
    "getArtists",
    ()=>getArtists,
    "getEvents",
    ()=>getEvents,
    "getPageBySlug",
    ()=>getPageBySlug,
    "getPostBySlug",
    ()=>getPostBySlug,
    "getPosts",
    ()=>getPosts,
    "getStrapiImageUrl",
    ()=>getStrapiImageUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/new/nextjs-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const strapiUrl = __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const strapiToken = __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.STRAPI_TOKEN;
// Create axios instance with default config
const api = __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "".concat(strapiUrl, "/api"),
    headers: {
        'Content-Type': 'application/json',
        ...strapiToken && {
            Authorization: "Bearer ".concat(strapiToken)
        }
    }
});
async function getArtists() {
    try {
        const response = await api.get('/artists', {
            params: {
                populate: '*',
                sort: 'name:asc'
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching artists:', error);
        return [];
    }
}
async function getArtistBySlug(slug) {
    try {
        const response = await api.get('/artists', {
            params: {
                filters: {
                    slug: {
                        $eq: slug
                    }
                },
                populate: '*'
            }
        });
        return response.data.data[0] || null;
    } catch (error) {
        console.error('Error fetching artist:', error);
        return null;
    }
}
async function getPosts(limit) {
    try {
        const response = await api.get('/posts', {
            params: {
                populate: '*',
                sort: 'publishedAt:desc',
                ...limit && {
                    pagination: {
                        limit
                    }
                }
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}
async function getPostBySlug(slug) {
    try {
        const response = await api.get('/posts', {
            params: {
                filters: {
                    slug: {
                        $eq: slug
                    }
                },
                populate: '*'
            }
        });
        return response.data.data[0] || null;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
}
async function getPageBySlug(slug) {
    try {
        const response = await api.get('/pages', {
            params: {
                filters: {
                    slug: {
                        $eq: slug
                    }
                },
                populate: '*'
            }
        });
        return response.data.data[0] || null;
    } catch (error) {
        console.error('Error fetching page:', error);
        return null;
    }
}
async function getEvents() {
    let upcoming = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    try {
        const now = new Date().toISOString();
        const response = await api.get('/events', {
            params: {
                populate: '*',
                sort: 'date:asc',
                filters: upcoming ? {
                    date: {
                        $gte: now
                    }
                } : {
                    date: {
                        $lt: now
                    }
                }
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}
function getStrapiImageUrl(url) {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return "".concat(strapiUrl).concat(url);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/new/nextjs-site/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$lib$2f$strapi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/lib/strapi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Slider images (using sample images, replace with actual images from Strapi)
const sliderImages = [
    'https://ucarecdn.com/fad27b18-d28c-4ef2-ad9d-050ddae173d7/',
    'https://ucarecdn.com/fad27b18-d28c-4ef2-ad9d-050ddae173d7/',
    'https://ucarecdn.com/33e020b7-c129-4a9b-9a85-1876beef1b5d/',
    'https://ucarecdn.com/efacb135-19a0-45e0-af94-33e9fe01b72f/-/crop/2000x1485/0,0/-/preview/',
    'https://ucarecdn.com/0eccca9b-467c-473f-950c-9f419503f636/',
    'https://ucarecdn.com/15d81712-a4ae-4154-b161-574b784c87c3/'
];
// Sample posts data
const samplePosts = [
    {
        id: 1,
        attributes: {
            title: 'Art With Me Miami',
            slug: 'art-with-me-miami',
            createdAt: '2021-11-19T00:00:00Z',
            excerpt: 'Listed Productions brings the underground vibe to Miami Beach.',
            content: 'Full article content here',
            image: {
                data: {
                    attributes: {
                        url: '/images/mainone.png'
                    }
                }
            },
            category: {
                data: {
                    id: 1,
                    attributes: {
                        name: 'News',
                        slug: 'news'
                    }
                }
            }
        }
    },
    {
        id: 2,
        attributes: {
            title: 'Lee Coombs Live at The Cityfox Odyssey NYE',
            slug: 'lee-coombs-cityfox',
            createdAt: '2021-12-31T00:00:00Z',
            excerpt: 'An unforgettable New Year\'s Eve performance.',
            content: 'Full article content here',
            image: {
                data: {
                    attributes: {
                        url: '/images/Sinca.jpeg'
                    }
                }
            },
            category: {
                data: {
                    id: 1,
                    attributes: {
                        name: 'News',
                        slug: 'news'
                    }
                }
            }
        }
    },
    {
        id: 3,
        attributes: {
            title: 'The Real Deal Party Feel Feat. Atish',
            slug: 'real-deal-atish',
            createdAt: '2021-09-29T00:00:00Z',
            excerpt: 'A marathon session with Listed friends.',
            content: 'Full article content here',
            image: {
                data: {
                    attributes: {
                        url: '/images/camea.png'
                    }
                }
            },
            category: {
                data: {
                    id: 1,
                    attributes: {
                        name: 'News',
                        slug: 'news'
                    }
                }
            }
        }
    }
];
// Sample artists data
const sampleArtists = [
    {
        id: 1,
        attributes: {
            name: 'Atish',
            slug: 'atish'
        }
    },
    {
        id: 2,
        attributes: {
            name: 'Ben Annand',
            slug: 'ben-annand'
        }
    },
    {
        id: 3,
        attributes: {
            name: 'Bilaliwood',
            slug: 'bilaliwood'
        }
    },
    {
        id: 4,
        attributes: {
            name: 'Camea',
            slug: 'camea'
        }
    },
    {
        id: 5,
        attributes: {
            name: 'Dance Spirit',
            slug: 'dance-spirit'
        }
    },
    {
        id: 6,
        attributes: {
            name: 'Dory',
            slug: 'dory'
        }
    },
    {
        id: 7,
        attributes: {
            name: 'Franklin De Costa',
            slug: 'franklin-de-costa'
        }
    },
    {
        id: 8,
        attributes: {
            name: 'Galen',
            slug: 'galen'
        }
    },
    {
        id: 9,
        attributes: {
            name: 'Halo Varga',
            slug: 'halo-varga'
        }
    },
    {
        id: 10,
        attributes: {
            name: 'H Foundation',
            slug: 'h-foundation'
        }
    },
    {
        id: 11,
        attributes: {
            name: 'Holmar',
            slug: 'holmar'
        }
    },
    {
        id: 12,
        attributes: {
            name: 'Jay Tripwire',
            slug: 'jay-tripwire'
        }
    },
    {
        id: 13,
        attributes: {
            name: 'Justin Marchacos',
            slug: 'justin-marchacos'
        }
    },
    {
        id: 14,
        attributes: {
            name: 'KMLN',
            slug: 'kmln'
        }
    },
    {
        id: 15,
        attributes: {
            name: 'Lovestruckk',
            slug: 'lovestruckk'
        }
    },
    {
        id: 16,
        attributes: {
            name: 'Mark Slee',
            slug: 'mark-slee'
        }
    },
    {
        id: 17,
        attributes: {
            name: 'Matt Caines',
            slug: 'matt-caines'
        }
    },
    {
        id: 18,
        attributes: {
            name: 'Maxi Storrs',
            slug: 'maxi-storrs'
        }
    },
    {
        id: 19,
        attributes: {
            name: 'MightyKat',
            slug: 'mightykat'
        }
    },
    {
        id: 20,
        attributes: {
            name: 'M.O.N.R.O.E',
            slug: 'm-o-n-r-o-e'
        }
    },
    {
        id: 21,
        attributes: {
            name: 'Mr. C',
            slug: 'mr-c'
        }
    },
    {
        id: 22,
        attributes: {
            name: 'Naveen G',
            slug: 'naveen-g'
        }
    },
    {
        id: 23,
        attributes: {
            name: 'Nico Stojan',
            slug: 'nico-stojan'
        }
    },
    {
        id: 24,
        attributes: {
            name: 'Niki Sadeki',
            slug: 'niki-sadeki'
        }
    },
    {
        id: 25,
        attributes: {
            name: 'Nikita',
            slug: 'nikita'
        }
    },
    {
        id: 26,
        attributes: {
            name: 'Nitin',
            slug: 'nitin'
        }
    },
    {
        id: 27,
        attributes: {
            name: 'Philipp Jung',
            slug: 'philipp-jung'
        }
    },
    {
        id: 28,
        attributes: {
            name: 'Reza Safinia',
            slug: 'reza-safinia'
        }
    },
    {
        id: 29,
        attributes: {
            name: 'Saqib',
            slug: 'saqib'
        }
    },
    {
        id: 30,
        attributes: {
            name: 'Sinca',
            slug: 'sinca'
        }
    }
];
function HomePage() {
    _s();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [artists, setArtists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [visiblePosts, setVisiblePosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            // Fetch data from Strapi or use sample data
            const fetchData = {
                "HomePage.useEffect.fetchData": async ()=>{
                    const [fetchedPosts, fetchedArtists] = await Promise.all([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$lib$2f$strapi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosts"])(),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$lib$2f$strapi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArtists"])()
                    ]);
                    setPosts(fetchedPosts.length > 0 ? fetchedPosts : samplePosts);
                    setArtists(fetchedArtists.length > 0 ? fetchedArtists : sampleArtists);
                }
            }["HomePage.useEffect.fetchData"];
            fetchData();
        }
    }["HomePage.useEffect"], []);
    // Auto-advance slider
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const interval = setInterval({
                "HomePage.useEffect.interval": ()=>{
                    setCurrentSlide({
                        "HomePage.useEffect.interval": (prev)=>(prev + 1) % sliderImages.length
                    }["HomePage.useEffect.interval"]);
                }
            }["HomePage.useEffect.interval"], 2800);
            return ({
                "HomePage.useEffect": ()=>clearInterval(interval)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    const loadMorePosts = ()=>{
        setVisiblePosts((prev)=>prev + 3);
    };
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }).format(date);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "Blog",
        style: {
            marginTop: '70px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixcenter",
                style: {
                    margin: 'auto',
                    width: '83%',
                    padding: '10px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '75%',
                        paddingTop: '42.1875%',
                        marginTop: '-42.1875%',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        position: 'relative'
                    },
                    children: sliderImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                top: 0,
                                left: 0,
                                opacity: currentSlide === index ? 1 : 0,
                                transition: 'opacity 2.8s ease-in-out',
                                zIndex: currentSlide === index ? 1 : 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: image,
                                alt: "Slide ".concat(index + 1),
                                style: {
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    left: 0,
                                    top: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/new/nextjs-site/app/page.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/new/nextjs-site/app/page.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/new/nextjs-site/app/page.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/new/nextjs-site/app/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Buzz"
            }, void 0, false, {
                fileName: "[project]/new/nextjs-site/app/page.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section hide",
                style: {
                    display: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container"
                }, void 0, false, {
                    fileName: "[project]/new/nextjs-site/app/page.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/new/nextjs-site/app/page.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "PostSection",
                        style: {
                            paddingTop: '60px'
                        },
                        children: [
                            posts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "PostSection--Grid",
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gridGap: '4rem',
                                    marginTop: '-60px'
                                },
                                children: posts.slice(0, visiblePosts).map((post)=>{
                                    var _post_attributes_image_data_attributes, _post_attributes_image_data, _post_attributes_image;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/news/".concat(post.attributes.slug),
                                        style: {
                                            textDecoration: 'none',
                                            color: 'inherit'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "PostCard",
                                            style: {
                                                background: 'rgba(0,0,0,0.7)',
                                                padding: '2rem',
                                                borderRadius: '8px',
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                cursor: 'pointer'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,255,255,0.1)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            },
                                            children: [
                                                ((_post_attributes_image = post.attributes.image) === null || _post_attributes_image === void 0 ? void 0 : (_post_attributes_image_data = _post_attributes_image.data) === null || _post_attributes_image_data === void 0 ? void 0 : (_post_attributes_image_data_attributes = _post_attributes_image_data.attributes) === null || _post_attributes_image_data_attributes === void 0 ? void 0 : _post_attributes_image_data_attributes.url) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '100%',
                                                        height: '200px',
                                                        marginBottom: '1rem',
                                                        overflow: 'hidden',
                                                        borderRadius: '4px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: post.attributes.image.data.attributes.url,
                                                        alt: post.attributes.title,
                                                        style: {
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/new/nextjs-site/app/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/new/nextjs-site/app/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: '1.8rem',
                                                        marginBottom: '1rem',
                                                        color: '#ffffff'
                                                    },
                                                    children: post.attributes.title
                                                }, void 0, false, {
                                                    fileName: "[project]/new/nextjs-site/app/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: 'rgba(255,255,255,0.6)',
                                                        fontSize: '1.2rem',
                                                        marginBottom: '1rem'
                                                    },
                                                    children: formatDate(post.attributes.createdAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/new/nextjs-site/app/page.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        flexGrow: 1,
                                                        color: 'rgba(255,255,255,0.8)',
                                                        fontSize: '1.4rem',
                                                        lineHeight: '1.6'
                                                    },
                                                    children: post.attributes.excerpt
                                                }, void 0, false, {
                                                    fileName: "[project]/new/nextjs-site/app/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/new/nextjs-site/app/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 21
                                        }, this)
                                    }, post.id, false, {
                                        fileName: "[project]/new/nextjs-site/app/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/new/nextjs-site/app/page.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, this),
                            posts.length > visiblePosts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginTop: '5rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: loadMorePosts,
                                    style: {
                                        background: 'rgb(1, 39, 255)',
                                        border: '2px solid black',
                                        padding: '1rem 2rem',
                                        cursor: 'pointer',
                                        color: 'white',
                                        fontSize: '1.6rem',
                                        transition: 'all 0.3s ease'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = 'black';
                                        e.currentTarget.style.border = '2px solid rgb(0, 0, 0)';
                                        e.currentTarget.style.color = 'rgb(82, 166, 201)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = 'rgb(1, 39, 255)';
                                        e.currentTarget.style.border = '2px solid black';
                                        e.currentTarget.style.color = 'white';
                                    },
                                    children: "Load More"
                                }, void 0, false, {
                                    fileName: "[project]/new/nextjs-site/app/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/new/nextjs-site/app/page.tsx",
                                lineNumber: 315,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/new/nextjs-site/app/page.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/new/nextjs-site/app/page.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/new/nextjs-site/app/page.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Listed Winter Playlists"
                    }, void 0, false, {
                        fileName: "[project]/new/nextjs-site/app/page.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        title: "listed-playlist",
                        width: "100%",
                        height: "300",
                        scrolling: "no",
                        frameBorder: "no",
                        allow: "autoplay",
                        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1187392201&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    }, void 0, false, {
                        fileName: "[project]/new/nextjs-site/app/page.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "home-artists-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Artists"
                            }, void 0, false, {
                                fileName: "[project]/new/nextjs-site/app/page.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'dinBoldFont', sans-serif",
                                        fontSize: '2.6rem',
                                        marginLeft: '69px',
                                        marginRight: '69px'
                                    },
                                    children: artists.map((artist, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/artists/".concat(artist.attributes.slug),
                                            className: "artist-link-".concat(index % 7),
                                            style: {
                                                marginRight: '1em',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease'
                                            },
                                            children: artist.attributes.name
                                        }, artist.id, false, {
                                            fileName: "[project]/new/nextjs-site/app/page.tsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/new/nextjs-site/app/page.tsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/new/nextjs-site/app/page.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/new/nextjs-site/app/page.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ctct-inline-form",
                        "data-form-id": "77fa4a78-f78b-4c9b-9057-b015694f8ed3"
                    }, void 0, false, {
                        fileName: "[project]/new/nextjs-site/app/page.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/new/nextjs-site/app/page.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/new/nextjs-site/app/page.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_s(HomePage, "bnqiN/NfpByu1B+hMjPrsHgxLb8=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=new_nextjs-site_a7f80b78._.js.map