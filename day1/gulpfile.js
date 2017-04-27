//gulp 命令
var gulp=require('gulp');

gulp.task('hello',function(){
	console.log('hello');
})
//默认任务
gulp.task('default',['hello']);