## About

.eslintrc and .prettierrc can be added for linting and auto-formatting.

## Hooks from react

- useEffect
- useRef

## Hooks from react-three-fiber

- useFrame

```
useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 1 * delta
      ref.current.rotation.y += 0.5 * delta
    }
  })
```

### Mesh

Contains geometry and a material

Object3D -> Mesh

### Events - Mesh

### React 3 js - Drei

import { Stats } from '@react-three/drei'

## References

- [react-three-fiber] (https://www.udemy.com/course/react-three-fiber/learn/lecture/34486996#overview)
- react-three/drei
  A collection of useful helpers, abstractions, and premade components on top of R3F.
  Saves you from rewriting common 3D features again and again.
  Think of it as a toolbox for 3D in React.
