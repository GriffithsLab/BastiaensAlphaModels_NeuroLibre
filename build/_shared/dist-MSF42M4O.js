import{e as t}from"/BastiaensAlphaModels_NeuroLibre/build/_shared/chunk-IQBJE7PC.js";import"/BastiaensAlphaModels_NeuroLibre/build/_shared/chunk-GUCIBHGO.js";import"/BastiaensAlphaModels_NeuroLibre/build/_shared/chunk-2NH4LW52.js";function l(e){let i=(e??"1 2 2 3").split(/\s/).map(r=>Number(r.trim())).filter(r=>!Number.isNaN(r)).map(r=>Math.min(Math.max(Math.floor(r),1),12));return i.length===0||i.length>4?[1,2,2,3]:i}var s={name:"grid",arg:{type:String},body:{type:"myst",required:!0},run(e){return[{type:"grid",columns:l(e.arg),children:e.body}]}},d={name:"grid-item",options:{label:{type:String,alias:["name"]},class:{type:String}},body:{type:"myst",required:!0},run(e){var i,r;let{label:n,identifier:o}=t((i=e.options)===null||i===void 0?void 0:i.label)||{};return[{type:"div",children:e.body,class:(r=e.options)===null||r===void 0?void 0:r.class,label:n,identifier:o}]}},p=[s,d];export{s as gridDirective,p as gridDirectives,d as gridItemDirective};