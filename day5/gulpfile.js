//复制文件的时候进行过滤
var gulp=require('gulp');

gulp.task('data',function(){  // !感叹号过滤
		return gulp.src(['xml/*.xml','json/*.json','!json/secrate.json']).pipe(gulp.dest('dist/data'));
})