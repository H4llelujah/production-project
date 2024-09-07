import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/BuildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: '',
        locales: '',
    };

    if (config.module?.rules) {
        config.module.rules.push(buildCssLoader(true));
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map(
            // @ts-ignore
            (rule: RuleSetRule | '...') => {
                if (
                    typeof rule === 'object' &&
                    /svg/.test(rule.test as string)
                ) {
                    return { ...rule, exclude: /\.svg$/i };
                }
                return rule;
            },
        );
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
    }

    if (config.resolve) {
        config.resolve.alias = { '@': paths.src };
    } else {
        config.resolve = {
            alias: { '@': paths.src },
        };
    }

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
