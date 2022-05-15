---
layout: default
---

# Переход между экранами

Переход между экранами основан на способности якорных ссылок указывать на элементы, которые изначально скрыты на странице.
Экран обозначается с помощью html элемента `<article>` и атрибута `id="panel-name"`. Чтобы открыть определенный экран, необходимо перейти по якорной ссылке `#panel-name`

Экран открывающийся по умолчанию должен быть последним и без атрибута `id`.

```html
<header>Example</header>
<main>
  <article id="panel-3">
    <header>Panel 3</header>
    <section>
      <a href="#">to home</a>
    </section>
  </article>

  <article id="panel-2">
    <header>Panel 2</header>
    <section>
      <a href="#panel-3">to panel-3</a>
    </section>
  </article>

  <article>
    <header>Panel 1</header>
    <section>
      <a href="#panel-2">to panel-2</a>
    </section>
  </article>
</main>
```

Пример [переход между экранами](https://github.com/sveltevk/pure/blob/main/examples/structure.html).
