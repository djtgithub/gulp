var gulp=require('gulp');
//如何同时拷贝两个文件夹到指定文件夹下面
gulp.task('data',function() {
	return gulp.src(['xml/*.xml','json/*.json','images/*']).pipe(gulp.dest('dist/data'));
})