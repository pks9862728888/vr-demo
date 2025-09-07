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

## References

- [react-three-fiber] (https://www.udemy.com/course/react-three-fiber/learn/lecture/34486996#overview)
