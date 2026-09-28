# Final animation fixes

## Project stack
- Replaced CSS keyframe throw animation with a `requestAnimationFrame` trajectory.
- The active project follows a smooth parabolic path: rises, arcs, then falls diagonally out.
- The photo rotates continuously during the throw (up to 720 degrees) and fades near the end.
- Horizontal movement is direction-aware: left stack throws right, right stack throws left.
- The next photo remains stationary underneath and is revealed without an entrance animation or positional adjustment.
- Animation duration: 1050ms.

## Experience & Milestones
- Desktop: timeline alternates left/right around a centered vertical progress bar.
- Mobile: timeline becomes one-directional with all cards on one side.
- Progress bar fills according to the section's scroll position.
- Experience cards reveal sequentially as the progress advances.
- Cards use a smooth fade/slide/scale entrance.
- The progress indicator and card reveals are disabled appropriately under `prefers-reduced-motion`.

## Hero
- Hero entrance remains triggered after the loading screen dispatches `portfolio:loaded`.
- Copy enters from below; portrait enters from the side.
