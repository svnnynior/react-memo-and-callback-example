## When to use `useCallback` and `useMemo` then?

1. Referential Equality
   Basically when you need to put a function as part of a dependency array in useEffect.

2. Expensive Computation
   i.e.

```
function RenderPrimes({iterations, multiplier}) {
  const primes = calculatePrimes(iterations, multiplier)
  return <div>Primes! {primes}</div>
}
```

vs.

```
function RenderPrimes({iterations, multiplier}) {
  const primes = React.useMemo(
    () => calculatePrimes(iterations, multiplier),
    [iterations, multiplier],
  )
  return <div>Primes! {primes}</div>
}
```

Reference:

- https://kentcdodds.com/blog/usememo-and-usecallback
