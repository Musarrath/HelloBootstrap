var tasks = {
    'scripts': function () {
      src('/assets/js/emp-create.js')
        .pipe(through(function (fileStream) {
          return fileStream.pipe(uglify());
        }))
        .pipe(dest('/assets/js/emp-ind'))
  
      src('/assets/js/emp-create.js')
        .pipe(dest('/assets/js/emp-ind'))
    }
    
}