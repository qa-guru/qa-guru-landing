export const copy = () => {
	// app.gulp
	// .src(app.path.src.jsFast)
	// .pipe(app.gulp.dest(app.path.build.js));
	return app.gulp
	.src(app.path.src.files)
	.pipe(app.gulp.dest(app.path.build.files));
};
