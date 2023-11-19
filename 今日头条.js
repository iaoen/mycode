var v_saf; !function () { var n = Function.toString, t = [], i = [], o = [].indexOf.bind(t), e = [].push.bind(t), r = [].push.bind(i); function u(n, t) { return -1 == o(n) && (e(n), r(`function ${t || n.name || ""}() { [native code] }`)), n } Object.defineProperty(Function.prototype, "toString", { enumerable: !1, configurable: !0, writable: !0, value: function () { return "function" == typeof this && i[o(this)] || n.call(this) } }), u(Function.prototype.toString, "toString"), v_saf = u }();


function _inherits(t, e) {
    t.prototype = Object.create(e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 }
    }), e && Object.setPrototypeOf(t, e)
}
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
    get() { return Object.getPrototypeOf(this).constructor.name }
});
var v_new_toggle = true
Object.freeze(console)//only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
// var v_console_log = function () { if (!v_new_toggle) { v_console_logger.apply(this, arguments) } }
var v_console_log = function () { }
var v_random = (function () { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280) } })()
var v_new = function (v) { var temp = v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r }


Event = v_saf(function Event() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
EventTarget = v_saf(function EventTarget() { ; })
TextEncoder = v_saf(function TextEncoder() { ; })
webkitURL = v_saf(function webkitURL() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
URL = v_saf(function URL() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
DOMTokenList = v_saf(function DOMTokenList() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
NodeList = v_saf(function NodeList() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
HTMLCollection = v_saf(function HTMLCollection() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
HTMLAllCollection = v_saf(function HTMLAllCollection() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
Navigator = v_saf(function Navigator() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; this._plugins = typeof PluginArray == 'undefined' ? [] : v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray == 'undefined' ? [] : v_new(MimeTypeArray) })
Storage = v_saf(function Storage() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PerformanceObserver = v_saf(function PerformanceObserver() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PerformanceEntry = v_saf(function PerformanceEntry() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
MutationObserver = v_saf(function MutationObserver() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PerformanceTiming = v_saf(function PerformanceTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
MutationRecord = v_saf(function MutationRecord() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
DOMRectReadOnly = v_saf(function DOMRectReadOnly() { ; })
Headers = v_saf(function Headers() { ; })
Response = v_saf(function Response() { ; })
WebKitMutationObserver = v_saf(function WebKitMutationObserver() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
WebGLRenderingContext = v_saf(function WebGLRenderingContext() {
    if (!v_new_toggle) { throw TypeError("Illegal constructor") };
    function WebGLBuffer() { }
    function WebGLProgram() { }
    function WebGLShader() { }
    this._toggle = {}
    this.createBuffer = function () { v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
    this.createProgram = function () { v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
    this.createShader = function () { v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
    this.getSupportedExtensions = function () {
        v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
        return [
            "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
            "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
            "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
            "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
            "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
            "WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture", "WEBGL_draw_buffers", "WEBGL_lose_context", "WEBKIT_WEBGL_lose_context", "WEBGL_multi_draw",
        ]
    }
    var self = this
    this.getExtension = function (key) {
        v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
        class WebGLDebugRendererInfo {
            get UNMASKED_VENDOR_WEBGL() { self._toggle[37445] = 1; return 37445 }
            get UNMASKED_RENDERER_WEBGL() { self._toggle[37446] = 1; return 37446 }
        }
        class EXTTextureFilterAnisotropic { }
        class WebGLLoseContext {
            loseContext() { }
            restoreContext() { }
        }
        if (key == 'WEBGL_debug_renderer_info') { var r = new WebGLDebugRendererInfo }
        if (key == 'EXT_texture_filter_anisotropic') { var r = new EXTTextureFilterAnisotropic }
        if (key == 'WEBGL_lose_context') { var r = new WebGLLoseContext }
        else { var r = new WebGLDebugRendererInfo }
        return r
    }
    this.getParameter = function (key) {
        v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
        if (this._toggle[key]) {
            if (key == 37445) { return "Google Inc. (NVIDIA)" }
            if (key == 37446) { return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
        } else {
            if (key == 33902) { return new Float32Array([1, 1]) }
            if (key == 33901) { return new Float32Array([1, 1024]) }
            if (key == 35661) { return 32 }
            if (key == 34047) { return 16 }
            if (key == 34076) { return 16384 }
            if (key == 36349) { return 1024 }
            if (key == 34024) { return 16384 }
            if (key == 34930) { return 16 }
            if (key == 3379) { return 16384 }
            if (key == 36348) { return 30 }
            if (key == 34921) { return 16 }
            if (key == 35660) { return 16 }
            if (key == 36347) { return 4095 }
            if (key == 3386) { return new Int32Array([32767, 32767]) }
            if (key == 3410) { return 8 }
            if (key == 7937) { return "WebKit WebGL" }
            if (key == 35724) { return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
            if (key == 3415) { return 0 }
            if (key == 7936) { return "WebKit" }
            if (key == 7938) { return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
            if (key == 3411) { return 8 }
            if (key == 3412) { return 8 }
            if (key == 3413) { return 8 }
            if (key == 3414) { return 24 }
            return null
        }
    }
    this.getContextAttributes = function () {
        v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
        return {
            alpha: true,
            antialias: true,
            depth: true,
            desynchronized: false,
            failIfMajorPerformanceCaveat: false,
            powerPreference: "default",
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            stencil: false,
            xrCompatible: false,
        }
    }
    this.getShaderPrecisionFormat = function (a, b) {
        v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
        function WebGLShaderPrecisionFormat() { }
        var r1 = v_new(WebGLShaderPrecisionFormat)
        r1.rangeMin = 127
        r1.rangeMax = 127
        r1.precision = 23
        var r2 = v_new(WebGLShaderPrecisionFormat)
        r2.rangeMin = 31
        r2.rangeMax = 30
        r2.precision = 0
        if (a == 35633 && b == 36338) { return r1 } if (a == 35633 && b == 36337) { return r1 } if (a == 35633 && b == 36336) { return r1 }
        if (a == 35633 && b == 36341) { return r2 } if (a == 35633 && b == 36340) { return r2 } if (a == 35633 && b == 36339) { return r2 }
        if (a == 35632 && b == 36338) { return r1 } if (a == 35632 && b == 36337) { return r1 } if (a == 35632 && b == 36336) { return r1 }
        if (a == 35632 && b == 36341) { return r2 } if (a == 35632 && b == 36340) { return r2 } if (a == 35632 && b == 36339) { return r2 }
        throw Error('getShaderPrecisionFormat')
    }
    v_saf(this.createBuffer, 'createBuffer')
    v_saf(this.createProgram, 'createProgram')
    v_saf(this.createShader, 'createShader')
    v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
    v_saf(this.getExtension, 'getExtension')
    v_saf(this.getParameter, 'getParameter')
    v_saf(this.getContextAttributes, 'getContextAttributes')
    v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')
})
Plugin = v_saf(function Plugin() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
MimeType = v_saf(function MimeType() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
DOMException = v_saf(function DOMException() { ; })
RTCIceCandidate = v_saf(function RTCIceCandidate() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
RTCSessionDescription = v_saf(function RTCSessionDescription() { ; })
MessageChannel = v_saf(function MessageChannel() { ; })
URLSearchParams = v_saf(function URLSearchParams() { ; })
NavigatorUAData = v_saf(function NavigatorUAData() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
History = v_saf(function History() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
AudioParam = v_saf(function AudioParam() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PluginArray = v_saf(function PluginArray() {
    if (!v_new_toggle) { throw TypeError("Illegal constructor") };
    this[0] = v_new(Plugin); this[0].description = "Portable Document Format"; this[0].filename = "internal-pdf-viewer"; this[0].length = 2; this[0].name = "PDF Viewer";
    this[1] = v_new(Plugin); this[1].description = "Portable Document Format"; this[1].filename = "internal-pdf-viewer"; this[1].length = 2; this[1].name = "Chrome PDF Viewer";
    this[2] = v_new(Plugin); this[2].description = "Portable Document Format"; this[2].filename = "internal-pdf-viewer"; this[2].length = 2; this[2].name = "Chromium PDF Viewer";
    this[3] = v_new(Plugin); this[3].description = "Portable Document Format"; this[3].filename = "internal-pdf-viewer"; this[3].length = 2; this[3].name = "Microsoft Edge PDF Viewer";
    this[4] = v_new(Plugin); this[4].description = "Portable Document Format"; this[4].filename = "internal-pdf-viewer"; this[4].length = 2; this[4].name = "WebKit built-in PDF";
})
AudioBuffer = v_saf(function AudioBuffer() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
ResizeObserver = v_saf(function ResizeObserver() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
ResizeObserverEntry = v_saf(function ResizeObserverEntry() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
ResizeObserverSize = v_saf(function ResizeObserverSize() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
Image = v_saf(function Image() { ; return v_new(HTMLImageElement) })
AbortController = v_saf(function AbortController() { ; })
TrustedTypePolicy = v_saf(function TrustedTypePolicy() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
XPathResult = v_saf(function XPathResult() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PerformanceServerTiming = v_saf(function PerformanceServerTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
MessageEvent = v_saf(function MessageEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(MessageEvent, Event)
Node = v_saf(function Node() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(Node, EventTarget)
NetworkInformation = v_saf(function NetworkInformation() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(NetworkInformation, EventTarget)
BroadcastChannel = v_saf(function BroadcastChannel() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(BroadcastChannel, EventTarget)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(XMLHttpRequestEventTarget, EventTarget)
Performance = v_saf(function Performance() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(Performance, EventTarget)
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceResourceTiming, PerformanceEntry)
DOMRect = v_saf(function DOMRect() { ; }); _inherits(DOMRect, DOMRectReadOnly)
Screen = v_saf(function Screen() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(Screen, EventTarget)
RTCPeerConnection = v_saf(function RTCPeerConnection() { ; }); _inherits(RTCPeerConnection, EventTarget)
BatteryManager = v_saf(function BatteryManager() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(BatteryManager, EventTarget)
RTCPeerConnectionIceEvent = v_saf(function RTCPeerConnectionIceEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(RTCPeerConnectionIceEvent, Event)
UIEvent = v_saf(function UIEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(UIEvent, Event)
webkitRTCPeerConnection = v_saf(function webkitRTCPeerConnection() { ; }); _inherits(webkitRTCPeerConnection, EventTarget)
MessagePort = v_saf(function MessagePort() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(MessagePort, EventTarget)
PageTransitionEvent = v_saf(function PageTransitionEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PageTransitionEvent, Event)
BaseAudioContext = v_saf(function BaseAudioContext() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(BaseAudioContext, EventTarget)
AudioNode = v_saf(function AudioNode() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(AudioNode, EventTarget)
OfflineAudioCompletionEvent = v_saf(function OfflineAudioCompletionEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(OfflineAudioCompletionEvent, Event)
MediaQueryList = v_saf(function MediaQueryList() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(MediaQueryList, EventTarget)
TrustedTypePolicyFactory = v_saf(function TrustedTypePolicyFactory() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(TrustedTypePolicyFactory, EventTarget)
PerformanceEventTiming = v_saf(function PerformanceEventTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceEventTiming, PerformanceEntry)
LayoutShift = v_saf(function LayoutShift() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(LayoutShift, PerformanceEntry)
Element = v_saf(function Element() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(Element, Node)
Document = v_saf(function Document() { ; }); _inherits(Document, Node)
XMLHttpRequest = v_saf(function XMLHttpRequest() { ; }); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
MouseEvent = v_saf(function MouseEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(MouseEvent, UIEvent)
KeyboardEvent = v_saf(function KeyboardEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(KeyboardEvent, UIEvent)
AudioScheduledSourceNode = v_saf(function AudioScheduledSourceNode() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(AudioScheduledSourceNode, AudioNode)
DynamicsCompressorNode = v_saf(function DynamicsCompressorNode() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(DynamicsCompressorNode, AudioNode)
OfflineAudioContext = v_saf(function OfflineAudioContext() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(OfflineAudioContext, BaseAudioContext)
FocusEvent = v_saf(function FocusEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(FocusEvent, UIEvent)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
HTMLElement = v_saf(function HTMLElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLElement, Element)
OscillatorNode = v_saf(function OscillatorNode() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(OscillatorNode, AudioScheduledSourceNode)
HTMLAnchorElement = v_saf(function HTMLAnchorElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; v_hook_href(this, 'HTMLAnchorElement', location.href) }); _inherits(HTMLAnchorElement, HTMLElement)
HTMLScriptElement = v_saf(function HTMLScriptElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLScriptElement, HTMLElement)
HTMLCanvasElement = v_saf(function HTMLCanvasElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLCanvasElement, HTMLElement)
HTMLButtonElement = v_saf(function HTMLButtonElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLButtonElement, HTMLElement)
HTMLInputElement = v_saf(function HTMLInputElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLInputElement, HTMLElement)
HTMLTextAreaElement = v_saf(function HTMLTextAreaElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLTextAreaElement, HTMLElement)
HTMLIFrameElement = v_saf(function HTMLIFrameElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLIFrameElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLLinkElement, HTMLElement)
HTMLMediaElement = v_saf(function HTMLMediaElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLMediaElement, HTMLElement)
HTMLImageElement = v_saf(function HTMLImageElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLImageElement, HTMLElement)
HTMLMetaElement = v_saf(function HTMLMetaElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLMetaElement, HTMLElement)
Window = v_saf(function Window() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(Window, EventTarget)
HTMLDocument = v_saf(function HTMLDocument() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; Object.defineProperty(this, 'location', { get() { return location } }) }); _inherits(HTMLDocument, Document)
HTMLHeadElement = v_saf(function HTMLHeadElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLHeadElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLBodyElement, HTMLElement)
MimeTypeArray = v_saf(function MimeTypeArray() {
    if (!v_new_toggle) { throw TypeError("Illegal constructor") };
    this[0] = v_new(Plugin); this[0].description = "Portable Document Format"; this[0].enabledPlugin = { "0": {}, "1": {} }; this[0].suffixes = "pdf"; this[0].type = "application/pdf";
    this[1] = v_new(Plugin); this[1].description = "Portable Document Format"; this[1].enabledPlugin = { "0": {}, "1": {} }; this[1].suffixes = "pdf"; this[1].type = "text/pdf";
})
Location = v_saf(function Location() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PerformanceElementTiming = v_saf(function PerformanceElementTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceElementTiming, PerformanceEntry)
PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceLongTaskTiming, PerformanceEntry)
PerformanceMark = v_saf(function PerformanceMark() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceMark, PerformanceEntry)
PerformanceMeasure = v_saf(function PerformanceMeasure() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceMeasure, PerformanceEntry)
PerformanceNavigation = v_saf(function PerformanceNavigation() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PerformancePaintTiming = v_saf(function PerformancePaintTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformancePaintTiming, PerformanceEntry)
HTMLUnknownElement = v_saf(function HTMLUnknownElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLUnknownElement, HTMLElement)
Touch = v_saf(function Touch() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
TouchEvent = v_saf(function TouchEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(TouchEvent, UIEvent)
PointerEvent = v_saf(function PointerEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PointerEvent, MouseEvent)
HTMLDivElement = v_saf(function HTMLDivElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLDivElement, HTMLElement)
HTMLHtmlElement = v_saf(function HTMLHtmlElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLHtmlElement, HTMLElement)
HTMLParagraphElement = v_saf(function HTMLParagraphElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLParagraphElement, HTMLElement)
HTMLStyleElement = v_saf(function HTMLStyleElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLStyleElement, HTMLElement)
Object.defineProperties(Event.prototype, {
    target: { get() { v_console_log("  [*] Event -> target[get]", {}); return {} } },
    type: { get() { v_console_log("  [*] Event -> type[get]", "blur"); return "blur" } },
    timeStamp: { get() { v_console_log("  [*] Event -> timeStamp[get]", 16741.400000095367); return 16741.400000095367 } },
    returnValue: { get() { v_console_log("  [*] Event -> returnValue[get]", true); return true } },
    eventPhase: { get() { v_console_log("  [*] Event -> eventPhase[get]", 1); return 1 } },
    bubbles: { get() { v_console_log("  [*] Event -> bubbles[get]", false); return false } },
    cancelable: { get() { v_console_log("  [*] Event -> cancelable[get]", false); return false } },
    defaultPrevented: { get() { v_console_log("  [*] Event -> defaultPrevented[get]", false); return false } },
    srcElement: { get() { v_console_log("  [*] Event -> srcElement[get]", {}); return {} } },
    preventDefault: { value: v_saf(function preventDefault() { v_console_log("  [*] Event -> preventDefault[func]", [].slice.call(arguments)); }) },
    NONE: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
    CAPTURING_PHASE: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    AT_TARGET: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
    BUBBLING_PHASE: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
    [Symbol.toStringTag]: { value: "Event", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
    getEntries: { value: v_saf(function getEntries() { v_console_log("  [*] PerformanceObserverEntryList -> getEntries[func]", [].slice.call(arguments)); }) },
    getEntriesByType: { value: v_saf(function getEntriesByType() { v_console_log("  [*] PerformanceObserverEntryList -> getEntriesByType[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "PerformanceObserverEntryList", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(EventTarget.prototype, {
    dispatchEvent: { value: v_saf(function dispatchEvent() { v_console_log("  [*] EventTarget -> dispatchEvent[func]", [].slice.call(arguments)); }) },
    removeEventListener: { value: v_saf(function removeEventListener() { v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "EventTarget", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(TextEncoder.prototype, {
    encode: { value: v_saf(function encode() { v_console_log("  [*] TextEncoder -> encode[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "TextEncoder", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(webkitURL.prototype, {
    host: { get() { v_console_log("  [*] webkitURL -> host[get]", "mon.zijieapi.com"); return "mon.zijieapi.com" } },
    searchParams: { get() { v_console_log("  [*] webkitURL -> searchParams[get]", {}); return {} } },
    pathname: { get() { v_console_log("  [*] webkitURL -> pathname[get]", "/monitor_browser/collect/batch/"); return "/monitor_browser/collect/batch/" }, set() { v_console_log("  [*] webkitURL -> pathname[set]", [].slice.call(arguments)); return "/monitor_browser/collect/batch/" } },
    href: { get() { v_console_log("  [*] webkitURL -> href[get]", "http://example.com/"); return "http://example.com/" } },
    username: { get() { v_console_log("  [*] webkitURL -> username[get]", "a"); return "a" } },
    hash: { get() { v_console_log("  [*] webkitURL -> hash[get]", ""); return "" }, set() { v_console_log("  [*] webkitURL -> hash[set]", [].slice.call(arguments)); return "" } },
    search: { get() { v_console_log("  [*] webkitURL -> search[get]", "?log_from=0ecbc0cf0816a_1692764908122&wid=1692765828797"); return "?log_from=0ecbc0cf0816a_1692764908122&wid=1692765828797" }, set() { v_console_log("  [*] webkitURL -> search[set]", [].slice.call(arguments)); return "?log_from=0ecbc0cf0816a_1692764908122&wid=1692765828797" } },
    hostname: { get() { v_console_log("  [*] webkitURL -> hostname[get]", "www.braynzarsoft.net"); return "www.braynzarsoft.net" } },
    port: { set() { v_console_log("  [*] webkitURL -> port[set]", [].slice.call(arguments)); return "www.braynzarsoft.net" } },
    origin: { get() { v_console_log("  [*] webkitURL -> origin[get]", "https://helpdesk.bytedance.com"); return "https://helpdesk.bytedance.com" } },
    [Symbol.toStringTag]: { value: "webkitURL", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(URL.prototype, {
    host: { get() { v_console_log("  [*] URL -> host[get]", "www.xx.com"); return "www.xx.com" } },
    searchParams: { get() { v_console_log("  [*] URL -> searchParams[get]", {}); return {} } },
    pathname: { get() { v_console_log("  [*] URL -> pathname[get]", "/article/7269676496179151360/"); return "/article/7269676496179151360/" }, set() { v_console_log("  [*] URL -> pathname[set]", [].slice.call(arguments)); return "/article/7269676496179151360/" } },
    href: { get() { v_console_log("  [*] URL -> href[get]", "http://example.com/"); return "http://example.com/" } },
    username: { get() { v_console_log("  [*] URL -> username[get]", "a"); return "a" } },
    hash: { get() { v_console_log("  [*] URL -> hash[get]", ""); return "" }, set() { v_console_log("  [*] URL -> hash[set]", [].slice.call(arguments)); return "" } },
    origin: { get() { v_console_log("  [*] URL -> origin[get]", "https://helpdesk.bytedance.com"); return "https://helpdesk.bytedance.com" } },
    search: { get() { v_console_log("  [*] URL -> search[get]", "?log_from=0ecbc0cf0816a_1692764908122&wid=1692765828797"); return "?log_from=0ecbc0cf0816a_1692764908122&wid=1692765828797" }, set() { v_console_log("  [*] URL -> search[set]", [].slice.call(arguments)); return "?log_from=0ecbc0cf0816a_1692764908122&wid=1692765828797" } },
    hostname: { get() { v_console_log("  [*] URL -> hostname[get]", "www.tinytask.net"); return "www.tinytask.net" } },
    port: { set() { v_console_log("  [*] URL -> port[set]", [].slice.call(arguments)); return "www.tinytask.net" } },
    [Symbol.toStringTag]: { value: "URL", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(DOMTokenList.prototype, {
    length: { get() { v_console_log("  [*] DOMTokenList -> length[get]", 0); return 0 } },
    add: { value: v_saf(function add() { v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments)); }) },
    remove: { value: v_saf(function remove() { v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments)); }) },
    contains: { value: v_saf(function contains() { v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "DOMTokenList", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(NodeList.prototype, {
    length: { get() { v_console_log("  [*] NodeList -> length[get]", 52); return 52 } },
    [Symbol.toStringTag]: { value: "NodeList", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLCollection.prototype, {
    length: { get() { v_console_log("  [*] HTMLCollection -> length[get]", 3); return 3 } },
    [Symbol.toStringTag]: { value: "HTMLCollection", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLAllCollection.prototype, {
    length: { get() { v_console_log("  [*] HTMLAllCollection -> length[get]", 250); return 250 } },
    [Symbol.toStringTag]: { value: "HTMLAllCollection", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Navigator.prototype, {
    connection: { get() { v_console_log("  [*] Navigator -> connection[get]", {}); return {} } },
    platform: { get() { v_console_log("  [*] Navigator -> platform[get]", "MacIntel"); return "MacIntel" } },
    hardwareConcurrency: { get() { v_console_log("  [*] Navigator -> hardwareConcurrency[get]", 8); return 8 } },
    language: { get() { v_console_log("  [*] Navigator -> language[get]", "zh-CN"); return "zh-CN" } },
    languages: { get() { v_console_log("  [*] Navigator -> languages[get]", {}); return {} } },
    productSub: { get() { v_console_log("  [*] Navigator -> productSub[get]", "20030107"); return "20030107" } },
    getBattery: { value: v_saf(function getBattery() { v_console_log("  [*] Navigator -> getBattery[func]", [].slice.call(arguments)); }) },
    maxTouchPoints: { get() { v_console_log("  [*] Navigator -> maxTouchPoints[get]", 0); return 0 } },
    plugins: { get() { v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []); return this._plugins || [] } },
    userAgent: { get() { v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"); return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36" } },
    webdriver: { get() { v_console_log("  [*] Navigator -> webdriver[get]", false); return false } },
    appVersion: { get() { v_console_log("  [*] Navigator -> appVersion[get]", "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"); return "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36" } },
    appName: { get() { v_console_log("  [*] Navigator -> appName[get]", "Netscape"); return "Netscape" } },
    product: { get() { v_console_log("  [*] Navigator -> product[get]", "Gecko"); return "Gecko" } },
    sendBeacon: { value: v_saf(function sendBeacon() { v_console_log("  [*] Navigator -> sendBeacon[func]", [].slice.call(arguments)); }) },
    vendor: { get() { v_console_log("  [*] Navigator -> vendor[get]", "Google Inc."); return "Google Inc." } },
    [Symbol.toStringTag]: { value: "Navigator", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: { value: "Storage", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceObserver.prototype, {
    observe: { value: v_saf(function observe() { v_console_log("  [*] PerformanceObserver -> observe[func]", [].slice.call(arguments)); }) },
    disconnect: { value: v_saf(function disconnect() { v_console_log("  [*] PerformanceObserver -> disconnect[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "PerformanceObserver", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceEntry.prototype, {
    entryType: { get() { v_console_log("  [*] PerformanceEntry -> entryType[get]", "longtask"); return "longtask" } },
    startTime: { get() { v_console_log("  [*] PerformanceEntry -> startTime[get]", 1899); return 1899 } },
    duration: { get() { v_console_log("  [*] PerformanceEntry -> duration[get]", 59); return 59 } },
    name: { get() { v_console_log("  [*] PerformanceEntry -> name[get]", "https://mcs.zijieapi.com/list"); return "https://mcs.zijieapi.com/list" } },
    [Symbol.toStringTag]: { value: "PerformanceEntry", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MutationObserver.prototype, {
    observe: { value: v_saf(function observe() { v_console_log("  [*] MutationObserver -> observe[func]", [].slice.call(arguments)); }) },
    disconnect: { value: v_saf(function disconnect() { v_console_log("  [*] MutationObserver -> disconnect[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "MutationObserver", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceTiming.prototype, {
    navigationStart: { get() { v_console_log("  [*] PerformanceTiming -> navigationStart[get]", 1692765828798); return 1692765828798 } },
    loadEventEnd: { get() { v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", 1692765838707); return 1692765838707 } },
    toJSON: { value: v_saf(function toJSON() { v_console_log("  [*] PerformanceTiming -> toJSON[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "PerformanceTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MutationRecord.prototype, {
    type: { get() { v_console_log("  [*] MutationRecord -> type[get]", "childList"); return "childList" } },
    addedNodes: { get() { v_console_log("  [*] MutationRecord -> addedNodes[get]", {}); return {} } },
    target: { get() { v_console_log("  [*] MutationRecord -> target[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "MutationRecord", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(DOMRectReadOnly.prototype, {
    top: { get() { v_console_log("  [*] DOMRectReadOnly -> top[get]", -573.2741088867188); return -573.2741088867188 } },
    left: { get() { v_console_log("  [*] DOMRectReadOnly -> left[get]", 240.07101440429688); return 240.07101440429688 } },
    [Symbol.toStringTag]: { value: "DOMRectReadOnly", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Headers.prototype, {
    forEach: { value: v_saf(function forEach() { v_console_log("  [*] Headers -> forEach[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "Headers", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Response.prototype, {
    status: { get() { v_console_log("  [*] Response -> status[get]", 200); return 200 } },
    headers: { get() { v_console_log("  [*] Response -> headers[get]", {}); return {} } },
    json: { value: v_saf(function json() { v_console_log("  [*] Response -> json[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "Response", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(WebKitMutationObserver.prototype, {
    observe: { value: v_saf(function observe() { v_console_log("  [*] WebKitMutationObserver -> observe[func]", [].slice.call(arguments)); }) },
    disconnect: { value: v_saf(function disconnect() { v_console_log("  [*] WebKitMutationObserver -> disconnect[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "WebKitMutationObserver", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
    font: { set() { v_console_log("  [*] CanvasRenderingContext2D -> font[set]", [].slice.call(arguments)); } },
    fillText: { value: v_saf(function fillText() { v_console_log("  [*] CanvasRenderingContext2D -> fillText[func]", [].slice.call(arguments)); }) },
    shadowBlur: { set() { v_console_log("  [*] CanvasRenderingContext2D -> shadowBlur[set]", [].slice.call(arguments)); } },
    arc: { value: v_saf(function arc() { v_console_log("  [*] CanvasRenderingContext2D -> arc[func]", [].slice.call(arguments)); }) },
    stroke: { value: v_saf(function stroke() { v_console_log("  [*] CanvasRenderingContext2D -> stroke[func]", [].slice.call(arguments)); }) },
    rect: { value: v_saf(function rect() { v_console_log("  [*] CanvasRenderingContext2D -> rect[func]", [].slice.call(arguments)); }) },
    isPointInPath: { value: v_saf(function isPointInPath() { v_console_log("  [*] CanvasRenderingContext2D -> isPointInPath[func]", [].slice.call(arguments)); }) },
    globalCompositeOperation: { set() { v_console_log("  [*] CanvasRenderingContext2D -> globalCompositeOperation[set]", [].slice.call(arguments)); } },
    fillStyle: { set() { v_console_log("  [*] CanvasRenderingContext2D -> fillStyle[set]", [].slice.call(arguments)); } },
    beginPath: { value: v_saf(function beginPath() { v_console_log("  [*] CanvasRenderingContext2D -> beginPath[func]", [].slice.call(arguments)); }) },
    closePath: { value: v_saf(function closePath() { v_console_log("  [*] CanvasRenderingContext2D -> closePath[func]", [].slice.call(arguments)); }) },
    fill: { value: v_saf(function fill() { v_console_log("  [*] CanvasRenderingContext2D -> fill[func]", [].slice.call(arguments)); }) },
    textBaseline: { set() { v_console_log("  [*] CanvasRenderingContext2D -> textBaseline[set]", [].slice.call(arguments)); } },
    fillRect: { value: v_saf(function fillRect() { v_console_log("  [*] CanvasRenderingContext2D -> fillRect[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "CanvasRenderingContext2D", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(WebGLRenderingContext.prototype, {
    bindBuffer: { value: v_saf(function bindBuffer() { v_console_log("  [*] WebGLRenderingContext -> bindBuffer[func]", [].slice.call(arguments)); }) },
    bufferData: { value: v_saf(function bufferData() { v_console_log("  [*] WebGLRenderingContext -> bufferData[func]", [].slice.call(arguments)); }) },
    shaderSource: { value: v_saf(function shaderSource() { v_console_log("  [*] WebGLRenderingContext -> shaderSource[func]", [].slice.call(arguments)); }) },
    compileShader: { value: v_saf(function compileShader() { v_console_log("  [*] WebGLRenderingContext -> compileShader[func]", [].slice.call(arguments)); }) },
    attachShader: { value: v_saf(function attachShader() { v_console_log("  [*] WebGLRenderingContext -> attachShader[func]", [].slice.call(arguments)); }) },
    linkProgram: { value: v_saf(function linkProgram() { v_console_log("  [*] WebGLRenderingContext -> linkProgram[func]", [].slice.call(arguments)); }) },
    useProgram: { value: v_saf(function useProgram() { v_console_log("  [*] WebGLRenderingContext -> useProgram[func]", [].slice.call(arguments)); }) },
    getAttribLocation: { value: v_saf(function getAttribLocation() { v_console_log("  [*] WebGLRenderingContext -> getAttribLocation[func]", [].slice.call(arguments)); }) },
    getUniformLocation: { value: v_saf(function getUniformLocation() { v_console_log("  [*] WebGLRenderingContext -> getUniformLocation[func]", [].slice.call(arguments)); }) },
    enableVertexAttribArray: { value: v_saf(function enableVertexAttribArray() { v_console_log("  [*] WebGLRenderingContext -> enableVertexAttribArray[func]", [].slice.call(arguments)); }) },
    vertexAttribPointer: { value: v_saf(function vertexAttribPointer() { v_console_log("  [*] WebGLRenderingContext -> vertexAttribPointer[func]", [].slice.call(arguments)); }) },
    uniform2f: { value: v_saf(function uniform2f() { v_console_log("  [*] WebGLRenderingContext -> uniform2f[func]", [].slice.call(arguments)); }) },
    drawArrays: { value: v_saf(function drawArrays() { v_console_log("  [*] WebGLRenderingContext -> drawArrays[func]", [].slice.call(arguments)); }) },
    readPixels: { value: v_saf(function readPixels() { v_console_log("  [*] WebGLRenderingContext -> readPixels[func]", [].slice.call(arguments)); }) },
    DEPTH_BUFFER_BIT: { "value": 256, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_BUFFER_BIT: { "value": 1024, "writable": false, "enumerable": true, "configurable": false },
    COLOR_BUFFER_BIT: { "value": 16384, "writable": false, "enumerable": true, "configurable": false },
    POINTS: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
    LINES: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    LINE_LOOP: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
    LINE_STRIP: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
    TRIANGLES: { "value": 4, "writable": false, "enumerable": true, "configurable": false },
    TRIANGLE_STRIP: { "value": 5, "writable": false, "enumerable": true, "configurable": false },
    TRIANGLE_FAN: { "value": 6, "writable": false, "enumerable": true, "configurable": false },
    ZERO: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
    ONE: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    SRC_COLOR: { "value": 768, "writable": false, "enumerable": true, "configurable": false },
    ONE_MINUS_SRC_COLOR: { "value": 769, "writable": false, "enumerable": true, "configurable": false },
    SRC_ALPHA: { "value": 770, "writable": false, "enumerable": true, "configurable": false },
    ONE_MINUS_SRC_ALPHA: { "value": 771, "writable": false, "enumerable": true, "configurable": false },
    DST_ALPHA: { "value": 772, "writable": false, "enumerable": true, "configurable": false },
    ONE_MINUS_DST_ALPHA: { "value": 773, "writable": false, "enumerable": true, "configurable": false },
    DST_COLOR: { "value": 774, "writable": false, "enumerable": true, "configurable": false },
    ONE_MINUS_DST_COLOR: { "value": 775, "writable": false, "enumerable": true, "configurable": false },
    SRC_ALPHA_SATURATE: { "value": 776, "writable": false, "enumerable": true, "configurable": false },
    FUNC_ADD: { "value": 32774, "writable": false, "enumerable": true, "configurable": false },
    BLEND_EQUATION: { "value": 32777, "writable": false, "enumerable": true, "configurable": false },
    BLEND_EQUATION_RGB: { "value": 32777, "writable": false, "enumerable": true, "configurable": false },
    BLEND_EQUATION_ALPHA: { "value": 34877, "writable": false, "enumerable": true, "configurable": false },
    FUNC_SUBTRACT: { "value": 32778, "writable": false, "enumerable": true, "configurable": false },
    FUNC_REVERSE_SUBTRACT: { "value": 32779, "writable": false, "enumerable": true, "configurable": false },
    BLEND_DST_RGB: { "value": 32968, "writable": false, "enumerable": true, "configurable": false },
    BLEND_SRC_RGB: { "value": 32969, "writable": false, "enumerable": true, "configurable": false },
    BLEND_DST_ALPHA: { "value": 32970, "writable": false, "enumerable": true, "configurable": false },
    BLEND_SRC_ALPHA: { "value": 32971, "writable": false, "enumerable": true, "configurable": false },
    CONSTANT_COLOR: { "value": 32769, "writable": false, "enumerable": true, "configurable": false },
    ONE_MINUS_CONSTANT_COLOR: { "value": 32770, "writable": false, "enumerable": true, "configurable": false },
    CONSTANT_ALPHA: { "value": 32771, "writable": false, "enumerable": true, "configurable": false },
    ONE_MINUS_CONSTANT_ALPHA: { "value": 32772, "writable": false, "enumerable": true, "configurable": false },
    BLEND_COLOR: { "value": 32773, "writable": false, "enumerable": true, "configurable": false },
    ARRAY_BUFFER: { "value": 34962, "writable": false, "enumerable": true, "configurable": false },
    ELEMENT_ARRAY_BUFFER: { "value": 34963, "writable": false, "enumerable": true, "configurable": false },
    ARRAY_BUFFER_BINDING: { "value": 34964, "writable": false, "enumerable": true, "configurable": false },
    ELEMENT_ARRAY_BUFFER_BINDING: { "value": 34965, "writable": false, "enumerable": true, "configurable": false },
    STREAM_DRAW: { "value": 35040, "writable": false, "enumerable": true, "configurable": false },
    STATIC_DRAW: { "value": 35044, "writable": false, "enumerable": true, "configurable": false },
    DYNAMIC_DRAW: { "value": 35048, "writable": false, "enumerable": true, "configurable": false },
    BUFFER_SIZE: { "value": 34660, "writable": false, "enumerable": true, "configurable": false },
    BUFFER_USAGE: { "value": 34661, "writable": false, "enumerable": true, "configurable": false },
    CURRENT_VERTEX_ATTRIB: { "value": 34342, "writable": false, "enumerable": true, "configurable": false },
    FRONT: { "value": 1028, "writable": false, "enumerable": true, "configurable": false },
    BACK: { "value": 1029, "writable": false, "enumerable": true, "configurable": false },
    FRONT_AND_BACK: { "value": 1032, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_2D: { "value": 3553, "writable": false, "enumerable": true, "configurable": false },
    CULL_FACE: { "value": 2884, "writable": false, "enumerable": true, "configurable": false },
    BLEND: { "value": 3042, "writable": false, "enumerable": true, "configurable": false },
    DITHER: { "value": 3024, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_TEST: { "value": 2960, "writable": false, "enumerable": true, "configurable": false },
    DEPTH_TEST: { "value": 2929, "writable": false, "enumerable": true, "configurable": false },
    SCISSOR_TEST: { "value": 3089, "writable": false, "enumerable": true, "configurable": false },
    POLYGON_OFFSET_FILL: { "value": 32823, "writable": false, "enumerable": true, "configurable": false },
    SAMPLE_ALPHA_TO_COVERAGE: { "value": 32926, "writable": false, "enumerable": true, "configurable": false },
    SAMPLE_COVERAGE: { "value": 32928, "writable": false, "enumerable": true, "configurable": false },
    NO_ERROR: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
    INVALID_ENUM: { "value": 1280, "writable": false, "enumerable": true, "configurable": false },
    INVALID_VALUE: { "value": 1281, "writable": false, "enumerable": true, "configurable": false },
    INVALID_OPERATION: { "value": 1282, "writable": false, "enumerable": true, "configurable": false },
    OUT_OF_MEMORY: { "value": 1285, "writable": false, "enumerable": true, "configurable": false },
    CW: { "value": 2304, "writable": false, "enumerable": true, "configurable": false },
    CCW: { "value": 2305, "writable": false, "enumerable": true, "configurable": false },
    LINE_WIDTH: { "value": 2849, "writable": false, "enumerable": true, "configurable": false },
    ALIASED_POINT_SIZE_RANGE: { "value": 33901, "writable": false, "enumerable": true, "configurable": false },
    ALIASED_LINE_WIDTH_RANGE: { "value": 33902, "writable": false, "enumerable": true, "configurable": false },
    CULL_FACE_MODE: { "value": 2885, "writable": false, "enumerable": true, "configurable": false },
    FRONT_FACE: { "value": 2886, "writable": false, "enumerable": true, "configurable": false },
    DEPTH_RANGE: { "value": 2928, "writable": false, "enumerable": true, "configurable": false },
    DEPTH_WRITEMASK: { "value": 2930, "writable": false, "enumerable": true, "configurable": false },
    DEPTH_CLEAR_VALUE: { "value": 2931, "writable": false, "enumerable": true, "configurable": false },
    DEPTH_FUNC: { "value": 2932, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_CLEAR_VALUE: { "value": 2961, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_FUNC: { "value": 2962, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_FAIL: { "value": 2964, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_PASS_DEPTH_FAIL: { "value": 2965, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_PASS_DEPTH_PASS: { "value": 2966, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_REF: { "value": 2967, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_VALUE_MASK: { "value": 2963, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_WRITEMASK: { "value": 2968, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_BACK_FUNC: { "value": 34816, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_BACK_FAIL: { "value": 34817, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_BACK_PASS_DEPTH_FAIL: { "value": 34818, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_BACK_PASS_DEPTH_PASS: { "value": 34819, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_BACK_REF: { "value": 36003, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_BACK_VALUE_MASK: { "value": 36004, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_BACK_WRITEMASK: { "value": 36005, "writable": false, "enumerable": true, "configurable": false },
    VIEWPORT: { "value": 2978, "writable": false, "enumerable": true, "configurable": false },
    SCISSOR_BOX: { "value": 3088, "writable": false, "enumerable": true, "configurable": false },
    COLOR_CLEAR_VALUE: { "value": 3106, "writable": false, "enumerable": true, "configurable": false },
    COLOR_WRITEMASK: { "value": 3107, "writable": false, "enumerable": true, "configurable": false },
    UNPACK_ALIGNMENT: { "value": 3317, "writable": false, "enumerable": true, "configurable": false },
    PACK_ALIGNMENT: { "value": 3333, "writable": false, "enumerable": true, "configurable": false },
    MAX_TEXTURE_SIZE: { "value": 3379, "writable": false, "enumerable": true, "configurable": false },
    MAX_VIEWPORT_DIMS: { "value": 3386, "writable": false, "enumerable": true, "configurable": false },
    SUBPIXEL_BITS: { "value": 3408, "writable": false, "enumerable": true, "configurable": false },
    RED_BITS: { "value": 3410, "writable": false, "enumerable": true, "configurable": false },
    GREEN_BITS: { "value": 3411, "writable": false, "enumerable": true, "configurable": false },
    BLUE_BITS: { "value": 3412, "writable": false, "enumerable": true, "configurable": false },
    ALPHA_BITS: { "value": 3413, "writable": false, "enumerable": true, "configurable": false },
    DEPTH_BITS: { "value": 3414, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_BITS: { "value": 3415, "writable": false, "enumerable": true, "configurable": false },
    POLYGON_OFFSET_UNITS: { "value": 10752, "writable": false, "enumerable": true, "configurable": false },
    POLYGON_OFFSET_FACTOR: { "value": 32824, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_BINDING_2D: { "value": 32873, "writable": false, "enumerable": true, "configurable": false },
    SAMPLE_BUFFERS: { "value": 32936, "writable": false, "enumerable": true, "configurable": false },
    SAMPLES: { "value": 32937, "writable": false, "enumerable": true, "configurable": false },
    SAMPLE_COVERAGE_VALUE: { "value": 32938, "writable": false, "enumerable": true, "configurable": false },
    SAMPLE_COVERAGE_INVERT: { "value": 32939, "writable": false, "enumerable": true, "configurable": false },
    COMPRESSED_TEXTURE_FORMATS: { "value": 34467, "writable": false, "enumerable": true, "configurable": false },
    DONT_CARE: { "value": 4352, "writable": false, "enumerable": true, "configurable": false },
    FASTEST: { "value": 4353, "writable": false, "enumerable": true, "configurable": false },
    NICEST: { "value": 4354, "writable": false, "enumerable": true, "configurable": false },
    GENERATE_MIPMAP_HINT: { "value": 33170, "writable": false, "enumerable": true, "configurable": false },
    BYTE: { "value": 5120, "writable": false, "enumerable": true, "configurable": false },
    UNSIGNED_BYTE: { "value": 5121, "writable": false, "enumerable": true, "configurable": false },
    SHORT: { "value": 5122, "writable": false, "enumerable": true, "configurable": false },
    UNSIGNED_SHORT: { "value": 5123, "writable": false, "enumerable": true, "configurable": false },
    INT: { "value": 5124, "writable": false, "enumerable": true, "configurable": false },
    UNSIGNED_INT: { "value": 5125, "writable": false, "enumerable": true, "configurable": false },
    FLOAT: { "value": 5126, "writable": false, "enumerable": true, "configurable": false },
    DEPTH_COMPONENT: { "value": 6402, "writable": false, "enumerable": true, "configurable": false },
    ALPHA: { "value": 6406, "writable": false, "enumerable": true, "configurable": false },
    RGB: { "value": 6407, "writable": false, "enumerable": true, "configurable": false },
    RGBA: { "value": 6408, "writable": false, "enumerable": true, "configurable": false },
    LUMINANCE: { "value": 6409, "writable": false, "enumerable": true, "configurable": false },
    LUMINANCE_ALPHA: { "value": 6410, "writable": false, "enumerable": true, "configurable": false },
    UNSIGNED_SHORT_4_4_4_4: { "value": 32819, "writable": false, "enumerable": true, "configurable": false },
    UNSIGNED_SHORT_5_5_5_1: { "value": 32820, "writable": false, "enumerable": true, "configurable": false },
    UNSIGNED_SHORT_5_6_5: { "value": 33635, "writable": false, "enumerable": true, "configurable": false },
    FRAGMENT_SHADER: { "value": 35632, "writable": false, "enumerable": true, "configurable": false },
    VERTEX_SHADER: { "value": 35633, "writable": false, "enumerable": true, "configurable": false },
    MAX_VERTEX_ATTRIBS: { "value": 34921, "writable": false, "enumerable": true, "configurable": false },
    MAX_VERTEX_UNIFORM_VECTORS: { "value": 36347, "writable": false, "enumerable": true, "configurable": false },
    MAX_VARYING_VECTORS: { "value": 36348, "writable": false, "enumerable": true, "configurable": false },
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: { "value": 35661, "writable": false, "enumerable": true, "configurable": false },
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: { "value": 35660, "writable": false, "enumerable": true, "configurable": false },
    MAX_TEXTURE_IMAGE_UNITS: { "value": 34930, "writable": false, "enumerable": true, "configurable": false },
    MAX_FRAGMENT_UNIFORM_VECTORS: { "value": 36349, "writable": false, "enumerable": true, "configurable": false },
    SHADER_TYPE: { "value": 35663, "writable": false, "enumerable": true, "configurable": false },
    DELETE_STATUS: { "value": 35712, "writable": false, "enumerable": true, "configurable": false },
    LINK_STATUS: { "value": 35714, "writable": false, "enumerable": true, "configurable": false },
    VALIDATE_STATUS: { "value": 35715, "writable": false, "enumerable": true, "configurable": false },
    ATTACHED_SHADERS: { "value": 35717, "writable": false, "enumerable": true, "configurable": false },
    ACTIVE_UNIFORMS: { "value": 35718, "writable": false, "enumerable": true, "configurable": false },
    ACTIVE_ATTRIBUTES: { "value": 35721, "writable": false, "enumerable": true, "configurable": false },
    SHADING_LANGUAGE_VERSION: { "value": 35724, "writable": false, "enumerable": true, "configurable": false },
    CURRENT_PROGRAM: { "value": 35725, "writable": false, "enumerable": true, "configurable": false },
    NEVER: { "value": 512, "writable": false, "enumerable": true, "configurable": false },
    LESS: { "value": 513, "writable": false, "enumerable": true, "configurable": false },
    EQUAL: { "value": 514, "writable": false, "enumerable": true, "configurable": false },
    LEQUAL: { "value": 515, "writable": false, "enumerable": true, "configurable": false },
    GREATER: { "value": 516, "writable": false, "enumerable": true, "configurable": false },
    NOTEQUAL: { "value": 517, "writable": false, "enumerable": true, "configurable": false },
    GEQUAL: { "value": 518, "writable": false, "enumerable": true, "configurable": false },
    ALWAYS: { "value": 519, "writable": false, "enumerable": true, "configurable": false },
    KEEP: { "value": 7680, "writable": false, "enumerable": true, "configurable": false },
    REPLACE: { "value": 7681, "writable": false, "enumerable": true, "configurable": false },
    INCR: { "value": 7682, "writable": false, "enumerable": true, "configurable": false },
    DECR: { "value": 7683, "writable": false, "enumerable": true, "configurable": false },
    INVERT: { "value": 5386, "writable": false, "enumerable": true, "configurable": false },
    INCR_WRAP: { "value": 34055, "writable": false, "enumerable": true, "configurable": false },
    DECR_WRAP: { "value": 34056, "writable": false, "enumerable": true, "configurable": false },
    VENDOR: { "value": 7936, "writable": false, "enumerable": true, "configurable": false },
    RENDERER: { "value": 7937, "writable": false, "enumerable": true, "configurable": false },
    VERSION: { "value": 7938, "writable": false, "enumerable": true, "configurable": false },
    NEAREST: { "value": 9728, "writable": false, "enumerable": true, "configurable": false },
    LINEAR: { "value": 9729, "writable": false, "enumerable": true, "configurable": false },
    NEAREST_MIPMAP_NEAREST: { "value": 9984, "writable": false, "enumerable": true, "configurable": false },
    LINEAR_MIPMAP_NEAREST: { "value": 9985, "writable": false, "enumerable": true, "configurable": false },
    NEAREST_MIPMAP_LINEAR: { "value": 9986, "writable": false, "enumerable": true, "configurable": false },
    LINEAR_MIPMAP_LINEAR: { "value": 9987, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_MAG_FILTER: { "value": 10240, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_MIN_FILTER: { "value": 10241, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_WRAP_S: { "value": 10242, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_WRAP_T: { "value": 10243, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE: { "value": 5890, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_CUBE_MAP: { "value": 34067, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_BINDING_CUBE_MAP: { "value": 34068, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_CUBE_MAP_POSITIVE_X: { "value": 34069, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_CUBE_MAP_NEGATIVE_X: { "value": 34070, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_CUBE_MAP_POSITIVE_Y: { "value": 34071, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_CUBE_MAP_NEGATIVE_Y: { "value": 34072, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_CUBE_MAP_POSITIVE_Z: { "value": 34073, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE_CUBE_MAP_NEGATIVE_Z: { "value": 34074, "writable": false, "enumerable": true, "configurable": false },
    MAX_CUBE_MAP_TEXTURE_SIZE: { "value": 34076, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE0: { "value": 33984, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE1: { "value": 33985, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE2: { "value": 33986, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE3: { "value": 33987, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE4: { "value": 33988, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE5: { "value": 33989, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE6: { "value": 33990, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE7: { "value": 33991, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE8: { "value": 33992, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE9: { "value": 33993, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE10: { "value": 33994, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE11: { "value": 33995, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE12: { "value": 33996, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE13: { "value": 33997, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE14: { "value": 33998, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE15: { "value": 33999, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE16: { "value": 34000, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE17: { "value": 34001, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE18: { "value": 34002, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE19: { "value": 34003, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE20: { "value": 34004, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE21: { "value": 34005, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE22: { "value": 34006, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE23: { "value": 34007, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE24: { "value": 34008, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE25: { "value": 34009, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE26: { "value": 34010, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE27: { "value": 34011, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE28: { "value": 34012, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE29: { "value": 34013, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE30: { "value": 34014, "writable": false, "enumerable": true, "configurable": false },
    TEXTURE31: { "value": 34015, "writable": false, "enumerable": true, "configurable": false },
    ACTIVE_TEXTURE: { "value": 34016, "writable": false, "enumerable": true, "configurable": false },
    REPEAT: { "value": 10497, "writable": false, "enumerable": true, "configurable": false },
    CLAMP_TO_EDGE: { "value": 33071, "writable": false, "enumerable": true, "configurable": false },
    MIRRORED_REPEAT: { "value": 33648, "writable": false, "enumerable": true, "configurable": false },
    FLOAT_VEC2: { "value": 35664, "writable": false, "enumerable": true, "configurable": false },
    FLOAT_VEC3: { "value": 35665, "writable": false, "enumerable": true, "configurable": false },
    FLOAT_VEC4: { "value": 35666, "writable": false, "enumerable": true, "configurable": false },
    INT_VEC2: { "value": 35667, "writable": false, "enumerable": true, "configurable": false },
    INT_VEC3: { "value": 35668, "writable": false, "enumerable": true, "configurable": false },
    INT_VEC4: { "value": 35669, "writable": false, "enumerable": true, "configurable": false },
    BOOL: { "value": 35670, "writable": false, "enumerable": true, "configurable": false },
    BOOL_VEC2: { "value": 35671, "writable": false, "enumerable": true, "configurable": false },
    BOOL_VEC3: { "value": 35672, "writable": false, "enumerable": true, "configurable": false },
    BOOL_VEC4: { "value": 35673, "writable": false, "enumerable": true, "configurable": false },
    FLOAT_MAT2: { "value": 35674, "writable": false, "enumerable": true, "configurable": false },
    FLOAT_MAT3: { "value": 35675, "writable": false, "enumerable": true, "configurable": false },
    FLOAT_MAT4: { "value": 35676, "writable": false, "enumerable": true, "configurable": false },
    SAMPLER_2D: { "value": 35678, "writable": false, "enumerable": true, "configurable": false },
    SAMPLER_CUBE: { "value": 35680, "writable": false, "enumerable": true, "configurable": false },
    VERTEX_ATTRIB_ARRAY_ENABLED: { "value": 34338, "writable": false, "enumerable": true, "configurable": false },
    VERTEX_ATTRIB_ARRAY_SIZE: { "value": 34339, "writable": false, "enumerable": true, "configurable": false },
    VERTEX_ATTRIB_ARRAY_STRIDE: { "value": 34340, "writable": false, "enumerable": true, "configurable": false },
    VERTEX_ATTRIB_ARRAY_TYPE: { "value": 34341, "writable": false, "enumerable": true, "configurable": false },
    VERTEX_ATTRIB_ARRAY_NORMALIZED: { "value": 34922, "writable": false, "enumerable": true, "configurable": false },
    VERTEX_ATTRIB_ARRAY_POINTER: { "value": 34373, "writable": false, "enumerable": true, "configurable": false },
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: { "value": 34975, "writable": false, "enumerable": true, "configurable": false },
    IMPLEMENTATION_COLOR_READ_TYPE: { "value": 35738, "writable": false, "enumerable": true, "configurable": false },
    IMPLEMENTATION_COLOR_READ_FORMAT: { "value": 35739, "writable": false, "enumerable": true, "configurable": false },
    COMPILE_STATUS: { "value": 35713, "writable": false, "enumerable": true, "configurable": false },
    LOW_FLOAT: { "value": 36336, "writable": false, "enumerable": true, "configurable": false },
    MEDIUM_FLOAT: { "value": 36337, "writable": false, "enumerable": true, "configurable": false },
    HIGH_FLOAT: { "value": 36338, "writable": false, "enumerable": true, "configurable": false },
    LOW_INT: { "value": 36339, "writable": false, "enumerable": true, "configurable": false },
    MEDIUM_INT: { "value": 36340, "writable": false, "enumerable": true, "configurable": false },
    HIGH_INT: { "value": 36341, "writable": false, "enumerable": true, "configurable": false },
    FRAMEBUFFER: { "value": 36160, "writable": false, "enumerable": true, "configurable": false },
    RENDERBUFFER: { "value": 36161, "writable": false, "enumerable": true, "configurable": false },
    RGBA4: { "value": 32854, "writable": false, "enumerable": true, "configurable": false },
    RGB5_A1: { "value": 32855, "writable": false, "enumerable": true, "configurable": false },
    RGB565: { "value": 36194, "writable": false, "enumerable": true, "configurable": false },
    DEPTH_COMPONENT16: { "value": 33189, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_INDEX8: { "value": 36168, "writable": false, "enumerable": true, "configurable": false },
    DEPTH_STENCIL: { "value": 34041, "writable": false, "enumerable": true, "configurable": false },
    RENDERBUFFER_WIDTH: { "value": 36162, "writable": false, "enumerable": true, "configurable": false },
    RENDERBUFFER_HEIGHT: { "value": 36163, "writable": false, "enumerable": true, "configurable": false },
    RENDERBUFFER_INTERNAL_FORMAT: { "value": 36164, "writable": false, "enumerable": true, "configurable": false },
    RENDERBUFFER_RED_SIZE: { "value": 36176, "writable": false, "enumerable": true, "configurable": false },
    RENDERBUFFER_GREEN_SIZE: { "value": 36177, "writable": false, "enumerable": true, "configurable": false },
    RENDERBUFFER_BLUE_SIZE: { "value": 36178, "writable": false, "enumerable": true, "configurable": false },
    RENDERBUFFER_ALPHA_SIZE: { "value": 36179, "writable": false, "enumerable": true, "configurable": false },
    RENDERBUFFER_DEPTH_SIZE: { "value": 36180, "writable": false, "enumerable": true, "configurable": false },
    RENDERBUFFER_STENCIL_SIZE: { "value": 36181, "writable": false, "enumerable": true, "configurable": false },
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: { "value": 36048, "writable": false, "enumerable": true, "configurable": false },
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: { "value": 36049, "writable": false, "enumerable": true, "configurable": false },
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: { "value": 36050, "writable": false, "enumerable": true, "configurable": false },
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: { "value": 36051, "writable": false, "enumerable": true, "configurable": false },
    COLOR_ATTACHMENT0: { "value": 36064, "writable": false, "enumerable": true, "configurable": false },
    DEPTH_ATTACHMENT: { "value": 36096, "writable": false, "enumerable": true, "configurable": false },
    STENCIL_ATTACHMENT: { "value": 36128, "writable": false, "enumerable": true, "configurable": false },
    DEPTH_STENCIL_ATTACHMENT: { "value": 33306, "writable": false, "enumerable": true, "configurable": false },
    NONE: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
    FRAMEBUFFER_COMPLETE: { "value": 36053, "writable": false, "enumerable": true, "configurable": false },
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: { "value": 36054, "writable": false, "enumerable": true, "configurable": false },
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: { "value": 36055, "writable": false, "enumerable": true, "configurable": false },
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: { "value": 36057, "writable": false, "enumerable": true, "configurable": false },
    FRAMEBUFFER_UNSUPPORTED: { "value": 36061, "writable": false, "enumerable": true, "configurable": false },
    FRAMEBUFFER_BINDING: { "value": 36006, "writable": false, "enumerable": true, "configurable": false },
    RENDERBUFFER_BINDING: { "value": 36007, "writable": false, "enumerable": true, "configurable": false },
    MAX_RENDERBUFFER_SIZE: { "value": 34024, "writable": false, "enumerable": true, "configurable": false },
    INVALID_FRAMEBUFFER_OPERATION: { "value": 1286, "writable": false, "enumerable": true, "configurable": false },
    UNPACK_FLIP_Y_WEBGL: { "value": 37440, "writable": false, "enumerable": true, "configurable": false },
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: { "value": 37441, "writable": false, "enumerable": true, "configurable": false },
    CONTEXT_LOST_WEBGL: { "value": 37442, "writable": false, "enumerable": true, "configurable": false },
    UNPACK_COLORSPACE_CONVERSION_WEBGL: { "value": 37443, "writable": false, "enumerable": true, "configurable": false },
    BROWSER_DEFAULT_WEBGL: { "value": 37444, "writable": false, "enumerable": true, "configurable": false },
    [Symbol.toStringTag]: { value: "WebGLRenderingContext", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Plugin.prototype, {
    item: { value: v_saf(function item() { v_console_log("  [*] Plugin -> item[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "Plugin", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: { value: "MimeType", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(DOMException.prototype, {
    message: { get() { v_console_log("  [*] DOMException -> message[get]", "Failed to construct 'WebSocket': The URL 'Create WebSocket' is invalid."); return "Failed to construct 'WebSocket': The URL 'Create WebSocket' is invalid." } },
    INDEX_SIZE_ERR: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    DOMSTRING_SIZE_ERR: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
    HIERARCHY_REQUEST_ERR: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
    WRONG_DOCUMENT_ERR: { "value": 4, "writable": false, "enumerable": true, "configurable": false },
    INVALID_CHARACTER_ERR: { "value": 5, "writable": false, "enumerable": true, "configurable": false },
    NO_DATA_ALLOWED_ERR: { "value": 6, "writable": false, "enumerable": true, "configurable": false },
    NO_MODIFICATION_ALLOWED_ERR: { "value": 7, "writable": false, "enumerable": true, "configurable": false },
    NOT_FOUND_ERR: { "value": 8, "writable": false, "enumerable": true, "configurable": false },
    NOT_SUPPORTED_ERR: { "value": 9, "writable": false, "enumerable": true, "configurable": false },
    INUSE_ATTRIBUTE_ERR: { "value": 10, "writable": false, "enumerable": true, "configurable": false },
    INVALID_STATE_ERR: { "value": 11, "writable": false, "enumerable": true, "configurable": false },
    SYNTAX_ERR: { "value": 12, "writable": false, "enumerable": true, "configurable": false },
    INVALID_MODIFICATION_ERR: { "value": 13, "writable": false, "enumerable": true, "configurable": false },
    NAMESPACE_ERR: { "value": 14, "writable": false, "enumerable": true, "configurable": false },
    INVALID_ACCESS_ERR: { "value": 15, "writable": false, "enumerable": true, "configurable": false },
    VALIDATION_ERR: { "value": 16, "writable": false, "enumerable": true, "configurable": false },
    TYPE_MISMATCH_ERR: { "value": 17, "writable": false, "enumerable": true, "configurable": false },
    SECURITY_ERR: { "value": 18, "writable": false, "enumerable": true, "configurable": false },
    NETWORK_ERR: { "value": 19, "writable": false, "enumerable": true, "configurable": false },
    ABORT_ERR: { "value": 20, "writable": false, "enumerable": true, "configurable": false },
    URL_MISMATCH_ERR: { "value": 21, "writable": false, "enumerable": true, "configurable": false },
    QUOTA_EXCEEDED_ERR: { "value": 22, "writable": false, "enumerable": true, "configurable": false },
    TIMEOUT_ERR: { "value": 23, "writable": false, "enumerable": true, "configurable": false },
    INVALID_NODE_TYPE_ERR: { "value": 24, "writable": false, "enumerable": true, "configurable": false },
    DATA_CLONE_ERR: { "value": 25, "writable": false, "enumerable": true, "configurable": false },
    [Symbol.toStringTag]: { value: "DOMException", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(RTCIceCandidate.prototype, {
    candidate: { get() { v_console_log("  [*] RTCIceCandidate -> candidate[get]", "candidate:1614664813 1 udp 1677729535 117.178.143.25 27382 typ srflx raddr 0.0.0.0 rport 0 generation 0 ufrag /Ufa network-cost 999"); return "candidate:1614664813 1 udp 1677729535 117.178.143.25 27382 typ srflx raddr 0.0.0.0 rport 0 generation 0 ufrag /Ufa network-cost 999" } },
    [Symbol.toStringTag]: { value: "RTCIceCandidate", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(RTCSessionDescription.prototype, {
    sdp: { get() { v_console_log("  [*] RTCSessionDescription -> sdp[get]", "v=0\r\no=- 8190460082847174734 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:/Ufa\r\na=ice-pwd:UdvcZEHx4Uk/oTwWPjoCsSQx\r\na=ice-options:trickle\r\na=fingerprint:sha-256 65:AE:16:20:F4:48:D8:10:EF:C9:FC:7C:4B:64:19:76:89:71:7B:CC:AC:1A:8A:41:35:7E:79:58:3E:1F:58:3C\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"); return "v=0\r\no=- 8190460082847174734 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:/Ufa\r\na=ice-pwd:UdvcZEHx4Uk/oTwWPjoCsSQx\r\na=ice-options:trickle\r\na=fingerprint:sha-256 65:AE:16:20:F4:48:D8:10:EF:C9:FC:7C:4B:64:19:76:89:71:7B:CC:AC:1A:8A:41:35:7E:79:58:3E:1F:58:3C\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" } },
    type: { get() { v_console_log("  [*] RTCSessionDescription -> type[get]", "offer"); return "offer" } },
    [Symbol.toStringTag]: { value: "RTCSessionDescription", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MessageChannel.prototype, {
    port2: { get() { v_console_log("  [*] MessageChannel -> port2[get]", {}); return {} } },
    port1: { get() { v_console_log("  [*] MessageChannel -> port1[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "MessageChannel", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(URLSearchParams.prototype, {
    forEach: { value: v_saf(function forEach() { v_console_log("  [*] URLSearchParams -> forEach[func]", [].slice.call(arguments)); }) },
    get: { value: v_saf(function get() { v_console_log("  [*] URLSearchParams -> get[func]", [].slice.call(arguments)); }) },
    toString: { value: v_saf(function toString() { v_console_log("  [*] URLSearchParams -> toString[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "URLSearchParams", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(NavigatorUAData.prototype, {
    getHighEntropyValues: { value: v_saf(function getHighEntropyValues() { v_console_log("  [*] NavigatorUAData -> getHighEntropyValues[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "NavigatorUAData", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(History.prototype, {
    state: { get() { v_console_log("  [*] History -> state[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "History", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
    setProperty: { value: v_saf(function setProperty() { v_console_log("  [*] CSSStyleDeclaration -> setProperty[func]", [].slice.call(arguments)); }) },
    cssText: { set() { v_console_log("  [*] CSSStyleDeclaration -> cssText[set]", [].slice.call(arguments)); } },
    [Symbol.toStringTag]: { value: "CSSStyleDeclaration", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(AudioParam.prototype, {
    value: { set() { v_console_log("  [*] AudioParam -> value[set]", [].slice.call(arguments)); } },
    [Symbol.toStringTag]: { value: "AudioParam", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PluginArray.prototype, {
    length: { get() { v_console_log("  [*] PluginArray -> length[get]", 5); return 5 } },
    [Symbol.toStringTag]: { value: "PluginArray", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(AudioBuffer.prototype, {
    getChannelData: { value: v_saf(function getChannelData() { v_console_log("  [*] AudioBuffer -> getChannelData[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "AudioBuffer", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(ResizeObserver.prototype, {
    observe: { value: v_saf(function observe() { v_console_log("  [*] ResizeObserver -> observe[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "ResizeObserver", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(ResizeObserverEntry.prototype, {
    borderBoxSize: { get() { v_console_log("  [*] ResizeObserverEntry -> borderBoxSize[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "ResizeObserverEntry", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(ResizeObserverSize.prototype, {
    inlineSize: { get() { v_console_log("  [*] ResizeObserverSize -> inlineSize[get]", 675.984375); return 675.984375 } },
    blockSize: { get() { v_console_log("  [*] ResizeObserverSize -> blockSize[get]", 17234.34375); return 17234.34375 } },
    [Symbol.toStringTag]: { value: "ResizeObserverSize", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Image.prototype, {
    src: { set() { v_console_log("  [*] Image -> src[set]", [].slice.call(arguments)); } },
    [Symbol.toStringTag]: { value: "Image", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(AbortController.prototype, {
    signal: { get() { v_console_log("  [*] AbortController -> signal[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "AbortController", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(TrustedTypePolicy.prototype, {
    createHTML: { value: v_saf(function createHTML() { v_console_log("  [*] TrustedTypePolicy -> createHTML[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "TrustedTypePolicy", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(XPathResult.prototype, {
    singleNodeValue: { get() { v_console_log("  [*] XPathResult -> singleNodeValue[get]", {}); return {} } },
    ANY_TYPE: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
    NUMBER_TYPE: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    STRING_TYPE: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
    BOOLEAN_TYPE: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
    UNORDERED_NODE_ITERATOR_TYPE: { "value": 4, "writable": false, "enumerable": true, "configurable": false },
    ORDERED_NODE_ITERATOR_TYPE: { "value": 5, "writable": false, "enumerable": true, "configurable": false },
    UNORDERED_NODE_SNAPSHOT_TYPE: { "value": 6, "writable": false, "enumerable": true, "configurable": false },
    ORDERED_NODE_SNAPSHOT_TYPE: { "value": 7, "writable": false, "enumerable": true, "configurable": false },
    ANY_UNORDERED_NODE_TYPE: { "value": 8, "writable": false, "enumerable": true, "configurable": false },
    FIRST_ORDERED_NODE_TYPE: { "value": 9, "writable": false, "enumerable": true, "configurable": false },
    [Symbol.toStringTag]: { value: "XPathResult", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceServerTiming.prototype, {
    toJSON: { value: v_saf(function toJSON() { v_console_log("  [*] PerformanceServerTiming -> toJSON[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "PerformanceServerTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MessageEvent.prototype, {
    origin: { get() { v_console_log("  [*] MessageEvent -> origin[get]", "https://www.xx.com"); return "https://www.xx.com" } },
    source: { get() { v_console_log("  [*] MessageEvent -> source[get]", {}); return {} } },
    data: { get() { v_console_log("  [*] MessageEvent -> data[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "MessageEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Node.prototype, {
    nodeName: { get() { v_console_log("  [*] Node -> nodeName[get]", "A"); return "A" } },
    appendChild: { value: v_saf(function appendChild() { v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments)); }) },
    removeChild: { value: v_saf(function removeChild() { v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments)); }) },
    parentElement: { get() { v_console_log("  [*] Node -> parentElement[get]", {}); return {} } },
    nodeType: { get() { v_console_log("  [*] Node -> nodeType[get]", 1); return 1 } },
    firstChild: { get() { v_console_log("  [*] Node -> firstChild[get]", {}); return {} } },
    nextSibling: { get() { v_console_log("  [*] Node -> nextSibling[get]", {}); return {} } },
    ownerDocument: { get() { v_console_log("  [*] Node -> ownerDocument[get]", {}); return {} } },
    textContent: { get() { v_console_log("  [*] Node -> textContent[get]", "换一换"); return "换一换" }, set() { v_console_log("  [*] Node -> textContent[set]", [].slice.call(arguments)); return "换一换" } },
    nodeValue: { get() { v_console_log("  [*] Node -> nodeValue[get]", "首页"); return "首页" }, set() { v_console_log("  [*] Node -> nodeValue[set]", [].slice.call(arguments)); return "首页" } },
    insertBefore: { value: v_saf(function insertBefore() { v_console_log("  [*] Node -> insertBefore[func]", [].slice.call(arguments)); }) },
    parentNode: { get() { v_console_log("  [*] Node -> parentNode[get]", {}); return {} } },
    lastChild: { get() { v_console_log("  [*] Node -> lastChild[get]", {}); return {} } },
    childNodes: { get() { v_console_log("  [*] Node -> childNodes[get]", {}); return {} } },
    ELEMENT_NODE: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    ATTRIBUTE_NODE: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
    TEXT_NODE: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
    CDATA_SECTION_NODE: { "value": 4, "writable": false, "enumerable": true, "configurable": false },
    ENTITY_REFERENCE_NODE: { "value": 5, "writable": false, "enumerable": true, "configurable": false },
    ENTITY_NODE: { "value": 6, "writable": false, "enumerable": true, "configurable": false },
    PROCESSING_INSTRUCTION_NODE: { "value": 7, "writable": false, "enumerable": true, "configurable": false },
    COMMENT_NODE: { "value": 8, "writable": false, "enumerable": true, "configurable": false },
    DOCUMENT_NODE: { "value": 9, "writable": false, "enumerable": true, "configurable": false },
    DOCUMENT_TYPE_NODE: { "value": 10, "writable": false, "enumerable": true, "configurable": false },
    DOCUMENT_FRAGMENT_NODE: { "value": 11, "writable": false, "enumerable": true, "configurable": false },
    NOTATION_NODE: { "value": 12, "writable": false, "enumerable": true, "configurable": false },
    DOCUMENT_POSITION_DISCONNECTED: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    DOCUMENT_POSITION_PRECEDING: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
    DOCUMENT_POSITION_FOLLOWING: { "value": 4, "writable": false, "enumerable": true, "configurable": false },
    DOCUMENT_POSITION_CONTAINS: { "value": 8, "writable": false, "enumerable": true, "configurable": false },
    DOCUMENT_POSITION_CONTAINED_BY: { "value": 16, "writable": false, "enumerable": true, "configurable": false },
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: { "value": 32, "writable": false, "enumerable": true, "configurable": false },
    [Symbol.toStringTag]: { value: "Node", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(NetworkInformation.prototype, {
    effectiveType: { get() { v_console_log("  [*] NetworkInformation -> effectiveType[get]", "4g"); return "4g" } },
    saveData: { get() { v_console_log("  [*] NetworkInformation -> saveData[get]", false); return false } },
    onchange: { set() { v_console_log("  [*] NetworkInformation -> onchange[set]", [].slice.call(arguments)); return false } },
    [Symbol.toStringTag]: { value: "NetworkInformation", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(BroadcastChannel.prototype, {
    onmessage: { set() { v_console_log("  [*] BroadcastChannel -> onmessage[set]", [].slice.call(arguments)); } },
    postMessage: { value: v_saf(function postMessage() { v_console_log("  [*] BroadcastChannel -> postMessage[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "BroadcastChannel", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
    onload: { set() { v_console_log("  [*] XMLHttpRequestEventTarget -> onload[set]", [].slice.call(arguments)); } },
    onerror: { set() { v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[set]", [].slice.call(arguments)); } },
    onabort: { set() { v_console_log("  [*] XMLHttpRequestEventTarget -> onabort[set]", [].slice.call(arguments)); } },
    ontimeout: { set() { v_console_log("  [*] XMLHttpRequestEventTarget -> ontimeout[set]", [].slice.call(arguments)); } },
    onloadend: { set() { v_console_log("  [*] XMLHttpRequestEventTarget -> onloadend[set]", [].slice.call(arguments)); } },
    [Symbol.toStringTag]: { value: "XMLHttpRequestEventTarget", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Performance.prototype, {
    timing: { get() { v_console_log("  [*] Performance -> timing[get]", v_new(PerformanceTiming)); return v_new(PerformanceTiming) } },
    now: { value: v_saf(function now() { v_console_log("  [*] Performance -> now[func]", [].slice.call(arguments)); }) },
    getEntriesByType: { value: v_saf(function getEntriesByType() { v_console_log("  [*] Performance -> getEntriesByType[func]", [].slice.call(arguments)); if (arguments[0] == 'resource') { return v_new(PerformanceResourceTiming) } }) },
    getEntriesByName: { value: v_saf(function getEntriesByName() { v_console_log("  [*] Performance -> getEntriesByName[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "Performance", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
    fetchStart: { get() { v_console_log("  [*] PerformanceResourceTiming -> fetchStart[get]", 14956.700000047684); return 14956.700000047684 } },
    responseEnd: { get() { v_console_log("  [*] PerformanceResourceTiming -> responseEnd[get]", 15132.600000143051); return 15132.600000143051 } },
    toJSON: { value: v_saf(function toJSON() { v_console_log("  [*] PerformanceResourceTiming -> toJSON[func]", [].slice.call(arguments)); }) },
    initiatorType: { get() { v_console_log("  [*] PerformanceResourceTiming -> initiatorType[get]", "xmlhttprequest"); return "xmlhttprequest" } },
    [Symbol.toStringTag]: { value: "PerformanceResourceTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(DOMRect.prototype, {
    height: { get() { v_console_log("  [*] DOMRect -> height[get]", 1324.7939453125); return 1324.7939453125 } },
    width: { get() { v_console_log("  [*] DOMRect -> width[get]", 317.9971618652344); return 317.9971618652344 } },
    [Symbol.toStringTag]: { value: "DOMRect", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Screen.prototype, {
    width: { get() { v_console_log("  [*] Screen -> width[get]", 1680); return 1680 } },
    height: { get() { v_console_log("  [*] Screen -> height[get]", 1050); return 1050 } },
    colorDepth: { get() { v_console_log("  [*] Screen -> colorDepth[get]", 30); return 30 } },
    availWidth: { get() { v_console_log("  [*] Screen -> availWidth[get]", 1591); return 1591 } },
    availHeight: { get() { v_console_log("  [*] Screen -> availHeight[get]", 1025); return 1025 } },
    availTop: { get() { v_console_log("  [*] Screen -> availTop[get]", 25); return 25 } },
    availLeft: { get() { v_console_log("  [*] Screen -> availLeft[get]", 89); return 89 } },
    [Symbol.toStringTag]: { value: "Screen", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(RTCPeerConnection.prototype, {
    createDataChannel: { value: v_saf(function createDataChannel() { v_console_log("  [*] RTCPeerConnection -> createDataChannel[func]", [].slice.call(arguments)); }) },
    createOffer: { value: v_saf(function createOffer() { v_console_log("  [*] RTCPeerConnection -> createOffer[func]", [].slice.call(arguments)); }) },
    onicecandidate: { set() { v_console_log("  [*] RTCPeerConnection -> onicecandidate[set]", [].slice.call(arguments)); } },
    setLocalDescription: { value: v_saf(function setLocalDescription() { v_console_log("  [*] RTCPeerConnection -> setLocalDescription[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "RTCPeerConnection", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(BatteryManager.prototype, {
    charging: { get() { v_console_log("  [*] BatteryManager -> charging[get]", true); return true } },
    chargingTime: { get() { v_console_log("  [*] BatteryManager -> chargingTime[get]", null); return null } },
    dischargingTime: { get() { v_console_log("  [*] BatteryManager -> dischargingTime[get]", null); return null } },
    level: { get() { v_console_log("  [*] BatteryManager -> level[get]", 0.8); return 0.8 } },
    [Symbol.toStringTag]: { value: "BatteryManager", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(RTCPeerConnectionIceEvent.prototype, {
    candidate: { get() { v_console_log("  [*] RTCPeerConnectionIceEvent -> candidate[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "RTCPeerConnectionIceEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(UIEvent.prototype, {
    which: { get() { v_console_log("  [*] UIEvent -> which[get]", 1); return 1 } },
    view: { get() { v_console_log("  [*] UIEvent -> view[get]", {}); return {} } },
    detail: { get() { v_console_log("  [*] UIEvent -> detail[get]", 0); return 0 } },
    [Symbol.toStringTag]: { value: "UIEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(webkitRTCPeerConnection.prototype, {
    createDataChannel: { value: v_saf(function createDataChannel() { v_console_log("  [*] webkitRTCPeerConnection -> createDataChannel[func]", [].slice.call(arguments)); }) },
    createOffer: { value: v_saf(function createOffer() { v_console_log("  [*] webkitRTCPeerConnection -> createOffer[func]", [].slice.call(arguments)); }) },
    onicecandidate: { set() { v_console_log("  [*] webkitRTCPeerConnection -> onicecandidate[set]", [].slice.call(arguments)); } },
    setLocalDescription: { value: v_saf(function setLocalDescription() { v_console_log("  [*] webkitRTCPeerConnection -> setLocalDescription[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "webkitRTCPeerConnection", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MessagePort.prototype, {
    onmessage: { set() { v_console_log("  [*] MessagePort -> onmessage[set]", [].slice.call(arguments)); } },
    postMessage: { value: v_saf(function postMessage() { v_console_log("  [*] MessagePort -> postMessage[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "MessagePort", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PageTransitionEvent.prototype, {
    persisted: { get() { v_console_log("  [*] PageTransitionEvent -> persisted[get]", false); return false } },
    [Symbol.toStringTag]: { value: "PageTransitionEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(BaseAudioContext.prototype, {
    createOscillator: { value: v_saf(function createOscillator() { v_console_log("  [*] BaseAudioContext -> createOscillator[func]", [].slice.call(arguments)); }) },
    createDynamicsCompressor: { value: v_saf(function createDynamicsCompressor() { v_console_log("  [*] BaseAudioContext -> createDynamicsCompressor[func]", [].slice.call(arguments)); }) },
    destination: { get() { v_console_log("  [*] BaseAudioContext -> destination[get]", {}); return {} } },
    state: { get() { v_console_log("  [*] BaseAudioContext -> state[get]", "running"); return "running" } },
    [Symbol.toStringTag]: { value: "BaseAudioContext", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(AudioNode.prototype, {
    connect: { value: v_saf(function connect() { v_console_log("  [*] AudioNode -> connect[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "AudioNode", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(OfflineAudioCompletionEvent.prototype, {
    renderedBuffer: { get() { v_console_log("  [*] OfflineAudioCompletionEvent -> renderedBuffer[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "OfflineAudioCompletionEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MediaQueryList.prototype, {
    matches: { get() { v_console_log("  [*] MediaQueryList -> matches[get]", true); return true } },
    [Symbol.toStringTag]: { value: "MediaQueryList", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(TrustedTypePolicyFactory.prototype, {
    createPolicy: { value: v_saf(function createPolicy() { v_console_log("  [*] TrustedTypePolicyFactory -> createPolicy[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "TrustedTypePolicyFactory", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceEventTiming.prototype, {
    processingStart: { get() { v_console_log("  [*] PerformanceEventTiming -> processingStart[get]", 3102.4000000953674); return 3102.4000000953674 } },
    [Symbol.toStringTag]: { value: "PerformanceEventTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(LayoutShift.prototype, {
    hadRecentInput: { get() { v_console_log("  [*] LayoutShift -> hadRecentInput[get]", true); return true } },
    value: { get() { v_console_log("  [*] LayoutShift -> value[get]", 0.13793922004737308); return 0.13793922004737308 } },
    [Symbol.toStringTag]: { value: "LayoutShift", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Element.prototype, {
    getAttribute: { value: v_saf(function getAttribute() { v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments)); }) },
    tagName: { get() { v_console_log("  [*] Element -> tagName[get]", this.v_tagName); return this.v_tagName } },
    children: { get() { v_console_log("  [*] Element -> children[get]", {}); return {} } },
    getBoundingClientRect: { value: v_saf(function getBoundingClientRect() { v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments)); }) },
    setAttribute: { value: v_saf(function setAttribute() { v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments)); }) },
    hasAttribute: { value: v_saf(function hasAttribute() { v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments)); }) },
    clientHeight: { get() { v_console_log("  [*] Element -> clientHeight[get]", 515); return 515 } },
    clientWidth: { get() { v_console_log("  [*] Element -> clientWidth[get]", 644); return 644 } },
    scrollLeft: { get() { v_console_log("  [*] Element -> scrollLeft[get]", 825.9090576171875); return 825.9090576171875 } },
    scrollTop: { get() { v_console_log("  [*] Element -> scrollTop[get]", 677.272705078125); return 677.272705078125 } },
    scrollWidth: { get() { v_console_log("  [*] Element -> scrollWidth[get]", 1234); return 1234 } },
    scrollHeight: { get() { v_console_log("  [*] Element -> scrollHeight[get]", 18060); return 18060 } },
    classList: { get() { v_console_log("  [*] Element -> classList[get]", {}); return {} } },
    namespaceURI: { get() { v_console_log("  [*] Element -> namespaceURI[get]", "http://www.w3.org/1999/xhtml"); return "http://www.w3.org/1999/xhtml" } },
    innerHTML: { get() { v_console_log("  [*] Element -> innerHTML[get]", "<span style=\"color: #000000; --tt-darkmode-color: #A3A3A3;\">设计：王潇潇</span>"); return "<span style=\"color: #000000; --tt-darkmode-color: #A3A3A3;\">设计：王潇潇</span>" }, set() { v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments)); return "<span style=\"color: #000000; --tt-darkmode-color: #A3A3A3;\">设计：王潇潇</span>" } },
    id: { get() { v_console_log("  [*] Element -> id[get]", ""); return "" }, set() { v_console_log("  [*] Element -> id[set]", [].slice.call(arguments)); return "" } },
    querySelectorAll: { value: v_saf(function querySelectorAll() { v_console_log("  [*] Element -> querySelectorAll[func]", [].slice.call(arguments)); }) },
    className: { get() { v_console_log("  [*] Element -> className[get]", "detail-hotboard"); return "detail-hotboard" }, set() { v_console_log("  [*] Element -> className[set]", [].slice.call(arguments)); return "detail-hotboard" } },
    querySelector: { value: v_saf(function querySelector() { v_console_log("  [*] Element -> querySelector[func]", [].slice.call(arguments)); }) },
    firstElementChild: { get() { v_console_log("  [*] Element -> firstElementChild[get]", {}); return {} } },
    previousElementSibling: { get() { v_console_log("  [*] Element -> previousElementSibling[get]", {}); return {} } },
    nextElementSibling: { get() { v_console_log("  [*] Element -> nextElementSibling[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "Element", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Document.prototype, {
    currentScript: { get() { v_console_log("  [*] Document -> currentScript[get]", {}); return {} } },
    readyState: { get() { v_console_log("  [*] Document -> readyState[get]", "complete"); return "complete" } },
    visibilityState: { get() { v_console_log("  [*] Document -> visibilityState[get]", "visible"); return "visible" } },
    createElement: { value: v_saf(function createElement() { v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments)); return _createElement(arguments[0]) }) },
    hidden: { get() { v_console_log("  [*] Document -> hidden[get]", false); return false } },
    createEvent: { value: v_saf(function createEvent() { v_console_log("  [*] Document -> createEvent[func]", [].slice.call(arguments)); }) },
    referrer: { get() { v_console_log("  [*] Document -> referrer[get]", "https://www.xx.com/article/7269676496179151360/?log_from=0ecbc0cf0816a_1692764908122"); return "https://www.xx.com/article/7269676496179151360/?log_from=0ecbc0cf0816a_1692764908122" } },
    domain: { get() { v_console_log("  [*] Document -> domain[get]", "www.xx.com"); return "www.xx.com" } },
    title: { get() { v_console_log("  [*] Document -> title[get]", "携手同行 习近平推动构建高水平中南命运共同体-今日头条"); return "携手同行 习近平推动构建高水平中南命运共同体-今日头条" } },
    documentElement: { get() { v_console_log("  [*] Document -> documentElement[get]", document); return document } },
    createTextNode: { value: v_saf(function createTextNode() { v_console_log("  [*] Document -> createTextNode[func]", [].slice.call(arguments)); }) },
    scrollingElement: { get() { v_console_log("  [*] Document -> scrollingElement[get]", {}); return {} } },
    hasFocus: { value: v_saf(function hasFocus() { v_console_log("  [*] Document -> hasFocus[func]", [].slice.call(arguments)); }) },
    compatMode: { get() { v_console_log("  [*] Document -> compatMode[get]", "CSS1Compat"); return "CSS1Compat" } },
    all: { get() { v_console_log("  [*] Document -> all[get]", {}); return {} } },
    activeElement: { get() { v_console_log("  [*] Document -> activeElement[get]", {}); return {} } },
    createElementNS: { value: v_saf(function createElementNS() { v_console_log("  [*] Document -> createElementNS[func]", [].slice.call(arguments)); }) },
    defaultView: { get() { v_console_log("  [*] Document -> defaultView[get]", {}); return {} } },
    scripts: { get() { v_console_log("  [*] Document -> scripts[get]", {}); return {} } },
    evaluate: { value: v_saf(function evaluate() { v_console_log("  [*] Document -> evaluate[func]", [].slice.call(arguments)); }) },
    onreadystatechange: { "enumerable": true, "configurable": true },
    onmouseenter: { "enumerable": true, "configurable": true },
    onmouseleave: { "enumerable": true, "configurable": true },
    [Symbol.toStringTag]: { value: "Document", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(XMLHttpRequest.prototype, {
    UNSENT: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
    OPENED: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    HEADERS_RECEIVED: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
    LOADING: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
    DONE: { "value": 4, "writable": false, "enumerable": true, "configurable": false },
    [Symbol.toStringTag]: { value: "XMLHttpRequest", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MouseEvent.prototype, {
    buttons: { get() { v_console_log("  [*] MouseEvent -> buttons[get]", 0); return 0 } },
    fromElement: { get() { v_console_log("  [*] MouseEvent -> fromElement[get]", {}); return {} } },
    toElement: { get() { v_console_log("  [*] MouseEvent -> toElement[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "MouseEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(KeyboardEvent.prototype, {
    altKey: { get() { v_console_log("  [*] KeyboardEvent -> altKey[get]", false); return false } },
    ctrlKey: { get() { v_console_log("  [*] KeyboardEvent -> ctrlKey[get]", false); return false } },
    metaKey: { get() { v_console_log("  [*] KeyboardEvent -> metaKey[get]", false); return false } },
    shiftKey: { get() { v_console_log("  [*] KeyboardEvent -> shiftKey[get]", false); return false } },
    key: { get() { v_console_log("  [*] KeyboardEvent -> key[get]", "Shift"); return "Shift" } },
    location: { get() { v_console_log("  [*] KeyboardEvent -> location[get]", 1); return 1 } },
    repeat: { get() { v_console_log("  [*] KeyboardEvent -> repeat[get]", false); return false } },
    keyCode: { get() { v_console_log("  [*] KeyboardEvent -> keyCode[get]", 16); return 16 } },
    DOM_KEY_LOCATION_STANDARD: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
    DOM_KEY_LOCATION_LEFT: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    DOM_KEY_LOCATION_RIGHT: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
    DOM_KEY_LOCATION_NUMPAD: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
    [Symbol.toStringTag]: { value: "KeyboardEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(AudioScheduledSourceNode.prototype, {
    start: { value: v_saf(function start() { v_console_log("  [*] AudioScheduledSourceNode -> start[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "AudioScheduledSourceNode", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(DynamicsCompressorNode.prototype, {
    threshold: { get() { v_console_log("  [*] DynamicsCompressorNode -> threshold[get]", {}); return {} } },
    knee: { get() { v_console_log("  [*] DynamicsCompressorNode -> knee[get]", {}); return {} } },
    ratio: { get() { v_console_log("  [*] DynamicsCompressorNode -> ratio[get]", {}); return {} } },
    attack: { get() { v_console_log("  [*] DynamicsCompressorNode -> attack[get]", {}); return {} } },
    release: { get() { v_console_log("  [*] DynamicsCompressorNode -> release[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "DynamicsCompressorNode", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(OfflineAudioContext.prototype, {
    oncomplete: { set() { v_console_log("  [*] OfflineAudioContext -> oncomplete[set]", [].slice.call(arguments)); } },
    startRendering: { value: v_saf(function startRendering() { v_console_log("  [*] OfflineAudioContext -> startRendering[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "OfflineAudioContext", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(FocusEvent.prototype, {
    relatedTarget: { get() { v_console_log("  [*] FocusEvent -> relatedTarget[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "FocusEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
    toJSON: { value: v_saf(function toJSON() { v_console_log("  [*] PerformanceNavigationTiming -> toJSON[func]", [].slice.call(arguments)); }) },
    [Symbol.toStringTag]: { value: "PerformanceNavigationTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLElement.prototype, {
    onload: { set() { v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments)); } },
    onerror: { set() { v_console_log("  [*] HTMLElement -> onerror[set]", [].slice.call(arguments)); } },
    style: { get() { v_console_log("  [*] HTMLElement -> style[get]", this.v_style); return this.v_style } },
    innerText: { get() { v_console_log("  [*] HTMLElement -> innerText[get]", "立即添加"); return "立即添加" } },
    onclick: { get() { v_console_log("  [*] HTMLElement -> onclick[get]", {}); return {} }, set() { v_console_log("  [*] HTMLElement -> onclick[set]", [].slice.call(arguments)); return {} } },
    contentEditable: { get() { v_console_log("  [*] HTMLElement -> contentEditable[get]", "inherit"); return "inherit" } },
    dataset: { get() { v_console_log("  [*] HTMLElement -> dataset[get]", {}); return {} } },
    title: { get() { v_console_log("  [*] HTMLElement -> title[get]", ""); return "" } },
    isContentEditable: { get() { v_console_log("  [*] HTMLElement -> isContentEditable[get]", false); return false } },
    onmouseenter: { "enumerable": true, "configurable": true },
    onmouseleave: { "enumerable": true, "configurable": true },
    [Symbol.toStringTag]: { value: "HTMLElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(OscillatorNode.prototype, {
    type: { set() { v_console_log("  [*] OscillatorNode -> type[set]", [].slice.call(arguments)); } },
    frequency: { get() { v_console_log("  [*] OscillatorNode -> frequency[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "OscillatorNode", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLAnchorElement.prototype, {
    href: { get() { v_console_log("  [*] HTMLAnchorElement -> href[get]", "https://lf3-short.ibytedapm.com/slardar/fe/sdk-web/plugins/blank-screen.1.9.0.js"); return "https://lf3-short.ibytedapm.com/slardar/fe/sdk-web/plugins/blank-screen.1.9.0.js" }, set() { v_console_log("  [*] HTMLAnchorElement -> href[set]", [].slice.call(arguments)); return "https://lf3-short.ibytedapm.com/slardar/fe/sdk-web/plugins/blank-screen.1.9.0.js" } },
    pathname: { get() { v_console_log("  [*] HTMLAnchorElement -> pathname[get]", "/slardar/fe/sdk-web/plugins/blank-screen.1.9.0.js"); return "/slardar/fe/sdk-web/plugins/blank-screen.1.9.0.js" } },
    protocol: { get() { v_console_log("  [*] HTMLAnchorElement -> protocol[get]", "https:"); return "https:" } },
    hostname: { get() { v_console_log("  [*] HTMLAnchorElement -> hostname[get]", "lf3-short.ibytedapm.com"); return "lf3-short.ibytedapm.com" } },
    search: { get() { v_console_log("  [*] HTMLAnchorElement -> search[get]", ""); return "" } },
    hash: { get() { v_console_log("  [*] HTMLAnchorElement -> hash[get]", ""); return "" } },
    host: { get() { v_console_log("  [*] HTMLAnchorElement -> host[get]", "www.xx.com"); return "www.xx.com" } },
    port: { get() { v_console_log("  [*] HTMLAnchorElement -> port[get]", ""); return "" } },
    [Symbol.toStringTag]: { value: "HTMLAnchorElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLScriptElement.prototype, {
    src: { get() { v_console_log("  [*] HTMLScriptElement -> src[get]", "https://lf3-cdn-tos.bytescm.com/goofy/toutiao/toutiao_web_pc/wza/4.5.4/aria.js?appid=df8e29823e2f4c0822e3693ee653bfc5&__v=4"); return "https://lf3-cdn-tos.bytescm.com/goofy/toutiao/toutiao_web_pc/wza/4.5.4/aria.js?appid=df8e29823e2f4c0822e3693ee653bfc5&__v=4" }, set() { v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments)); return "https://lf3-cdn-tos.bytescm.com/goofy/toutiao/toutiao_web_pc/wza/4.5.4/aria.js?appid=df8e29823e2f4c0822e3693ee653bfc5&__v=4" } },
    crossOrigin: { set() { v_console_log("  [*] HTMLScriptElement -> crossOrigin[set]", [].slice.call(arguments)); return "https://lf3-cdn-tos.bytescm.com/goofy/toutiao/toutiao_web_pc/wza/4.5.4/aria.js?appid=df8e29823e2f4c0822e3693ee653bfc5&__v=4" } },
    charset: { set() { v_console_log("  [*] HTMLScriptElement -> charset[set]", [].slice.call(arguments)); return "https://lf3-cdn-tos.bytescm.com/goofy/toutiao/toutiao_web_pc/wza/4.5.4/aria.js?appid=df8e29823e2f4c0822e3693ee653bfc5&__v=4" } },
    [Symbol.toStringTag]: { value: "HTMLScriptElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLCanvasElement.prototype, {
    width: { set() { v_console_log("  [*] HTMLCanvasElement -> width[set]", [].slice.call(arguments)); } },
    height: { set() { v_console_log("  [*] HTMLCanvasElement -> height[set]", [].slice.call(arguments)); } },
    getContext: { value: v_saf(function getContext() { v_console_log("  [*] HTMLCanvasElement -> getContext[func]", [].slice.call(arguments)); if (arguments[0] == '2d') { var r = v_new(CanvasRenderingContext2D); return r }; if (arguments[0] == 'webgl' || arguments[0] == 'experimental-webgl') { var r = v_new(WebGLRenderingContext); r._canvas = this; return r }; return null }) },
    [Symbol.toStringTag]: { value: "HTMLCanvasElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLButtonElement.prototype, {
    type: { get() { v_console_log("  [*] HTMLButtonElement -> type[get]", "button"); return "button" } },
    value: { get() { v_console_log("  [*] HTMLButtonElement -> value[get]", ""); return "" } },
    [Symbol.toStringTag]: { value: "HTMLButtonElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLInputElement.prototype, {
    type: { get() { v_console_log("  [*] HTMLInputElement -> type[get]", "text"); return "text" } },
    value: { get() { v_console_log("  [*] HTMLInputElement -> value[get]", ""); return "" } },
    defaultValue: { get() { v_console_log("  [*] HTMLInputElement -> defaultValue[get]", ""); return "" }, set() { v_console_log("  [*] HTMLInputElement -> defaultValue[set]", [].slice.call(arguments)); return "" } },
    name: { get() { v_console_log("  [*] HTMLInputElement -> name[get]", ""); return "" } },
    defaultChecked: { set() { v_console_log("  [*] HTMLInputElement -> defaultChecked[set]", [].slice.call(arguments)); return "" } },
    [Symbol.toStringTag]: { value: "HTMLInputElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLTextAreaElement.prototype, {
    type: { get() { v_console_log("  [*] HTMLTextAreaElement -> type[get]", "textarea"); return "textarea" } },
    value: { get() { v_console_log("  [*] HTMLTextAreaElement -> value[get]", ""); return "" } },
    defaultValue: { get() { v_console_log("  [*] HTMLTextAreaElement -> defaultValue[get]", ""); return "" } },
    [Symbol.toStringTag]: { value: "HTMLTextAreaElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLIFrameElement.prototype, {
    src: { set() { v_console_log("  [*] HTMLIFrameElement -> src[set]", [].slice.call(arguments)); } },
    srcdoc: { set() { v_console_log("  [*] HTMLIFrameElement -> srcdoc[set]", [].slice.call(arguments)); } },
    contentWindow: { get() { v_console_log("  [*] HTMLIFrameElement -> contentWindow[get]", {}); return {} } },
    [Symbol.toStringTag]: { value: "HTMLIFrameElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLLinkElement.prototype, {
    rel: { set() { v_console_log("  [*] HTMLLinkElement -> rel[set]", [].slice.call(arguments)); } },
    as: { set() { v_console_log("  [*] HTMLLinkElement -> as[set]", [].slice.call(arguments)); } },
    href: { get() { v_console_log("  [*] HTMLLinkElement -> href[get]", "https://sf3-cdn-tos.douyinstatic.com/obj/eden-cn/uhbfnupkbps/toutiao_favicon.ico"); return "https://sf3-cdn-tos.douyinstatic.com/obj/eden-cn/uhbfnupkbps/toutiao_favicon.ico" }, set() { v_console_log("  [*] HTMLLinkElement -> href[set]", [].slice.call(arguments)); return "https://sf3-cdn-tos.douyinstatic.com/obj/eden-cn/uhbfnupkbps/toutiao_favicon.ico" } },
    [Symbol.toStringTag]: { value: "HTMLLinkElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLMediaElement.prototype, {
    canPlayType: { value: v_saf(function canPlayType() { v_console_log("  [*] HTMLMediaElement -> canPlayType[func]", [].slice.call(arguments)); }) },
    NETWORK_EMPTY: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
    NETWORK_IDLE: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    NETWORK_LOADING: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
    NETWORK_NO_SOURCE: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
    HAVE_NOTHING: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
    HAVE_METADATA: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    HAVE_CURRENT_DATA: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
    HAVE_FUTURE_DATA: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
    HAVE_ENOUGH_DATA: { "value": 4, "writable": false, "enumerable": true, "configurable": false },
    [Symbol.toStringTag]: { value: "HTMLMediaElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLImageElement.prototype, {
    src: { set() { v_console_log("  [*] HTMLImageElement -> src[set]", [].slice.call(arguments)); } },
    [Symbol.toStringTag]: { value: "HTMLImageElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLMetaElement.prototype, {
    content: { set() { v_console_log("  [*] HTMLMetaElement -> content[set]", [].slice.call(arguments)); } },
    [Symbol.toStringTag]: { value: "HTMLMetaElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Window.prototype, {
    TEMPORARY: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
    PERSISTENT: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    [Symbol.toStringTag]: { value: "Window", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: { value: "HTMLDocument", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLHeadElement.prototype, {
    [Symbol.toStringTag]: { value: "HTMLHeadElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLBodyElement.prototype, {
    [Symbol.toStringTag]: { value: "HTMLBodyElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: { value: "MimeTypeArray", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: { value: "Location", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceElementTiming.prototype, {
    [Symbol.toStringTag]: { value: "PerformanceElementTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceLongTaskTiming.prototype, {
    [Symbol.toStringTag]: { value: "PerformanceLongTaskTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceMark.prototype, {
    [Symbol.toStringTag]: { value: "PerformanceMark", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceMeasure.prototype, {
    [Symbol.toStringTag]: { value: "PerformanceMeasure", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceNavigation.prototype, {
    TYPE_NAVIGATE: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
    TYPE_RELOAD: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
    TYPE_BACK_FORWARD: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
    TYPE_RESERVED: { "value": 255, "writable": false, "enumerable": true, "configurable": false },
    [Symbol.toStringTag]: { value: "PerformanceNavigation", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformancePaintTiming.prototype, {
    [Symbol.toStringTag]: { value: "PerformancePaintTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLUnknownElement.prototype, {
    [Symbol.toStringTag]: { value: "HTMLUnknownElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Touch.prototype, {
    [Symbol.toStringTag]: { value: "Touch", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(TouchEvent.prototype, {
    [Symbol.toStringTag]: { value: "TouchEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PointerEvent.prototype, {
    [Symbol.toStringTag]: { value: "PointerEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: { value: "HTMLDivElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLHtmlElement.prototype, {
    [Symbol.toStringTag]: { value: "HTMLHtmlElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLParagraphElement.prototype, {
    [Symbol.toStringTag]: { value: "HTMLParagraphElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLStyleElement.prototype, {
    [Symbol.toStringTag]: { value: "HTMLStyleElement", writable: false, enumerable: false, configurable: true },
})




if (typeof __dirname != 'undefined') { __dirname = undefined }
if (typeof __filename != 'undefined') { __filename = undefined }
if (typeof require != 'undefined') { require = undefined }
if (typeof exports != 'undefined') { exports = undefined }
if (typeof module != 'undefined') { module = undefined }
// if (typeof Buffer != 'undefined'){ Buffer = undefined }
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
    get(a, b) { return a[b] || __globalThis__[b] },
    set(a, b, c) {
        if (b == 'onclick' && typeof c == 'function') { window.addEventListener('click', c) }
        if (b == 'onmousedown' && typeof c == 'function') { window.addEventListener('mousedown', c) }
        if (b == 'onmouseup' && typeof c == 'function') { window.addEventListener('mouseup', c) }
        __globalThis__[b] = a[b] = c
    },
})
var v_hasOwnProperty = Object.prototype.hasOwnProperty
Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty() {
    if (this == window) { return v_hasOwnProperty.apply(__globalThis__, arguments) }
    return v_hasOwnProperty.apply(this, arguments)
})
Object.defineProperties(__globalThis__, { [Symbol.toStringTag]: { value: 'Window' } })
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.history = v_new(History)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.trustedTypes = v_new(TrustedTypePolicyFactory)
window.performance = v_new(Performance)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)
window.glb = window
function _createElement(name) {
    var htmlmap = { "HTMLElement": ["abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "hgroup", "i", "kbd", "main", "mark", "nav", "noscript", "rp", "rt", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"], "HTMLAnchorElement": ["a"], "HTMLScriptElement": ["script"], "HTMLCanvasElement": ["canvas"], "HTMLButtonElement": ["button"], "HTMLInputElement": ["input"], "HTMLTextAreaElement": ["textarea"], "HTMLIFrameElement": ["iframe"], "HTMLLinkElement": ["link"], "HTMLMediaElement": [], "HTMLImageElement": ["img"], "HTMLMetaElement": ["meta"], "HTMLHeadElement": ["head"], "HTMLBodyElement": ["body"], "HTMLUnknownElement": [] }
    var ret, htmlmapkeys = Object.keys(htmlmap)
    name = name.toLocaleLowerCase()
    for (var i = 0; i < htmlmapkeys.length; i++) {
        if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1) {
            ret = v_new(window[htmlmapkeys[i]])
            break
        }
    }
    if (!ret) { ret = v_new(HTMLUnknownElement) }
    if (typeof CSSStyleDeclaration != 'undefined') { ret.v_style = v_new(CSSStyleDeclaration) }
    ret.v_tagName = name.toUpperCase()
    return ret
}
function init_cookie(cookie) {
    var cache = (cookie || "").trim();
    if (!cache) {
        cache = ''
    } else if (cache.charAt(cache.length - 1) != ';') {
        cache += '; '
    } else {
        cache += ' '
    }
    Object.defineProperty(Document.prototype, 'cookie', {
        get: function () {
            var r = cache.slice(0, cache.length - 2);
            v_console_log('  [*] document -> cookie[get]', r)
            return r
        },
        set: function (c) {
            v_console_log('  [*] document -> cookie[set]', c)
            var ncookie = c.split(";")[0].split("=");
            if (!ncookie.slice(1).join('')) {
                return c
            }
            var key = ncookie[0].trim()
            var val = ncookie.slice(1).join('').trim()
            var newc = key + '=' + val
            var flag = false;
            var temp = cache.split("; ").map(function (a) {
                if (a.split("=")[0] === key) {
                    flag = true;
                    return newc;
                }
                return a;
            })
            cache = temp.join("; ");
            if (!flag) {
                cache += newc + "; ";
            }
            return cache;
        }
    });
}
function v_hook_href(obj, name, initurl) {
    var r = Object.defineProperty(obj, 'href', {
        get: function () {
            if (!(this.protocol) && !(this.host)) {
                r = ''
            } else {
                r = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
            }
            v_console_log(`  [*] ${name || obj.constructor.name} -> href[get]:`, JSON.stringify(r))
            return r
        },
        set: function (href) {
            href = href.trim()
            v_console_log(`  [*] ${name || obj.constructor.name} -> href[set]:`, JSON.stringify(href))
            if (href.startsWith("http://") || href.startsWith("https://")) {/*ok*/ }
            else if (href.startsWith("//")) { href = (this.protocol ? this.protocol : 'http:') + href }
            else { href = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "") + '/' + ((href[0] == '/') ? href.slice(1) : href) }
            var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
            this.protocol = a[1] ? a[1] : "";
            this.host = a[2] ? a[2] : "";
            this.port = a[3] ? a[3] : "";
            this.pathname = a[4] ? a[4] : "";
            this.search = a[5] ? a[5] : "";
            this.hash = a[6] ? a[6] : "";
            this.hostname = this.host;
            this.origin = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "");
        }
    });
    if (initurl && initurl.trim()) { var temp = v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
    return r
}
function v_hook_storage() {
    Storage.prototype.clear = v_saf(function () { v_console_log(`  [*] Storage -> clear[func]:`); var self = this; Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
    Storage.prototype.getItem = v_saf(function (key) { v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key) ? String(this[key]) : null); return r }, 'getItem')
    Storage.prototype.setItem = v_saf(function (key, val) { v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined) ? null : String(val) }, 'setItem')
    Storage.prototype.key = v_saf(function (key) { v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key || 0]; }, 'key')
    Storage.prototype.removeItem = v_saf(function (key) { v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key]; }, 'removeItem')
    Object.defineProperty(Storage.prototype, 'length', {
        get: function () {
            if (this === Storage.prototype) { throw TypeError('Illegal invocation') } return Object.keys(this).length
        }
    })
    window.sessionStorage = new Proxy(sessionStorage, { set: function (a, b, c) { v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b] = String(c) }, get: function (a, b) { v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b] }, })
    window.localStorage = new Proxy(localStorage, { set: function (a, b, c) { v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b] = String(c) }, get: function (a, b) { v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b] }, })
}
function v_init_document() {
    Document.prototype.getElementById = v_saf(function getElementById(name) { var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
    Document.prototype.querySelector = v_saf(function querySelector(name) { var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
    Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name) { var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
    Document.prototype.getElementsByName = v_saf(function getElementsByName(name) { var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
    Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name) { var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
    Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name) { var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
    Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name) { var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
    var v_head = v_new(HTMLHeadElement)
    var v_body = v_new(HTMLBodyElement)
    Object.defineProperties(Document.prototype, {
        head: { get() { v_console_log("  [*] Document -> head[get]", v_head); return v_head } },
        body: { get() { v_console_log("  [*] Document -> body[get]", v_body); return v_body } },
    })
}
function v_init_canvas() {
    HTMLCanvasElement.prototype.getContext = function () { if (arguments[0] == '2d') { var r = v_new(CanvasRenderingContext2D); return r }; if (arguments[0] == 'webgl' || arguments[0] == 'experimental-webgl') { var r = v_new(WebGLRenderingContext); r._canvas = this; return r }; return null }
    HTMLCanvasElement.prototype.toDataURL = function () { return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC" }
}
var v_start_stamp = +new Date
var v_fake_stamp = +new Date
function v_init_event_target() {
    v_events = {}
    function add_event(_this, x) {
        if (!v_events[x[0]]) {
            v_events[x[0]] = []
        }
        v_events[x[0]].push([_this, x[1].bind(_this)])
    }
    function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget) {
        if (type == 'click') {
            var m = new v_saf(function PointerEvent() { })
            m.pointerType = "mouse"
        } else {
            var m = new v_saf(function MouseEvent() { })
        }
        m.isTrusted = true
        m.type = type
        m.canBubble = canBubble
        m.cancelable = cancelable
        m.view = view
        m.detail = detail
        m.screenX = screenX; m.movementX = screenX
        m.screenY = screenY; m.movementY = screenY
        m.clientX = clientX; m.layerX = clientX; m.offsetX = clientX; m.pageX = clientX; m.x = clientX;
        m.clientY = clientY; m.layerY = clientY; m.offsetY = clientY; m.pageY = clientY; m.y = clientY;
        m.ctrlKey = ctrlKey
        m.altKey = altKey
        m.shiftKey = shiftKey
        m.metaKey = metaKey
        m.button = button
        m.relatedTarget = relatedTarget
        return m
    }
    function make_mouse(type, x, y) {
        return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
    }
    function mouse_click(x, y) {
        for (var i = 0; i < (v_events['click'] || []).length; i++) { v_events['click'][i][1](make_mouse('click', x, y)) }
        for (var i = 0; i < (v_events['mousedown'] || []).length; i++) { v_events['mousedown'][i][1](make_mouse('mousedown', x, y)) }
        for (var i = 0; i < (v_events['mouseup'] || []).length; i++) { v_events['mouseup'][i][1](make_mouse('mouseup', x, y)) }
    }
    var offr = Math.random()
    function make_touch(_this, type, x, y, timeStamp) {
        var offx = Math.random()
        var offy = Math.random()
        var t = v_new(new v_saf(function Touch() { }))
        t = clientX = offx + x
        t = clientY = offy + y
        t = force = 1
        t = identifier = 0
        t = pageX = offx + x
        t = pageY = offy + y
        t = radiusX = 28 + offr
        t = radiusY = 28 + offr
        t = rotationAngle = 0
        t = screenX = 0
        t = screenY = 0
        var e = v_new(new v_saf(function TouchEvent() { }))
        e.isTrusted = true
        e.altKey = false
        e.bubbles = true
        e.cancelBubble = false
        e.cancelable = false
        e.changedTouches = e.targetTouches = e.touches = [t]
        e.composed = true
        e.ctrlKey = false
        e.currentTarget = null
        e.defaultPrevented = false
        e.detail = 0
        e.eventPhase = 0
        e.metaKey = false
        e.path = _this == window ? [window] : [_this, window]
        e.returnValue = true
        e.shiftKey = false
        e.sourceCapabilities = new v_saf(function InputDeviceCapabilities() { this.firesTouchEvents = true })
        e.srcElement = _this
        e.target = _this
        e.type = type
        e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random() * 20) - v_start_stamp)
        e.view = window
        e.which = 0
        return e
    }
    function make_trace(x1, y1, x2, y2) {
        // 贝塞尔曲线
        function step_len(x1, y1, x2, y2) {
            var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
            return (ln / 10) ^ 0
        }
        var slen = step_len(x1, y1, x2, y2)
        if (slen < 3) {
            return []
        }
        function factorial(x) {
            for (var y = 1; x > 1; x--) {
                y *= x
            }
            return y;
        }
        var lp = Math.random()
        var rp = Math.random()
        var xx1 = (x1 + (x2 - x1) / 12 * (4 - lp * 4)) ^ 0
        var yy1 = (y1 + (y2 - y1) / 12 * (8 + lp * 4)) ^ 0
        var xx2 = (x1 + (x2 - x1) / 12 * (8 + rp * 4)) ^ 0
        var yy2 = (y1 + (y2 - y1) / 12 * (4 - rp * 4)) ^ 0
        var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
        var N = points.length
        var n = N - 1
        var traces = []
        var step = slen
        for (var T = 0; T < step + 1; T++) {
            var t = T * (1 / step)
            var x = 0
            var y = 0
            for (var i = 0; i < N; i++) {
                var B = factorial(n) * t ** i * (1 - t) ** (n - i) / (factorial(i) * factorial(n - i))
                x += points[i][0] * B
                y += points[i][1] * B
            }
            traces.push([x ^ 0, y ^ 0])
        }
        return traces
    }
    function touch(x1, y1, x2, y2) {
        if (x2 == undefined && y2 == undefined) {
            x2 = x1
            y2 = y1
        }
        var traces = make_trace(x1, y1, x2, y2)
        console.log('traces:', traces)
        for (var i = 0; i < (v_events['touchstart'] || []).length; i++) { v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1)) }
        for (var j = 0; j < traces.length; j++) {
            var x = traces[j][0]
            var y = traces[j][0]
            for (var i = 0; i < (v_events['touchmove'] || []).length; i++) { v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y)) }
        }
        for (var i = 0; i < (v_events['touchend'] || []).length; i++) { v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2)) }
    }
    function mouse_move(x1, y1, x2, y2) {
        if (x2 == undefined && y2 == undefined) {
            x2 = x1
            y2 = y1
        }
        var traces = make_trace(x1, y1, x2, y2)
        console.log('traces:', traces)
        for (var j = 0; j < traces.length; j++) {
            var x = traces[j][0]
            var y = traces[j][0]
            for (var i = 0; i < (v_events['mousemove'] || []).length; i++) { v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y)) }
        }
    }
    window.make_mouse = make_mouse
    window.mouse_click = mouse_click
    window.mouse_move = mouse_move
    window.touch = touch
    EventTarget.prototype.addEventListener = function () { v_console_log('  [*] EventTarget -> addEventListener[func]', this === window ? '[Window]' : this === document ? '[Document]' : this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null }
    EventTarget.prototype.dispatchEvent = function () { v_console_log('  [*] EventTarget -> dispatchEvent[func]', this === window ? '[Window]' : this === document ? '[Document]' : this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null }
    EventTarget.prototype.removeEventListener = function () { v_console_log('  [*] EventTarget -> removeEventListener[func]', this === window ? '[Window]' : this === document ? '[Document]' : this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null }
}
function v_init_Element_prototype() {
    Element.prototype.getAnimations = Element.prototype.getAnimations || v_saf(function getAnimations() { v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments)); })
    Element.prototype.getAttribute = Element.prototype.getAttribute || v_saf(function getAttribute() { v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments)); })
    Element.prototype.getAttributeNS = Element.prototype.getAttributeNS || v_saf(function getAttributeNS() { v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments)); })
    Element.prototype.getAttributeNames = Element.prototype.getAttributeNames || v_saf(function getAttributeNames() { v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments)); })
    Element.prototype.getAttributeNode = Element.prototype.getAttributeNode || v_saf(function getAttributeNode() { v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments)); })
    Element.prototype.getAttributeNodeNS = Element.prototype.getAttributeNodeNS || v_saf(function getAttributeNodeNS() { v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments)); })
    Element.prototype.getBoundingClientRect = Element.prototype.getBoundingClientRect || v_saf(function getBoundingClientRect() { v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments)); })
    Element.prototype.getClientRects = Element.prototype.getClientRects || v_saf(function getClientRects() { v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments)); })
    Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName() { v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments)); })
    Element.prototype.getElementsByTagName = Element.prototype.getElementsByTagName || v_saf(function getElementsByTagName() { v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments)); })
    Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS() { v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments)); })
    Element.prototype.getInnerHTML = Element.prototype.getInnerHTML || v_saf(function getInnerHTML() { v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments)); })
    Element.prototype.hasAttribute = Element.prototype.hasAttribute || v_saf(function hasAttribute() { v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments)); })
    Element.prototype.hasAttributeNS = Element.prototype.hasAttributeNS || v_saf(function hasAttributeNS() { v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments)); })
    Element.prototype.hasAttributes = Element.prototype.hasAttributes || v_saf(function hasAttributes() { v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments)); })
    Element.prototype.hasPointerCapture = Element.prototype.hasPointerCapture || v_saf(function hasPointerCapture() { v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments)); })
    Element.prototype.webkitMatchesSelector = Element.prototype.webkitMatchesSelector || v_saf(function webkitMatchesSelector() { v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments)); })
}
function v_init_DOMTokenList_prototype() {
    DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add() { v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments)); })
    DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains() { v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments)); })
    DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries() { v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments)); })
    DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach() { v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments)); })
    DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item() { v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments)); })
    DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys() { v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments)); })
    DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length() { v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments)); })
    DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove() { v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments)); })
    DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace() { v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments)); })
    DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports() { v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments)); })
    DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle() { v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments)); })
}
function v_init_CSSStyleDeclaration_prototype() {
    CSSStyleDeclaration.prototype["zoom"] = ''
    CSSStyleDeclaration.prototype["resize"] = ''
    CSSStyleDeclaration.prototype["text-rendering"] = ''
    CSSStyleDeclaration.prototype["text-align-last"] = ''
}
function v_init_PointerEvent_prototype() {
    PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents() { v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments)); })
    PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents() { v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments)); })
}
function v_init_PerformanceTiming_prototype() {
    try {
        Object.defineProperties(PerformanceTiming.prototype, {
            connectEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd() { v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments)); }) },
            connectStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart() { v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments)); }) },
            domComplete: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete() { v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments)); }) },
            domContentLoadedEventEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventEnd() { v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments)); }) },
            domContentLoadedEventStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventStart() { v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments)); }) },
            domInteractive: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domInteractive() { v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments)); }) },
            domLoading: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading() { v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments)); }) },
            domainLookupEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupEnd() { v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments)); }) },
            domainLookupStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupStart() { v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments)); }) },
            fetchStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart() { v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments)); }) },
            loadEventEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd() { v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments)); }) },
            loadEventStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventStart() { v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments)); }) },
            navigationStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function navigationStart() { v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments)); }) },
            redirectEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd() { v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments)); }) },
            redirectStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart() { v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments)); }) },
            requestStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart() { v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments)); }) },
            responseEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd() { v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments)); }) },
            responseStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart() { v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments)); }) },
            secureConnectionStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function secureConnectionStart() { v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments)); }) },
            unloadEventEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventEnd() { v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments)); }) },
            unloadEventStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventStart() { v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments)); }) },
        })
    } catch (e) { }
}
function mk_atob_btoa(r) { var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1); return { atob: function (r) { var a, e, o, h, c, i, n; for (i = r.length, c = 0, n = ""; c < i;) { do { a = t[255 & r.charCodeAt(c++)] } while (c < i && -1 == a); if (-1 == a) break; do { e = t[255 & r.charCodeAt(c++)] } while (c < i && -1 == e); if (-1 == e) break; n += String.fromCharCode(a << 2 | (48 & e) >> 4); do { if (61 == (o = 255 & r.charCodeAt(c++))) return n; o = t[o] } while (c < i && -1 == o); if (-1 == o) break; n += String.fromCharCode((15 & e) << 4 | (60 & o) >> 2); do { if (61 == (h = 255 & r.charCodeAt(c++))) return n; h = t[h] } while (c < i && -1 == h); if (-1 == h) break; n += String.fromCharCode((3 & o) << 6 | h) } return n }, btoa: function (r) { var t, e, o, h, c, i; for (o = r.length, e = 0, t = ""; e < o;) { if (h = 255 & r.charCodeAt(e++), e == o) { t += a.charAt(h >> 2), t += a.charAt((3 & h) << 4), t += "=="; break } if (c = r.charCodeAt(e++), e == o) { t += a.charAt(h >> 2), t += a.charAt((3 & h) << 4 | (240 & c) >> 4), t += a.charAt((15 & c) << 2), t += "="; break } i = r.charCodeAt(e++), t += a.charAt(h >> 2), t += a.charAt((3 & h) << 4 | (240 & c) >> 4), t += a.charAt((15 & c) << 2 | (192 & i) >> 6), t += a.charAt(63 & i) } return t } } }
var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

init_cookie("__ac_nonce=064e58e820086a9dd8cd2; __ac_signature=_02B4Z6wo00f01W4fHhQAAIDCPmha7QS-gqVuPxqAAD9m42; msToken=gz9o7lFkn3xSVdAuJ0ipB4gloKW3lJw46-TeOuY-rfmeanEC048NovAM26PuhzPCctZJZCexGwzJAWVDCL4WzUNvKp17g_ITaBa-XNrH; ttcid=f347a884ce254071885f0400485d4b1335; _ga_QEHZPBE5HH=GS1.1.1692765830.1.0.1692765830.0.0.0; _ga=GA1.1.2076176012.1692765831; tt_scid=Nx3ofUzrvzQ0vdhWLQ5GSU.HgxCQAsWQSwRNJqv2B7Me31TgDjswq0WD9PkS8vQZ0bfc; s_v_web_id=verify_lln92ihq_hZP4Pciw_xmp9_4S0m_BlGj_sxKqi91jIuAc; local_city_cache=%E8%B5%A3%E5%B7%9E; csrftoken=a4e2b84336fe1131cf527270d4a03c5a")
v_hook_href(window.location, 'location', "https://www.xx.com/article/7269676496179151360/?log_from=0ecbc0cf0816a_1692764908122&wid=1692765828797")
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
v_init_Element_prototype()
v_init_DOMTokenList_prototype()
v_init_CSSStyleDeclaration_prototype()
v_init_PointerEvent_prototype()
v_init_PerformanceTiming_prototype()
window.innerWidth = 408
window.innerHeight = 825
window.outerHeight = 1025
window.outerWidth = 1595
window.isSecureContext = true
window.origin = location.origin
function v_getele(name, func) {
    if (name == "argent-x-extension" && func == "getElementById") { return v_new(HTMLScriptElement) }
    if (name == "RENDER_DATA" && func == "getElementById") { return v_new(HTMLScriptElement) }
    if (name == "root" && func == "getElementById") { return v_new(HTMLDivElement) }
    if (name == ".article-content" && func == "querySelector") { return v_new(HTMLDivElement) }
    if (name == "#login_modal_ele" && func == "querySelector") { return v_new(HTMLDivElement) }
    if (name == "ariascripts" && func == "getElementById") { return v_new(HTMLScriptElement) }
    if (name == "[http-equiv='X-UA-Compatible']" && func == "querySelector") { return v_new(HTMLMetaElement) }
    if (name == "head > link[rel~=\"icon\"]" && func == "querySelector") { return v_new(HTMLLinkElement) }
    if (name == "#root" && func == "querySelector") { return v_new(HTMLDivElement) }
    return null
}
function v_geteles(name, func) {
    if (name == "head" && func == "getElementsByTagName") { return [v_new(HTMLHeadElement)] }
    if (name == ":root" && func == "querySelectorAll") { return [v_new(HTMLHtmlElement)] }
    if (name == "script" && func == "getElementsByTagName") { return [v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement)] }
    if (name == "a" && func == "querySelectorAll") { return [v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement)] }
    if (name == "p" && func == "querySelectorAll") { return [v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement), v_new(HTMLParagraphElement)] }
    if (name == "img" && func == "querySelectorAll") { return [v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement)] }
    if (name == "head > link[rel~=\"icon\"]" && func == "querySelectorAll") { return [v_new(HTMLLinkElement)] }
    if (name == "meta[http-equiv]" && func == "querySelectorAll") { return [v_new(HTMLMetaElement), v_new(HTMLMetaElement), v_new(HTMLMetaElement), v_new(HTMLMetaElement)] }
    if (name == "a,button,[type='button']" && func == "querySelectorAll") { return [v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLButtonElement)] }
    if (name == "style[data-styled][data-styled-version=\"4.2.0\"]" && func == "querySelectorAll") { return [v_new(HTMLStyleElement)] }
    if (name == "input,button,a,div[onclick]" && func == "querySelectorAll") { return [v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLInputElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLButtonElement), v_new(HTMLButtonElement), v_new(HTMLButtonElement), v_new(HTMLButtonElement)] }
    return null
}
var v_Date = Date;
var v_base_time = +new Date;
(function () {
    function ftime() {
        return new v_Date() - v_base_time + v_to_time
    }
    Date = function (_Date) {
        var bind = Function.bind;
        var unbind = bind.bind(bind);
        function instantiate(constructor, args) {
            return new (unbind(constructor, null).apply(null, args));
        }
        var names = Object.getOwnPropertyNames(_Date);
        for (var i = 0; i < names.length; i++) {
            if (names[i] in Date)
                continue;
            var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
            Object.defineProperty(Date, names[i], desc);
        }
        function Date() {
            var date = instantiate(_Date, [ftime()]);
            return date;
        }
        Date.prototype = _Date.prototype
        return v_saf(Date);
    }(Date);
    Date.now = v_saf(function now() { return ftime() })
})();
var v_to_time = +new v_Date
// var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间
v_new_toggle = undefined;

var glb;
(glb = "undefined" == typeof window ? global : window)._$jsvmprt = function (b, e, f) {
    function a() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }
            ))),
                !0
        } catch (b) {
            return !1
        }
    }
    function d(b, e, f) {
        return (d = a() ? Reflect.construct : function (b, e, f) {
            var a = [null];
            a.push.apply(a, e);
            var d = new (Function.bind.apply(b, a));
            return f && c(d, f.prototype),
                d
        }
        ).apply(null, arguments)
    }
    function c(b, e) {
        return (c = Object.setPrototypeOf || function (b, e) {
            return b.__proto__ = e,
                b
        }
        )(b, e)
    }
    function n(b) {
        return function (b) {
            if (Array.isArray(b)) {
                for (var e = 0, f = new Array(b.length); e < b.length; e++)
                    f[e] = b[e];
                return f
            }
        }(b) || function (b) {
            if (Symbol.iterator in Object(b) || "[object Arguments]" === Object.prototype.toString.call(b))
                return Array.from(b)
        }(b) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    for (var i = [], r = 0, t = [], o = 0, l = function (b, e) {
        var f = b[e++]
            , a = b[e]
            , d = parseInt("" + f + a, 16);
        if (d >> 7 == 0)
            return [1, d];
        if (d >> 6 == 2) {
            var c = parseInt("" + b[++e] + b[++e], 16);
            return d &= 63,
                [2, c = (d <<= 8) + c]
        }
        if (d >> 6 == 3) {
            var n = parseInt("" + b[++e] + b[++e], 16)
                , i = parseInt("" + b[++e] + b[++e], 16);
            return d &= 63,
                [3, i = (d <<= 16) + (n <<= 8) + i]
        }
    }, u = function (b, e) {
        var f = parseInt("" + b[e] + b[e + 1], 16);
        return f = f > 127 ? -256 + f : f
    }, s = function (b, e) {
        var f = parseInt("" + b[e] + b[e + 1] + b[e + 2] + b[e + 3], 16);
        return f = f > 32767 ? -65536 + f : f
    }, p = function (b, e) {
        var f = parseInt("" + b[e] + b[e + 1] + b[e + 2] + b[e + 3] + b[e + 4] + b[e + 5] + b[e + 6] + b[e + 7], 16);
        return f = f > 2147483647 ? 0 + f : f
    }, y = function (b, e) {
        return parseInt("" + b[e] + b[e + 1], 16)
    }, v = function (b, e) {
        return parseInt("" + b[e] + b[e + 1] + b[e + 2] + b[e + 3], 16)
    }, g = g || this || window, h = Object.keys || function (b) {
        var e = {}
            , f = 0;
        for (var a in b)
            e[f++] = a;
        return e.length = f,
            e
    }
        , m = (b.length,
            0), I = "", C = m; C < m + 16; C++) {
        var q = "" + b[C++] + b[C];
        q = parseInt(q, 16),
            I += String.fromCharCode(q)
    }
    if ("HNOJ@?RC" != I)
        throw new Error("error magic number " + I);
    m += 16;
    parseInt("" + b[m] + b[m + 1], 16);
    m += 8,
        r = 0;
    for (var w = 0; w < 4; w++) {
        var S = m + 2 * w
            , R = "" + b[S++] + b[S]
            , x = parseInt(R, 16);
        r += (3 & x) << 2 * w
    }
    m += 16,
        m += 8;
    var z = parseInt("" + b[m] + b[m + 1] + b[m + 2] + b[m + 3] + b[m + 4] + b[m + 5] + b[m + 6] + b[m + 7], 16)
        , O = z
        , E = m += 8
        , j = v(b, m += z);
    j[1];
    m += 4,
        i = {
            p: [],
            q: []
        };
    for (var A = 0; A < j; A++) {
        for (var D = l(b, m), T = m += 2 * D[0], $ = i.p.length, P = 0; P < D[1]; P++) {
            var U = l(b, T);
            i.p.push(U[1]),
                T += 2 * U[0]
        }
        m = T,
            i.q.push([$, i.p.length])
    }
    var _ = {
        5: 1,
        6: 1,
        70: 1,
        22: 1,
        23: 1,
        37: 1,
        73: 1
    }
        , k = {
            72: 1
        }
        , M = {
            74: 1
        }
        , H = {
            11: 1,
            12: 1,
            24: 1,
            26: 1,
            27: 1,
            31: 1
        }
        , J = {
            10: 1
        }
        , N = {
            2: 1,
            29: 1,
            30: 1,
            20: 1
        }
        , B = []
        , W = [];
    function F(b, e, f) {
        for (var a = e; a < e + f;) {
            var d = y(b, a);
            B[a] = d,
                a += 2;
            k[d] ? (W[a] = u(b, a),
                a += 2) : _[d] ? (W[a] = s(b, a),
                    a += 4) : M[d] ? (W[a] = p(b, a),
                        a += 8) : H[d] ? (W[a] = y(b, a),
                            a += 2) : J[d] ? (W[a] = v(b, a),
                                a += 4) : N[d] && (W[a] = v(b, a),
                                    a += 4)
        }
    }
    return K(b, E, O / 2, [], e, f);
    function G(b, e, f, a, c, l, m, I) {
        null == l && (l = this);
        var C, q, w, S = [], R = 0;
        m && (C = m);
        var x, z, O = e, E = O + 2 * f;
        if (!I)
            for (; O < E;) {
                var j = parseInt("" + b[O] + b[O + 1], 16);
                O += 2;
                var A = 3 & (x = 13 * j % 241);
                if (x >>= 2,
                    A < 1) {
                    A = 3 & x;
                    if (x >>= 2,
                        A > 2)
                        (A = x) > 10 ? S[++R] = void 0 : A > 1 ? (C = S[R--],
                            S[R] = S[R] >= C) : A > -1 && (S[++R] = null);
                    else if (A > 1) {
                        if ((A = x) > 11)
                            throw S[R--];
                        if (A > 7) {
                            for (C = S[R--],
                                z = v(b, O),
                                A = "",
                                P = i.q[z][0]; P < i.q[z][1]; P++)
                                A += String.fromCharCode(r ^ i.p[P]);
                            O += 4,
                                S[R--][A] = C
                        } else
                            A > 5 && (S[R] = h(S[R]))
                    } else if (A > 0) {
                        (A = x) > 8 ? (C = S[R--],
                            S[R] = typeof C) : A > 6 ? S[R] = --S[R] : A > 4 ? S[R -= 1] = S[R][S[R + 1]] : A > 2 && (q = S[R--],
                                (A = S[R]).x === G ? A.y >= 1 ? S[R] = K(b, A.c, A.l, [q], A.z, w, null, 1) : (S[R] = K(b, A.c, A.l, [q], A.z, w, null, 0),
                                    A.y++) : S[R] = A(q))
                    } else {
                        if ((A = x) > 14)
                            z = s(b, O),
                                (U = function e() {
                                    var f = arguments;
                                    return e.y > 0 ? K(b, e.c, e.l, f, e.z, this, null, 0) : (e.y++,
                                        K(b, e.c, e.l, f, e.z, this, null, 0))
                                }
                                ).c = O + 4,
                                U.l = z - 2,
                                U.x = G,
                                U.y = 0,
                                U.z = c,
                                S[R] = U,
                                O += 2 * z - 2;
                        else if (A > 12)
                            q = S[R--],
                                w = S[R--],
                                (A = S[R--]).x === G ? A.y >= 1 ? S[++R] = K(b, A.c, A.l, q, A.z, w, null, 1) : (S[++R] = K(b, A.c, A.l, q, A.z, w, null, 0),
                                    A.y++) : S[++R] = A.apply(w, q);
                        else if (A > 5)
                            C = S[R--],
                                S[R] = S[R] != C;
                        else if (A > 3)
                            C = S[R--],
                                S[R] = S[R] * C;
                        else if (A > -1)
                            return [1, S[R--]]
                    }
                } else if (A < 2) {
                    A = 3 & x;
                    if (x >>= 2,
                        A < 1) {
                        if ((A = x) > 9)
                            ;
                        else if (A > 7)
                            C = S[R--],
                                S[R] = S[R] & C;
                        else if (A > 5)
                            z = y(b, O),
                                O += 2,
                                S[R -= z] = 0 === z ? new S[R] : d(S[R], n(S.slice(R + 1, R + z + 1)));
                        else if (A > 3) {
                            z = s(b, O);
                            try {
                                if (t[o][2] = 1,
                                    1 == (C = G(b, O + 4, z - 3, [], c, l, null, 0))[0])
                                    return C
                            } catch (m) {
                                if (t[o] && t[o][1] && 1 == (C = G(b, t[o][1][0], t[o][1][1], [], c, l, m, 0))[0])
                                    return C
                            } finally {
                                if (t[o] && t[o][0] && 1 == (C = G(b, t[o][0][0], t[o][0][1], [], c, l, null, 0))[0])
                                    return C;
                                t[o] = 0,
                                    o--
                            }
                            O += 2 * z - 2
                        }
                    } else if (A < 2) {
                        if ((A = x) > 12)
                            S[++R] = u(b, O),
                                O += 2;
                        else if (A > 10)
                            C = S[R--],
                                S[R] = S[R] << C;
                        else if (A > 8) {
                            for (z = v(b, O),
                                A = "",
                                P = i.q[z][0]; P < i.q[z][1]; P++)
                                A += String.fromCharCode(r ^ i.p[P]);
                            O += 4,
                                S[R] = S[R][A]
                        } else
                            A > 6 && (q = S[R--],
                                C = delete S[R--][q])
                    } else if (A < 3) {
                        (A = x) < 2 ? S[++R] = C : A < 4 ? (C = S[R--],
                            S[R] = S[R] <= C) : A < 11 ? (C = S[R -= 2][S[R + 1]] = S[R + 2],
                                R--) : A < 13 && (C = S[R],
                                    S[++R] = C)
                    } else {
                        if ((A = x) > 12)
                            S[++R] = l;
                        else if (A > 5)
                            C = S[R--],
                                S[R] = S[R] !== C;
                        else if (A > 3)
                            C = S[R--],
                                S[R] = S[R] / C;
                        else if (A > 1) {
                            if ((z = s(b, O)) < 0) {
                                I = 1,
                                    F(b, e, 2 * f),
                                    O += 2 * z - 2;
                                break
                            }
                            O += 2 * z - 2
                        } else
                            A > -1 && (S[R] = !S[R])
                    }
                } else if (A < 3) {
                    A = 3 & x;
                    if (x >>= 2,
                        A > 2)
                        (A = x) > 7 ? (C = S[R--],
                            S[R] = S[R] | C) : A > 5 ? (z = y(b, O),
                                O += 2,
                                S[++R] = c["$" + z]) : A > 3 && (z = s(b, O),
                                    t[o][0] && !t[o][2] ? t[o][1] = [O + 4, z - 3] : t[o++] = [0, [O + 4, z - 3], 0],
                                    O += 2 * z - 2);
                    else if (A > 1) {
                        if ((A = x) < 2) {
                            for (z = v(b, O),
                                C = "",
                                P = i.q[z][0]; P < i.q[z][1]; P++)
                                C += String.fromCharCode(r ^ i.p[P]);
                            S[++R] = C,
                                O += 4
                        } else if (A < 4)
                            if (S[R--])
                                O += 4;
                            else {
                                if ((z = s(b, O)) < 0) {
                                    I = 1,
                                        F(b, e, 2 * f),
                                        O += 2 * z - 2;
                                    break
                                }
                                O += 2 * z - 2
                            }
                        else
                            A < 6 ? (C = S[R--],
                                S[R] = S[R] % C) : A < 8 ? (C = S[R--],
                                    S[R] = S[R] instanceof C) : A < 15 && (S[++R] = !1)
                    } else if (A > 0) {
                        (A = x) < 1 ? S[++R] = g : A < 3 ? (C = S[R--],
                            S[R] = S[R] + C) : A < 5 ? (C = S[R--],
                                S[R] = S[R] == C) : A < 14 && (C = S[R - 1],
                                    q = S[R],
                                    S[++R] = C,
                                    S[++R] = q)
                    } else {
                        (A = x) < 2 ? (C = S[R--],
                            S[R] = S[R] > C) : A < 9 ? (z = v(b, O),
                                O += 4,
                                q = R + 1,
                                S[R -= z - 1] = z ? S.slice(R, q) : []) : A < 11 ? (z = y(b, O),
                                    O += 2,
                                    C = S[R--],
                                    c[z] = C) : A < 13 ? (C = S[R--],
                                        S[R] = S[R] >> C) : A < 15 && (S[++R] = s(b, O),
                                            O += 4)
                    }
                } else {
                    A = 3 & x;
                    if (x >>= 2,
                        A > 2)
                        (A = x) > 13 ? (S[++R] = p(b, O),
                            O += 8) : A > 11 ? (C = S[R--],
                                S[R] = S[R] >>> C) : A > 9 ? S[++R] = !0 : A > 7 ? (z = y(b, O),
                                    O += 2,
                                    S[R] = S[R][z]) : A > 0 && (C = S[R--],
                                        S[R] = S[R] < C);
                    else if (A > 1) {
                        (A = x) > 10 ? (z = s(b, O),
                            t[++o] = [[O + 4, z - 3], 0, 0],
                            O += 2 * z - 2) : A > 8 ? (C = S[R--],
                                S[R] = S[R] ^ C) : A > 6 && (C = S[R--])
                    } else if (A > 0) {
                        if ((A = x) < 3) {
                            var D = 0
                                , T = S[R].length
                                , $ = S[R];
                            S[++R] = function () {
                                var b = D < T;
                                if (b) {
                                    var e = $[D++];
                                    S[++R] = e
                                }
                                S[++R] = b
                            }
                        } else
                            A < 5 ? (z = y(b, O),
                                O += 2,
                                C = c[z],
                                S[++R] = C) : A < 7 ? S[R] = ++S[R] : A < 9 && (C = S[R--],
                                    S[R] = S[R] in C)
                    } else {
                        if ((A = x) > 13)
                            C = S[R],
                                S[R] = S[R - 1],
                                S[R - 1] = C;
                        else if (A > 4)
                            C = S[R--],
                                S[R] = S[R] === C;
                        else if (A > 2)
                            C = S[R--],
                                S[R] = S[R] - C;
                        else if (A > 0) {
                            for (z = v(b, O),
                                A = "",
                                P = i.q[z][0]; P < i.q[z][1]; P++)
                                A += String.fromCharCode(r ^ i.p[P]);
                            A = +A,
                                O += 4,
                                S[++R] = A
                        }
                    }
                }
            }
        if (I)
            for (; O < E;) {
                j = B[O];
                O += 2;
                A = 3 & (x = 13 * j % 241);
                if (x >>= 2,
                    A < 1) {
                    var U;
                    A = 3 & x;
                    if (x >>= 2,
                        A < 1) {
                        if ((A = x) > 14)
                            z = W[O],
                                (U = function e() {
                                    var f = arguments;
                                    return e.y > 0 ? K(b, e.c, e.l, f, e.z, this, null, 0) : (e.y++,
                                        K(b, e.c, e.l, f, e.z, this, null, 0))
                                }
                                ).c = O + 4,
                                U.l = z - 2,
                                U.x = G,
                                U.y = 0,
                                U.z = c,
                                S[R] = U,
                                O += 2 * z - 2;
                        else if (A > 12)
                            q = S[R--],
                                w = S[R--],
                                (A = S[R--]).x === G ? A.y >= 1 ? S[++R] = K(b, A.c, A.l, q, A.z, w, null, 1) : (S[++R] = K(b, A.c, A.l, q, A.z, w, null, 0),
                                    A.y++) : S[++R] = A.apply(w, q);
                        else if (A > 5)
                            C = S[R--],
                                S[R] = S[R] != C;
                        else if (A > 3)
                            C = S[R--],
                                S[R] = S[R] * C;
                        else if (A > -1)
                            return [1, S[R--]]
                    } else if (A < 2) {
                        (A = x) < 4 ? (q = S[R--],
                            (A = S[R]).x === G ? A.y >= 1 ? S[R] = K(b, A.c, A.l, [q], A.z, w, null, 1) : (S[R] = K(b, A.c, A.l, [q], A.z, w, null, 0),
                                A.y++) : S[R] = A(q)) : A < 6 ? S[R -= 1] = S[R][S[R + 1]] : A < 8 ? S[R] = --S[R] : A < 10 && (C = S[R--],
                                    S[R] = typeof C)
                    } else if (A < 3) {
                        if ((A = x) > 11)
                            throw S[R--];
                        if (A > 7) {
                            for (C = S[R--],
                                z = W[O],
                                A = "",
                                P = i.q[z][0]; P < i.q[z][1]; P++)
                                A += String.fromCharCode(r ^ i.p[P]);
                            O += 4,
                                S[R--][A] = C
                        } else
                            A > 5 && (S[R] = h(S[R]))
                    } else {
                        (A = x) < 1 ? S[++R] = null : A < 3 ? (C = S[R--],
                            S[R] = S[R] >= C) : A < 12 && (S[++R] = void 0)
                    }
                } else if (A < 2) {
                    A = 3 & x;
                    if (x >>= 2,
                        A > 2)
                        (A = x) > 12 ? S[++R] = l : A > 5 ? (C = S[R--],
                            S[R] = S[R] !== C) : A > 3 ? (C = S[R--],
                                S[R] = S[R] / C) : A > 1 ? O += 2 * (z = W[O]) - 2 : A > -1 && (S[R] = !S[R]);
                    else if (A > 1) {
                        (A = x) < 2 ? S[++R] = C : A < 4 ? (C = S[R--],
                            S[R] = S[R] <= C) : A < 11 ? (C = S[R -= 2][S[R + 1]] = S[R + 2],
                                R--) : A < 13 && (C = S[R],
                                    S[++R] = C)
                    } else if (A > 0) {
                        if ((A = x) < 8)
                            q = S[R--],
                                C = delete S[R--][q];
                        else if (A < 10) {
                            for (z = W[O],
                                A = "",
                                P = i.q[z][0]; P < i.q[z][1]; P++)
                                A += String.fromCharCode(r ^ i.p[P]);
                            O += 4,
                                S[R] = S[R][A]
                        } else
                            A < 12 ? (C = S[R--],
                                S[R] = S[R] << C) : A < 14 && (S[++R] = W[O],
                                    O += 2)
                    } else {
                        if ((A = x) < 5) {
                            z = W[O];
                            try {
                                if (t[o][2] = 1,
                                    1 == (C = G(b, O + 4, z - 3, [], c, l, null, 0))[0])
                                    return C
                            } catch (m) {
                                if (t[o] && t[o][1] && 1 == (C = G(b, t[o][1][0], t[o][1][1], [], c, l, m, 0))[0])
                                    return C
                            } finally {
                                if (t[o] && t[o][0] && 1 == (C = G(b, t[o][0][0], t[o][0][1], [], c, l, null, 0))[0])
                                    return C;
                                t[o] = 0,
                                    o--
                            }
                            O += 2 * z - 2
                        } else
                            A < 7 ? (z = W[O],
                                O += 2,
                                S[R -= z] = 0 === z ? new S[R] : d(S[R], n(S.slice(R + 1, R + z + 1)))) : A < 9 && (C = S[R--],
                                    S[R] = S[R] & C)
                    }
                } else if (A < 3) {
                    A = 3 & x;
                    if (x >>= 2,
                        A < 1)
                        (A = x) < 2 ? (C = S[R--],
                            S[R] = S[R] > C) : A < 9 ? (z = W[O],
                                O += 4,
                                q = R + 1,
                                S[R -= z - 1] = z ? S.slice(R, q) : []) : A < 11 ? (z = W[O],
                                    O += 2,
                                    C = S[R--],
                                    c[z] = C) : A < 13 ? (C = S[R--],
                                        S[R] = S[R] >> C) : A < 15 && (S[++R] = W[O],
                                            O += 4);
                    else if (A < 2) {
                        (A = x) < 1 ? S[++R] = g : A < 3 ? (C = S[R--],
                            S[R] = S[R] + C) : A < 5 ? (C = S[R--],
                                S[R] = S[R] == C) : A < 14 && (C = S[R - 1],
                                    q = S[R],
                                    S[++R] = C,
                                    S[++R] = q)
                    } else if (A < 3) {
                        if ((A = x) < 2) {
                            for (z = W[O],
                                C = "",
                                P = i.q[z][0]; P < i.q[z][1]; P++)
                                C += String.fromCharCode(r ^ i.p[P]);
                            S[++R] = C,
                                O += 4
                        } else
                            A < 4 ? S[R--] ? O += 4 : O += 2 * (z = W[O]) - 2 : A < 6 ? (C = S[R--],
                                S[R] = S[R] % C) : A < 8 ? (C = S[R--],
                                    S[R] = S[R] instanceof C) : A < 15 && (S[++R] = !1)
                    } else {
                        (A = x) > 7 ? (C = S[R--],
                            S[R] = S[R] | C) : A > 5 ? (z = W[O],
                                O += 2,
                                S[++R] = c["$" + z]) : A > 3 && (z = W[O],
                                    t[o][0] && !t[o][2] ? t[o][1] = [O + 4, z - 3] : t[o++] = [0, [O + 4, z - 3], 0],
                                    O += 2 * z - 2)
                    }
                } else {
                    A = 3 & x;
                    if (x >>= 2,
                        A > 2)
                        (A = x) > 13 ? (S[++R] = W[O],
                            O += 8) : A > 11 ? (C = S[R--],
                                S[R] = S[R] >>> C) : A > 9 ? S[++R] = !0 : A > 7 ? (z = W[O],
                                    O += 2,
                                    S[R] = S[R][z]) : A > 0 && (C = S[R--],
                                        S[R] = S[R] < C);
                    else if (A > 1) {
                        (A = x) > 10 ? (z = W[O],
                            t[++o] = [[O + 4, z - 3], 0, 0],
                            O += 2 * z - 2) : A > 8 ? (C = S[R--],
                                S[R] = S[R] ^ C) : A > 6 && (C = S[R--])
                    } else if (A > 0) {
                        if ((A = x) > 7)
                            C = S[R--],
                                S[R] = S[R] in C;
                        else if (A > 5)
                            S[R] = ++S[R];
                        else if (A > 3)
                            z = W[O],
                                O += 2,
                                C = c[z],
                                S[++R] = C;
                        else if (A > 1) {
                            D = 0,
                                T = S[R].length,
                                $ = S[R];
                            S[++R] = function () {
                                var b = D < T;
                                if (b) {
                                    var e = $[D++];
                                    S[++R] = e
                                }
                                S[++R] = b
                            }
                        }
                    } else {
                        if ((A = x) < 2) {
                            for (z = W[O],
                                A = "",
                                P = i.q[z][0]; P < i.q[z][1]; P++)
                                A += String.fromCharCode(r ^ i.p[P]);
                            A = +A,
                                O += 4,
                                S[++R] = A
                        } else
                            A < 4 ? (C = S[R--],
                                S[R] = S[R] - C) : A < 6 ? (C = S[R--],
                                    S[R] = S[R] === C) : A < 15 && (C = S[R],
                                        S[R] = S[R - 1],
                                        S[R - 1] = C)
                    }
                }
            }
        return [0, null]
    }
    function K(b, e, f, a, d, c, n, i) {
        var r, t;
        null == c && (c = this),
            d && !d.d && (d.d = 0,
                d.$0 = d,
                d[1] = {});
        var o = {}
            , l = o.d = d ? d.d + 1 : 0;
        for (o["$" + l] = o,
            t = 0; t < l; t++)
            o[r = "$" + t] = d[r];
        for (t = 0,
            l = o.length = a.length; t < l; t++)
            o[t] = a[t];
        return i && !B[e] && F(b, e, 2 * f),
            B[e] ? G(b, e, f, 0, o, c, null, 1)[1] : G(b, e, f, 0, o, c, null, 0)[1]
    }
}, (glb = "undefined" == typeof window ? global : window)._$jsvmprt("484e4f4a403f5243000d2d1aea78184c36c3d671000000000000ab44020000250074211b000b02430200013e2217000e1c211b000b03430200024017000e18011b000b02041c16004c211b000b04430200033e2217000b1c1b000b041e00041700181b000b04260200050a000118010a0002101c16001e180022011700051c131f0018011800131e00061a001d000727041c00261102000025552002000825000d1b000b081e00090101001f0702000a25000e211b000b094302000240001f0802000b25005b131e000c02000d02000e1a02221e000f24131e00100a000110220117003c1c0200002500131800221e0011240a0000100200123e00131e001301220117001a1c211b000b0a43020002402217000b1c1b000b0a1e001404001f090200152500131b000b0b1a00221e0016240a000010001f0a020017250039211800430200023e22011700081c1800263e17000702000000211800430200183e170012180017000902001916000602001a001800001f0b02001b25005218010117000802001c1f010200001f0618001f0e180e480039170033180618011b000b0c221e001d241b000b0c221e001e240a00001018011e001f2a0a00011019281f06180e2e1f0e16ffcb1806001f0c0200202500df0200021f0621134318063e22011700121c13221e0011240a00001002002140220117001c1c1b000b051e00221e0011221e002324130a00011002002140220117000d1c211b000b084318063e22011700201c1b000b08221e0011240a000010221e0024240200250a00011048003a220117000d1c211b000b0d4318063e22011700151c1b000b0d221e0011240a00001002002640220117000d1c211b000b0e4318063e17000520001b020b07260a00001001170028211b000b0f4318063e22011700151c1b000b0f221e0011240a00001002002740170005200012001f0d0200282500a3211801430200294017000400180002002a281f061801221e002b24131e000c02002c0200001a020a0001101f0748001f12181218071e001f3a17006618071812191f081808221e002d2448000a00011002002e3e17001a1808221e002f24480118081e001f0a0002101f0816ffd81808221e00242418060a00011048003e1700191808221e002f2418061e001f18081e001f0a0002100018122d1f1216ff95001f0e02003025007146000306000a271f22020000000500600200001f06131e003117001c131e0031221e00322418000a0001101f061806170006180600131e003317001c131e0033221e00322418000a0001101f0618061700061806001b020b0e2618001b000b081e00340a0002101f0618060007001f0f02003525009c460003060006271f2205008f131e0031170015131e0031221e003624180018010a0002101c131e0033170015131e0033221e003624180018010a0002101c49016d48182a483c2a483c2a4903e82a1f061b000b081800020037281d00341b000b08180002002a28180128020038281b000b0b1b000b0b1a00221e0016240a0000101806281a01221e0039240a0000102802003a281d003407001f1002003b25004c460003060006271f1e05003f131e0031170013131e0031221e003c2418000a0001101c131e0033170013131e0033221e003c2418000a0001101c1b000b081800020037281d003407001f1102003d2500a31b000b101a001f061b000b05221e003e24180602003f131e00061a002202000025000c1b030b00201d0040001d00410a0003101c1b000b11221e00422402004318060a0002101c13221700081c131e00442217000b1c131e00441e00451700091800201d00401b020b08260a00001017003013221700221c131e0046131e00472948643922011700101c131e0048131e0049294864391700091800201d0040001f1302004a25002b211343020002402217001f1c1b000b051e00221e0011221e002324131e004b0a00011002004c3e001f1402004d2500611b020b07260a0000100117005202004e1b000b0d420122011700111c1b000b0d1e004e1b000b12410122011700091c02004f134222011700091c020050134222011700091c0200511342220117000f1c020052134202005313423a0012001f150200542501661b000b0d1e005517000520000200561b000b05421700431b000b05221e0056241b000b0d0a0001101f101810221e0024240200550a00011048003b22011700151c1810221e0024240200570a00011048003b170005200013221700081c131e00582217000b1c131e00581e00592217000e1c131e00581e00591e005a17002a460003060006271f9605001e131e00581e0059221e005a240a0000101b000b063e17000520000702005b02005c02005d02005e02005f0200600200610200620200630200640200650a000b1f060200660200670200680a00031f07180708031fc918c921041700181fc8180718c8191fca1318ca19170005200016ffe7180608031fc918c9210417001b1fc8180618c8191fca131e006918ca19170005200016ffe4131e006908031fc918c921041700341fc818c8221e006a24131e000c02006b0200001a020a0001102217000f1c131e006918c81902006c19170005200016ffcb12001f1602006d2500c71b020b08260a0000101700291b000b13221e006e2402000f0a0001101f06180602000025000c1b030b00201d006f001d00701b020b09260a00001017005b46000306002c271f1a181a1e00711b000b14020072193e2217000e1c131e00311e001f48003e1700091800201d006f050029131e0031221e0036240200730200000a0002101c131e0031221e003c240200730a0001101c071b020b07260a000010170024131e007401221700121c131e007522011700081c131e00761700091800201d006f001f170200772500b11b020b07260a000010011700a21b000b08221e0078240200790a0001101f0618061e007a221e0011240a000010221e007b24131e000c02007c02007d1a020200000a000210221e00242402007e0a00011048003a220117003b1c1b000b0d1e0011221e0011240a000010221e007b24131e000c02007c02007d1a020200000a000210221e00242402007e0a00011048003a22011700181c1b000b0d1e004e221e0011240a00001002007f400012001f18020080250075131e000c0200810200001a021f0613221700081c131e00822217000b1c131e00821e008317004c131e00821e00831f071807221e0024240200840a00011048003e22011700151c1807221e0024240200850a00011048003e22011700111c1806221e000f2418070a000110170005200012001f190200862500961b020b1a1e008717000b1b020b1a1e00870046000306000a271f1e020000000500731b000b08221e0078240200790a0001101f0c180c221e0088240200890a0001101f0d180d221e008a2402008b0a0001101f0e180d221e008c24180e02008d190a0001101f0f180d221e008c24180e02008e190a0001101f10180f02008f281810281f111b020b1a18111d008718110007001f1b0200902501270200001f061b020b1a1e009117000f1b020b1a1e00911f061600fb48051f0e0a00001f0f1b000b0d1e004e1f10181022011700071c0a00001f1148001f121812180e3a1700b7460003060006271f3f0500a318111812191f130a00001f1448001f16181618131e001f3a1700371813221e00922418160a00011017001f1814221e0093241813221e00922418160a0001101e00940a0001101c18162d1f1616ffc418131e0095020000281f1518131e0096170011181518131e009602000028281f15181518131e009702000028281f1518151814221e0098240200000a000110281f15180f221e00932418150a0001101c0718122d1f1216ff47180f221e0098240200990a0001101f061b020b1a18061d00911806221e009a2448004904000a000210001f1c02009b2504631b000b0d1e009c221e009d240a0000101f061b000b0d1e009e221e009d240a0000101f0748001f0848011f0948021f0a48031f0b48041f0c48051f0d180d1f0e02009f1f0f0200a01f100200a11f110200a21f120200a31f130200a41f140200a51f150200a61f161806221e0024240200a70a00011048003b22011700151c1806221e0024240200a80a00011048003b17000a180c1f0e1600f71806221e002424180f0a00011048003b17000a18081f0e1600dd1806221e00242418110a00011048003b17000a18091f0e1600c31806221e00242418120a00011048003b22011700151c1806221e0024240200a90a00011048003b22011700151c1806221e0024240200aa0a00011048003b17000a180a1f0e16007b1806221e00242418130a00011048003b22011700141c1806221e00242418140a00011048003b22011700141c1806221e00242418150a00011048003b22011700151c1806221e0024240200ab0a00011048003b22011700151c1806221e0024240200ac0a00011048003b17000a180b1f0e160007180d1f0e1807221e00242418100a00011048003b221700091c180e18084017000820001601521807221e00242418120a00011048003b22011700141c1807221e00242418110a00011048003b22011700151c1807221e0024240200ad0a00011048003b221700091c180e180a40221700091c180e18094017000820001600f91807221e00242418160a00011048003b22011700141c1807221e00242418140a00011048003b22011700141c1807221e00242418150a00011048003b22011700141c1807221e00242418130a00011048003b221700091c180e180c40221700091c180e180b40170008200016008b1807221e00242418100a00011048003a221700141c1807221e00242418120a00011048003a221700141c1807221e00242418160a00011048003a221700141c1807221e00242418130a00011048003a221700141c1807221e00242418140a00011048003a221700141c1807221e00242418150a00011048003a1f001800180e180d3e40170005200048001f1748011f1848021f1948041f1a48051f1b181b1f1c1806221e0024240200ae0a00011048003b17000a18191f1c1600861806221e0024240200af0a00011048003b22011700151c1806221e0024240200b00a00011048003b17000a18181f1c1600541806221e0024240200b10a00011048003b17000a18171f1c1600391806221e0024240200b20a00011048003b22011700151c1806221e0024240200b30a00011048003b17000a181a1f1c160007181b1f1c1b020b1c260a000010221e009d240a0000101f1d1b020b1b260a000010221e009d240a0000101f1e181c18173f221700091c181c18183f2217002d1c131e005822011700231c1b000b0d1e00b4221e0011240a000010221e0024240200b50a00011048003b1700052000181c18173f221700091c181c18183f221700151c181d221e0024240200580a00011048003b1700052000181c181a3e2217000a1c181e0200003f170005200012001f1d0200b62500da261f0646000306000f271f121b000b081e00b71f060500191b000b08221e00b8240200b90a0001104800191f06071806263e170004001b000b08221e0078240200ba0a0001101f070200bb1b000b15264927101b000b0c221e001e240a0000102a480a0a000210280200bb281b000b0b1a00221e0016240a000010281f0818000200bc180828281f00180718001d00bd1318080200002500311b030b011800041c460003060006271f0c05001c1b030b06221e00be241b030b070a0001101c131b030b080907000d1806221e00bf2418070a0001101c001f1e0200c02500be18001e001f1f0618064802331f07180117003018001806480129191f0818074804291f07180818074803293a22011700091c1808180739170005260018081f0748001f09180918063a17004a180018091b000b16221e00c12418001809194900ff2f18001809194808354900ff2f18001809194810354900ff2f18001809194818354900ff2f0a0004100d18092d1f0916ffb41800221e0098240200000a0001101f0a1801170013180a221e002f24480018070a00021000180a001f200200c225007f18001e001f1f0618064802341f07180648032f48004017000818072d1f07180117001a1b000b1718074801281a011f081808180718060d16000d1b000b1718071a011f0848001f09180918063a17002c1808180948023423191800221e00c32418090a000110180948032f48033333300d18092d1f0916ffd21808001f210200c425000a18001400c52f001f220200c6250030180248053518014802333118014803351802480433312818001801311805180348032f180431191802312831001f230200c725001818001e001f48043a17000a180048041d001f1800001f240200c82500d618001e001f1f0618064801291f0718001807191f0948001f0a1b000b0c221e001d244806483418062b280a0001104800301f0d180d4800391700981b020b22180a1b020b1f28041f0a180a48023548032f1f0b48001f0c180c18073a17003d1800180c480128191f081800180c1b020b221800180c191b020b2326180a18081809180c180b18010a00061028040d271f09180c2d1f0c16ffc118004800191f08180018071b020b2218001807191b020b2326180a180818091807180b18010a00061028040d271f09180d2e1f0d16ff661800001f250200c92500d818001e001f1f0618064801291f0718004800191f081b000b0c221e001d244806483418062b280a0001101f0d1b020b22180d1b020b1f2a041f0a180a480040170093180a48023548032f1f0b18071f0c180c48003917003d1800180c480129191f091800180c1b020b221800180c191b020b2326180a18081809180c180b18010a00061029040d271f08180c2e1f0c16ffc118001807191f09180048001b020b2218004800191b020b2326180a180818094800180b18010a00061029040d271f081b020b22180a1b020b1f29041f0a16ff6b1800001f260200ca2501ac131e000c0200cb0200001a02221e000f2418000a0001101700061800000a00001f0618001e001f1f0748001f0848001f09180818073a1701641800221e00c32418080a0001101f0a180a4900803a170018180618091800221e002d2418080a0001100d16012a180a4908003a17002a180618091b000b16221e00c1244900c0180a48063430490080180a483f2f300a0002100d1600fa180a4a0000d8003a220117000c1c180a4a0000dfff39170036180618091b000b16221e00c1244900e0180a480c3430490080180a480634483f2f30490080180a483f2f300a0003100d1600ae180848012818073a1700991800221e00c32418084801280a0001101f0b180a4a0000dc003a2217000c1c4a0000dc00180b3c2217000c1c180b4a0000dfff3c170062180a4903ff2f480a33180b4903ff2f304a00010000281f0c180618091b000b16221e00c1244900f0180c481234483f2f30490080180c480c34483f2f30490080180c480634483f2f30490080180c483f2f300a0004100d18082d1f0816000d1b000b180200cc1a014718082d1f0818092d1f0916fe9a1806221e0098240200000a000110001f270200cd25024e1b000b1718011a011f0648001f0748001f0818001e001f1f09180718013a221700091c180818093a1702051800221e00c3241808222d1f080a0001101f0a180a4804341f0c180c480040170061180c480140170059180c480240170051180c480340170049180c480440170041180c480540170039180c480640170031180c480740170029180c480c4017002b180c480d40170023180c480e40170055180c480f401700a216016816017d18061807180a0d160173180818093a17002818061807180a481f2f4806331800221e00c3241808222d1f080a000110483f2f300d16000d1b000b180200ce1a0147160139180848012818093a17004018061807180a480f2f480c331800221e00c3241808222d1f080a000110483f2f480633301800221e00c3241808222d1f080a000110483f2f300d16000d1b000b180200ce1a01471600e4180848022818093a1700b4180a48072f4812331800221e00c3241808222d1f080a000110483f2f480c33301800221e00c3241808222d1f080a000110483f2f480633301800221e00c3241808222d1f080a000110483f2f304a00010000291f0b4800180b3c2217000c1c180b4a000fffff3c17002f18061807222d1f07180b480a344903ff2f4a0000d800300d18061807180b4903ff2f4a0000dc00300d16001b1b000b180200cf180b221e00112448100a000110281a014716000d1b000b180200ce1a014716001b1b000b180200d0180a221e00112448100a000110281a014718072d1f0716fdef180718013a17000a180618071d001f1b000b161e00c11b000b16180610001f280200d12502aa0a00001f061b000b174a000080001a011f0748001f0848001f0918001e001f1f0a180818013a221700091c1809180a3a1702431800221e00c3241809222d1f090a0001101f0b180b4804341f0e180e480040170061180e480140170059180e480240170051180e480340170049180e480440170041180e480540170039180e480640170031180e480740170029180e480c4017002b180e480d40170023180e480e40170055180e480f401700a216016816017d18071808180b0d1601731809180a3a17002818071808180b481f2f4806331800221e00c3241809222d1f090a000110483f2f300d16000d1b000b180200ce1a01471601391809480128180a3a17004018071808180b480f2f480c331800221e00c3241809222d1f090a000110483f2f480633301800221e00c3241809222d1f090a000110483f2f300d16000d1b000b180200ce1a01471600e41809480228180a3a1700b4180b48072f4812331800221e00c3241809222d1f090a000110483f2f480c33301800221e00c3241809222d1f090a000110483f2f480633301800221e00c3241809222d1f090a000110483f2f304a00010000291f0c4800180c3c2217000c1c180c4a000fffff3c17002f18071808222d1f08180c480a344903ff2f4a0000d800300d18071808180c4903ff2f4a0000dc00300d16001b1b000b180200cf180c221e00112448100a000110281a014716000d1b000b180200ce1a014716001b1b000b180200d0180b221e00112448100a000110281a01471808497fff4801293b17003518084801281f0d1807180d1d001f180618061e001f1b000b161e00c11b000b161807100d1801180d291f0148004801291f0818082d1f0816fdb11808480039170020180718081d001f180618061e001f1b000b161e00c11b000b161807100d1806221e0098240200000a000110001f290200d22500b418011b000b063e22011700081c1801263e22011700091c180148003a17000a18001e001f1f01180148003e17000702000000131e000c0200cb0200001a02221e000f2418000a000110220117001c1c131e000c0200d30200001a02221e000f2418000a00011001170021180118001e001f3e1700061800001800221e00d424480018010a0002100018014a0000ffff3a1700131b020b2826180018010a0002101600101b020b2926180018010a000210001f2a0200d525006b18001b000b063e22011700081c1800263e220117000c1c18001e001f48003e1700061800001b020b271800041f001b020b271801041f011b020b20261b020b25261b020b21261800200a0002101b020b241b020b21261801120a000210040a000210120a000210001f2b0200d625006718001b000b063e22011700081c1800263e220117000c1c18001e001f48003e1700061800001b020b271801041f011b020b2a1b020b20261b020b26261b020b21261800120a0002101b020b241b020b21261801120a000210040a000210200a00021004001f2c0200d725019d0200d81f0602002a1f0718021700080200001f07180117000718011f060200001f0848001f0a18001e001f180a4803283b1700b31800221e00c324180a222d1f0a0a0001104900ff2f4810331800221e00c324180a222d1f0a0a0001104900ff2f480833301800221e00c324180a222d1f0a0a0001104900ff2f301f0918081806221e002d2418094a00fc00002f4812340a000110281f0818081806221e002d2418094a0003f0002f480c340a000110281f0818081806221e002d241809490fc02f4806340a000110281f0818081806221e002d241809483f2f0a000110281f0816ff4518001e001f180a294800391700a81800221e00c324180a222d1f0a0a0001104900ff2f48103318001e001f180a3917001a1800221e00c324180a0a0001104900ff2f4808331600054800301f0918081806221e002d2418094a00fc00002f4812340a000110281f0818081806221e002d2418094a0003f0002f480c340a000110281f08180818001e001f180a3917001a1806221e002d241809490fc02f4806340a0001101600051807281f0818081807281f081808001f2d0200d92500120200da221e00242418000a000110001f2e0200db2501100200001f0648001f07180718001e001f4803293a1700f61b020b2e1800221e002d2418074800280a000110041f081b020b2e1800221e002d2418074801280a000110041f091b020b2e1800221e002d2418074802280a000110041f0a1b020b2e1800221e002d2418074803280a000110041f0b18061b000b16221e00c12418084802331809480435300a000110281f061800221e002d2418074802280a00011002002a3f17002718061b000b16221e00c12418094804334900f02f180a480235480f2f300a000110281f061800221e002d2418074803280a00011002002a3f17002118061b000b16221e00c124180a4806334900c02f180b300a000110281f0618074804281f0716ff021806001f2f0200dc25004a1800483f2f1f001b000b16221e00c12418001800481a3a1700084841160025180048343a17000848471600181800483e3a17000b48004804291600084800481129280a000110001f310200dd2500331b020b311f06180618004818340418061800481234042818061800480c340428180618004806340428180618000428001f320200de2500981b020b121e00df0200e0281f061b020b1e26180602000025007818001e001f48083a17000400460003060006271f7405005f1b020b2c261b020b2f1800221e009a2448080a000110041800221e009a24480048080a0002100a0002101f0c180c0200e13e1700131b020b38262018000a0002101c160019180c0200e23e1700101b020b38261218000a0002101c07000a0002101c001f370200e325004e1b020b1218001d00e4460003060006271f1e050038131e0031170016131e0031221e0036240200e518010a0002101c131e0033170016131e0033221e0036240200e518010a0002101c07001f380200e62500a90200001f06460003060006271f2305003f131e0031170015131e0031221e0032240200e50a0001101f0618060122011700081c131e0033170015131e0033221e0032240200e50a0001101f06071806170055460003060006271f430500491b020b2c261b020b2f1806221e009a2448080a000110041806221e009a24480048080a0002100a0002101f2318230200e13e170008200016000e18230200e23e17000512000712001f390200e7250103121f061b020b121e00e4203e170009201f061600201b020b121e00e4123e170009121f0616000e1b020b39260a0000101f06131e00061a0022121d00e822121d00e922121d00822218061d00ea22121d00eb22121d004022121d00ec22121d00ed22121d005522121d006f22121d00ee220200ef25000520001f4018401d000f1f0718071b020b0d260a0000101d00eb18071e00eb011700671b020b131807041c1b020b171807041c18071b020b14260a0000101d00ec18071b020b15260a0000101d00ed18071b020b16260a0000101d005518071b020b18260a0000101d00ee18071b020b19260a0000101d008218071b020b1d260a0000101d00e91807001f3a0200f025005c1b000b05221e00f12418000a0001101f0648001f0718061e001f4801291f08180848003b1700321800180618081919170008480116000548001f09180918061e001f180829480129331807301f0718082e1f0816ffcc1807001f3b0200f225003848001f06180618011e001f3a17002618004a0001003f2a1801221e00c32418060a000110284800351f0018062d1f0616ffd51800001f3c0200f325003848001f06180618011e001f3a17002618001801221e00c32418060a000110314a0001003f2a4800351f0018062d1f0616ffd51800001f3d0200f42500a348001f06180618011e001f3a1700911801221e00c32418060a0001101f0718074a0000d8003b2217000c1c18074a0000dbff3c2217000c1c180618011e001f3a1700451801221e00c32418064801280a0001101f0818084a0000fc002f4a0000dc003d17002218074903ff2f480a3318084903ff2f284a00010000281f0718064801281f0618004a0001003f2a1807284800351f0018062d1f0616ff6a1800001f3e0200f5250077180022011700071c0200001f061806221e007b24131e000c0200f60200001a020200000a0002101f061806221e0024240200e00a0001104800480129401700211806221e00d42448001806221e0024240200e00a0001100a00021016000518061f061806170008180616000602008f1f061806001f3f0200f72500b1180022011700071c0200001f061806221e006a24131e000c0200f80200001a020a0001101f0718071700161807480019221e00d42448010a0001101600060200001f0618061700141806221e002b240200f90a000110160004261f08131e00061a001f09180817004548001f0a180a18081e001f3a17003618091808180a19221e002b2402002a0a0001104800191808180a19221e002b2402002a0a0001104801190d180a2d1f0a16ffc51809001f400200fa25009118000122011700171c1b000b19221e00fb2418000a0001100200fc3e17000a131e00061a00001b000b05221e00f12418000a000110221e00fd240a0000101f06131e00061a001f0748001f10181018061e001f3a170037180117001a180718061810191800180618101919020000280d1600131807180618101918001806181019190d18102d1f1016ffc41807001f410200fe2500781b000b17221e00ff2418000a0001101700131800221e0100241b020b420a0001100018001b000b05411700491b000b05221e00f12418000a000110221e00fd240a0000101f0c180c221e010124020000250017180018011b020b421b030b00180119040d180000131e00061a000a000210001800001f4202010225007d18000122011700171c1b000b19221e00fb2418000a0001100200fc3e170007020000001b000b05221e00f12418000a000110221e00fd240a0000101f060200001f0748001f10181018061e001f3a170029180718061810190a000102002a281800180618101919280200f928281f0718102d1f1016ffd21807001f430201032500cb1b000b08221e0078240200790a0001101f07180748301d0104180748101d01051807221e0088240201060a0001101f0818080201071d01081808221e01092402010a4802480c0a0003101c180848021d010b180848011d010c180802010d1d010e1808221e010f24480848084808480048020a0005101c1808221e0110240a0000101c1807221e007a240a0000101f0648001f09180948203a17002c18004a0001003f2a1806221e00c324180018061e001f2c0a000110284800351f0018092d1f0916ffd21800001f4402011125002046000306000c271f0c48004801290005000d1b020b44140112040007001f45020113250011110201131d00951118001d0114001f4602011525001a460003060008271f0c200005000b131e003101010007001f4702011625001a460003060008271f0c200005000b131e003301010007001f4802011725001a460003060008271f0c200005000b131e007401010007001f490201182500301b020b0b1b020b49260a000010041b020b0b1b020b48260a00001004281b020b0b1b020b47260a0000100428001f4a020119250023131e011a1f0618061e01040200bb2818061e0105280200bb2818061e011b28001f4b02011c250019131e011a1f0618061e011d0200bb2818061e011e28001f4c02011f2500711b000b1a0200002500640201201b000b0d421700511b000b0d221e0120240a000010221e0121240200002500311b040b001800020122190200bb28180002012319280200bb28180002012419280200bb2818000201251928041c000a0001101c16000a1800020000041c001a01001f4d02012625007d0201271f0648001f07211b000b0d180619430200024017000f1b000b0d1806191f0716001c211b000b0d180619430200024017000c1b000b0d1806191f07460003060009271f50121f080500181b000b08221e0128240201290a0001101c201f080702012a13421f0918070200bb281808280200bb28180928001f4e02012b2500671b000b0b1a001f061806221e012c2448010a0001101c1806221e012d2448050a0001101c48001806221e012e240a000010291f071806221e012d24480b0a0001101c48001806221e012e240a000010291f081b000b0c221e012f24180718080a000210001f4f0201302501dd0201310201320201330a00031f06131e00061a001f07131e00061a001f081b000b081e00b70117000702001a001806031f1b181b21041700711f1a1b000b08221e0078240201340a0001101f1c181c0201351d0136181c1e01370201381d0139181c1e0137181a1d013a1b000b081e00b7221e00bf24181c0a0001101c1807181a181c1e013b0d1808181a181c1e013c0d1b000b081e00b7221e00be24181c0a0001101c16ff8e02013d02013e02013f02014002014102014202014302014402014502014602014702014802014902014a02014b02014c02014d02014e02014f0201500201510201520201530201540201550201560201570201580201590a001d1f0948001f0b271f0a271f0c48001f1a181a18091e001f3a1700b31806031f1c181c210417009f1f1b1b000b08221e0078240201340a0001101f1d181d0201351d0136181d1e01370201381d0139181d1e01371809181a1902015a28181b281d013a1b000b081e00b7221e00bf24181d0a0001101c181d1e013b1807181b1940220117000f1c181d1e013c1808181b19401f1e1b000b081e00b7221e00be24181d0a0001101c181e170018181a481e3a17000d4801181a33180a301f0a16000616ff60181a2d1f1a16ff48180a221e00112448100a000110001f5002015b25002146000306000c271f0c180c1e01140005000e1b000b1b02015c1a011c07001f5102015d2500141b000b1c221e0011240a0000101e001f001f5202015e2501e81b020b07260a000010220117000d1c1b020b09260a00001022011700231c1b000b0d1e009c221e009d240a000010221e00242402015f0a00011048003917000702000000131e016022011700081c131e016122011700081c131e01621f061b000b1a02000025017d46000306000d271f6a1800020000041c0501691b030b0617015a1b030b06131e00061a0022131e00061a00220201631d01640a00011d01651a011f06020000250004001f07131e000c0201660200001a021f08131e000c02016702007d1a021f091806221e0168240200000a0001101c1b000b1d2602000025000d1b040b00020000041c004901f40a0002101c1806221e0169240a0000101f0a180a1b000b1a41170038180a221e0121240200002500131b040b06221e016a2418000a000110000a000110221e012124020000250004000a0001101c1600301806221e01692402000025001c1b040b06221e016a2418001b040b071b040b070a0003101c0018070a0002101c18060200002500601800221700091c18001e016b2217000c1c18001e016b1e016b1700431b040b08221e016c2418001e016b1e016b0a0001101f0618061700271806480019221e006a241b040b090a0001101f07180717000e1b040b001806480019041c001d016d16000a1800020000041c07001a01001f5302016e25005d02016f221e007b24131e000c02017002007d1a0202000025003e1b000b0c221e001e240a00001048102a4800301f0618000201713d170008180616000b180648032f4808301f071807221e00112448100a000110000a000210001f5402017225005518001e001f48223e1700481b020b3c2648001800221e002f24480048200a0002100a0002101f061806221e0011240a000010221e002f24480048020a0002101800221e002f24482048220a0002103e0012001f5502017325005d1b020b0f020174041f0618062217000b1c1b020b551806041700061806001b020b54260a0000101f0618061b020b3c26480018060a00021028221e002f24480048220a0002101f061b020b102602017418060a0002101c1806001f56020175250033180001170007020000001b020b0c4804041f0618061b020b2d261b020b2b26180018060a0002100201760a00021028001f5702017725015d180117003a48001f0b48001f0c180c18001e001f3a1700271800180c191e01781700141800180c191801180b222d1f0b191d0179180c2d1f0c16ffd40200001f061800221e017a2402000025001b1b03220b061b020b0b18001e01790402017b28281d017c000a0001101c18061b020b0a260a000010281f061b020b54260a0000101f071b000b0c221e001d241807221e00c32448030a00011048082b0a0001101807221e00c32448030a00011048082c281f081807221e002f24480448041808280a0002101f091b020b2d1b020b2b26180618090a000210180728041f061b020b12221e017d02017e1b000b1e180604280200f928281d017d271f0a1b020b1e26180a02000025004d180002017f1948003d2217000a1c1800020180191700351b020b121b020b57180002018019041d01811b020b121800020180191d01821b020b10260201831800020180190a0002101c000a0002101c001f5802018425049a1b000b0d221700051c13221700081c1b000b080117000400131e00061a00220201851d01862248041d01872218001e01851d0179131e00061a00220201881d01862248031d0187221b020b0a1d0189131e00061a002202018a1d01862248031d0187221b020b4a1d0189131e00061a00220200791d01862248031d0187221b020b451d0189131e00061a002202018b1d01862248031d0187221b020b0a1d0189131e00061a002202009e1d01862248001d0187131e00061a002202018c1d01862248001d0187131e00061a002202018d1d01862248001d0187131e00061a002202018e1d01862248001d0187131e00061a00220200571d01862248001d0187131e00061a002202018f1d01862248031d0187221b020b4b1d0189131e00061a00220201901d01862248031d0187221b020b4c1d0189131e00061a00220201911d01862248011d0187131e00061a00220201921d01862248011d0187131e00061a00220201931d01862248011d0187131e00061a00220201941d01862248001d0187131e00061a00220201951d01862248031d0187221b020b4d1d01892248011d0178131e00061a00220201961d01862248031d0187221b020b4e1d0189131e00061a00220201971d01862248031d0187221b020b4f1d0189131e00061a00220201981d01862248031d0187221b020b0a1d0189131e00061a00220201991d01862248031d0187221b020b1b1d0189131e00061a002202019a1d01862248031d0187221b020b501d0189131e00061a002202019b1d01862248031d0187221b020b1c1d0189131e00061a002202019c1d01862248031d0187221b020b0a1d0189131e00061a002202009c1d01862248001d0187131e00061a002202019d1d01862248031d0187221b020b0f1d0189220201831d019e131e00061a002202019f1d01862248031d0187221b020b511d0189131e00061a00220201a01d01862248031d0187221b020b521d0189131e00061a00220201a11d01862248031d0187221b020b531d01892248011d0178131e00061a00220200821d01862248011d0187131e00061a00220201a21d01862248041d0187221b020b061e01a31d0179131e00061a00220201a41d01862248031d0187221b020b561d0189131e00061a00220201a51d01862248031d0187221b020b0a1d0189131e00061a00220201a61d01862248041d01870a00221f060a00001f07180608031f11181121041700db1f1018061810191e01871f12181248004017001e1812480140170033181248024017004018124803401700501600a918061810191b020b0b1b000b0d18061810191e018619041d017916008c18061810191318061810191e0186191d017916007718061810191b000b0818061810191e0186191d017916005f18061810191e01781700321b000b1a1700281807221e00932418061810191e0189221e00232418061810191e019e0a0001100a0001101c160025180618101918061810191e0189221e0023242618061810191e019e0a0002101d017916ff241b000b1a1700361b000b1a221e01a72418070a000110221e0121240200002500141b020b58261b030b0618000a0002101c000a0001101c16000b1b020b581806041c001f590201a82500441b000b082217000b1c1b000b081e01a901170004001b020b5b08031f0d180d210417001f1f0c1b000b08221e01a924180c1b020b5b180c190a0002101c16ffe0001f5d0201aa25008418001e001f4900c8391700131800221e01ab24480048640a0002101c18001e001f48003917004e180018001e001f480129191f0c18011e01ac180c1e01ac2948003c220117002a1c0201ad1801422217000f1c18011e0171180c1e01713d2217000f1c18011e01ad180c1e01ad3d170004001800221e00932418010a0001101c001f610201ae25006048001f0618001e01af22011700091c18001e01b022011700091c18001e01b122011700091c18001e01b217000748011f061b020b61261b020b60131e00061a002218061d0171221b000b0b221e01b3240a0000101d01ac0a0002101c001f620201b425006d18001f0618001e00941f0718001e01b52217000a1c18070201b63e17001318001e01b74800191f061b02201d01b8131e00061a002218061e01b91d01712218061e01ba1d01ad221b000b0b221e01b3240a0000101d01ac1f081b020b61261b020b5e18080a0002101c001f630201bb25006d18001f0618001e00941f0718001e01b52217000a1c18070201bc3e17001318001e01b74800191f061b02201d01b8131e00061a002218061e01b91d01712218061e01ba1d01ad221b000b0b221e01b3240a0000101d01ac1f081b020b61261b020b5f18080a0002101c001f640201bd2500191800221e0101241b020b650a00011018001e001f2b001f670201be25006818001e001f48013c1700064800001b020b671800041f061800221e01002402000025000b18001b030b0629000a0001101f071b000b0c221e01bf241807221e0100241b020b660a000110221e0101241b020b650a00011018001e001f4801292b0a000110001f680201c02500d548001f0648001f0718001e001f1801391700ba0a00001f0848001f09180918001e001f4801293a17008418001809480128191f0a18001809191f0b180a1e01ac180b1e01ac291f0c180c17005918021700171808221e0093244801180c2b0a0001101c1600401808221e0093241b000b0c221e01bf241b020b66180a1e0171180b1e017129041b020b66180a1e01ad180b1e01ad2904280a000110180c2b0a0001101c18092d1f0916ff741b020b671808041f061b020b681808041f07180748003d1700081401c11f07180618070a0002001f690201c2250119121f06460003060006271f2105002b1b000b082217000b1c1b000b081e01281700171b000b08221e0128240201290a0001101c201f06071b020b69261b020b5e48010a0002101f071b020b69261b020b604805200a0003101f0848011f09180601221700081c1b020b5c17000a18094840301f091b020b5e1e001f48003e17000d18094802301f09160015180748001948323917000a18094810301f091b020b5f1e001f48003e17000a18094804301f091b020b601e001f48003e17000d18094808301f0916001618084800191401c33917000a18094820301f091809221e00112448200a0001101f0a180a1e001f48013e17000e0201c4180a281f0a160016180a1e001f48023e17000b02001a180a281f0a180a001f6a0201c525002d0200001f06460003060006271f0e0500191b020b0e260201c61b000b081e00340a0002101f06071806001f6b0201c72500531b000b19221e00fb24131e00061a002218001d000e221b000b1f1b000b19221e00fb2418011e00b70a000110041d01c82218021d01860a0001101f061b020b2d261806020176200a0003101f071807001f6c0201c9250434211801430200023e2217000c1c21180043020001402217000a1c18001e01ca0117000d1b020b460201cb1a014748001f0648001f074a0000fff11f081b000b0b1a00221e0016240a0000104903e82b4800351f091b020b061e01cc012217003e1c1b020b3d261b020b3d2648001809020000280a0002101b000b0e1e0083221e002f241b000b0e1e01cd1e001f4802280a0001100a00021018082c1f071809180718082a31480035221e00112448020a0001101f0a180a1f0b180a1e001f48203917001b180a221e002f24180a1e001f4820290a0001101f0b16003c180a1e001f48203a1700310200001f7048001f7118714820180a1e001f293a170013187002001a281f7018712d1f7116ffe51870180b281f0b0201ce1f0c0201cf1f0d0201d01f0e180e180d28180c28180b281f061b000b1526180648020a0002101f061b020b3d2648001806020000280a0002101f0f1b020b3a260a0000101f1018100200e818020201d13e17000712160004200d0200001f11180117000a18011f1116011e1b020b5a1e01d2221e002324110201d318000a0003101c18001e00b72217001a1c1b000b19221e00fb2418001e00b70a0001100200fc4017006f48001fc318001e01d41700331b020b3e2648001b000b19221e00fb241b020b412618001e00b718001e01d40a0002100a0001100a0002101fc31600271b020b3e2648001b000b19221e00fb241b020b4218001e00b7040a0001100a0002101fc30201d518c3280200f9281f111b020b4018001e01ca041fc218001e01d617001a1b000b05221e01d72418c218001e01d60a00021016000518c21fc218111b020b4318c204281f1118110201d8281b020b3f18001e01ca04280200f9281f1118110201d9280201da281f111b020b5a1e01d2221e002324110201db18110a0003101c1b020b3b1810041f121b020b061e01cc012217000d1c1b020b45260a0000101f131b020b061e01cc012217001e1c1b020b121e018122011700111c1b020b571b020b0f02018304041f141b020b331806041b020b3318061401dc2b48003504281b020b33181318063104281b020b331b020b3d26180f1b020b061e01cc012217000b1c1b000b0d1e009c221e0011240a0000100a00021018082c4810331b020b3d26180f1811020000280a00021018082c3004281b020b3318124808331b020b061e01dd4804333018063104281b020b32180704281f151b020b334800041c181417000a18151814281f151b020b6a260a00001022011700071c0201de1f160200bb1b020b6d281b020b061e01df281f1718171816281f1718171b020b6e181528281f171b020b3e26480018170a000210221e00112448100a0001101f181818221e009a2418181e001f48022918181e001f0a0002101f1918171819281f170200001f1a1b020b6b260a0000101f1b181b17001f1b020b6c26181b180018110a0003101f1a18170201e028181a281f171817001f6f0201e1250072131e00061a001f06180108031f081808210417005a1f0718011807191f0918001809191f0a21180a430200023e22011700081c180a263e170006121f0a180a26402217001a1c21180a430200033e220117000c1c21180a430200013e170006201f0a18061809180a0d16ffa51806001f700201e225004b0201e30201e402009e0201e502019402018c0201e60201270201e70200b40201e80201e90201ea0201eb0201ec0201ed0201ee0a00111f061b020b70261b000b0d18060a000210001f710201ef2500450201f00200490200470201f10201f20201f30201930201f40201f50201f60201f70201610201f80201f90201fa0201fb0a00101f061b020b70261318060a000210001f720201fc2500270201fd0201fe0200090201ff0202000a00051f061b020b70261b000b0818060a000210001f730202012500551b000b08221e0078240200790a0001101f06261f07460003060006271f100500281806221e0088240200890a00011022011700121c1806221e0088240202020a0001101f0707180701170006261f071807001f740202032500671800221e008a240202040a00011022011700121c1800221e008a240202050a00011022011700121c1800221e008a240202060a0001101f0618061700271800221e008c2418061e02070a0001101f07180748003e17000748021f071807001600052600001f750202082501b61b020b1a1e020917000b1b020b1a1e0209001b020b74260a0000101f0618060117000a131e00061a0000131e00061a00221806221e020a240a00001022011700071c0a00001d020b221806221e020c240a0000101e020d1d020d221806221e008c2418061e020e0a0001101d020f221806221e008c2418061e02100a0001101d0211221806221e008c2418061e02120a0001101d0213221b020b751806041d0203221806221e008c2418061e02140a0001101d0215221806221e008c2418061e02160a0001101d0217221806221e008c2418061e02180a0001101d0219221806221e008c2418061e021a0a0001101d021b221806221e008c2418061e021c0a0001101d021d221806221e008c2418061e021e0a0001101d021f221806221e008c2418061e02200a0001101d0221221806221e008c2418061e02220a0001101d0223221806221e008c2418061e02240a0001101d0225221806221e008c2418061e02260a0001101d0227221806221e008c2418061e02280a0001101d0229221806221e008c2418061e022a0a0001101d022b221806221e008c2418061e022c0a0001101d00961f071b020b1a18071d02091807001f7602022d250065131e00061a00221b020b71260a0000101d022e221b020b72260a0000101d022f221b020b73260a0000101d0069221b020b76260a0000101d0089221b020b1b260a0000101d0230221b020b1c260a0000101d004e1f061b020b1a18061d02311806001f77020232250075131e00061a001f061b020b1a1e023117000f1b020b1a1e02311f0616000e1b020b77260a0000101f0618061b000b0b221e01b3240a0000101d02331b020b0c4804041f0718071b020b2d261b020b2b261b000b19221e00fb2418060a00011018070a0002100201760a000210281f081808001f7802023425003b48001f0618061b020b121e02351e001f3a1700251b020b121e0235180619221e000f2418000a000110170005200018062d1f0616ffd112001f790202362503ac131e02371e00221f0618061e006e1f0718061e02381f0818061e02391f0918061e023a1f0a18061e023b170007001600091806201d023b1806020000250076111e023c01170065111e023d221e009324131e00061a00220202381d023e221b041d023f0a0001101c131e000c02024002000e1a02221e000f2418000a00011017002a111801221e0011240a000010221e009d240a000010221e002b240202410a0001104800191d02421b030b08111b0410001d02381806020000250012111b041d02431b030b0a111b0410001d023a1806020000250040110a00001d023d111e023d221e009324131e00061a002202006e1d023e221b041d023f0a0001101c1118001d02441118011d02451b030b07111b0410001d006e02024602007002024702024802024902024a02024b0a00071f0b180602000025026f11201d023c1b020b79111e024504170255111e0245221e00242402024c0a00011048004801293917000c1b030b09111b0410001118001d024d111e024e1f06111e02461f07111e00701f08111e02471f09111e02481f0a111e02491f0b111e024a1f0c111e024b1f0d111e024f1f0e111e02501f0f131e00061a001f1048001f2a182a1b030b0b1e001f3a17002118101b030b0b182a19111e02511b030b0b182a19190d182a2d1f2a16ffd8131e00061a00221b020b82261b030b00111e02450a0002101d01ca1f11111e02440202523d17003c111e02420202533e220117000c1c111e02420202543e17001a1b020b80261811111e0242111e024d0a0003101c16000c1b030b09111b0410001b020b851b030b000417001c1b030b00221e02552418111b000b060201d10a0003101600151b020b6f2618111b000b060201d10a0003101f121b020b8326111e024518120a0002101f13111e023d221700131c111e023d48001902023e1902006e3f1700052600111e023d1f1448001fa418a418141e001f3a17003618a448003e170010181418a4191e023f480118130d11181418a41902023e191911181418a4191e023f101c18a42d1fa416ffc5111e024317000e111e023a11111e0243101c1102023d091b020b121e025617001e11221e0238241b020b061e02571b020b78260a0000100a0002101c1118061d024e1118071d02461118081d00701118091d024711180a1d024811180b1d024911180c1d024a11180d1d024b11180e1d024f11180f1d025048001f9018901b030b0b1e001f3a170021111e02511b030b0b18901918101b030b0b189019190d18902d1f9016ffd81b030b09111b0410001d0239001f7a0202582503f60202592503c31801220117000a1c131e00061a001f011b020b7b2217000b1c18001b000b20411f060200001f0702025a1f08180617001418001e01ca1f0718001e025b1f0816002418001f0718011e025b17001418011e025b221e025c240a00001016000518081f08180802025a402217000a1c180802025240220117000c1c1b020b79180704011700111b030b0626180018010a00021000131e00061a00221b020b82261b030b0018070a0002101d01ca1f0918080202523d1701fc1b020b7f26180018010a000210221e002b240202410a000110480019221e009d240a0000101f5018500202533e220117000a1c18500202543e1701af18061700c81800221e025d240a000010221e025e240a000010221e0121240200002500881b020b80261b040b091b040b5018000a0003101c1b020b851b030b000417001e1b030b00221e0255241b040b091b000b060201d10a0003101600171b020b6f261b040b091b000b060201d10a0003101f061b020b83261b040b0718060a0002101f071b020b81261b040b00180718000a0003101f081b030b062618081b040b010a000210000200002500161b000b1a0200002500091b050b0047001a01000a000210001600e21b020b80261809185018011e00b70a0003101c1b020b851b030b000417001c1b030b00221e02552418091b000b060201d10a0003101600151b020b6f2618091b000b060201d10a0003101fa21b020b8326180718a20a0002101fa31b020b121e025617006f18010117002a131e00061a0022131e00061a00221b020b061e02571b020b78260a0000100d1d025f1f0116004218011e025f011700231801131e00061a00221b020b061e02571b020b78260a0000100d1d025f16001918011e025f1b020b061e02571b020b78260a0000100d1b030b062618a318010a000210001600111b030b0626180018010a00021000160112180802025a3e1700fb1b020b851b030b000417001c1b030b00221e02552418091b000b060201d10a0003101600151b020b6f2618091b000b060201d10a0003101f4e1b020b83261807184e0a0002101f4f18061700271b020b81261800184f1b000b060a0003101f501b030b0626185018010a000210001600871b020b121e025617006f18010117002a131e00061a0022131e00061a00221b020b061e02571b020b78260a0000100d1d025f1f0116004218011e025f011700231801131e00061a00221b020b061e02571b020b78260a0000100d1d025f16001918011e025f1b020b061e02571b020b78260a0000100d1b030b0626184f18010a000210001600111b030b0626180018010a00021000001f071b020b7e260a0000100117000400131e02601700070016000813201d0260131e02611f061318071d0261001f7d020262250008131e0261001f7e02026325010d0200001f061b020b7b2217000b1c18001b000b204117002218001e025f221e0041240202640a0001101f07180717000718071f061806001801221700091c18011e025f1700c61b020b7c2217000e1c18011e025f1b000b214117002218011e025f221e0041240202640a0001101f17181717000718171f0618060018011e025f1b000b174117004448001f47184718011e025f1e001f3a17003218011e025f184719480019221e009d240a0000100202643d17000f18011e025f1847194801190018472d1f4716ffc618011e025f1b000b054117003618011e025f08031f8f188f21041700231f8e188e221e009d240a0000100202643e17000c18011e025f188e190016ffdc180600001f7f0202652500ba1802263e220117000a1c18020200003e1700061800001802221e0011240a0000101f0218010202533e1700771800201d01d41802221e002b240200f90a0001101f0c131e00061a001f0d180c17004a48001f0e180e180c1e001f3a17003b180d180c180e19221e002b2402002a0a0001104800191b000b22180c180e19221e002b2402002a0a000110480119040d180e2d1f0e16ffc01800180d1d00b716001718001b000b19221e02662418020a0001101d00b71800001f8002026725009318001e025f1f061b020b121e025617001f1806221e0268241b020b061e02571b020b78260a0000100a0002101c1b000b201801131e00061a002218001e025b1d025b2218061d025f2218021d00b72218001e02691d02692218001e026a1d026a2218001e026b1d026b2218001e01eb1d01eb2218001e026c1d026c2218001e026d1d026d2218001e026e1d026e1a02001f8102026f25012518011f061b020b121e02701e001f48003917008048001f0818081b020b121e02701e001f3a17006c1b020b121e02701808194800191f091809221e000f2418010a0001101700451801221e007b2418091b020b121e02701808194801190a0002101f061b020b5a1e01d2221e0023241800020271020272180128020273281806280a0003101c16000b18082d1f0816ff8a1b000b2218060418063d17000c1b000b1f1806041f061806221e0024240200e00a0001101f071807480039221700151c1806221e0274240202750a00011018073917004d1806221e00d424480018074801280a0002101f201806221e00d424180748012818061e001f0a0002101f2118201821221e002b240202750a000110221e0098240202760a000110281f061806001f8202027725002d18001800221e0024240200e00a00011048004801294017000c02027818012816000902027918012828001f8302027a2500141b020b7a1800041c1b020b7d1800041c001f8402027b25000b18001b020b8741001f8502027c250019111b000b19221e0266241b020b860a0001101d027d001f8702027e2500c01b020b061e01cc17000526001b020b85110417000a111e027d1600071b020b121f061b000b05221e01d724180618000a0002101c1b020b8a1806041c18061e027a1700201b020b8b18061e027f041c1b020b8c18061e0280041c1b020b8411041c18061e02561700131b000b1d261b020b7748000a0002101c1b020b5d260a0000101c1b020b121e028101221700091c18061e01841700271b020b12201d02811b020b37260a0000101c1b000b1d261b020b59480018060a0003101c001f8902028225006618001e018548003e220117001c1c1b000b0c221e001d2418001e01850a00011018001e01853f17000d1b020b460202831a014718001e027a17002a18001e027f1e001f48003e220117000d1c18001e027f1e00930117000d1b020b460202841a0147001f8a02028525003f48001f06180618001e001f3a17002f180018061917001f1b020b121e0235221e0093241b000b2318001806191a010a0001101c18062d1f0616ffcc001f8b02028625004f18001b000b064017004448001f06180618001e001f3a1700351b020b121e0270221e0093241b000b2318001806194800191a0118001806194801190a00020a0001101c18062d1f0616ffc6001f8c020287250011131e028822011700071c020000001f8d0202892500561b020b0f1b020b061e028a0422011700071c0200001f061b020b111b020b061e028a041c180602028b3d17000b0200001f0616001518060200003d17000c1b000b081e02691f0618061700091318061d0288001f8e211b000b051e01d743020003401700c71b000b05221e003e241b000b050201d7131e00061a00220201d72500941800263e220117000b1c18001b000b063e17000d1b000b0702028c1a01471b000b051800041f0648011f0718071b031e001f3a17005b1b031807191f08180826402217000b1c18081b000b0640170039180808031f141814210417002c1f091b000b051e00221e028d221e002324180818090a00021017000d1806180918081809190d16ffd318072d1f0716ffa01806001f8f188f1d028e22201d028f22201d02900a0003101c1b000b051e00f1011701141b000b050200002501021b000b051e00221e028d1f06131e00061a0022261d0011221e0291240200110a000110011f0702001102029202029302028d02029402029102000d0a00071f0818081e001f1f090200002500b42118004302000340221700161c211800430200014022011700081c1800263e17000d1b000b070202951a01470a00001f06180008031f121812210417002a1f071b030b06221e002324180018070a0002101700111806221e00932418070a0001101c16ffd51b030b0717004548001f0818081b030b093a1700371b030b06221e00232418001b030b081808190a0002101700161806221e0093241b030b081808190a0001101c18082d1f0816ffc518060000260a0000101d00f1131e00061a00220202961d01a32248021d01dd22121d01cc220202881d028a220202971d01df220202981d02571f06131e00061a0022121d02992248001d018522121d018422121d025622121d027a220a00001d027f220a00001d0235220a00001d0280220a00001d02702202029a1d017d2202029b1d00df2202029c1d029d1f12131e00061a001f1a14029e1f1f48001f3002000025001e1b021b020b351d029f1b0218001d02a01b020b32180048023404001f34271f3302000025002a1b021b020b361d029f1b020b30481c331800480435301f061b0218001d02a01b020b32180604001f350200002500271b021b020b341d029f1b020b321b020b30481a33180048063530041b020b3118000428001f36131e00061a0022020000250049121f061b020b85110417000f111e027d1e02991f0616000c1b020b121e02991f061806221700201c1b000b11221e0042240202a11800280202a2280202a318010a0003101c001d01d21f5a131e00061a002218631d02a42218631d01b62218621d02a52218641d01bc2218641d02a61f5b121f5c0a00001f5e0a00001f5f0a00001f600200002500091800180128001f65020000250009180018002a001f660202a71f6d0202a81f6e1b000b202217000d1c1b000b201b000b05411f7b1b000b212217000d1c1b000b211b000b05411f7c1b000b19221e00fb2418120a0001101f86186f1f8818871e002218891d027e18871e002218881d025518871e0022188d1d02871806122217000b1c180d260a0000101d01cc188e260a0000101c180018871d027c1800188d1d0287180018891d027e180018881d02551b000b05221e003e2418000202a9131e00061a0022201d028e0a0003101c000a0002101c0002aa00066d606867617609776c6667646b6c67660864776c61766b6d6c03636f6607677a726d707671064d60686761760e607b7667665d63617063756e6770046b714b470c666d61776f676c764f6d6667096b71446b7067646d7a086b7151636463706b06506765477a720b616d6c7176707761766d70016b04766771760b4a564f4e476e676f676c7608766d5176706b6c6521596d60686761762251636463706b50676f6d76674c6d766b646b6163766b6d6c5f0671636463706b107277716a4c6d766b646b6163766b6d6c0c656776566b6f677176636f7207656776566b6f670865677654636e776707606d6d6e67636c013301320c70636c666d6f5176706b6c653e32333031363734353a3b636061666764656a6b68696e6f6c6d72737071767774757a7b78434041464744454a4b48494e4f4c4d52535051565754555a5b5805646e6d6d700670636c666d6f066e676c65766a09666d6f4667766761760f596d606867617622556b6c666d755f0972706d766d767b72670461636e6e076b6c66677a4d6408466d61776f676c7612596d6068676176224c63746b6563766d705f10596d6068676176224a6b71766d707b5f0a65677644706d6f517670067176706b6c65013f0571726e6b76045939245f06616a637043760122097177607176706b6c6509656776416d6d696b670e716771716b6d6c51766d70636567076567764b76676f0c6e6d61636e51766d7063656706616d6d696b6709716776416d6d696b67077167764b76676f313f3922677a726b7067713f4f6d6c2e2230322251677222303233322232323832323832322257564139227263766a3f2d390a3922677a726b7067713f0b766d454f565176706b6c650939227263766a3f2d390966676e416d6d696b670a70676f6d74674b76676f0e66676077656567704667766761760e6667646b6c6752706d726770767b026b6608666760776565677003656776036e6d6502276107616d6c716d6e6707646b70676077650a6d77766770556b66766a0a6b6c6c6770556b66766a0b6d777667704a676b656a760b6b6c6c67704a676b656a760a6c6d66674667766761760772706d6167717110596d60686761762272706d616771715f0d726a636c766d6f46677667617607726e77656b6c71085d726a636c766d6f0b61636e6e526a636c766d6f0b5d5d6c6b656a766f637067054377666b6d1841636c74637150676c6667706b6c65416d6c76677a7630460f75676066706b7467704667766761760975676066706b746770136567764d756c52706d726770767b4c636f6771096e636c65776365677106616a706d6f670770776c766b6f6707616d6c6c676176145d5d75676066706b7467705d6774636e77637667135d5d71676e676c6b776f5d6774636e776376671b5d5d75676066706b7467705d7161706b72765d64776c61766b6d6c175d5d75676066706b7467705d7161706b72765d64776c61155d5d75676066706b7467705d7161706b72765d646c135d5d647a66706b7467705d6774636e77637667125d5d66706b7467705d776c75706372726766155d5d75676066706b7467705d776c75706372726766115d5d66706b7467705d6774636e77637667145d5d71676e676c6b776f5d776c75706372726766145d5d647a66706b7467705d776c75706372726766095d71676e676c6b776f0c61636e6e51676e676c6b776f165d51676e676c6b776f5d4b46475d5067616d7066677008666d61776f676c76056f6376616a0a5e2659632f785f66615d066163616a675d0f6b6c616d656c6b766d466776676176046d72676c096b6c616d656c6b766d076d6c6770706d7004616d66671253574d56435d475a4147474647465d47505010716d6f6749677b4a677067407b766766096b6c66677a676646400c526d6b6c7667704774676c760e4f51526d6b6c7667704774676c760a6a6d6d694667766761760d617067637667476e676f676c760661636c74637109766d4663766357504e077067726e636167035e712801650a6c63766b7467616d666714596d606867617622526e77656b6c437070637b5f0e6e6d6163766b6d6c4667766761764a5c6a767672713d385e2d5e2d2a59322f3b5f79332e317f2a5e2c59322f3b5f79332e317f2b79317f7e59632f64322f3b5f79332e367f2a3859632f64322f3b5f79332e367f2b79357f2b086e6d6163766b6d6c046a70676404646b6e67106a767672382d2d6e6d61636e6a6d717606656776457277074552574b4c444d0a656776416d6c76677a7605756760656e0c656776477a76676c716b6d6c19554740454e5d66676077655d70676c66677067705d6b6c646d0c656776526370636f6776677015574c4f43514947465d54474c464d505d554740454e17574c4f43514947465d50474c46475047505d554740454e012d0a656776526e77656b6c7106524e57454b4c046b76676f047277716a04767b7267046c636f6707746770716b6d6c08646b6e676c636f6704686d6b6c02212105716e6b61670c616d6c716b7176416a67616909777167704365676c760b766d4e6d7567704163716708726e6376646d706f07756b6c666d757103756b6c07636c66706d6b66056e6b6c777a066b726a6d6c67046b726366046b726d66036f6361096f63616b6c766d716a0c6f63615d726d75677072612b0461706d71037a33330561706b6d7105647a6b6d7104726b696708646b7067646d7a2d066d726770632d05226d72702d07616a706d6f672d0876706b66676c762d046f716b670674676c666d7006456d6d656e670568716d6c7204606d667b14656776476e676f676c7671407b5663654c636f67046a676366067161706b7276015d0961636e6e606361693f037170610b70676f6d7467416a6b6e660b637272676c66416a6b6e660e766d406b6c63707b5176706b6c650c64706d6f416a6370416d66670d766d576b6c763130437070637b0a616a6370416d66674376056b6c7631300a36303b363b3435303b37026f7a04646b7a6912676c61707b7276576b6c763130437070637b12666761707b7276576b6c763130437070637b0a7776643a476c616d66670e5c595e7a32322f5e7a35645f2826104f636e646d706f6766227176706b6c65157776643a4667616d6667516a6d70765176706b6c651f576c646b6c6b716a6766225756442f3a226d617667762271677377676c616729416a63706361766770226d7776716b66672274636e6b6622576c6b616d66672270636c65673822327a15406366225756442f3a22676c616d666b6c6522327a147776643a4667616d66674e6d6c655176706b6c650a7776643a4667616d66670e5c595e7a32322f5e7a64645f282606717760717670057a7a76676307666761707b72760e6063716734365176636c666370664046696672656a3658497153403a322d4f64747531345a4b33503037295557436e476b354c4e606d735b564d5277786f4468486c707b7a3b4a5445616351764167106063716734365d616a63704b6c66677a40434041464744454a4b48494e4f4c4d52535051565754555a5b58636061666764656a6b68696e6f6c6d72737071767774757a7b7832333031363734353a3b292d146063716734365176636c666370664667616d6667096063716734365d616a066034365d313208656776526370636f08726370636f57706e013d026d6c036d64640971677651756b76616a0e5d726370636f51756b76616a4d6c0f5d607b7667665d726370636f5d71751265677651756b76616a44706d6f4163616a670f666776676176436c6d6f636e6b67710a666b70676176516b656c0a616d6c716b7176676c760671756b76616a03666d6f046c6d666707726a636c766d6f046a6d6d690b76677176446763767770670e637171676f606e67506771776e760469677b710b7166606f5d717663606e67047166606f107166606f5d717663606e675d726d6c7b076567765263766a222a6a767672385e2d5e2d7e6a76767271385e2d5e2d7e5e2d5e2d2b3d595c5e2d5f2808656776537767707b0e593d5f2a5e75293f2c28243d2b280124076d6068516d7076097176706b6c656b647b02797f04716d70760868716d6c516d7076076b71437070637b036f637206706766776167076d6068305176701261636c7463715d646b6c65677072706b6c7605756b66766a066a676b656a760230660a3336727a227167706b6404646d6c7608646b6e6e56677a7604c09f9a8e138e22c0acbf0a716a63666d75406e77700b716a6d754d64647167765a046e6b6f6709716a6d75416d6e6d7003637061067176706d69670965677641636c7463710a313531373b303a37373b0f416d6c646b65477a616772766b6d6c076f677171636567116a6371516771716b6d6c51766d706365670f6a63714e6d61636e51766d706365670c6a63714b6c66677a676646400c65677643606b6e6b766b67710d6567765067716d6e77766b6d6c0671617067676c0a616d6e6d70466772766a126567764374636b6e5067716d6e77766b6d6c0a6374636b6e556b66766a0b6374636b6e4a676b656a760e6567764063767667707b4b6c646d0a6567764063767667707b04766a676c08616a6370656b6c650c616a6370656b6c65566b6f670f666b71616a6370656b6c65566b6f67056e6774676e0c656776566d77616a4b6c646d0e6f637a566d77616a526d6b6c76710b6170676376674774676c760a566d77616a4774676c760c6d6c766d77616a71766370760b656776566b6f67786d6c670771677646637667087167764f6d6c766a11656776566b6f67786d6c674d6464716776036f6b6c08656776446d6c7671096f6d6c6d71726361670a71636c712f7167706b64057167706b64047172636c0d6f6f6f6f6f6f6f6f6f6f6e6e6b096b6c6c67704a564f4e0571767b6e67043530727a08646d6c76516b78670a646d6c7644636f6b6e7b0b6d6464716776556b66766a0c6d64647167764a676b656a760c5670676077616a6776224f5109556b6c65666b6c657107517b6e6463676c085167656d6722574b0a416d6c7176636c766b630b516b6f51776c2f477a7640084f5622477a7670630545776e6b6f0a4e67676e6375636667670556776c6563064f676b707b6d0654706b6c666309416d70666b63575241094372637063686b7663074b706b715752410852636e63766b6c6d0a416d6e6d6c6c63224f5608526e637b606b6e6e08486d6967706f636c09526370616a6f676c760a4f51224d77766e6d6d690956752241676c224f56064d52564b4f4306447776777063064354474c4b500c43706b636e224a67607067750a5163746d7b67224e47560941637176676e6e63700a4f5b504b43462252504d012e0e656776517b6c76637a4770706d701041706763766722556760516d616967760f6567764c63766b74674e676c65766a086567765076614b720b746b746d60706d757167701150564152676770416d6c6c6761766b6d6c146f6d7850564152676770416d6c6c6761766b6d6c17756760696b7650564152676770416d6c6c6761766b6d6c1c7176776c387176776c2c6e2c656d6d656e672c616d6f38333b3132300477706e710a6b6167516770746770713e2a59322f3b5f79332e317f2a5e2c59322f3b5f79332e317f2b79317f7e59632f64322f3b5f79332e367f2a3859632f64322f3b5f79332e367f2b79357f2b355c2a333b305e2c33343a5e2c7e33343b5e2c3037365e2c7e33325e2c7e3335305e2c2a3359342f3b5f7e305e667e315932335f2b2b1161706763766746637663416a636c6c676e0b6170676376674d64646770137167764e6d61636e46677161706b72766b6d6c0961636c666b6663766704677a67610e6d6c6b616761636c666b666376670477776b66207a7a7a7a7a7a7a7a7a7a7a7a367a7a7a7b7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a04597a7b5f017a0d616a676169416e6b676c764b660b656776416e6b676c764b66057676616b660d676c61707b7276516761466b6640434041464744454a4b48494e4f4c4d52535051565754555a5b58636061666764656a6b68696e6f6c6d72737071767774757a7b7832333031363734353a3b2f2c0e637171676f606e67526370636f710172017007646d704763616a025c5c01340c647252706d646b6e6757706e033d733f087067765d616d66670264720e5d607b7667665d7167615d666b660c5d7063755d7167615d666b660776765d71616b660366647203636b66016c0164097176637076566b6f6701760963606b6e6b766b67710a766b6f677176636f7233136a63706675637067416d6c61777070676c617b0c6667746b61674f676f6d707b086e636c65776365670a7067716d6e77766b6d6c0f6374636b6e5067716d6e77766b6d6c0971617067676c566d720a71617067676c4e676476106667746b6167526b7a676e5063766b6d0a72706d66776176517760076063767667707b09766d77616a4b6c646d08766b6f67786d6c670a766b6f677176636f7230076572774b6c646d0b6871446d6c76714e6b71760b726e77656b6c714e6b71760a766b6f677176636f72310a67746770416d6d696b67016f0b717b6c76637a4770706d700c6c63766b74674e676c65766a057076614b52096472546770716b6d6c0b5d5d746770716b6d6c5d5d08616e6b676c764b660a766b6f677176636f72360b677a76676c66446b676e6603636e6e107176637076516b6f726b646b67665760106366664774676c764e6b7176676c677009636666566d4e6b71760671726e6b61670166017b136a636c666e6749677b606d6370664774676c7606636e7649677b076176706e49677b076f67766349677b08716a6b647649677b036c6d75136a636c666e67526d716b766b6d6c4774676c760e616a636c656766566d77616a677109766d77616a6f6d746707766d77616a6771023b3007616e6b676c765a07616e6b676c765b106a636c666e67416e6b61694774676c760a766d77616a71766370760861636e614f67636c1561636e615176636c666370664667746b63766b6d6c04717370760961636e61517267676604322c323315656776516b6f726e6b646b67665760506771776e7603322c3702323209656776566771764b660b5d5d63615d766771766b660f65676c6770637667566771764e6d6501600c656776516b656c63767770670377706e2c6c6d6c6167226f77717622606722636c226d606867617622756b766a22632277706e2272706d726770767b230b666d6f4c6d7654636e6b660872706d766d616d6e043232323208323232323232333302333207646d707067636e056667607765056c6d6c61670b606d667b54636e307176700a606d667b5d6a63716a3f05737767707b066371716b656c097263766a6c636f673f0976765d7567606b663f062477776b663f086c6d6c61675176700a36303b363b3435303b34096467546770716b6d6c033232320b7277716a546770716b6d6c01280a65677654636e77672633106c63746b6563766d70516b656c636e710b637272416d66674c636f67076372724c636f670772706d6677617608617277416e637171056d716172770974676c666d705177600a666d4c6d76567063616907746b60706376670b61706766676c766b636e710771766d706365671b706773776771764f67666b6349677b517b7176676f43616167717109606e7767766d6d766a0d756b6c666d75516b656c636e71054b6f6365670771617067676c5a0771617067676c5b0f6b71516761777067416d6c76677a7607766d6d6e6063700b6e6d6163766b6d6c6063700d4361766b74675a4d606867617608677a7667706c636e0b726d71764f6771716365671b756760696b7650677377677176436c6b6f63766b6d6c4470636f670d406e7767766d6d766a57574b46086c677671616372670f666d61776f676c76516b656c636e710c616a637063617667705167760a616d6f7263764f6d6667066e637b677071066b6f636567710e656776556760656e41636c74637112677a7267706b6f676c76636e2f756760656e0d6f637a436c6b716d76706d727b1e475a565d76677a767770675d646b6e7667705d636c6b716d76706d726b6125554740494b565d475a565d76677a767770675d646b6e7667705d636c6b716d76706d726b61224f4d585d475a565d76677a767770675d646b6e7667705d636c6b716d76706d726b611e4f435a5d56475a565750475d4f435a5d434c4b514d56504d525b5d475a560c756760656e516b656c636e7105554740454e16656776517772726d70766766477a76676c716b6d6c7113717772726d70766766477a76676c716b6d6c7114656776416d6c76677a76437676706b607776677109636c766b636e6b637109404e57475d404b565108606e7767406b76710a464752564a5d404b565109666772766a406b76710a455047474c5d404b565109657067676c406b7671204f435a5d414d4f404b4c47465d56475a565750475d4b4f4345475d574c4b56511c6f637a416d6f606b6c676656677a767770674b6f636567576c6b7671194f435a5d415740475d4f43525d56475a565750475d514b5847156f637a417760674f637256677a76777067516b78671c4f435a5d445043454f474c565d574c4b444d504f5d544741564d5051196f637a447063656f676c76576c6b646d706f546761766d7071154f435a5d50474c4647504057444447505d514b5847136f637a50676c666770607764646770516b7867174f435a5d56475a565750475d4b4f4345475d574c4b5651146f637a56677a767770674b6f636567576c6b7671104f435a5d56475a565750475d514b58470e6f637a56677a76777067516b7867134f435a5d5443505b4b4c455d544741564d5051116f637a5463707b6b6c65546761766d7071124f435a5d54475056475a5d435656504b4051106f637a54677076677a437676706b60711e4f435a5d54475056475a5d56475a565750475d4b4f4345475d574c4b56511a6f637a54677076677a56677a767770674b6f636567576c6b76711a4f435a5d54475056475a5d574c4b444d504f5d544741564d5051176f637a54677076677a576c6b646d706f546761766d707118514a43464b4c455d4e434c45574345475d544750514b4d4c16716a63666b6c654e636c6577636567546770716b6d6c0c5156474c414b4e5d404b56510b7176676c616b6e406b767107544750514b4d4c066563766a6770096c63746b6563766d7006756b6c666d7503657277075147414b4c444d0a6567765167614b6c646d09766b6f677176636f720d6b71476c63606e67665263766a145d676c63606e675263766a4e6b7176506765677a0c6b6c766770616772765a4a500e5a4f4e4a7676725067737767717610716776506773776771764a67636667700471676c66106d746770706b66674f6b6f67567b72670f5d63615d6b6c766770616772766766055d71676c66155d607b7667665d6b6c766770616772765d6e6b71760464776c6109637065776f676c76710e5c616d6c76676c762f767b72672601390e5d607b7667665d616d6c76676c76115d6d746770706b66674f6b6f67567b72670d5d607b7667665d6f67766a6d660a5d607b7667665d77706e076d6c63606d7076066d6c6e6d6366096d6c6e6d6366676c660b6d6c6e6d636671766370760a6d6c72706d6570677171096d6c766b6f676d77760b5d716b656c63767770673f0b5d607b7667665d606d667b126d6c706763667b7176637667616a636c65670c706771726d6c7167567b726707766b6f676d77760677726e6d636604524d5156216372726e6b6163766b6d6c2d7a2f7575752f646d706f2f77706e676c616d666766106372726e6b6163766b6d6c2d68716d6c04716b656c0371666b0d7167614b6c646d4a67636667700e6b6c76677061677276446776616a0975706372446776616a03454756066f67766a6d660b766d57727267704163716705616e6d6c670476677a76076a676366677071165d5d63615d6b6c7667706167727667665d646776616a05646776616a0d717772726d707671446776616a145d656776446776616a416d6c76676c76567b72670c616d6c76676c762f767b72670b7772666376674c6d6c61670572637071670f60776b6e664c677550677377677176037167760870676467707067700e7067646770706770526d6e6b617b046f6d6667056163616a67087067666b70676176096b6c766765706b767b0e656776506775706b76676657706e105d77706e506775706b766750776e67710b706775706b766757706e22084d504b454b4c38220b08504755504b56474638220b6e6371764b6c66677a4d640125032730350860776b6e6657706e0c245d716b656c63767770673f0c3d5d716b656c63767770673f096b6c76677061677276196b714b6c7176636c61674d64407b76676643617063756e67700d407b76676643617063756e6770076d72766b6d6c71046b6c6b760e676c63606e675263766a4e6b71760f77706e506775706b766750776e6771045d6664720f74636e6b666376674d72766b6d6c711e6d72766b6d6c22636b662a4b6c76676567702b226b71226c676766676623276d72766b6d6c22676c63606e675263766a4e6b71762a437070637b2b226b71226c6767666766231065676c5263766a4e6b7176506765677a1265676c57706e506775706b7667506765677a0a656776506764677067700c5d5d63615d70676467706770106667636e506764677067704163616a670a7067646770677049677b0a5d5d63615d606e636c692a41636c6c6d7622616d6c7467707622776c6667646b6c6766226d70226c776e6e22766d226d60686761760e6a63714d756c52706d726770767b0574636e77670875706b7663606e670c616d6c646b65777063606e671472706d726770767b4b71476c776f677063606e670e766d4e6d61636e675176706b6c650774636e77674d640d6b7152706d766d767b72674d64204d60686761762c69677b712261636e6e6766226d6c226c6d6c2f6d606867617606302c33332c320640365834756d0c5a2f4f717166692f4b6c646d03606d67296a76767271382d2d7a7a60652c716c717166692c616d6f2d7567607166692d74332d6567764b6c646d236a76767271382d2d7a7a60652c716c717166692c616d6f2d7567607166692d74332d72236a76767271382d2d7a7a60652c716c717166692c616d6f2d7567607166692d74332d7605776057706e0a3034373636313735343b02373302363a03276122022f3c0d616d6e6d703821603333376630096f6d7771676f6d74670769677b666d756c096f6d777167666d756c0232300232330a5d5d67714f6d66776e67", [, , "undefined" != typeof exports ? exports : void 0, "undefined" != typeof module ? module : void 0, "undefined" != typeof define ? define : void 0, "undefined" != typeof Object ? Object : void 0, void 0, "undefined" != typeof TypeError ? TypeError : void 0, "undefined" != typeof document ? document : void 0, "undefined" != typeof InstallTrigger ? InstallTrigger : void 0, "undefined" != typeof safari ? safari : void 0, "undefined" != typeof Date ? Date : void 0, "undefined" != typeof Math ? Math : void 0, "undefined" != typeof navigator ? navigator : void 0, "undefined" != typeof location ? location : void 0, "undefined" != typeof history ? history : void 0, "undefined" != typeof Image ? Image : void 0, "undefined" != typeof console ? console : void 0, "undefined" != typeof PluginArray ? PluginArray : void 0, "undefined" != typeof indexedDB ? indexedDB : void 0, "undefined" != typeof DOMException ? DOMException : void 0, "undefined" != typeof parseInt ? parseInt : void 0, "undefined" != typeof String ? String : void 0, "undefined" != typeof Array ? Array : void 0, "undefined" != typeof Error ? Error : void 0, "undefined" != typeof JSON ? JSON : void 0, "undefined" != typeof Promise ? Promise : void 0, "undefined" != typeof WebSocket ? WebSocket : void 0, "undefined" != typeof eval ? eval : void 0, "undefined" != typeof setTimeout ? setTimeout : void 0, "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "undefined" != typeof encodeURI ? encodeURI : void 0, "undefined" != typeof Request ? Request : void 0, "undefined" != typeof Headers ? Headers : void 0, "undefined" != typeof decodeURIComponent ? decodeURIComponent : void 0, "undefined" != typeof RegExp ? RegExp : void 0]);


var mm = window.byted_acrawler.sign({ "url": "https://www.x.com/api/pc/list/feed?channel_id=0&max_behot_time=1692755357&offset=0&category=pc_profile_recommend&aid=24&app_name=toutiao_web" })
console.log(mm);