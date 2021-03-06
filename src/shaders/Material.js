'use strict';

let VERTEX_SHADER = ``;

let FRAGMENT_SHADER = `
   struct Material
   {
      int image;
      vec3 ambient;
      vec3 diffuse;
      vec3 specular;
      float shininess;
      int shading;
      int type;
   };

   uniform sampler2D u_image;
`;

export default {
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};