const isEmpty = (value) => {
    return value === null || value === undefined || value === '';
};

/**
 * 美化输出
 * @param {String} title 标题
 * @param {String} text 文本
 * @param {String} color 颜色
 * */
export const prettyPrint = (title, text, color) => {
    console.log(
        `%c ${title} %c ${text} %c`,
        `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
        `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
        'background:transparent'
    );
};

/**
 * 信息类型输出
 * @param {String} textOrTitle 文本或标题
 * @param {String} content 内容
 * @param {String} color 颜色
 * */
export const info = (textOrTitle, content = '', color = '#909399') => {
    const title = isEmpty(content) ? 'Info' : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, color);
};
export const error = (textOrTitle, content = '', color = '#F56C6C') => {
    const title = isEmpty(content) ? 'Error' : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, color);
};
export const warning = (textOrTitle, content = '', color = '#E6A23C') => {
    const title = isEmpty(content) ? 'Warning' : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, color);
};
export const success = (textOrTitle, content = '', color = '#67C23A') => {
    const title = isEmpty(content) ? 'Success ' : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, color);
};
export const table = () => {
    const data = [
        {id: 1, name: 'Alice', age: 25},
        {id: 2, name: 'Bob', age: 30},
        {id: 3, name: 'Charlie', age: 35}
    ];
    console.log(
        '%c id%c name%c age',
        'color: white; background-color: black; padding: 2px 10px;',
        'color: white; background-color: black; padding: 2px 10px;',
        'color: white; background-color: black; padding: 2px 10px;'
    );

    data.forEach((row) => {
        console.log(
            `%c ${row.id} %c ${row.name} %c ${row.age} `,
            'color: black; background-color: lightgray; padding: 2px 10px;',
            'color: black; background-color: lightgray; padding: 2px 10px;',
            'color: black; background-color: lightgray; padding: 2px 10px;'
        );
    });
};
export const picture = (url, scale = 1) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        if (ctx) {
            c.width = img.width;
            c.height = img.height;
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.drawImage(img, 0, 0);
            const dataUri = c.toDataURL('image/png');

            console.log(
                `%c sup?`,
                `font-size: 1px;
                    padding: ${Math.floor((img.height * scale) / 2)}px ${Math.floor((img.width * scale) / 2)}px;
                    background-image: url(${dataUri});
                    background-repeat: no-repeat;
                    background-size: ${img.width * scale}px ${img.height * scale}px;
                    color: transparent;
                    `
            );
        }
    };
    img.src = url;
};
