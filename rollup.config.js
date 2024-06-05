import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
    input: "src/index.js",
    output: [
        {
            file: "dist/console-umd.js",
            format: "umd",
            name: "console",
            //当入口文件有export时，'umd'格式必须指定name
            //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
        },
        {
            file: "dist/console-es.js",
            format: "es",
        },
        {
            file: "dist/console-cjs.js",
            format: "cjs",
        },
    ],
    plugins: [
        resolve(),
        babel({ babelHelpers: 'bundled' })
    ]
};
