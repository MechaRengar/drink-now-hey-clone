(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/drink-now-v2/src/app/collections/[handle]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$drink$2d$now$2d$v2$2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drink-now-v2/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$drink$2d$now$2d$v2$2f$src$2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drink-now-v2/src/context/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$drink$2d$now$2d$v2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drink-now-v2/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function CollectionPage() {
    _s();
    const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$drink$2d$now$2d$v2$2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllProducts"])();
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$drink$2d$now$2d$v2$2f$src$2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const filteredProducts = products.filter((p)=>{
        if (filter === "cans") return p.canCount > 0;
        if (filter === "merch") return p.canCount === 0;
        return true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white text-[#121212] min-h-screen py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-2xl mx-auto mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold uppercase tracking-widest text-zinc-400",
                            children: "the nowhey collection"
                        }, void 0, false, {
                            fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-5xl font-normal lowercase tracking-tight text-zinc-900 mt-2",
                            children: "choose your flavour"
                        }, void 0, false, {
                            fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs sm:text-sm text-zinc-500 mt-3",
                            children: "20g clean plant-based pea protein peptides. 86 calories. zero sugar."
                        }, void 0, false, {
                            fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-2 mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilter("all"),
                                    className: `px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${filter === "all" ? "bg-black text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`,
                                    children: "all items"
                                }, void 0, false, {
                                    fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilter("cans"),
                                    className: `px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${filter === "cans" ? "bg-black text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`,
                                    children: "protein cans"
                                }, void 0, false, {
                                    fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilter("merch"),
                                    className: `px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${filter === "merch" ? "bg-black text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`,
                                    children: "apparel"
                                }, void 0, false, {
                                    fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: filteredProducts.map((prod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group flex flex-col bg-[#f8f8f8] hover:bg-[#f2f2f2] rounded-2xl overflow-hidden border border-black/5 hover:border-black/15 transition-all p-5 relative shadow-xs",
                            children: [
                                prod.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute top-4 right-4 bg-[#c6f91f] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-full z-10",
                                    children: prod.badge
                                }, void 0, false, {
                                    fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/products/${prod.handle}`,
                                    className: "block relative aspect-square w-full my-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: prod.featuredImage,
                                        alt: prod.title,
                                        fill: true,
                                        className: "object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-auto space-y-2 pt-2 border-t border-black/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/products/${prod.handle}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-zinc-900 group-hover:text-black line-clamp-2",
                                                children: prod.title
                                            }, void 0, false, {
                                                fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold font-mono text-black",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$drink$2d$now$2d$v2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(prod.price)
                                                }, void 0, false, {
                                                    fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this),
                                                prod.perCanPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-zinc-500 font-medium",
                                                    children: prod.perCanPrice
                                                }, void 0, false, {
                                                    fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>addToCart(prod, 1, false),
                                            className: "w-full mt-3 py-2.5 bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "quick add"
                                                }, void 0, false, {
                                                    fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, prod.id, true, {
                            fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/drink-now-v2/src/app/collections/[handle]/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(CollectionPage, "jBwV/EoutzpggTi9pE//+08j0xM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$drink$2d$now$2d$v2$2f$src$2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CollectionPage;
var _c;
__turbopack_context__.k.register(_c, "CollectionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/drink-now-v2/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCTS",
    ()=>PRODUCTS,
    "getAllProducts",
    ()=>getAllProducts,
    "getProductByHandle",
    ()=>getProductByHandle
]);
const PRODUCTS = [
    {
        id: "bundle-24",
        handle: "nowhey-bundle-berry-mango-24-x-330ml",
        title: "nowhey cans - mixed bundle 24 x 330ml",
        price: 5940,
        compareAtPrice: 6600,
        perCanPrice: "£2.48 per can | free shipping!",
        description: "the best of both worlds. 12 cans of crisp berry and 12 cans of juicy mango. 20g clear plant-based pea protein peptides per can, 86 calories, zero sugar and zero milkiness.",
        featuredImage: "/images/Pair_of_Cans.png",
        images: [
            "/images/Pair_of_Cans.png",
            "/images/Pair_of_Cans_Back.png",
            "/images/Berry_Infographic_ad7d137c-d832-4cac-b849-0081b1772238.png",
            "/images/23EC864A-8AF8-499F-937C-0E49A236E36B.jpg"
        ],
        flavor: "Mixed (12 Berry + 12 Mango)",
        canCount: 24,
        rating: 4.9,
        reviewCount: 428,
        proteinGrams: 20,
        calories: 86,
        sugarGrams: 0,
        badge: "BEST VALUE - SAVE 10%",
        nutritionFacts: {
            servingSize: "330ml (1 can)",
            protein: "20g",
            calories: "86 kcal",
            sugar: "0.0g",
            carbs: "0.4g",
            fat: "0.0g"
        },
        ingredients: "water, pea protein peptides, acidity regulator (citric acid), natural flavourings, preservative (potassium sorbate), sweetener (sucralose)."
    },
    {
        id: "berry-12",
        handle: "nowhey-berry-12-pack",
        title: "nowhey cans - berry 12 x 330ml",
        price: 3300,
        compareAtPrice: 3300,
        perCanPrice: "£2.75 per can",
        description: "crisp, tart, and wildly refreshing summer berry infusion. 20g pure bioavailable pea protein peptides with zero milkiness, zero chalk, zero sugar.",
        featuredImage: "/images/Berry_Front.png",
        images: [
            "/images/Berry_Front.png",
            "/images/Berry_Infographic_ad7d137c-d832-4cac-b849-0081b1772238.png",
            "/images/IMG_6337-min.jpg"
        ],
        flavor: "Berry",
        canCount: 12,
        rating: 4.8,
        reviewCount: 312,
        proteinGrams: 20,
        calories: 86,
        sugarGrams: 0,
        badge: "TOP SELLER",
        nutritionFacts: {
            servingSize: "330ml (1 can)",
            protein: "20g",
            calories: "86 kcal",
            sugar: "0.0g",
            carbs: "0.4g",
            fat: "0.0g"
        },
        ingredients: "water, pea protein peptides, acidity regulator (citric acid), natural flavourings (berry), preservative (potassium sorbate), sweetener (sucralose)."
    },
    {
        id: "mango-12",
        handle: "nowhey-mango-12-pack",
        title: "nowhey cans - mango 12 x 330ml",
        price: 3300,
        compareAtPrice: 3300,
        perCanPrice: "£2.75 per can",
        description: "sun-ripened tropical mango notes packed into a light, thirst-quenching clear protein drink. 20g protein with an ultra-clean finish.",
        featuredImage: "/images/Mango_Front.png",
        images: [
            "/images/Mango_Front.png",
            "/images/Berry_Infographic_ad7d137c-d832-4cac-b849-0081b1772238.png",
            "/images/IMG_6270.jpg"
        ],
        flavor: "Mango",
        canCount: 12,
        rating: 4.8,
        reviewCount: 279,
        proteinGrams: 20,
        calories: 86,
        sugarGrams: 0,
        badge: "FAN FAVOURITE",
        nutritionFacts: {
            servingSize: "330ml (1 can)",
            protein: "20g",
            calories: "86 kcal",
            sugar: "0.0g",
            carbs: "0.4g",
            fat: "0.0g"
        },
        ingredients: "water, pea protein peptides, acidity regulator (citric acid), natural flavourings (mango), preservative (potassium sorbate), sweetener (sucralose)."
    },
    {
        id: "t-shirt",
        handle: "t-shirt",
        title: "nowhey athletic tee shirt",
        price: 2000,
        compareAtPrice: 2000,
        perCanPrice: "limited edition",
        description: "premium heavyweight athletic fit tee with signature nowhey minimalist typography. breathable, moisture-wicking and comfortable for heavy training sessions.",
        featuredImage: "/images/t-shirt.png",
        images: [
            "/images/t-shirt.png",
            "/images/nowheyathlete.png"
        ],
        flavor: "Black",
        canCount: 0,
        rating: 5.0,
        reviewCount: 64,
        proteinGrams: 0,
        calories: 0,
        sugarGrams: 0,
        badge: "MERCH",
        nutritionFacts: {
            servingSize: "1 Garment",
            protein: "N/A",
            calories: "N/A",
            sugar: "N/A",
            carbs: "N/A",
            fat: "N/A"
        },
        ingredients: "100% organic cotton, 240gsm heavyweight weave."
    }
];
function getProductByHandle(handle) {
    return PRODUCTS.find((p)=>p.handle === handle);
}
function getAllProducts() {
    return PRODUCTS;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=drink-now-v2_src_0-xba3t._.js.map