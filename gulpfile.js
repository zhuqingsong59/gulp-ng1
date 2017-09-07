/* !!
 * Gulp Project By Z.Q.S
 * Code Optimization By Joenix
 * === === === === ===
 */

// Require Package
var
// Global Var
zen = {},
// Gulp Core
gulp = require('gulp'),
// Js Code Hint
jshint = require('gulp-jshint'),
// Less Compile
less = require('gulp-less'),
// Compress Css
compressCss = require("gulp-clean-css"),
// Compress Javascript
compressJs  = require('gulp-uglify'),
// Support Require JS In Front
ify = require('gulp-browserify'),
// Notify Message
notify = require('gulp-notify'),
// File Rename
rename = require('gulp-rename'),
// Delete Directory File
del = require('del');
// Hash
// hash = require('gulp-hash');


(function( opt, tool, factory )
{
	factory( Object.assign( zen, tool, opt ) );
})
(
	// Manifest Option
	{
		// Origin Source
		src: 'src/',
		// Compile Put
		dest: 'dest/'
	},
	// Tool
	{
		// Recursive Data
		recursive: function( data, callback )
		{
			if( data.length )
			{
				callback( data.shift() );

				arguments.callee( data, callback );
			}

			return;
		},
		// Clean Directory File
		clean: function( data )
		{
			zen.recursive( data, function( one ){
				gulp.task('clean_' + one, function(){
					return del(
						[
							zen.dest + one + '/*'
						],
						{
							force: true
						}
					);
				});
			});
		},
		// Copy File Fron Src To Dest
		copy: function( data )
		{
			zen.recursive( data, function( one ){
				gulp.task(
					'copy_' + one,
					['clean_' + one],
					{
						tmp: function(){
							gulp.src( zen.src + 'tmp/**' )
								.pipe( gulp.dest( zen.dest + 'tmp/' ) )
							gulp.src( zen.src + 'tmp/index.html' )
								.pipe( gulp.dest( zen.dest ) );
						},
						css: function(){
							gulp.src( zen.src + 'less/*.less' )
								.pipe( less() )
								// .pipe( compressCss() )
								.pipe( gulp.dest( zen.dest + 'css/' ) )
								.pipe( notify({ message: 'css success' }) );
						},
						js:  function(){
							gulp.src( zen.src + 'js/main.js' )
								.pipe( jshint() )
								.pipe( jshint.reporter('jshint-stylish', { beep: true }) )
								.pipe( ify() )
								// .pipe( compressJs(
								// 	{
								// 		// 类型：Boolean 默认：true 是否修改变量名
								// 		mangle: true,
								// 		// 类型：Boolean 默认：true 是否完全压缩
								// 		compress: true,
								// 	}
								// ))
								.pipe( rename('app.js') )
								.pipe( gulp.dest( zen.dest + 'js/' ) )
								.pipe( notify({ message: 'js success' }) );
						},
						font: function(){
							gulp.src( zen.src + 'font/**' )
								.pipe( gulp.dest( zen.dest + 'font/' ) )
						},
						img: function(){
							gulp.src( zen.src + 'img/**' )
								.pipe( gulp.dest( zen.dest + 'img/' ) )
						},
						lib: function(){
							gulp.src( zen.src + 'lib/**' )
								.pipe( gulp.dest( zen.dest + 'lib/' ) )
						}
					}
					[ one ]
				);
			});
		},
		// Watch File Change
		watch: function( data )
		{
			gulp.task('watch',function(){
				zen.recursive( data, function( one ){
					gulp.watch(
						zen.src + (one === 'css' ? 'less' : one) + '/**',
						['copy_' + one]
					);
				});
			})
		}
	},
	// Factory
	function( zen )
	{
		// Clean Task
		zen.clean( ['tmp', 'css', 'js', 'font', 'img', 'lib'] );

		// Copy Task
		zen.copy( ['tmp', 'css', 'js', 'font', 'img', 'lib'] );

		// Watch Task
		zen.watch( ['tmp', 'css', 'js', 'font', 'img'] );

		// Default Task
		gulp.task('default', ['copy_tmp', 'copy_css', 'copy_js', 'copy_font', 'copy_img', 'copy_lib','watch']);

	}
);
