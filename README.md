
# Shopping Card App

Bu uygulama kullanıcıların tıpkı bir e-ticaret uygulaması gibi ürünlerini seçip; onları arttırabilecekleri, azaltabilecekleri, sepet yapabilecekleri ve aldıkları ürünlerin toplam fiyatını görebilecekleri bir uygulamadır.

This application allows users to select their products just like an e-commerce application; It is an application where they can increase, decrease, make baskets and see the total price of the products they buy.

## Kullanılan Teknolojiler - Used Technologies

[react@18.2.0](https://react.dev/)

[react-dom@18.2.0](https://legacy.reactjs.org/docs/react-dom.html)

[typescript@5.2.2](https://www.typescriptlang.org/)

[react-query@3.39.3](https://tanstack.com/query/latest/docs/framework/react/overview)

[styled-components@6.1.11](https://styled-components.com/docs)

[@types/styled-components@5.1.34](https://styled-components.com/docs/faqs)

[@material-ui/core](https://www.npmjs.com/package/@material-ui/core)

[@material-ui/icons](https://v4.mui.com/components/material-icons/)

[vite@5.2.0](https://vitejs.dev/guide/)



Projeyi canlı olarak görmek istiyorsanız, [Projeye Git]()


If you want to see the Project, [Go Live]()



## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
