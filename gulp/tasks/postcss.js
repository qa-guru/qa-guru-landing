import postcss from 'gulp-postcss';
// import cssnano from 'cssnano'; // не удаляет дубликаты свойств, поэтому нижний
import cleanCss from 'gulp-clean-css';
import postcssPresetEnv from 'postcss-preset-env';
import postcssCenter from 'postcss-center';
import calc from 'postcss-calc';
import combineSelectors from 'postcss-combine-duplicated-selectors';
import { default as webpcss } from 'webp-in-css/plugin.js';
import { default as willChange } from 'postcss-will-change-transition';
import { default as flexBugsFixes } from 'postcss-flexbugs-fixes';
import { default as postcssCustomMedia } from 'postcss-custom-media';
import { default as sortMediaQuery } from 'postcss-sort-media-queries';
import { default as postcssNested } from 'postcss-nested';
import { default as atImport } from 'postcss-import';
import { default as postcssMixins } from 'postcss-mixins';
import { default as postcssSimpleVars } from 'postcss-simple-vars';
import { default as postcssShort } from 'postcss-short';
// import tailwindcss from 'tailwindcss';
// import tailwindConfig from '../../tailwind.config.cjs';

const postCssOptionsDev = [
	atImport(),
	postcssCustomMedia(),
	postcssNested(),
	// tailwindcss(tailwindConfig),
	postcssSimpleVars(),
	postcssShort(),
	postcssCenter(),
	postcssMixins(),
];
const postCssOptionsBuild = [
	atImport(),
	postcssCustomMedia(),
	postcssNested(),
	// tailwindcss(tailwindConfig),
	postcssSimpleVars(),
	postcssShort(),
	postcssCenter(),
	postcssMixins(),
	combineSelectors({
		removeDuplicatedProperties: true,
		removeDuplicatedValues: true,
	}),
	calc(),
	flexBugsFixes(),
	webpcss(),
	willChange(),
	sortMediaQuery(),
	postcssPresetEnv({
		stage: 4,
		autoprefixer: { grid: true },
	}),
	// cssnano(),
];

export const css = () => {
	return app.gulp
		.src(app.path.src.css)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'CSS',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.init()))
		.pipe(app.plugins.replace(/\$img\//g, '../img/'))
		.pipe(postcss(app.isBuild ? postCssOptionsBuild : postCssOptionsDev))
		.pipe(app.plugins.if(app.isBuild, cleanCss()))
		.pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.write()))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
};
