module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/new/nextjs-site/lib/strapi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const strapiToken = process.env.STRAPI_TOKEN;
// Create axios instance with default config
const api = __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `${strapiUrl}/api`,
    headers: {
        'Content-Type': 'application/json',
        ...strapiToken && {
            Authorization: `Bearer ${strapiToken}`
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
async function getEvents(upcoming = true) {
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
    return `${strapiUrl}${url}`;
}
}),
"[project]/new/nextjs-site/app/artists/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArtistsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$lib$2f$strapi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new/nextjs-site/lib/strapi.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ArtistsPage() {
    const [artists, setArtists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$lib$2f$strapi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArtists"])().then(setArtists);
    }, []);
    // Sample artists data if Strapi is not connected
    const sampleArtists = [
        {
            name: 'Atish',
            slug: 'atish',
            image: '/images/camea.png'
        },
        {
            name: 'Ben Annand',
            slug: 'ben-annand'
        },
        {
            name: 'Dory',
            slug: 'dory'
        },
        {
            name: 'Halo Varga',
            slug: 'halo-varga'
        },
        {
            name: 'Jay Tripwire',
            slug: 'jay-tripwire'
        },
        {
            name: 'Justin Marchacos',
            slug: 'justin-marchacos'
        },
        {
            name: 'KMLN',
            slug: 'kmln'
        },
        {
            name: 'Lovestruckk',
            slug: 'lovestruckk'
        },
        {
            name: 'M.O.N.R.O.E',
            slug: 'monroe'
        },
        {
            name: 'Mark Slee',
            slug: 'mark-slee'
        },
        {
            name: 'Maxi Storrs',
            slug: 'maxi-storrs'
        },
        {
            name: 'MightyKat',
            slug: 'mightykat'
        },
        {
            name: 'Mr. C',
            slug: 'mr-c'
        },
        {
            name: 'Naveen G',
            slug: 'naveen-g'
        },
        {
            name: 'Nico Stojan',
            slug: 'nico-stojan'
        },
        {
            name: 'Nikita',
            slug: 'nikita'
        },
        {
            name: 'Holmar',
            slug: 'holmar'
        },
        {
            name: 'Galen',
            slug: 'galen'
        },
        {
            name: 'Nitin',
            slug: 'nitin'
        },
        {
            name: 'Bilaliwood',
            slug: 'bilaliwood'
        },
        {
            name: 'H-Foundation',
            slug: 'h-foundation'
        },
        {
            name: 'Ray Zuniga',
            slug: 'ray-zuniga'
        },
        {
            name: 'Philipp Jung',
            slug: 'philipp-jung'
        },
        {
            name: 'Anja Schneider',
            slug: 'anja-schneider'
        },
        {
            name: 'Atnarko',
            slug: 'atnarko'
        },
        {
            name: 'Sinca',
            slug: 'sinca',
            image: '/images/Sinca.jpeg'
        },
        {
            name: 'N-UM',
            slug: 'n-um'
        },
        {
            name: 'Matt Caines',
            slug: 'matt-caines'
        },
        {
            name: 'Reza Safinia',
            slug: 'reza-safinia'
        },
        {
            name: 'Saqib',
            slug: 'saqib'
        },
        {
            name: 'Beauty & The Beast',
            slug: 'beauty-the-beast'
        },
        {
            name: 'Formerly',
            slug: 'formerly'
        },
        {
            name: 'Camea',
            slug: 'camea',
            image: '/images/camea.png'
        },
        {
            name: 'Niki Sadeki',
            slug: 'niki-sadeki'
        }
    ];
    const displayArtists = artists.length > 0 ? artists.map((a)=>({
            name: a.attributes.name,
            slug: a.attributes.slug,
            bio: a.attributes.bio,
            image: a.attributes.image?.data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$lib$2f$strapi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStrapiImageUrl"])(a.attributes.image.data.attributes.url) : null
        })) : sampleArtists;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container-custom",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: {
                marginTop: '40px',
                marginBottom: '60px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        marginBottom: '40px'
                    },
                    children: "ARTISTS"
                }, void 0, false, {
                    fileName: "[project]/new/nextjs-site/app/artists/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '30px',
                        marginLeft: '69px',
                        marginRight: '69px'
                    },
                    children: displayArtists.map((artist, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/artists/${artist.slug}`,
                            style: {
                                display: 'block',
                                textAlign: 'center',
                                textDecoration: 'none',
                                transition: 'transform 0.3s ease'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.transform = 'scale(1.05)',
                            onMouseLeave: (e)=>e.currentTarget.style.transform = 'scale(1)',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '100%',
                                        paddingBottom: '100%',
                                        position: 'relative',
                                        backgroundColor: '#111',
                                        marginBottom: '15px',
                                        overflow: 'hidden'
                                    },
                                    children: artist.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: artist.image,
                                        alt: artist.name,
                                        fill: true,
                                        style: {
                                            objectFit: 'cover'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/new/nextjs-site/app/artists/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            fontSize: '3rem',
                                            color: '#333',
                                            fontFamily: "'dinBoldFont', sans-serif"
                                        },
                                        children: artist.name.charAt(0)
                                    }, void 0, false, {
                                        fileName: "[project]/new/nextjs-site/app/artists/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/new/nextjs-site/app/artists/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new$2f$nextjs$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: '1.8rem',
                                        fontFamily: "'dinFont', sans-serif",
                                        color: 'white',
                                        marginTop: '10px'
                                    },
                                    children: artist.name
                                }, void 0, false, {
                                    fileName: "[project]/new/nextjs-site/app/artists/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/new/nextjs-site/app/artists/page.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/new/nextjs-site/app/artists/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/new/nextjs-site/app/artists/page.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/new/nextjs-site/app/artists/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6159285a._.js.map