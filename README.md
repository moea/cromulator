# cromulator

Cromulator is an interactive exploration of the
[superformula](https://www.wikiwand.com/en/Superformula)'s outputs. [Live
demo here](https://moea.github.io/cromulator/). it generates two SVG paths and
dramatically interpolates between them, and so on. Cromulator uses a high-resolution chord approximation to
represent the supershapes. I tried using far fewer chords and applying Catmull-Rom
interpolation to convert the shapes into cubic Bezier curves, which looked fine,
however the shape/path interpolation was unbearably ugly.

# License
Cromulator is free and unencumbered public domain software. For more information, see http://unlicense.org/ or the accompanying LICENSE file.
