function buildTree(){$.getJSON("decisionTree.json",function(t){var e=null,r=null,a=null;discriminants=t.discriminants,classes=t.classes,$root.html("");for(var n in t.data){if(e=$node_tmp.clone(),r=$rslt_tmp.clone(),a=t.data[n],a.counter=parseInt(n)+1,parseInt(a.fulcrum)>=0)var s=e.render(a,node_dir);else var s=r.render(a,rslt_dir);s.addClass("target_"+a.counter),1==a.counter?(s.find(".counter").text("1"),s.show()):s.hide(),$root.append(s)}})}var $root=null,$node_tmp=null,$decd_tmp=null,$rslt_tmp=null,node_dir={},decd_dir={},rslt_dir={},discriminants={},classes={};$(document).ready(function(){$root=$("#root"),$node_tmp=$(".node-template").detach(),$decd_tmp=$(".decider-template").detach(),$rslt_tmp=$(".result-template").detach(),node_dir={node_label:{text:function(t){return discriminants[this.fulcrum]}},"control-options":{html:function(t){var e=$("<div />");for(var r in this.branches){var a=$decd_tmp.clone(),n=r.replace("<=","less than or equal to");n=n.replace(">","greater than"),a.find(".custom-control-description").text(n),a.find("input").attr("name","grp_"+this.counter),a.attr("data-target",parseInt(this.branches[r])+1),e.append(a)}return e.html()}}},decd_dir={},rslt_dir={class_label:{text:function(t){return classes[this.class]}},probability:{text:function(t){return(100*parseFloat(this.probability)).toFixed(2)}},card:{html:function(t){var e=$(t.element);parseFloat(this.probability)<.95?e.addClass("card-warning"):"0"===this.class?e.addClass("card-success"):"1"===this.class?e.addClass("card-danger"):e.removeClass("card-inverse")}}},buildTree(),$(document).on("click",'input[type="radio"]',function(){var t=$(this).closest(".node-template, .result-template"),e=$(this).closest(".decider-template"),r=parseInt(t.find(".counter").text())+1,a=".target_"+e.data("target");$(".active").removeClass("active"),t.addClass("active"),$(".active").nextAll(".node-template, .result-template").slideUp(),$(a).find(".counter").text(r),$(a).slideDown()})});