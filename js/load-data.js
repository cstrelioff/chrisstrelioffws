var publications_template,
    projects_template;

// use template and data to update html 
// contents of passed id
function showTemplate(id, template, data){
	var html = template(data);
	$(id).html(html);
}

Handlebars.registerHelper("start_row", function(index, block) {
  var i = parseInt(index);

  if((i % 2) === 0){
    return block.fn(this);
  }
});

Handlebars.registerHelper("end_row", function(index, block) {
  var i = parseInt(index);

  if((i % 2) === 1){
    return block.fn(this);
  }
});

Handlebars.registerHelper("join_string", function(list) {
  return list.join("");
});


$(document).ready(function () {
  // projects -----------------------
  // templates
	var proj_source   = $("#projects-template").html();
	projects_template = Handlebars.compile(proj_source);
  showTemplate("#project-content", projects_template, proj_data);

  // publications -----------------------
  // templates
	var pub_source   = $("#publications-template").html();
	publications_template = Handlebars.compile(pub_source);
  showTemplate("#publication-content", publications_template, pub_data);
});
