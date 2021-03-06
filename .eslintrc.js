module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint",
        // "ecmaVersion": 7,
        // "sourceType": "module"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        // 0-不验证；1-警告；2-错误
        indent: [
            1,
            4,
            {
                SwitchCase: 1,
            },
        ],
        quotes: [
            1,
            "double",
            {
                allowTemplateLiterals: true,
            },
        ], //引号类型 `` " ""
        "no-extra-parens": 1, //禁止非必要的括号
        "no-extra-semi": 1, //禁止多余的冒号
        "no-multiple-empty-lines": [
            1,
            {
                max: 1,
            },
        ], //空行最多不能超过2行
        "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
        curly: [1, "all"], //必须使用 if(){} 中的{}
        "default-case": 0, //switch语句最后必须有default
        "init-declarations": 0, //声明时必须赋初值
        "key-spacing": [
            1,
            {
                beforeColon: false,
                afterColon: true,
            },
        ], //对象字面量中冒号的前后空格
        "padding-line-between-statements": [
            1,
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: "*",
            },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"],
            },
            {
                blankLine: "any",
                prev: "*",
                next: "return",
            },
        ], // 变量声明后需要空行
        "one-var-declaration-per-line": [1, "always"], // 一行只声明一个变量
        radix: 0, //parseInt必须指定第二个参数
        "comma-dangle": [1, "always-multiline"], // 此规则强制在对象和数组文字中一致地使用尾随逗号。（always-multiline: 表示在多行的时候才生效）
        "comma-spacing": [
            1,
            {
                before: false,
                after: true,
            },
        ], // 规则在变量声明，数组文字，对象文字，函数参数和序列中的逗号前后加上一致的间距, 当前规则表示","前不需要有空格，","后不需要空格
        "space-before-function-paren": [0, "never"], //函数定义时括号前面要不要有空格
        "vars-on-top": 0, //var必须放在作用域顶部
        "arrow-spacing": [
            1,
            {
                before: true,
                after: true,
            },
        ],
        "space-infix-ops": [
            "error",
            {
                int32Hint: true,
            },
        ], // 要求操作符前后有空格 a + b, init32Hint: 是否支持a|b
        "max-depth": [
            1,
            {
                max: 3,
            },
        ], // 嵌套的最大层数
        "max-lines": [
            1,
            {
                max: 300,
                skipBlankLines: true,
                skipComments: true,
            },
        ], // 限制文件行数
        "max-statements": [
            1,
            30,
            {
                ignoreTopLevelFunctions: true,
            },
        ], // 限制一个函数内最多多少行语句（不包括空行、注释）
        "no-alert": 1,
        "no-await-in-loop": 2,
        "no-debugger": 2,
        "no-return-await": 1, // 不要return await
        "no-unexpected-multiline": 2, // 这条规则不允许混淆多行表达式，换行符看起来像是结束语句，但不是。
        "no-whitespace-before-property": 1, // 不要有‘空格’在‘点’后‘开头括号’前
        "prefer-template": 1, // 推荐用es6的模板文字 ``
        "require-await": 1,
        semi: [1, "always"],
        "keyword-spacing": [
            1,
            {
                before: true,
            },
        ], // 关键字空格
        // vue html rules
        "vue/order-in-components": 0,
        "vue/html-indent": 0,
        "vue/max-attributes-per-line": 0,
        "vue/singleline-html-element-content-newline": 0,
        "vue/multiline-html-element-content-newline": 0,
        "vue/html-quotes": 0,
        "vue/mustache-interpolation-spacing": 0,
        "vue/html-self-closing": 0,
        "vue/attributes-order": 0,
        "vue/require-prop-types": 0,
        "vue/no-reserved-keys": 0,
        "vue/valid-v-on": [
            "off",
            {
                modifiers: [],
            },
        ],
    },
};
