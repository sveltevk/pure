---
layout: default
---

# Адаптивность

<iframe style="width: 100%;height: 90vh;border: 1px solid rgba(0, 0, 0, 0.1);"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTkYUmq1dXvFp2X6NZgrRCs%2F%2540sveltevk%252Fpure-animation%3Fnode-id%3D4%253A44%26starting-point-node-id%3D4%253A44%26scaling%3Dscale-down"
  allowfullscreen></iframe>

Модуль поддерживает два вида адаптивности

- **REGULAR** - размер экрана `768px` и больше
- **COMPACT** - размер экрана меньше `768px`

Для показа элементов на определенных экранах, можно использовать атрибуты `only-regular` и `only-compact`

```html
<div only-regular>Меня видно только на больших экранах</div>
<div only-compact>Меня видно только на маленьких экранах</div>
```
