const todo = [
];

// Tests not supported on WebGL 1
const skip = [
    "render-tests/model-layer/ground-shadow-fog",
    "render-tests/model-layer/ground-shadow-fog-hard-cutoff",
    "render-tests/model-layer/landmark-conflation-multiple-model-layers",
    "render-tests/model-layer/landmark-conflation-multiple-sources",
    "render-tests/model-layer/landmark-mbx",
    "render-tests/model-layer/landmark-mbx-shadows",
    "render-tests/model-layer/landmark-emission-strength",
    "render-tests/model-layer/landmark-conflation-index-overflow",
    "render-tests/model-layer/landmark-conflation-thin-pillars",
    "render-tests/model-layer/landmark-part-styling-munich-museum",
    "render-tests/model-layer/landmark-part-styling-roughness",
    "render-tests/model-layer/landmark-part-styling-update",
    "render-tests/model-layer/landmark-part-styling-indirect-update",
    "render-tests/model-layer/landmark-part-styling-indirect-update-doors",
    "render-tests/model-layer/landmark-part-styling-door-light-munich-museum",
    "render-tests/model-layer/landmark-part-styling-indirect-doors-no-shadows",
    "render-tests/model-layer/landmark-terrain",
    "render-tests/model-layer/landmark-shadows-terrain",
    "render-tests/model-layer/landmark-shadows-opacity",
    "render-tests/model-layer/landmark-shadows-totally-transparent",
    "render-tests/model-layer/trees-shadow-scaled",
    "render-tests/model-layer/lighting-3d-mode/model-shadow",
    "render-tests/model-layer/lighting-3d-mode/shadow",
    "render-tests/model-layer/style-model-api-add",
    "render-tests/model-layer/style-model-api-update",
    "render-tests/model-layer/model-runtime-api",
    "render-tests/model-layer/trees-shadows-terrain-high-altitude",
    "render-tests/model-layer/landmark-z-offset-munich-museum",
    "render-tests/model-layer/landmark-z-offset-scale-munich-museum",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/zero-radius",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/saturation",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/transparency",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/with-ao",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/with-shadows",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/edge-radius",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/fog",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/fog-fade",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/interior",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/zero-height",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/fixed-height",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/floating-base",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/with-shadows-tangent-light",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/with-shadows-zero-light-contribution",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/with-shadows-zero-polar-angle",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/terrain-ao-with-shadows",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/terrain-flood-light-with-shadows",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/landmark-conflation-buckingham",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/MAPS3D-967",
    "render-tests/lighting-3d-mode/fill-extrusion/flood-light/terrain-flood-light-no-seams",
    "render-tests/lighting-3d-mode/shadow/fill-extrusion",
    "render-tests/lighting-3d-mode/shadow/fill-extrusion-flat-roof",
    "render-tests/lighting-3d-mode/shadow/fill-extrusion-terrain",
    "render-tests/lighting-3d-mode/shadow/fill-extrusion-translucent",
    "render-tests/lighting-3d-mode/shadow/fill-extrusion-vertical-scale",
    "render-tests/lighting-3d-mode/shadow/high-pitch-terrain",
    "render-tests/lighting-3d-mode/shadow/intensity-zero",
    "render-tests/lighting-3d-mode/shadow/pitch-limit",
    "render-tests/lighting-3d-mode/shadow/pitch-max-distance",
    "render-tests/lighting-3d-mode/shadow/shimmering",
    "render-tests/lighting-3d-mode/shadow/viewport-padding",
    "render-tests/measure-light/global-brightness-zoom-based-model",

    // Orthographic camera projection tests with shadows
    "render-tests/model-layer/camera-projection/with-shadows/camera-orthographic-high-pitch",
    "render-tests/model-layer/camera-projection/with-shadows/camera-orthographic-low-pitch",
    "render-tests/model-layer/camera-projection/with-shadows/camera-orthographic-terrain-zero-pitch",
    "render-tests/model-layer/camera-projection/with-shadows/camera-orthographic-text",
    "render-tests/model-layer/camera-projection/with-shadows/camera-orthographic-viewport-padding",
    "render-tests/model-layer/camera-projection/with-shadows/camera-orthographic-zero-pitch",
    "render-tests/model-layer/buildings-trees-shadows-fog",
    "render-tests/model-layer/buildings-trees-shadows-fog-fade",
    "render-tests/model-layer/buildings-trees-shadows-fog-terrain",
    "render-tests/model-layer/buildings-trees-shadows-fog-terrain-cutoff",
    "render-tests/model-layer/buildings-trees-shadows-casting",

    // Debug wireframe for webgl2 only
    "render-tests/wireframe/globe-high-exaggeration",
    "render-tests/wireframe/multiple-layers",
    "render-tests/wireframe/terrain",
    "render-tests/wireframe/terrain-high-exaggeration",
    "render-tests/wireframe/wireframe-interpolation-vis",

    // Npot mipmaps textures
    "render-tests/model-layer/npot-mipmaps",
    // Instancing
    "render-tests/model-layer/trees-light-aligned-fog",
    "render-tests/model-layer/trees-light-aligned-update-data-driven",
    "render-tests/model-layer/trees-light-aligned-update-data-driven-fade",
    "render-tests/model-layer/trees-light-aligned-update-non-data-driven",
    "render-tests/model-layer/trees-puck-terrain-exaggeration",
    "render-tests/model-layer/trees-transition-update",
    "render-tests/model-layer/lighting-3d-mode/light-aligned-with-buildings",
    "render-tests/model-layer/lighting-3d-mode/model-with-ao-instance",
    "render-tests/model-layer/power-plants-float-zoom-lod",
    "render-tests/model-layer/power-plants-fog-mercator",
    "render-tests/model-layer/style-model-api-add",
    "render-tests/model-layer/style-model-api-update",
];

export default {todo, skip};
