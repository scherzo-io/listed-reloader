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
"[project]/new/nextjs-site/app/artists/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArtistPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$lib$2f$strapi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/lib/strapi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Sample artist data for demo
const sampleArtistData = {
    'sinca': {
        name: 'Sinca',
        bio: 'Sinca is a San Francisco-based DJ and producer known for his deep, groovy house sets that blend soulful melodies with driving rhythms. With a career spanning over a decade, he has become a staple in the Bay Area underground scene.',
        image: '/images/Sinca.jpeg',
        soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1234567&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        socialLinks: {
            soundcloud: 'https://soundcloud.com/sinca',
            instagram: 'https://instagram.com/sinca',
            residentAdvisor: 'https://ra.co/dj/sinca'
        }
    },
    'camea': {
        name: 'Camea',
        bio: 'Camea is an American DJ and producer who has been a driving force in the electronic music scene. Known for her eclectic sets that seamlessly blend techno, house, and minimal, she has performed at major festivals and clubs worldwide.',
        image: '/images/camea.png',
        soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1234567&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        socialLinks: {
            soundcloud: 'https://soundcloud.com/camea',
            instagram: 'https://instagram.com/camea',
            residentAdvisor: 'https://ra.co/dj/camea'
        }
    },
    'atish': {
        name: 'Atish',
        bio: 'Atish is a DJ and producer known for his deep, melodic house sets that create an emotional journey on the dancefloor. His productions have been released on labels like Kindisch, Stil Vor Talent, and his own Manjumasi label.',
        image: '/images/mainone.png',
        soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1234567&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        socialLinks: {
            soundcloud: 'https://soundcloud.com/atish',
            instagram: 'https://instagram.com/atish',
            residentAdvisor: 'https://ra.co/dj/atish'
        }
    }
};
function ArtistPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params === null || params === void 0 ? void 0 : params.slug;
    const [artist, setArtist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Handle responsive design
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArtistPage.useEffect": ()=>{
            const handleResize = {
                "ArtistPage.useEffect.handleResize": ()=>{
                    setIsMobile(window.innerWidth <= 768);
                }
            }["ArtistPage.useEffect.handleResize"];
            handleResize();
            window.addEventListener('resize', handleResize);
            return ({
                "ArtistPage.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["ArtistPage.useEffect"];
        }
    }["ArtistPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArtistPage.useEffect": ()=>{
            const fetchArtist = {
                "ArtistPage.useEffect.fetchArtist": async ()=>{
                    setLoading(true);
                    // Try to fetch from Strapi first
                    const strapiArtist = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$lib$2f$strapi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArtistBySlug"])(slug);
                    if (strapiArtist) {
                        setArtist(strapiArtist);
                    } else {
                        // Fallback to sample data
                        const sampleData = sampleArtistData[slug];
                        if (sampleData) {
                            setArtist({
                                attributes: {
                                    name: sampleData.name,
                                    slug: slug,
                                    bio: sampleData.bio,
                                    image: sampleData.image,
                                    soundcloud: sampleData.soundcloud,
                                    video: sampleData.video,
                                    socialLinks: sampleData.socialLinks
                                }
                            });
                        }
                    }
                    setLoading(false);
                }
            }["ArtistPage.useEffect.fetchArtist"];
            fetchArtist();
        }
    }["ArtistPage.useEffect"], [
        slug
    ]);
    // Animated color bar effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArtistPage.useEffect": ()=>{
            if (!animRef.current) return;
            const colors = [
                "#ffffff",
                "#e476ae",
                "#ef4137",
                "#1895d3",
                "#f8ec21",
                "#814199",
                "#12b258"
            ];
            let delayTimer = null;
            let durationTimer = null;
            const tick = {
                "ArtistPage.useEffect.tick": ()=>{
                    if (!animRef.current) return;
                    animRef.current.classList.remove("active");
                    const getRandomIntInclusive = {
                        "ArtistPage.useEffect.tick.getRandomIntInclusive": (min, max)=>{
                            min = Math.ceil(min);
                            max = Math.floor(max);
                            return Math.floor(Math.random() * (max - min + 1)) + min;
                        }
                    }["ArtistPage.useEffect.tick.getRandomIntInclusive"];
                    const newStyles = {
                        backgroundColor: colors[getRandomIntInclusive(0, colors.length - 1)],
                        left: "".concat(getRandomIntInclusive(0, 98), "%"),
                        height: "".concat(getRandomIntInclusive(10, 90), "%")
                    };
                    Object.assign(animRef.current.style, newStyles);
                    delayTimer = setTimeout({
                        "ArtistPage.useEffect.tick": ()=>{
                            if (animRef.current) animRef.current.classList.add("active");
                        }
                    }["ArtistPage.useEffect.tick"], 100);
                    durationTimer = setTimeout(tick, getRandomIntInclusive(1500, 3000));
                }
            }["ArtistPage.useEffect.tick"];
            tick();
            return ({
                "ArtistPage.useEffect": ()=>{
                    if (delayTimer) clearTimeout(delayTimer);
                    if (durationTimer) clearTimeout(durationTimer);
                }
            })["ArtistPage.useEffect"];
        }
    }["ArtistPage.useEffect"], [
        artist
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: 'center',
                padding: '100px 0',
                color: 'white'
            },
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this);
    }
    if (!artist) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    marginTop: '40px',
                    marginBottom: '60px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            marginBottom: '40px'
                        },
                        children: "ARTIST NOT FOUND"
                    }, void 0, false, {
                        fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginLeft: '69px',
                            marginRight: '69px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '1.6rem',
                                    marginBottom: '30px'
                                },
                                children: "Sorry, we couldn't find information for this artist."
                            }, void 0, false, {
                                fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/artists",
                                style: {
                                    color: '#f8ec21'
                                },
                                children: "← Back to Artists"
                            }, void 0, false, {
                                fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, this);
    }
    const imageUrl = artist.attributes.image;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            marginTop: isMobile ? '60px' : '70px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: 0,
                        margin: isMobile ? '0px 20px' : '0px 69px',
                        overflow: 'hidden'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            overflow: 'hidden'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: animRef,
                                className: "anim",
                                style: {
                                    width: '10px',
                                    height: '50%',
                                    top: '-100%',
                                    position: 'absolute',
                                    filter: 'blur(8px)',
                                    zIndex: 10
                                }
                            }, void 0, false, {
                                fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imageUrl,
                                alt: artist.attributes.name,
                                style: {
                                    width: '100%',
                                    display: 'block'
                                }
                            }, void 0, false, {
                                fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        marginTop: '20px'
                    },
                    children: artist.attributes.name.toUpperCase()
                }, void 0, false, {
                    fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: isMobile ? 'block' : 'flex',
                        gap: '20px',
                        marginBottom: '60px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: isMobile ? '100%' : '48%',
                                float: isMobile ? 'none' : 'left'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: 'white',
                                    fontSize: '1.6rem',
                                    textAlign: 'left',
                                    marginLeft: isMobile ? '20px' : '69px',
                                    marginRight: isMobile ? '20px' : '69px',
                                    overflow: 'scroll',
                                    height: isMobile ? 'auto' : '850px',
                                    padding: isMobile ? '1em' : '0',
                                    msOverflowStyle: 'none',
                                    scrollbarWidth: 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            lineHeight: '1.8'
                                        },
                                        children: artist.attributes.bio || 'No biography available yet.'
                                    }, void 0, false, {
                                        fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    artist.attributes.socialLinks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '40px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '1.8rem',
                                                    marginBottom: '20px'
                                                },
                                                children: "Links"
                                            }, void 0, false, {
                                                fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '15px'
                                                },
                                                children: [
                                                    artist.attributes.socialLinks.soundcloud && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: artist.attributes.socialLinks.soundcloud,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        style: {
                                                            color: '#f8ec21',
                                                            fontSize: '1.4rem'
                                                        },
                                                        children: "→ Soundcloud"
                                                    }, void 0, false, {
                                                        fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 23
                                                    }, this),
                                                    artist.attributes.socialLinks.instagram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: artist.attributes.socialLinks.instagram,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        style: {
                                                            color: '#e476ae',
                                                            fontSize: '1.4rem'
                                                        },
                                                        children: "→ Instagram"
                                                    }, void 0, false, {
                                                        fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 23
                                                    }, this),
                                                    artist.attributes.socialLinks.residentAdvisor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: artist.attributes.socialLinks.residentAdvisor,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        style: {
                                                            color: '#1895d3',
                                                            fontSize: '1.4rem'
                                                        },
                                                        children: "→ Resident Advisor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginRight: isMobile ? '20px' : '69px',
                                marginLeft: isMobile ? '20px' : '0',
                                width: isMobile ? '100%' : '49%',
                                marginTop: isMobile ? '20px' : '0'
                            },
                            children: [
                                artist.attributes.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    title: "video widget",
                                    src: artist.attributes.video,
                                    style: {
                                        width: '100%',
                                        height: isMobile ? window.innerWidth <= 380 ? '220px' : '310px' : '380px',
                                        marginBottom: '20px',
                                        backgroundColor: 'black'
                                    },
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: true
                                }, void 0, false, {
                                    fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this),
                                artist.attributes.soundcloud && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    src: artist.attributes.soundcloud,
                                    title: "sc widget",
                                    style: {
                                        width: '100%',
                                        height: isMobile ? window.innerWidth <= 380 ? '160px' : '260px' : '320px',
                                        backgroundColor: 'black'
                                    },
                                    frameBorder: "0",
                                    allowTransparency: true,
                                    allow: "encrypted-media"
                                }, void 0, false, {
                                    fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, this),
                                !artist.attributes.video && !artist.attributes.soundcloud && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '100%',
                                        height: '320px',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255,255,255,0.5)'
                                        },
                                        children: "Media content coming soon"
                                    }, void 0, false, {
                                        fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/new/nextjs-site/app/artists/[slug]/page.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s(ArtistPage, "GTiuqEJqoUXRO/SJ+gcdxG1ia+U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ArtistPage;
var _c;
__turbopack_context__.k.register(_c, "ArtistPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=new_nextjs-site_bfc7db1f._.js.map