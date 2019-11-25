Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
  

  Router.route('/', function () {
    // use the template named ApplicationLayout for our layout
    this.layout('ApplicationLayout');
  
    // render the Post template into the "main" region
    // {{> yield}}
    this.render('Post');
    
    // render the PostAside template into the yield region named "aside" 
    // {{> yield "aside"}}
    this.render('PostAside', {to: 'aside'});
  
    // render the PostFooter template into the yield region named "footer" 
    // {{> yield "footer"}}
    this.render('PostFooter', {to: 'footer'});
  });

  Router.route('/lists', function () {
    // use the template named ApplicationLayout for our layout
    this.layout('ApplicationLayout');
  
    // render the Post template into the "main" region
    // {{> yield}}
    
    this.render('Post')
    this.render('PostFooter', {to: 'footer'});
  });
