import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const UiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');

const sharedUiDirectory = project.getDirectory(UiPath);
const componentDirs = sharedUiDirectory?.getDirectories();

function isAbsolute(value: string) {
    const layers = ['shared', 'widget', 'app', 'features', 'entities', 'pages'];
    return layers.some((layer) => value.startsWith(layer));
}
componentDirs?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);
    if (!indexFile) {
        const sourceCode = `export * from './${directory.getBaseName()}`;
        const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
        file.save();
    }
});

// files.forEach((sourceFile) => {
//     const importDeclarations = sourceFile.getImportDeclarations();
//     importDeclarations.forEach((importDeclaration) => {
//         const value = importDeclaration.getModuleSpecifierValue();
//         if (isAbsolute(value)) {
//             importDeclaration.setModuleSpecifier(`@/${value}`);
//         }
//     });
// });

project.save();
