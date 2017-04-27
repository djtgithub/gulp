var gulp= require('gulp');
gulp.task('copy-index',function(){
	return gulp.src('index.html').pipe(gulp.dest('dist'));
});
gulp.task('images',function(){
	return gulp.src('images/*').pipe(gulp.dest('dist/images'));
});
//多任务拷贝
gulp.task('data',function(){
	return gulp.src(['xml/*.xml','json/*.json']).pipe(gulp.dest('dist/data'));
})


