#version 330

uniform sampler2DRect image;
uniform sampler2DRect warp;

layout (location = 0) out vec4 fc;

void main()
{
  vec4 tc = texture(warp, gl_FragCoord.xy);
  fc = texture(image, tc.st);
}
