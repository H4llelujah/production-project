/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import {
    Article,
    ArticleBlockType,
    articleDetailsReducer,
} from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import ArticleDetailsPage from './ArticleDetailsPage';
import { articleDetailsPageReducer } from '../../model/slice';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'Pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

const comment: Comment = {
    id: '1',
    text: 'SomeComment',
    user: { id: '1', username: 'Pavel' },
};

const article: Article = {
    id: '1',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    createdAt: '09.07.2024',
    views: 124421,
    user: { id: '1', username: 'test' },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
    ],
    type: [],
    title: 'Title of Article',
    subtitle: 'Subtitle Of Article',
};

export const Primary: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{
                    articleDetails: articleDetailsReducer,
                    articleDetailsPage: articleDetailsPageReducer,
                }}
                initialState={{
                    articleDetails: {
                        data: article,
                    },
                    articleDetailsPage: {
                        comments: {
                            ids: ['1', '2', '3'],
                            entities: {
                                1: { ...comment, id: '1' },
                                2: { ...comment, id: '2' },
                                3: { ...comment, id: '3' },
                            },
                        },
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};
