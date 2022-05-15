---
layout: default
---

# VK Mini Apps

Чтобы мини-приложение использовало API ВКонтакте и API устройства пользователя, подключите библиотеку [VK Bridge](https://dev.vk.com/bridge/getting-started), которая служит для отправки и получения событий.
Для запуска приложения требуется вызывать событие инициализации [VKWebAppInit](https://dev.vk.com/bridge/VKWebAppInit), иначе сервис не будет работать.

```html
<script
  src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js"
  crossorigin="anonymous"
></script>

<script>
  // Для определения темы
  const schemeThemes = {
    "bright_light": "light,
    "vkcom_light": "light,
    "space_gray": "dark,
    "vkcom_dark": "dark,
  }
  vkBridge.subscribe(({ detail: { type, data }}) => {
    if (type === 'VKWebAppUpdateConfig') {
      if (data.scheme in schemeThemes) {
         document.documentElement.classList.remove("light", "dark")
         document.documentElement.classList.add(schemeThemes[data.scheme])
      }
    }
  });

  // Инициализация приложения
  vkBridge.send("VKWebAppInit");
</script>
```
