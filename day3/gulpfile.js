//拷贝图片文件夹
var gulp=require('gulp');
*
// gulp.task('images',function(){  //只拷贝images文件夹下的jpg图片
// 	return gulp.src('images/*.jpg').pipe(gulp.dest('dist/images'));
// })
// gulp.task('images',function(){  //拷贝images文件夹下的jpg与png图片
// 	return gulp.src('images/*.{jpg,png}').pipe(gulp.dest('dist/images'));
// })

gulp.task('images',function(){  //拷贝images文件夹下的任何文件与文件夹
	return gulp.src('images/**/*').pipe(gulp.dest('dist/images'));
})