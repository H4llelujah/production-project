import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/BuildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    if (config.module?.rules) {
        config.module.rules.push(buildCssLoader(true));
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map((rule: RuleSetRule | '...') => {
            if ((typeof rule === 'object') && (/svg/.test(rule.test as string))) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
    }

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    return config;
};
