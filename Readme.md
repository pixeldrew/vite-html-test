# vite-html-test

This is a test repo for vite-html to show that multi-pages is not working as expected. Dev server doesn't work correctly, you can't access the other-main.html endpoint as expected, you can access it via http://localhost:5173/public/other-main.html. You will also get the following errors: Instead of /public/index.html, use /index.html Instead of /public/other-main.html, use /other-main.html.

Config listed in documentation also doesn't work. Instead of using `entry: 'src/main.tsx'` you need to use `entry: '../src/main.tsx'` to make it work.

```diff
export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true,
            pages: [
                {
-                   entry: 'src/main.tsx',
+                   entry: '../src/main.tsx',
                    filename: 'index.html',
                    template: 'public/index.html',
                    injectOptions: {
                        data: {
                            title: 'index',
                            injectScript: `<script src="./inject.js"></script>`,
                        },
                        tags: [
                            {
                                injectTo: 'body-prepend',
                                tag: 'div',
                                attrs: {
                                    id: 'tag1',
                                },
                            },
                        ],
                    },
                },
                {
-                   entry: 'src/other-main.tsx',
+                   entry: '../src/other-main.tsx',
                    filename: 'other.html',

                    template: 'public/other-main.html',
                    injectOptions: {
                        data: {
                            title: 'other page',
                            injectScript: `<script src="./inject.js"></script>`,
                        },
                        tags: [
                            {
                                injectTo: 'body-prepend',
                                tag: 'div',
                                attrs: {
                                    id: 'tag2',
                                },
                            },
                        ],
                    },
                },
            ],
        }),
    ],
})

```

## Changelog

The changelog can be found on the [Releases page](https://github.com/pixeldrew/vite-html/releases).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Authors and license

[Drew Foehn](pixeldrew/msal-playwright) and [contributors](https://github.com/pixeldrew/vite-html/graphs/contributors).

MIT License, see the included [License.md](License.md) file.
