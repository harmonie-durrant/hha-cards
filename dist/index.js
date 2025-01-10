// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9mu7C":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8lqZg":[function(require,module,exports,__globalThis) {
var _cardJs = require("./cards/person-card/card.js");
var _cardJs1 = require("./cards/room-card/card.js");
var _editorJs = require("./cards/person-card/editor.js");
var _editorJs1 = require("./cards/room-card/editor.js");
var _constantsJs = require("./constants.js");
const add_card = (card, cardClass, editorClass)=>{
    customElements.define(card.type, cardClass);
    window.customCards = window.customCards || [];
    window.customCards.push({
        type: card.type,
        name: card.name,
        description: card.description
    });
    if (editorClass) customElements.define(`${card.type}-editor`, editorClass);
};
add_card((0, _constantsJs.CARDS).personCard, (0, _cardJs.HHAPersonCard), (0, _editorJs.HHAPersonCardEditor));
add_card((0, _constantsJs.CARDS).roomCard, (0, _cardJs1.HHARoomCard), (0, _editorJs1.HHARoomCardEditor));

},{"./cards/person-card/card.js":"USrl2","./cards/room-card/card.js":"h5PfE","./cards/person-card/editor.js":"4kapC","./cards/room-card/editor.js":"dWVKX","./constants.js":"3huJa"}],"USrl2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HHAPersonCard", ()=>HHAPersonCard);
var _constantsJs = require("../../constants.js");
var _utilsJs = require("../../utils.js");
var _cardHtml = require("bundle-text:./card.html");
var _cardHtmlDefault = parcelHelpers.interopDefault(_cardHtml);
var _cardCss = require("bundle-text:./card.css");
var _cardCssDefault = parcelHelpers.interopDefault(_cardCss);
class HHAPersonCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        });
        this._currentLanguage = (0, _constantsJs.LANG).default;
        this._hass = null;
        this._elements = {};
        this._isBuilt = false;
        this._config = {
            slug: (0, _constantsJs.CARDS).personCard.type,
            name: (0, _constantsJs.CARDS).personCard.name
        };
        this._selectors = {
            container: "container",
            left: "left",
            shape: "shape",
            icon: "icon",
            avatar: "avatar",
            right: "right",
            name: "name",
            status: "status",
            alert: "alert",
            badge: "badge",
            badge_icon: "badge-icon"
        };
        this._layout_size = {
            horizontal: {
                grid_rows: 1,
                grid_min_rows: 1,
                grid_columns: 2,
                grid_min_columns: 2
            },
            vertical: {
                grid_rows: 2,
                grid_min_rows: 2,
                grid_columns: 1,
                grid_min_columns: 1
            }
        };
    }
    static getConfigElement() {
        return document.createElement(`${(0, _constantsJs.CARDS).personCard.type}-editor`);
    }
    setConfig(config) {
        const layoutChanged = this._config?.layout !== config.layout;
        this._config = config;
        this._max_value = this._config.max_value;
        if (this._config.unit) this._unit = this._config.unit;
        if (!this._isBuilt) {
            this._isBuilt = true;
            this._buildCard();
        }
        if (layoutChanged) this._changeLayout();
    }
    set hass(hass) {
        this._hass = hass;
        this._currentLanguage = (0, _constantsJs.LANG).getLanguage(hass.config.language);
        this._updateDynamicElements();
    }
    _buildCard() {
        const wrapper = document.createElement('ha-card');
        wrapper.classList.add(this._config.slug);
        wrapper.innerHTML = (0, _cardHtmlDefault.default);
        const style = document.createElement('style');
        style.textContent = (0, _cardCssDefault.default) + (0, _constantsJs.GLOW).cssGlowStyles();
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);
        this._elements = {
            [this._selectors.root]: wrapper,
            [this._selectors.container]: this.shadowRoot.querySelector(`.${this._selectors.container}`),
            [this._selectors.right]: this.shadowRoot.querySelector(`.${this._selectors.right}`),
            [this._selectors.icon]: this.shadowRoot.querySelector(`.${this._selectors.icon}`),
            [this._selectors.shape]: this.shadowRoot.querySelector(`.${this._selectors.shape}`),
            [this._selectors.avatar]: this.shadowRoot.querySelector(`.${this._selectors.avatar}`),
            [this._selectors.name]: this.shadowRoot.querySelector(`.${this._selectors.name}`),
            [this._selectors.status]: this.shadowRoot.querySelector(`.${this._selectors.status}`),
            [this._selectors.alert]: this.shadowRoot.querySelector(`.${this._selectors.alert}`),
            [this._selectors.badge]: this.shadowRoot.querySelector(`.${this._selectors.badge}`),
            [this._selectors.badge_icon]: this.shadowRoot.querySelector(`.${this._selectors.badge_icon}`)
        };
    }
    _changeLayout() {
        if (this._config.layout === (0, _constantsJs.GLOBAL).layouts[1].value) {
            this._elements[this._selectors.container].style.flexDirection = 'column';
            this._elements[this._selectors.right].style.textAlign = 'center';
            this._elements[this._selectors.right].style.width = '90%';
            this._elements[this._selectors.right].style.flexGrow = '0';
        } else {
            this._elements[this._selectors.container].style.flexDirection = 'row';
            this._elements[this._selectors.right].style.textAlign = 'left';
            this._elements[this._selectors.right].style.width = '100%';
            this._elements[this._selectors.right].style.flexGrow = '1';
        }
    }
    _updateDynamicElements() {
        if (!this._config.entity) {
            this._showError((0, _utilsJs.getMessage)('ENTITY_ERROR', this._currentLanguage));
            return;
        }
        this._hideError();
        const entity = this._hass?.states[this._config.entity];
        if (!entity) {
            this._showError((0, _utilsJs.getMessage)('ENTITY_NOTFOUND', this._currentLanguage));
            return;
        }
        this._hideError();
        (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.name], (el)=>{
            el.textContent = this._config.name || entity.attributes.friendly_name || this._config.entity;
        });
        (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.status], (el)=>{
            if (!entity.state || entity.state == 'unavailable') el.textContent = (0, _utilsJs.getMessage)('UNAVAILABLE', this._currentLanguage);
            else if (entity.state == 'home') el.textContent = (0, _utilsJs.getMessage)('HOME', this._currentLanguage);
            else if (entity.state == 'unknown') el.textContent = (0, _utilsJs.getMessage)('UNKNOWN', this._currentLanguage);
            else el.textContent = (0, _utilsJs.getMessage)('AWAY', this._currentLanguage);
        });
        if (entity.state == 'home') {
            this._elements[this._selectors.badge].style.display = (0, _constantsJs.GLOBAL).styleEdit.SHOWF;
            (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.badge_icon], (el)=>{
                el.setAttribute('icon', (0, _constantsJs.GLOBAL).homeIcon);
            });
            (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.badge], (el)=>{
                el.style.backgroundColor = '#4CAF50';
            });
        } else if (entity.state == 'not_home') {
            this._elements[this._selectors.badge].style.display = (0, _constantsJs.GLOBAL).styleEdit.SHOWF;
            (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.badge_icon], (el)=>{
                el.setAttribute('icon', (0, _constantsJs.GLOBAL).awayIcon);
            });
            (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.badge], (el)=>{
                el.style.backgroundColor = "#F44336";
            });
        } else this._elements[this._selectors.badge].style.display = (0, _constantsJs.GLOBAL).styleEdit.HIDE;
        var avatar = entity.attributes.entity_picture;
        if (avatar) {
            this._elements[this._selectors.avatar].style.display = (0, _constantsJs.GLOBAL).styleEdit.SHOW;
            this._elements[this._selectors.shape].style.display = (0, _constantsJs.GLOBAL).styleEdit.HIDE;
            this._elements[this._selectors.icon].style.display = (0, _constantsJs.GLOBAL).styleEdit.HIDE;
            (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.avatar], (el)=>{
                el.src = avatar;
            });
        } else {
            this._elements[this._selectors.avatar].style.display = (0, _constantsJs.GLOBAL).styleEdit.HIDE;
            this._elements[this._selectors.shape].style.display = (0, _constantsJs.GLOBAL).styleEdit.SHOW;
            this._elements[this._selectors.icon].style.display = (0, _constantsJs.GLOBAL).styleEdit.SHOW;
            (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.icon], (el)=>{
                el.setAttribute('icon', this._config.icon || entity.attributes.icon || (0, _constantsJs.GLOBAL).alertIcon);
                el.style.color = this._config.color || (0, _constantsJs.GLOBAL).defaultColor;
            });
            (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.shape], (el)=>{
                el.style.backgroundColor = this._config.color || (0, _constantsJs.GLOBAL).defaultColor;
            });
        }
        // Charging animation
        const charging = this._hass?.states[this._config.charge_state_entity]?.state || '';
        if (charging == 'charging' || charging == 'Charging') (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.root], (el)=>{
            el.classList.add('glow');
            el.classList.remove('glow-off');
            // Set the color for the glow
            el.style.setProperty('--glow-color', this._config.charging_color || (0, _constantsJs.GLOW).colors.charging);
        });
        else (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.root], (el)=>{
            el.classList.add('glow-off');
            el.classList.remove('glow-charging');
        });
    }
    _showError(message) {
        const alertElement = this._elements[this._selectors.alert];
        if (alertElement) {
            alertElement.style.display = 'flex';
            alertElement.textContent = message;
        }
    }
    _hideError() {
        const alertElement = this._elements[this._selectors.alert];
        if (alertElement) alertElement.style.display = 'none';
    }
    getCardSize() {
        if (this._config.layout === (0, _constantsJs.GLOBAL).layouts[1].value) return this._layout_size.vertical.grid_rows;
        return this._layout_size.horizontal.grid_rows;
    }
    getLayoutOptions() {
        if (this._config.layout === (0, _constantsJs.GLOBAL).layouts[1].value) return this._layout_size.vertical;
        return this._layout_size.horizontal;
    }
}

},{"../../constants.js":"3huJa","../../utils.js":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","bundle-text:./card.html":"eGT6L","bundle-text:./card.css":"8EAyJ"}],"3huJa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLOBAL", ()=>GLOBAL);
parcelHelpers.export(exports, "CARDS", ()=>CARDS);
parcelHelpers.export(exports, "LANG", ()=>LANG);
parcelHelpers.export(exports, "UTILS", ()=>UTILS);
parcelHelpers.export(exports, "GLOW", ()=>GLOW);
const GLOBAL = {
    styleEdit: {
        SHOW: 'block',
        SHOWF: 'flex',
        HIDE: 'none'
    },
    alertIcon: 'mdi:alert',
    helpIcon: 'mdi:help',
    awayIcon: 'mdi:home-export-outline',
    homeIcon: 'mdi:home',
    defaultColor: 'var(--state-icon-color)',
    colors: [
        {
            name: 'Default',
            value: 'var(--state-icon-color)'
        },
        {
            name: 'Accent',
            value: 'var(--accent-color)'
        },
        {
            name: 'Info',
            value: 'var(--info-color)'
        },
        {
            name: 'Success',
            value: 'var(--success-color)'
        },
        {
            name: 'Disable',
            value: 'var(--disabled-color)'
        },
        {
            name: 'Red',
            value: 'var(--red-color)'
        },
        {
            name: 'Pink',
            value: 'var(--pink-color)'
        },
        {
            name: 'Purple',
            value: 'var(--purple-color)'
        },
        {
            name: 'Deep purple',
            value: 'var(--deep-purple-color)'
        },
        {
            name: 'Indigo',
            value: 'var(--indigo-color)'
        },
        {
            name: 'Blue',
            value: 'var(--blue-color)'
        },
        {
            name: 'Light blue',
            value: 'var(--light-blue-color)'
        },
        {
            name: 'Cyan',
            value: 'var(--cyan-color)'
        },
        {
            name: 'Teal',
            value: 'var(--teal-color)'
        },
        {
            name: 'Green',
            value: 'var(--green-color)'
        },
        {
            name: 'Light green',
            value: 'var(--light-green-color)'
        },
        {
            name: 'Lime',
            value: 'var(--lime-color)'
        },
        {
            name: 'Yellow',
            value: 'var(--yellow-color)'
        },
        {
            name: 'Amber',
            value: 'var(--amber-color)'
        },
        {
            name: 'Orange',
            value: 'var(--orange-color)'
        },
        {
            name: 'Deep orange',
            value: 'var(--deep-orange-color)'
        },
        {
            name: 'Brown',
            value: 'var(--brown-color)'
        },
        {
            name: 'Light grey',
            value: 'var(--light-grey-color)'
        },
        {
            name: 'Grey',
            value: 'var(--grey-color)'
        },
        {
            name: 'Dark grey',
            value: 'var(--dark-grey-color)'
        },
        {
            name: 'Blue grey',
            value: 'var(--blue-grey-color)'
        },
        {
            name: 'Black',
            value: 'var(--black-color)'
        },
        {
            name: 'White',
            value: 'var(--white-color)'
        }
    ],
    layouts: [
        {
            name: 'Horizontal (default)',
            value: 'horizontal'
        },
        {
            name: 'Vertical',
            value: 'vertical'
        }
    ]
};
const CARDS = {
    personCard: {
        type: "hha-person-card",
        name: "HHA Person Card",
        description: "Get info on a person in your Home.",
        inputFields: [
            {
                name: 'entity',
                label: {
                    en: 'Entity',
                    fr: "Entit\xe9"
                },
                type: 'person',
                required: true,
                description: {
                    en: 'Select an person.',
                    fr: "S\xe9lectionnez une personne."
                }
            },
            {
                name: 'name',
                label: {
                    en: 'Name',
                    fr: 'Nom'
                },
                type: 'text',
                required: false,
                description: {
                    en: 'Enter a name for the entity.',
                    fr: "Saisissez un nom pour l'entit\xe9."
                }
            },
            {
                name: 'layout',
                label: {
                    en: 'Layout',
                    fr: 'Disposition'
                },
                type: 'layout',
                required: false,
                description: {
                    en: 'Select the layout.',
                    fr: "S\xe9lectionnez la disposition."
                }
            },
            {
                name: 'icon',
                label: {
                    en: 'Icon',
                    fr: "Ic\xf4ne"
                },
                type: 'icon',
                required: false,
                description: {
                    en: 'Select an icon for the entity.',
                    fr: "S\xe9lectionnez une ic\xf4ne pour l'entit\xe9."
                }
            },
            {
                name: 'color',
                label: {
                    en: 'Primary color',
                    fr: "Couleur de l'ic\xf4ne"
                },
                type: 'color',
                required: false,
                description: {
                    en: 'Select the primary color for the icon.',
                    fr: "S\xe9lectionnez la couleur principale de l'ic\xf4ne."
                }
            },
            {
                name: 'charge_state_entity',
                label: {
                    en: 'Charge State Entity',
                    fr: "Entit\xe9 pour l'\xe9tat de la charge"
                },
                type: 'entity',
                required: false,
                description: {
                    en: 'Select a charge state entity.',
                    fr: "S\xe9lectionnez une entit\xe9 pour voir l'\xe9tat de la charge."
                }
            },
            {
                name: 'charging_color',
                label: {
                    en: 'Charging color',
                    fr: 'Couleur pour la charge'
                },
                type: 'color',
                required: false,
                description: {
                    en: 'Select the color for the charging glow.',
                    fr: "S\xe9lectionnez la couleur pour la lueur de charge."
                }
            }
        ]
    },
    roomCard: {
        type: "hha-room-card",
        name: "HHA Room Card",
        description: "Get info about a room in your Home.",
        inputFields: [
            {
                name: 'name',
                label: {
                    en: 'Room Name',
                    fr: "Nom de la Pi\xe8ce"
                },
                type: 'text',
                required: true,
                description: {
                    en: 'Enter a name for the room.',
                    fr: "Saisissez un nom pour la pi\xe8ce."
                }
            },
            {
                name: 'layout',
                label: {
                    en: 'Layout',
                    fr: 'Disposition'
                },
                type: 'layout',
                required: false,
                description: {
                    en: 'Select the layout.',
                    fr: "S\xe9lectionnez la disposition."
                }
            },
            {
                name: 'icon',
                label: {
                    en: 'Icon',
                    fr: "Ic\xf4ne"
                },
                type: 'icon',
                required: false,
                description: {
                    en: 'Select an icon for the entity.',
                    fr: "S\xe9lectionnez une ic\xf4ne pour l'entit\xe9."
                }
            },
            {
                name: 'color',
                label: {
                    en: 'Primary color',
                    fr: "Couleur de l'ic\xf4ne"
                },
                type: 'color',
                required: false,
                description: {
                    en: 'Select the primary color for the icon.',
                    fr: "S\xe9lectionnez la couleur principale de l'ic\xf4ne."
                }
            },
            // TODO: hvac option for heating and cooling in one
            {
                name: 'heating',
                label: {
                    en: 'Heating toggle',
                    fr: 'Toggle pour la chauffage.'
                },
                type: 'bool',
                required: false,
                description: {
                    en: 'Select a switch or boolean selsor.',
                    fr: "S\xe9lectionnez une switch ou un sensor bool\xe9en."
                }
            },
            {
                name: 'heating_color',
                label: {
                    en: 'Heating color',
                    fr: 'Couleur pour la chauffage'
                },
                type: 'color',
                required: false,
                description: {
                    en: 'Select the color for the heating glow.',
                    fr: "S\xe9lectionnez la couleur pour la lueur du chauffage."
                }
            },
            {
                name: 'cooling',
                label: {
                    en: 'Cooling toggle',
                    fr: 'Toggle pour la climatisation.'
                },
                type: 'bool',
                required: false,
                description: {
                    en: 'Select a switch or boolean selsor.',
                    fr: "S\xe9lectionnez une switch ou un sensor bool\xe9en."
                }
            },
            {
                name: 'cooling_color',
                label: {
                    en: 'Cooling color',
                    fr: 'Couleur pour la climatisation'
                },
                type: 'color',
                required: false,
                description: {
                    en: 'Select the color for the cooling glow.',
                    fr: "S\xe9lectionnez la couleur pour la lueur du climatisation."
                }
            }
        ]
    }
};
const LANG = {
    default: "en",
    messages: {
        en: {
            ENTITY_ERROR: "The 'entity' parameter is required!",
            ENTITY_NOTFOUND: "Entity not found in Home Assistant.",
            UNAVAILABLE: "Unavailable",
            NO_NAME: "The 'name' parameter is required!",
            AWAY: "away",
            UNKNOWN: "unknown",
            HOME: "home"
        },
        fr: {
            ENTITY_ERROR: "Le param\xe8tre 'entity' est requis !",
            ENTITY_NOTFOUND: "Entit\xe9 introuvable dans Home Assistant.",
            UNAVAILABLE: "Indisponible",
            NO_NAME: "Le param\xe8tre 'name' est requis !",
            AWAY: "sorti(e)",
            UNKNOWN: "inconnu",
            HOME: "\xe0 la maison"
        }
    },
    getLanguage: (language)=>{
        for(const key in LANG.messages){
            if (key === language) return key;
        }
        return LANG.default;
    }
};
const UTILS = {
    updateElement (element, callback) {
        if (element) {
            const newValue = callback(element);
            if (element.textContent !== newValue) callback(element);
        }
    },
    addChoices (select, options) {
        options.forEach((option)=>{
            const choice = document.createElement('mwc-list-item');
            choice.value = option.value;
            choice.innerText = option.name;
            select.appendChild(choice);
        });
    }
};
const GLOW = {
    colors: {
        charging: '#00FF00',
        heating: '#FF4D00',
        cooling: '#40A1EB',
        light: '#FFE79E'
    },
    cssGlowStyles: ()=>{
        return `
			.glow {
				animation: breathing-shadow 1.5s infinite alternate ease-in-out;
			}

			@keyframes breathing-shadow {
				0% {
					box-shadow: 0px 0px 10px 1px var(--glow-color);
				}
				100% {
					box-shadow: 0px 0px 13px 3px var(--glow-color);
				}
			}

			.glow-off {
				animation: none;
			}
		`;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"en4he":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMessage", ()=>getMessage);
var _constantsJs = require("./constants.js");
const getMessage = (key, lang)=>(0, _constantsJs.LANG).messages[lang]?.[key] || (0, _constantsJs.LANG).messages[(0, _constantsJs.LANG).default]?.[key] || '';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./constants.js":"3huJa"}],"eGT6L":[function(require,module,exports,__globalThis) {
module.exports = "<!-- Main container -->\r\n<div class=\"container\">\r\n\t<!-- Icon Section (avatar or icon) -->\r\n\t<div class=\"left\">\r\n\t\t<img class=\"avatar\" alt=\"avatar\">\r\n\t\t<div class=\"shape\"></div>\r\n\t\t<ha-icon class=\"icon\"></ha-icon>\r\n\t\t<div class=\"badge\">\r\n\t\t\t<ha-icon class=\"badge-icon\"></ha-icon>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Section droite avec le texte -->\r\n\t<div class=\"right\">\r\n\t\t<div class=\"name\"></div>\r\n\t\t<div class=\"status\"></div>\r\n\t</div>\r\n</div>\r\n<!-- HA Alert -->\r\n<ha-alert style=\"display: none\" type=\"error\"></ha-alert><script src=\"/card.1d3812ef.js\"></script>";

},{}],"8EAyJ":[function(require,module,exports,__globalThis) {
module.exports = "ha-card {\n  --glow-color: \"#00FF00\";\n  box-sizing: border-box;\n  border: none;\n  border-radius: 8px;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 600px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n}\n\n.container {\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n  margin: 7px 10px;\n  padding: 0;\n  display: flex;\n  overflow: hidden;\n}\n\n.left {\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  position: relative;\n}\n\n.shape {\n  background-color: var(--state-icon-color);\n  opacity: .2;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: block;\n  position: absolute;\n}\n\n.avatar {\n  aspect-ratio: 1;\n  object-fit: fill;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: none;\n  position: absolute;\n}\n\n.icon {\n  z-index: 1;\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n\n.badge {\n  z-index: 2;\n  --mdc-icon-size: var(--badge-icon-size, 12px);\n  background-color: #4caf50;\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n}\n\n.badge-icon {\n  display: flex;\n}\n\n.right {\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: flex-start;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n\n.name {\n  color: var(--primary-text-color);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  font-size: 1em;\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.status {\n  color: var(--primary-text-color);\n  text-overflow: ellipsis;\n  font-size: .9em;\n}\n\nha-alert {\n  z-index: 10;\n  background-color: #000;\n  justify-content: center;\n  align-items: center;\n  width: 105%;\n  height: 110%;\n  display: flex;\n  position: absolute;\n  top: -1px;\n  left: -2px;\n}\n";

},{}],"h5PfE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HHARoomCard", ()=>HHARoomCard);
var _constantsJs = require("../../constants.js");
var _utilsJs = require("../../utils.js");
var _cardHtml = require("bundle-text:./card.html");
var _cardHtmlDefault = parcelHelpers.interopDefault(_cardHtml);
var _cardCss = require("bundle-text:./card.css");
var _cardCssDefault = parcelHelpers.interopDefault(_cardCss);
class HHARoomCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        });
        this._currentLanguage = (0, _constantsJs.LANG).default;
        this._hass = null;
        this._elements = {};
        this._isBuilt = false;
        this._config = {
            slug: (0, _constantsJs.CARDS).roomCard.type,
            name: (0, _constantsJs.CARDS).roomCard.name
        };
        this._selectors = {
            container: "container",
            left: "left",
            shape: "shape",
            icon: "icon",
            avatar: "avatar",
            right: "right",
            name: "name",
            status: "status",
            alert: "alert"
        };
        this._layout_size = {
            horizontal: {
                grid_rows: 1,
                grid_min_rows: 1,
                grid_columns: 2,
                grid_min_columns: 2
            },
            vertical: {
                grid_rows: 2,
                grid_min_rows: 2,
                grid_columns: 1,
                grid_min_columns: 1
            }
        };
    }
    static getConfigElement() {
        return document.createElement(`${(0, _constantsJs.CARDS).roomCard.type}-editor`);
    }
    setConfig(config) {
        const layoutChanged = this._config?.layout !== config.layout;
        this._config = config;
        this._max_value = this._config.max_value;
        if (this._config.unit) this._unit = this._config.unit;
        if (!this._isBuilt) {
            this._isBuilt = true;
            this._buildCard();
        }
        if (layoutChanged) this._changeLayout();
    }
    set hass(hass) {
        this._hass = hass;
        this._currentLanguage = (0, _constantsJs.LANG).getLanguage(hass.config.language);
        this._updateDynamicElements();
    }
    _buildCard() {
        const wrapper = document.createElement('ha-card');
        wrapper.classList.add(this._config.slug);
        wrapper.innerHTML = (0, _cardHtmlDefault.default);
        const style = document.createElement('style');
        style.textContent = (0, _cardCssDefault.default) + (0, _constantsJs.GLOW).cssGlowStyles();
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);
        this._elements = {
            [this._selectors.root]: wrapper,
            [this._selectors.container]: this.shadowRoot.querySelector(`.${this._selectors.container}`),
            [this._selectors.right]: this.shadowRoot.querySelector(`.${this._selectors.right}`),
            [this._selectors.icon]: this.shadowRoot.querySelector(`.${this._selectors.icon}`),
            [this._selectors.shape]: this.shadowRoot.querySelector(`.${this._selectors.shape}`),
            [this._selectors.name]: this.shadowRoot.querySelector(`.${this._selectors.name}`),
            [this._selectors.status]: this.shadowRoot.querySelector(`.${this._selectors.status}`),
            [this._selectors.alert]: this.shadowRoot.querySelector(`.${this._selectors.alert}`)
        };
    }
    _changeLayout() {
        if (this._config.layout === (0, _constantsJs.GLOBAL).layouts[1].value) {
            this._elements[this._selectors.container].style.flexDirection = 'column';
            this._elements[this._selectors.right].style.textAlign = 'center';
            this._elements[this._selectors.right].style.width = '90%';
            this._elements[this._selectors.right].style.flexGrow = '0';
        } else {
            this._elements[this._selectors.container].style.flexDirection = 'row';
            this._elements[this._selectors.right].style.textAlign = 'left';
            this._elements[this._selectors.right].style.width = '100%';
            this._elements[this._selectors.right].style.flexGrow = '1';
        }
    }
    _updateDynamicElements() {
        if (!this._config.name) {
            this._showError((0, _utilsJs.getMessage)('NO_NAME', this._currentLanguage));
            return;
        }
        this._hideError();
        (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.name], (el)=>{
            el.textContent = this._config.name || (0, _utilsJs.getMessage)('UNAVAILABLE', this._currentLanguage);
        });
        // const climate = this._hass?.states[this._config.climate]?.state || '';
        const heating = this._hass?.states[this._config.heating]?.state || '';
        const cooling = this._hass?.states[this._config.cooling]?.state || '';
        (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.status], (el)=>{
            el.textContent = heating == 'on' || heating == 'heating' ? "heating" : cooling == 'on' || cooling == 'cooling' ? "cooling" : "Off";
        });
        // icon
        (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.icon], (el)=>{
            el.setAttribute(this._selectors.icon, this._config.icon || (0, _constantsJs.GLOBAL).alertIcon);
            el.style.color = this._config.color || (0, _constantsJs.GLOBAL).defaultColor;
        });
        (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.shape], (el)=>{
            el.style.backgroundColor = this._config.color || (0, _constantsJs.GLOBAL).defaultColor;
        });
        if (heating == 'on' || heating == 'heating') (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.root], (el)=>{
            el.classList.add('glow');
            el.classList.remove('glow-off');
            // Set the color for the glow
            el.style.setProperty('--glow-color', this._config.heating_color || (0, _constantsJs.GLOW).colors.heating);
        });
        else if (cooling == 'on' || cooling == 'cooling') (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.root], (el)=>{
            el.classList.add('glow');
            el.classList.remove('glow-off');
            // Set the color for the glow
            el.style.setProperty('--glow-color', this._config.cooling_color || (0, _constantsJs.GLOW).colors.cooling);
        });
        else (0, _constantsJs.UTILS).updateElement(this._elements[this._selectors.root], (el)=>{
            el.classList.add('glow-off');
            el.classList.remove('glow-heating');
            el.classList.remove('glow-cooling');
        });
    }
    _showError(message) {
        const alertElement = this._elements[this._selectors.alert];
        if (alertElement) {
            alertElement.style.display = 'flex';
            alertElement.textContent = message;
        }
    }
    _hideError() {
        const alertElement = this._elements[this._selectors.alert];
        if (alertElement) alertElement.style.display = 'none';
    }
    getCardSize() {
        if (this._config.layout === (0, _constantsJs.GLOBAL).layouts[1].value) return this._layout_size.vertical.grid_rows;
        return this._layout_size.horizontal.grid_rows;
    }
    getLayoutOptions() {
        if (this._config.layout === (0, _constantsJs.GLOBAL).layouts[1].value) return this._layout_size.vertical;
        return this._layout_size.horizontal;
    }
}

},{"../../constants.js":"3huJa","../../utils.js":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","bundle-text:./card.html":"gQaQ8","bundle-text:./card.css":"2HgRU"}],"gQaQ8":[function(require,module,exports,__globalThis) {
module.exports = "<!-- Main container -->\r\n<div class=\"container\">\r\n\t<!-- Icon Section (avatar or icon) -->\r\n\t<div class=\"left\">\r\n\t\t<div class=\"shape\"></div>\r\n\t\t<ha-icon class=\"icon\"></ha-icon>\r\n\t</div>\r\n\r\n\t<!-- Section droite avec le texte -->\r\n\t<div class=\"right\">\r\n\t\t<div class=\"name\"></div>\r\n\t\t<div class=\"status\"></div>\r\n\t</div>\r\n</div>\r\n<!-- HA Alert -->\r\n<ha-alert style=\"display: none\" type=\"error\"></ha-alert><script src=\"/card.39071362.js\"></script>";

},{}],"2HgRU":[function(require,module,exports,__globalThis) {
module.exports = "ha-card {\n  --glow-color: \"#FF4D00\";\n  box-sizing: border-box;\n  border: none;\n  border-radius: 8px;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 600px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n}\n\n.container {\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n  margin: 7px 10px;\n  padding: 0;\n  display: flex;\n  overflow: hidden;\n}\n\n.left {\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  position: relative;\n}\n\n.shape {\n  background-color: var(--state-icon-color);\n  opacity: .2;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: block;\n  position: absolute;\n}\n\n.icon {\n  z-index: 1;\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n\n.right {\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: flex-start;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n\n.name {\n  color: var(--primary-text-color);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  font-size: 1em;\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.status {\n  color: var(--primary-text-color);\n  text-overflow: ellipsis;\n  font-size: .9em;\n}\n\nha-alert {\n  z-index: 10;\n  background-color: #000;\n  justify-content: center;\n  align-items: center;\n  width: 105%;\n  height: 110%;\n  display: flex;\n  position: absolute;\n  top: -1px;\n  left: -2px;\n}\n";

},{}],"4kapC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HHAPersonCardEditor", ()=>HHAPersonCardEditor);
var _constantsJs = require("../../constants.js");
class HHAPersonCardEditor extends HTMLElement {
    constructor(){
        super();
        this._config = {};
        this._hass = null;
        this._overridableElements = {};
        this._rendered = false;
        this._currentLanguage = (0, _constantsJs.GLOBAL).DEFAULT_LANG;
    }
    set hass(hass) {
        if (!hass) return;
        this._currentLanguage = (0, _constantsJs.LANG).getLanguage(hass.config.language);
        if (!this._hass || this._hass.entities !== hass.entities) {
            this._hass = hass;
            if (this._rendered) this.render();
        }
    }
    get hass() {
        return this._hass;
    }
    setConfig(config) {
        if (!this._hass) return;
        this._config = config;
        this.loadEntityPicker();
        if (!this._rendered) {
            this._rendered = true;
            this.render();
        }
    }
    _reorderConfig(config) {
        const { grid_options, ...rest } = config;
        return grid_options ? {
            ...rest,
            grid_options
        } : {
            ...rest
        };
    }
    _updateConfigProperty(key, value) {
        if (value === '') {
            if (key in this._config) delete this._config[key];
        } else this._config[key] = value;
        this._config = this._reorderConfig(this._config);
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: {
                config: this._config
            }
        }));
    }
    _addColor(colorSelect) {
        const noColorOption = document.createElement('mwc-list-item');
        noColorOption.value = '';
        noColorOption.innerHTML = `
			<span style="display: inline-block; width: 16px; height: 16px; background-color: transparent; border-radius: 50%; margin-right: 8px;"></span>
		`;
        colorSelect.appendChild(noColorOption);
        (0, _constantsJs.GLOBAL).colors.forEach((color)=>{
            const option = document.createElement('mwc-list-item');
            option.value = color.value;
            option.innerHTML = `
				<span style="display: inline-block; width: 16px; height: 16px; background-color: ${color.value}; border-radius: 50%; margin-right: 8px;"></span>
				${color.name}
			`;
            colorSelect.appendChild(option);
        });
    }
    _createField({ name, label, type, required = false, description }) {
        let inputElement;
        const value = this._config[name] || '';
        switch(type){
            case 'person':
                inputElement = document.createElement('ha-entity-picker');
                inputElement.hass = this._hass;
                inputElement.includeDomains = [
                    'person',
                    'device_tracker'
                ];
                break;
            case 'entity':
                inputElement = document.createElement('ha-entity-picker');
                inputElement.hass = this._hass;
                break;
            case 'icon':
                inputElement = document.createElement('ha-icon-picker');
                break;
            case 'layout':
                inputElement = document.createElement('ha-select');
                inputElement.popperOptions = "";
                (0, _constantsJs.UTILS).addChoices(inputElement, (0, _constantsJs.GLOBAL).layouts);
                inputElement.addEventListener('closed', (event)=>{
                    event.stopPropagation();
                });
                break;
            case 'color':
                inputElement = document.createElement('ha-select');
                inputElement.popperOptions = "";
                this._addColor(inputElement);
                inputElement.addEventListener('closed', (event)=>{
                    event.stopPropagation();
                });
                break;
            default:
                inputElement = document.createElement('ha-textfield');
                inputElement.type = 'text';
        }
        inputElement.style.display = (0, _constantsJs.GLOBAL).styleEdit.SHOWF;
        inputElement.required = required;
        inputElement.label = label;
        inputElement.value = value;
        inputElement.addEventListener(type === 'color' || type === 'layout' ? 'selected' : type === 'entity' || type == 'person' || type === 'icon' ? 'value-changed' : 'input', (event)=>{
            const newValue = event.detail?.value || event.target.value;
            this._updateConfigProperty(name, newValue);
        });
        const fieldContainer = document.createElement('div');
        fieldContainer.style.marginBottom = '12px';
        const fieldDescription = document.createElement('span');
        fieldDescription.style.width = '90%';
        fieldDescription.innerText = description;
        fieldDescription.style.fontSize = '12px';
        fieldDescription.style.color = '#888';
        fieldContainer.appendChild(inputElement);
        fieldContainer.appendChild(fieldDescription);
        return fieldContainer;
    }
    async loadEntityPicker() {
        if (!window.customElements.get("ha-entity-picker")) {
            const ch = await window.loadCardHelpers();
            const c = await ch.createCardElement({
                type: "entities",
                entities: []
            });
            await c.constructor.getConfigElement();
            const haEntityPicker = window.customElements.get("ha-entity-picker");
        }
    }
    render() {
        this.innerHTML = '';
        const fragment = document.createDocumentFragment();
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.flexWrap = 'wrap';
        container.style.overflow = 'auto';
        container.style.overflowX = 'hidden';
        container.style.maxHeight = '100vh';
        (0, _constantsJs.CARDS).personCard.inputFields.forEach((field)=>{
            container.appendChild(this._createField({
                name: field.name,
                label: field.label[this._currentLanguage],
                type: field.type,
                required: field.required,
                description: field.description[this._currentLanguage]
            }));
        });
        fragment.appendChild(container);
        this.appendChild(fragment);
    }
}

},{"../../constants.js":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWVKX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HHARoomCardEditor", ()=>HHARoomCardEditor);
var _constantsJs = require("../../constants.js");
class HHARoomCardEditor extends HTMLElement {
    constructor(){
        super();
        this._config = {};
        this._hass = null;
        this._overridableElements = {};
        this._rendered = false;
        this._currentLanguage = (0, _constantsJs.GLOBAL).DEFAULT_LANG;
    }
    set hass(hass) {
        if (!hass) return;
        this._currentLanguage = (0, _constantsJs.LANG).getLanguage(hass.config.language);
        if (!this._hass || this._hass.entities !== hass.entities) {
            this._hass = hass;
            if (this._rendered) this.render();
        }
    }
    get hass() {
        return this._hass;
    }
    setConfig(config) {
        if (!this._hass) return;
        this._config = config;
        this.loadEntityPicker();
        if (!this._rendered) {
            this._rendered = true;
            this.render();
        }
    }
    _reorderConfig(config) {
        const { grid_options, ...rest } = config;
        return grid_options ? {
            ...rest,
            grid_options
        } : {
            ...rest
        };
    }
    _updateConfigProperty(key, value) {
        if (value === '') {
            if (key in this._config) delete this._config[key];
        } else this._config[key] = value;
        this._config = this._reorderConfig(this._config);
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: {
                config: this._config
            }
        }));
    }
    _addColor(colorSelect) {
        const noColorOption = document.createElement('mwc-list-item');
        noColorOption.value = '';
        noColorOption.innerHTML = `
			<span style="display: inline-block; width: 16px; height: 16px; background-color: transparent; border-radius: 50%; margin-right: 8px;"></span>
		`;
        colorSelect.appendChild(noColorOption);
        (0, _constantsJs.GLOBAL).colors.forEach((color)=>{
            const option = document.createElement('mwc-list-item');
            option.value = color.value;
            option.innerHTML = `
				<span style="display: inline-block; width: 16px; height: 16px; background-color: ${color.value}; border-radius: 50%; margin-right: 8px;"></span>
				${color.name}
			`;
            colorSelect.appendChild(option);
        });
    }
    _createField({ name, label, type, required = false, description }) {
        let inputElement;
        const value = this._config[name] || '';
        switch(type){
            // case 'hvac': (not implemented yet)
            // 	inputElement = document.createElement('ha-entity-picker');
            // 	inputElement.hass = this._hass;
            // 	inputElement.includeDomains = ['climate'];
            // 	break;
            case 'bool':
                inputElement = document.createElement('ha-entity-picker');
                inputElement.hass = this._hass;
                inputElement.includeDomains = [
                    'input_boolean',
                    'switch'
                ];
                break;
            case 'person':
                inputElement = document.createElement('ha-entity-picker');
                inputElement.hass = this._hass;
                inputElement.includeDomains = [
                    'person',
                    'device_tracker'
                ];
                break;
            case 'entity':
                inputElement = document.createElement('ha-entity-picker');
                inputElement.hass = this._hass;
                break;
            case 'icon':
                inputElement = document.createElement('ha-icon-picker');
                break;
            case 'layout':
                inputElement = document.createElement('ha-select');
                inputElement.popperOptions = "";
                (0, _constantsJs.UTILS).addChoices(inputElement, (0, _constantsJs.GLOBAL).layouts);
                inputElement.addEventListener('closed', (event)=>{
                    event.stopPropagation();
                });
                break;
            case 'color':
                inputElement = document.createElement('ha-select');
                inputElement.popperOptions = "";
                this._addColor(inputElement);
                inputElement.addEventListener('closed', (event)=>{
                    event.stopPropagation();
                });
                break;
            default:
                inputElement = document.createElement('ha-textfield');
                inputElement.type = 'text';
        }
        inputElement.style.display = (0, _constantsJs.GLOBAL).styleEdit.SHOWF;
        inputElement.required = required;
        inputElement.label = label;
        inputElement.value = value;
        inputElement.addEventListener(type === 'color' || type === 'layout' ? 'selected' : type === 'entity' || type == 'person' || type === 'icon' ? 'value-changed' : 'input', (event)=>{
            const newValue = event.detail?.value || event.target.value;
            this._updateConfigProperty(name, newValue);
        });
        const fieldContainer = document.createElement('div');
        fieldContainer.style.marginBottom = '12px';
        const fieldDescription = document.createElement('span');
        fieldDescription.style.width = '90%';
        fieldDescription.innerText = description;
        fieldDescription.style.fontSize = '12px';
        fieldDescription.style.color = '#888';
        fieldContainer.appendChild(inputElement);
        fieldContainer.appendChild(fieldDescription);
        return fieldContainer;
    }
    async loadEntityPicker() {
        if (!window.customElements.get("ha-entity-picker")) {
            const ch = await window.loadCardHelpers();
            const c = await ch.createCardElement({
                type: "entities",
                entities: []
            });
            await c.constructor.getConfigElement();
            const haEntityPicker = window.customElements.get("ha-entity-picker");
        }
    }
    render() {
        this.innerHTML = '';
        const fragment = document.createDocumentFragment();
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.flexWrap = 'wrap';
        container.style.overflow = 'auto';
        container.style.overflowX = 'hidden';
        container.style.maxHeight = '100vh';
        (0, _constantsJs.CARDS).roomCard.inputFields.forEach((field)=>{
            container.appendChild(this._createField({
                name: field.name,
                label: field.label[this._currentLanguage],
                type: field.type,
                required: field.required,
                description: field.description[this._currentLanguage]
            }));
        });
        fragment.appendChild(container);
        this.appendChild(fragment);
    }
}

},{"../../constants.js":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9mu7C","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.js.map
