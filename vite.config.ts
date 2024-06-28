import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true,
            pages: [
                {
                    entry: '../src/main.tsx',
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
                    entry: '../src/other-main.tsx',
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
