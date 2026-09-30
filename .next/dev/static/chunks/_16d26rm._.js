(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/drink-now-v2/src/app/pages/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StandardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$drink$2d$now$2d$v2$2f$src$2f$data$2f$pages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drink-now-v2/src/data/pages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function StandardPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params?.slug;
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$drink$2d$now$2d$v2$2f$src$2f$data$2f$pages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPageBySlug"])(slug);
    const [formSubmitted, setFormSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        orderNumber: "",
        message: ""
    });
    if (!page) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const handleContactSubmit = (e)=>{
        e.preventDefault();
        setFormSubmitted(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#121212] text-white min-h-screen py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "back to home"
                            }, void 0, false, {
                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 border-b border-white/10 pb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-5xl font-extrabold lowercase tracking-tight font-mono",
                            children: page.title
                        }, void 0, false, {
                            fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        page.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm sm:text-base text-zinc-400 mt-2 font-normal",
                            children: page.subtitle
                        }, void 0, false, {
                            fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                slug === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: formSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 rounded-2xl bg-[#161616] border border-[#c6f91f]/40 text-center space-y-3 animate-in fade-in duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-12 h-12 text-[#c6f91f] mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold uppercase tracking-tight text-white font-mono",
                                children: "message received!"
                            }, void 0, false, {
                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-400 max-w-md mx-auto",
                                children: [
                                    "thank you for contacting nowhey. our team will review your enquiry and respond to ",
                                    formData.email || "you",
                                    " within 12 hours."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                lineNumber: 67,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleContactSubmit,
                        className: "bg-[#161616] p-8 rounded-3xl border border-white/10 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold uppercase text-zinc-400 mb-2",
                                                children: "name *"
                                            }, void 0, false, {
                                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                value: formData.name,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        name: e.target.value
                                                    }),
                                                placeholder: "Your name",
                                                className: "w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c6f91f]"
                                            }, void 0, false, {
                                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold uppercase text-zinc-400 mb-2",
                                                children: "email *"
                                            }, void 0, false, {
                                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                required: true,
                                                value: formData.email,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        email: e.target.value
                                                    }),
                                                placeholder: "you@email.com",
                                                className: "w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c6f91f]"
                                            }, void 0, false, {
                                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                lineNumber: 76,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold uppercase text-zinc-400 mb-2",
                                                children: "phone number (optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                value: formData.phone,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        phone: e.target.value
                                                    }),
                                                placeholder: "+44 7...",
                                                className: "w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c6f91f]"
                                            }, void 0, false, {
                                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold uppercase text-zinc-400 mb-2",
                                                children: "order number (if applicable)"
                                            }, void 0, false, {
                                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.orderNumber,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        orderNumber: e.target.value
                                                    }),
                                                placeholder: "#1042",
                                                className: "w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c6f91f]"
                                            }, void 0, false, {
                                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold uppercase text-zinc-400 mb-2",
                                        children: "comment / enquiry *"
                                    }, void 0, false, {
                                        fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 5,
                                        required: true,
                                        value: formData.message,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                message: e.target.value
                                            }),
                                        placeholder: "Tell us how we can help...",
                                        className: "w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c6f91f]"
                                    }, void 0, false, {
                                        fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                lineNumber: 132,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-full py-4 bg-[#c6f91f] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b0df1b] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c6f91f]/20 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "send message"
                                    }, void 0, false, {
                                        fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                                lineNumber: 146,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                        lineNumber: 72,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this),
                page.html && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rte",
                    dangerouslySetInnerHTML: {
                        __html: page.html
                    }
                }, void 0, false, {
                    fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
                    lineNumber: 160,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/drink-now-v2/src/app/pages/[slug]/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(StandardPage, "96gt4jSU8SxuukwubcO5NR2AuqY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = StandardPage;
var _c;
__turbopack_context__.k.register(_c, "StandardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/drink-now-v2/src/data/pages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAGES_DATA",
    ()=>PAGES_DATA,
    "getPageBySlug",
    ()=>getPageBySlug
]);
const PAGES_DATA = {
    "about-nowhey": {
        slug: "about-nowhey",
        title: "about nowhey",
        subtitle: "we're committed to making healthy choices easy, enjoyable, and accessible for everyone.",
        html: `
      <div class="space-y-8">
        <p class="text-lg leading-relaxed text-zinc-300">
          our mission is to provide a protein solution that not only supports your fitness goals, but also fits effortlessly into your active lifestyle. we believe wellness shouldn't feel like a chore or a compromise.
        </p>

        <div class="border-l-2 border-[#c6f91f] pl-6 my-8">
          <h2 class="text-2xl font-bold uppercase tracking-tight text-white font-mono">
            nowhey is more than a product; it's a commitment to helping you live a healthier, happier life with a protein supplement that fits your lifestyle and tastes as good as it feels.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="p-6 bg-[#161616] rounded-2xl border border-white/10">
            <h3 class="text-xl font-bold text-white mb-2 uppercase font-mono">the problem</h3>
            <p class="text-sm text-zinc-400 leading-relaxed">
              for too long, getting sufficient daily protein has meant drinking thick, chalky dairy shakes or choking down artificial-tasting bars. traditional protein shakes are heavy, cause bloating, and require cumbersome shakers that spoil quickly.
            </p>
          </div>
          <div class="p-6 bg-[#161616] rounded-2xl border border-white/10">
            <h3 class="text-xl font-bold text-[#c6f91f] mb-2 uppercase font-mono">the nowhey solution</h3>
            <p class="text-sm text-zinc-400 leading-relaxed">
              we engineered clear, refreshing fruit-flavoured protein water. with 20g of pure bioavailable plant protein, 86 calories and zero sugar, nowhey drinks just like an ice-cold fruit squash—light, refreshing, and clean.
            </p>
          </div>
        </div>

        <h3 class="text-2xl font-bold uppercase tracking-tight text-white font-mono mt-12 mb-4">
          our quality promise
        </h3>
        <p class="text-zinc-400 leading-relaxed text-sm">
          we use only premium pea protein peptides that undergo an advanced hydrolysation process to remove all pea taste and texture. the result is a crystal-clear, refreshing drink with a complete amino acid profile, optimal PDCAAS score, and zero dairy allergens.
        </p>
      </div>
    `
    },
    "contact": {
        slug: "contact",
        title: "get in touch",
        subtitle: "we aim to respond within 12 hours.",
        html: `
      <div class="space-y-6">
        <p class="text-zinc-300 text-sm">
          have questions about an order, delivery, wholesale enquiry, or our flavours? fill out the form or reach out directly to our team.
        </p>
        <div class="p-6 bg-[#161616] rounded-2xl border border-white/10 space-y-3 text-sm">
          <p class="text-zinc-400"><strong class="text-white">Customer Support:</strong> support@drinknowhey.com</p>
          <p class="text-zinc-400"><strong class="text-white">Wholesale Enquiries:</strong> b2b@drinknowhey.com</p>
          <p class="text-zinc-400"><strong class="text-white">Head Office:</strong> nowhey Ltd, London, United Kingdom</p>
          <p class="text-zinc-400"><strong class="text-white">Working Hours:</strong> Monday – Friday, 9:00am – 6:00pm GMT</p>
        </div>
      </div>
    `
    },
    "b2b": {
        slug: "b2b",
        title: "stock nowhey in your business",
        subtitle: "the fastest-growing plant-based clear protein water in the UK.",
        html: `
      <div class="space-y-10">
        <p class="text-base text-zinc-300 leading-relaxed">
          whether you run premier fitness clubs, modern convenience stores, universities, or corporate campuses, nowhey delivers unbeatable margins and high inventory turns.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-[#181818] p-6 rounded-2xl border border-white/10 space-y-3">
            <span class="text-xs font-bold text-[#c6f91f] uppercase tracking-wider">01. Retail & Grocery</span>
            <h3 class="text-lg font-bold text-white uppercase font-mono">Meal Deals & Grab-and-Go</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Eye-catching 330ml sleek can packaging designed for high shelf appeal in chillers. 100% allergen-free.
            </p>
          </div>
          <div class="bg-[#181818] p-6 rounded-2xl border border-white/10 space-y-3">
            <span class="text-xs font-bold text-[#c6f91f] uppercase tracking-wider">02. Gyms & Studios</span>
            <h3 class="text-lg font-bold text-white uppercase font-mono">Immediate Recovery</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Fast-moving impulse purchases for members wanting 20g protein without dairy bloat or protein shakers.
            </p>
          </div>
          <div class="bg-[#181818] p-6 rounded-2xl border border-white/10 space-y-3">
            <span class="text-xs font-bold text-[#c6f91f] uppercase tracking-wider">03. Vending & Travel</span>
            <h3 class="text-lg font-bold text-white uppercase font-mono">Standard 330ml Format</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Compatible with spiral and robotic vending machines. Compliant with UK healthy snack guidelines.
            </p>
          </div>
        </div>

        <div class="bg-[#161616] p-8 rounded-3xl border border-white/10 text-center">
          <h3 class="text-xl font-bold uppercase font-mono text-white mb-2">Authorized UK Distributors</h3>
          <p class="text-xs text-zinc-400 mb-6">Order directly through our wholesale partners or request trade accounts</p>
          <div class="flex flex-wrap justify-center items-center gap-8">
            <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white">Tropicana Wholesale</span>
            <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white">Protein Bargain Wholesale</span>
            <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white">Occa Wholesale</span>
          </div>
        </div>
      </div>
    `
    },
    "ambassadors": {
        slug: "ambassadors",
        title: "ambassador programme",
        subtitle: "join the nowhey athlete & creator movement.",
        html: `
      <div class="space-y-8">
        <p class="text-base text-zinc-300 leading-relaxed">
          nowhey is a ready-to-drink clear protein beverage, with 20g protein, ~82 calories and zero sugar. perfect for building lean muscle and keeping calories down, and easy to digest.
        </p>
        <p class="text-sm text-zinc-400 leading-relaxed">
          we're looking for athletes, hyrox racers, runners, coaches, and fitness influencers to help us build our social media presence. ambassadors will receive a personal discount code and earn commission on sales they generate.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
          <div class="bg-[#181818] p-6 rounded-2xl border border-white/10">
            <span class="text-3xl font-black text-[#c6f91f] font-mono">15%</span>
            <h4 class="text-sm font-bold text-white uppercase mt-2">Commission</h4>
            <p class="text-xs text-zinc-400 mt-1">Earn on every order generated through your custom referral link.</p>
          </div>
          <div class="bg-[#181818] p-6 rounded-2xl border border-white/10">
            <span class="text-3xl font-black text-[#c6f91f] font-mono">Free</span>
            <h4 class="text-sm font-bold text-white uppercase mt-2">Monthly Drops</h4>
            <p class="text-xs text-zinc-400 mt-1">Receive complimentary mixed bundles to fuel your workouts and content.</p>
          </div>
          <div class="bg-[#181818] p-6 rounded-2xl border border-white/10">
            <span class="text-3xl font-black text-[#c6f91f] font-mono">VIP</span>
            <h4 class="text-sm font-bold text-white uppercase mt-2">Event Access</h4>
            <p class="text-xs text-zinc-400 mt-1">Free entries to Hyrox races, athlete meetups, and fitness festivals.</p>
          </div>
        </div>
      </div>
    `
    },
    "sustainability": {
        slug: "sustainability",
        title: "sustainability & recycling",
        subtitle: "we believe sustainability starts with transparency.",
        html: `
      <div class="space-y-8 text-zinc-300 text-sm leading-relaxed">
        <p class="text-base text-white">
          every choice we make, from materials to filling to shipping, is made with impact in mind.
        </p>
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-white uppercase font-mono">100% Infinitely Recyclable Aluminium</h3>
          <p>
            unlike single-use plastic bottles which degrade with each recycling loop, aluminium cans are infinitely recyclable without loss of quality. roughly 75% of all aluminium ever produced is still in productive use today.
          </p>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-white uppercase font-mono">Plant-Based Pea Peptides</h3>
          <p>
            peas are nitrogen-fixing crops that enrich agricultural soil, requiring significantly less freshwater, land area, and carbon emissions compared to traditional dairy whey farming.
          </p>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-white uppercase font-mono">Plastic-Free Delivery</h3>
          <p>
            all our outer transit boxes are made from FSC-certified recycled cardboard and sealed with water-activated paper tape, ensuring zero plastic waste reaches your doorstep.
          </p>
        </div>
      </div>
    `
    },
    "notarunclub": {
        slug: "notarunclub",
        title: "#notarunclub",
        subtitle: "community runs, social fitness, and cold protein water.",
        html: `
      <div class="space-y-6 text-center max-w-xl mx-auto py-8">
        <p class="text-base text-zinc-300">
          no timing chips, no pressure. just real people getting outdoors, moving, and connecting over cold nowhey drinks.
        </p>
        <div class="p-8 bg-[#181818] rounded-3xl border border-white/10 space-y-4">
          <h3 class="text-2xl font-bold uppercase font-mono text-white">join the whatsapp community</h3>
          <p class="text-xs text-zinc-400">
            get weekly route updates, track locations, and meet fellow runners across London, Manchester, and Birmingham.
          </p>
          <a
            href="https://chat.whatsapp.com/FoBe3rW8Bi26H9tvHm8nZD"
            target="_blank"
            rel="noreferrer"
            class="inline-block px-8 py-3.5 bg-[#c6f91f] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-[#b0df1b] transition-all"
          >
            Join WhatsApp Group
          </a>
        </div>
      </div>
    `
    },
    "become-a-stockist-g2sm": {
        slug: "become-a-stockist-g2sm",
        title: "become a stockist",
        subtitle: "stock nowhey cans in your gym, shop, or café.",
        html: `
      <div class="space-y-6">
        <p class="text-sm text-zinc-300">
          available through leading sports nutrition wholesalers across the UK:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-sm text-zinc-400">
          <li><strong class="text-white">Protein Bargain Wholesale:</strong> Full 12-pack and mixed bundle inventory</li>
          <li><strong class="text-white">Tropicana Wholesale:</strong> Next-day pallet & case deliveries</li>
          <li><strong class="text-white">Occa Store Wholesale:</strong> Dedicated fitness retailer support</li>
        </ul>
        <div class="mt-8">
          <a href="/pages/contact" class="px-6 py-3 bg-[#c6f91f] text-black font-bold text-xs uppercase tracking-wider rounded-full inline-block">
            Contact Trade Team
          </a>
        </div>
      </div>
    `
    },
    "giveaway-terms": {
        slug: "giveaway-terms",
        title: "giveaway terms & conditions",
        subtitle: "official competition rules and conditions.",
        html: `
      <div class="space-y-4 text-xs text-zinc-400 leading-relaxed">
        <p>1. This competition runs only on Instagram. Instagram is not affiliated with or endorsing this giveaway.</p>
        <p>2. No purchase is necessary to enter this competition.</p>
        <p>3. The winner will be selected at random from all valid entries received before the closing date.</p>
        <p>4. Entrants must be aged 18 or over and resident in the United Kingdom.</p>
        <p>5. Prizes are non-transferable, non-negotiable and cannot be exchanged for cash.</p>
      </div>
    `
    },
    "news": {
        slug: "news",
        title: "news & press",
        subtitle: "the latest announcements from the nowhey team.",
        html: `
      <div class="space-y-6">
        <p class="text-sm text-zinc-400">
          stay updated with our product drops, distributor expansions, athlete sponsorships, and event appearances.
        </p>
        <div class="p-6 bg-[#161616] rounded-2xl border border-white/10 space-y-2">
          <span class="text-[10px] text-[#c6f91f] font-bold uppercase tracking-wider">Announcement</span>
          <h3 class="text-lg font-bold text-white font-mono uppercase">nowhey expands wholesale distribution to over 300 gyms</h3>
          <p class="text-xs text-zinc-400">
            partnering with leading leisure operators across London, Manchester, and Leeds to bring clean protein to athletes everywhere.
          </p>
        </div>
      </div>
    `
    },
    "policies": {
        slug: "policies",
        title: "customer policies",
        subtitle: "our legal terms, privacy policies, and guarantees.",
        html: `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="/policies/privacy-policy" class="p-6 bg-[#161616] rounded-2xl border border-white/10 hover:border-[#c6f91f] transition-colors block">
          <h3 class="text-base font-bold text-white font-mono uppercase">Privacy Policy →</h3>
          <p class="text-xs text-zinc-400 mt-2">How we handle and protect your personal information.</p>
        </a>
        <a href="/policies/terms-of-service" class="p-6 bg-[#161616] rounded-2xl border border-white/10 hover:border-[#c6f91f] transition-colors block">
          <h3 class="text-base font-bold text-white font-mono uppercase">Terms of Service →</h3>
          <p class="text-xs text-zinc-400 mt-2">Rules governing use of our website and services.</p>
        </a>
        <a href="/policies/refund-policy" class="p-6 bg-[#161616] rounded-2xl border border-white/10 hover:border-[#c6f91f] transition-colors block">
          <h3 class="text-base font-bold text-white font-mono uppercase">Refund Policy →</h3>
          <p class="text-xs text-zinc-400 mt-2">Our 30-day returns and satisfaction policy.</p>
        </a>
        <a href="/policies/shipping-policy" class="p-6 bg-[#161616] rounded-2xl border border-white/10 hover:border-[#c6f91f] transition-colors block">
          <h3 class="text-base font-bold text-white font-mono uppercase">Shipping Policy →</h3>
          <p class="text-xs text-zinc-400 mt-2">UK delivery times, couriers, and tracking details.</p>
        </a>
        <a href="/policies/subscription-policy" class="p-6 bg-[#161616] rounded-2xl border border-white/10 hover:border-[#c6f91f] transition-colors block">
          <h3 class="text-base font-bold text-white font-mono uppercase">Subscription Policy →</h3>
          <p class="text-xs text-zinc-400 mt-2">How to manage, pause, or cancel recurring deliveries.</p>
        </a>
      </div>
    `
    }
};
function getPageBySlug(slug) {
    return PAGES_DATA[slug];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeft
]);
/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheck
]);
/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Send
]);
/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("send", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)");
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_16d26rm._.js.map