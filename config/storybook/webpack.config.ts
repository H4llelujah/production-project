import webpack, { RuleSetRule, util } from 'webpack';
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
    }

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    return config;
};
