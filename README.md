The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.

Syntax: const memoizedValue = useMemo(functionThatReturnsValue, arrayDependencies)

### WITH UseMemo:
https://github.com/user-attachments/assets/f3b445c3-9742-4f2d-898a-e4d8f17075e7

### WITHOUT UseMemo:
https://github.com/user-attachments/assets/cbaf2bf8-f3b7-4636-8b49-03ddec1fe3cc

