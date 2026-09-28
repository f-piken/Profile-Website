# Performance notes

- Removed `node_modules` from the project archive; dependencies are restored with `npm install`.
- Project images remain lazy-loaded and decoded asynchronously.
- Project stack throw uses the browser Web Animations API so transforms stay on the compositor instead of updating React state every frame.
- Experience progress writes to a CSS custom property inside one requestAnimationFrame per scroll frame; React only re-renders when another card becomes visible.
- The global mouse glow is disabled on touch devices.
- Hero 3D tilt uses compositor-friendly transforms and a single animation frame for pointer updates.
