
// ---- START OF MODIFICATION ---- ##CHANGE1
// Add a dummy Preview-Module for all custom modules.
var moduleId = 1083; // for Divi 3.0.93

var specialModules = ['accordion-item','map-pin','section','social-media_follow','social-media-follow-network','column','tab','video-slider_item','fullwidth-post_slider','fullwidth-post_title','row-inner','row'];
var def = function(e){return e&&e.__esModule?e:{default:e}}
var exp = arguments[1];

for (var i = 0; i < ETBuilderBackend.modules.length; i += 1) {
    var module = ETBuilderBackend.modules[i].label.replace("et_pb_", "").replace(/_/g, "-");
    if (specialModules.indexOf(module)>=0) {continue}
    if (undefined !== exp.a[module]) {continue}
    if (undefined !== exp.b[module]) {continue}
    exp.a[module] = def(arguments[2](moduleId)).default.a;
    //Use exp.b for a non-fullwidth module
    //exp.b[module] = def(arguments[2](moduleId)).default.a;
}
// ---- END OF MODIFICATION ----