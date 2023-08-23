"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 7671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABILAAASCwAAAAAAAAAAAACZrbD/mJCP/5pmX/+RRTz/iTYr/4wwJ/+LHxr/kD05/5E8Of+gZlz/ud7B/7jhzf+669r/uvXq/7z79v+9+fP/vvr0/7769P+8+vL/vvrz/7z48/+7/PP/tufs/6/e3v+07+f/sNDK/6mwp/+oj4b/rWxa/6tTOv+cQC3/jTIl/56ms/+cjJf/nmdu/5hHSf+POzX/kCsj/5ReWv+14uH/vvjv/7r27f+7/fr/ufz5/7v79v+8+/X/vPn0/7759P+8+vT/uf30/7399P++/PT/u/vz/7j48P+49er/uO3e/7bhzf+2yrn/rb6r/6eslf+nkXv/pV1C/5tCLP+NNif/oaa+/52Jpv+dZXb/m0hF/5QmHP+aenP/vP/6/8D++P+9+/b/u/r1/7z48v+8+PL/vPrz/7v69f+6+/P/u/z0/7b48v+08Oj/teXc/7XZzP+yx6//tbqZ/7mtf/+8o2r/v5tc/8GbW/+3qGn/sqds/6+VbP+obkv/mk4y/487J/+gsbr/nJSi/51uc/+fSUT/qZyV/7v/9/+8/PT/vPjx/7z58v+7+vL/vfr0/7r49f+58u7/uPTj/7Pi6P+xy9j/tsWy/7q2lf+8qHn/vpph/7+RUP/Di0j/wYdE/8KHRP/BhEP/wIVI/8CCSP+4iVX/q55t/6iEV/+dUzf/ljoo/5+8uf+cp67/n4SG/6q/tv+5//v/uvrv/7v57f/A/e7/ufHv/7Xh7f+01uT/tM/M/7K0z/+zqrz/tKGX/7aKc/+2e1D/s3BB/7RlNv/DeT//xHc+/8V1PP/GcDv/xHE5/8RuOf/BZzL/v2Qy/71lMf+5cDf/rIdL/6RdP/+cQS3/wu3b/7jYuP+83sn/0f///8/69P/M/PP/wOvq/7je4v+0zeD/s7ne/7Ga0P+ueYL/qGJU/6BWSv+fTjb/oEgw/5s8KP+YNiX/mjgn/5s6Jv+fPyb/slQt/7ZWLf+5YC//tVos/8J6Tf/IhVn/x4pi/82Rbv/DkWP/rFg1/6dCIf/Q8+P/v9Ca/8Pduf/m//v/3vzx/+D/9P/K3ez/rrrk/7Gw2P+zp9L/sZPR/6pye/+nVT//olE8/5xJLv+ZQCj/lzwl/5M4IP+VPyT/iSkg/4csHv+HKxz/ijUk/406Jv+SPCz/0tjJ/+T/9f/g//D/5f/5/87AnP/Uu47/1cGS/8/r1v+7zZb/xNyk/+X/2//e/tb/3v3X/+P/0f/J49n/rK3g/6+h2v+vjNT/rX+o/7Bzgv+sbG7/olxa/6NVRv+hTTX/oVFD/5RAMf+POiP/izgi/5RBIP+ORzb/k1I3/8a3jf/n/9H/3/zM/+D8y//h/83/y7aH/9zwr//h/8z/0ei8/73NiP/F2of/5P+t/979rv/e/qz/3v+n/9n4rP/B0sT/wsu9/8XHuP+8rcf/tIPD/7aLov+rcIT/q2Zi/6paRP+xbWf/l0ZA/5A1If+QQCv/oVYz/8K7aP/O23j/2/SV/+D/o//d/p//3v2g/+D/oP/GvHz/1uaI/93/lP/R4Jz/vMdz/8TXa//g/3r/2/15/9v/ev/b/nr/2v93/9z/cv/c/3T/4P9u/83pnf+3krz/tHWP/6tkbv+nXlH/o1E5/65lV/+gT0L/oWcz/83ZXf/S7l//2P9p/9v/cf/b/3L/3P11/9v+c//Y/XD/2v9w/73Hev/V7Gr/2/9o/8zgjP/Fz2f/ydxh/9n/Wf/W/Vn/1/5a/9f/Wv/X/lr/1f1Y/9T9Wv/T/VX/0/9X/9H0X//M1Wz/t4Zl/6JVS/+fSTL/qV9R/8mia//Z/1X/1/9S/9T/Uf/T/FD/0/xS/9X+Vv/W/1j/1f9W/9X+Vv/W/1j/utV//9HxVP/V/07/ydGD/9L5T//S+1L/0v1P/9L8T//T/E7/0vtN/9P7Tv/T/VH/0f9O/9L5YP/R8oP/yveU/8WxaP/DmH3/rnln/6poS/+saU3/qmZF/7SUTP/Jt2H/1utX/9L/R//S+kn/0ftL/9D1Sv/R90r/0fdM/9L6Sf+76pn/yt9d/9LsQf/JvHL/0fBF/9DwSP/O7Uf/zu5G/83tRP/N7EP/zvJI/8/2RP/N8Uf/wfC3/8DJx/+/uLD/vYuL/7JyZP+RQTD/m1U7/5tMMP+UPSn/kDgq/5Q6M/+pcDr/x8k9/87mQ//P70L/y95C/83WSP/P2kr/z9dC/8jymP/JyWn/zLtE/8m6bP/P5kX/0OFJ/8/hR//P4Uf/zeFG/8zpRv/Q80T/zPJq/7nst/+t/ej/uM+7/7qIef+ka1v/ijgm/4c0I/+HMCL/k0Iu/6pqRf+dWTf/lk8w/4YtIv+ZTSz/xLxD/83XRf/Ozkf/zshM/9DET//Rvkn/y+yF/8jAYf/KqUn/xrBe/87cRP/Q2Er/z9dH/87ZR//O3En/0O1E/8n2hP+89ej/vune/7/65f+9xbP/o19H/49AK/+HMyP/iTQl/4o1Jf+KNib/jTwq/5xWOP+TSDD/kkku/5VGL/+QPSn/ubNA/87YSf/Kvkn/zLlM/86zSf/L6nL/xrdV/8CiWf+/okv/zthE/8/WSf/O0kf/ztVI/8zdR//P8Ez/u/fU/7by7/+46dj/xv/5/7Sgjf+IMR7/lUoz/5dMMP+RQy3/jTso/4o3JP+ELiD/k0cv/5ZNNP+XTTP/kEMt/4YsJf+UTS3/wb9B/8rCSP/JtUv/y6xJ/8rnZv/CtVD/uYVD/8GeSf/N2UH/ztdE/83RQ//O2Ub/zuJB/8z3Z/+69OL/t/Xp/8Pk0/+wtKf/mF1L/5ZKMP+VRzD/kkUr/5VJLf+QPiv/jTkn/4s5J/+USzD/k0cu/5FFLP+NOif/jz4p/5A5K/+aWi3/ytFF/8ezSf/Ip0j/yeRc/8CzSf+1cjj/wpVD/8nXP//M1kL/ytJC/8zdRf/P7Ef/z/p7/7j47P+44dD/sZF7/4guG/+QQyv/lUsx/5JILv+URi//l0wx/48/K/+LOSj/jDop/5JCKf+MPCf/jkEr/51aOP+TRy3/mEsx/5tUNP+9tz//xrpI/8SjR//I5lb/u6dC/7eBPP/IwT7/yNM+/8rTQv/K1kP/zOVH/8/3Sv/E+rX/uf32/8LLvP+malb/jUkw/4k7KP+HNCT/hzUl/4c0JP+GMyL/hTEh/4c0JP+BKhz/nVdC/49BLv+NQCn/nV44/5JELf+dUTT/nE01/62MOP/Hw0n/v5pE/8fNUP+8n0j/qmU3/8fSPv/Iz0L/zOVC/8rmPv/L6EX/0PhG/8b7vP+9+/L/xM6+/65wXv+WUDn/j0Mu/4s1If+NOyj/jkAu/5BDMv+SRDL/jz8s/5BDMP+sblX/o19E/5BGK/+aVjX/kEEr/5tPMf+bUDH/lVEq/8XMRP/BrUb/u4VC/7ZzQf+jXjb/yOc7/8vsPv/O9zv/ydw+/8ngQf/O90z/xfq//7nx7f++yLv/sH1q/55iSv+gYU7/vJ2G/6FxWf+UTzX/nV0//6JpSf+cVTf/pWlP/7yLcf+dVz7/kUku/5RLLP+NPin/mU8z/5pNMP+dbC7/w78+/8O3W/+zrVP/pkcx/5tML//K8zn/ze86/8rQP//JykT/x9FG/9H3Qf/K/pn/t+rz/72xpf+/kYX/q15Q/7azmv/C////u/jt/6mpnf+maVn/ij0q/4xALv+RPSr/woN0/55WQ/+IPSn/kkcr/5ZLNP+kZUT/l0gs/6F1Lv/E0T3/tYJD/6dWOf+jTTH/lTsr/8bUQv/HuUP/yN07/8ffPP/HykL/z/NF/838df/E9Nv/t52l/6dxT//J3Un/zvd0/7375f+6+vv/x//5/8nKwf+kbWD/sHNk/6RPRf/NnZP/uIJ4/5dRQf+PQSb/lEct/51eNP+JMyX/pIIt/8jjOv+xdjn/oEYy/7F9PP+SOyn/qW05/6llOf+/sDf/yLZB/8XGQP/L7kX/0fpC/9D7XP/H42v/yd88/9P/SP/Q/ET/0PlV/7v4zv+y9+b/tf/o/7DHvP+kYl//tZVR/8Hxy/+5vrD/kEU3/5JGLf+RRSv/j0oq/4QwIv/A1jb/xdE9/6trOf+XPy7/n1gw/4ozJP+YQTD/mDsy/7F8OP/Coz7/xMM8/8vkP//P+UX/z/lB/9L+PP/T/kb/z/FD/876QP/Q+j7/0flK/8vyWP/N76b/wM7C/7eySf/N+kD/y/6M/7Tk4v+w2sb/rI1//5tXP/+KOSn/mFov/8TXOf/Btj3/pF0y/5I4K/+aVS7/gywk/5RAL/+UPC7/n1Iy/7qWPf++sTj/ydo9/8/vQ//N6ET/zNdE/87qQP/M50D/y+BA/83nQf/P6EP/zNQ2/8vKdv/N1qP/y+c5/8zwO//P91L/u//p/7T/+v+unY//mlE+/4w/Kf+nkjL/xMc//7aSOP+ROin/ijEn/4YsJP99JCD/jTYr/5A2LP+SNy//soc5/7aSNv/Fzz7/zN9C/87xQv/L6ED/zOs+/8rXP//K00D/zdlB/8vcQP/I0kH/yuRK/8zeWf/J4T3/yepD/8bURP/I6lT/w/7H/7OTmv+kVFb/oH4u/8TbOv/CrUD/n1ou/4YpJv+ELCX/fygh/3kiHv+IMSf/izIq/4krKv+gZDL/sn41/7aUOf/I2D//zO1C/832Qf/K3z//xsw//8rQQP/Lzj//yuk6/8npPP/M6zz/zN87/8fXP//J7EH/yORE/8ruN//M90X/x81e/8HHR//E5jr/xLVA/8CaO/+RPin/gick/38mIf93Ix//cx8c/4EsJP+ELSX/gyom/40+Kv+rdjP/m0st/8XOP//J1T7/yuxA/8foP//I3kD/ytxA/8nYPv/K5jz/ye86/8bTPf/Iy0D/yeU+/8r1Pv/N+T//y/U//83zPf/O+zn/yfY6/8S9P//DqD//om4u/4IqJP9/JiL/dyIe/3IfHf9tHRr/eich/34oIv9+KCP/gS0l/5FDKP+IJCb/qX41/8zZQP/IzUD/y+5A/8v1QP/M8kL/zPNB/8rvP//G5ED/xNtA/8jpPf/K8jz/yOk8/8nlP//L8z7/yvM8/8jsPP/EvUP/waRA/55oLv96IR//eyMg/3ghHf9xHhz/bx4b/2gaGP9zIh3/dyMe/3gkH/96IyD/gCsl/40+LP+BJCT/rY42/8rWQv/H0T//x+Q//8voP//I6z3/xOs8/8XrP//G6z7/yOc//8XfPv/E0T7/xMs//8biPf/G4D7/w8VD/8bBRf+vkDf/fygh/3giHv91IRz/cB0b/2wbGP9qGRj/YxYU/2seGP9uHxn/cCEa/24XFv+GTzL/trhM/3woIP95Ih7/v8lE/8nuQ//D3z3/xMZC/8TaPP/B1Tr/wsxA/8XWPv/E1j7/wtA6/8PQO//E3D3/xM8+/8jbQP/FyUL/ytVB/7iaOv+LSif/axsX/2wdGf9mGhf/ZBgW/2AWE/9eFBL/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5Cjrscr%5Cgit%5CmyPortfolio%5Csrc%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "export"
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!C:\\Users\\jrscr\\git\\myPortfolio\\src\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(7671)));
module.exports = __webpack_exports__;

})();