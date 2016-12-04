var $root = null, $node_tmp = null, $decd_tmp = null;
var node_dir = {}, decd_dir = {};
var discriminants = {}, classes = {};

function buildTree() {
	$.getJSON("http://lucasausbury.github.io/dev/decisionTree.json", function( out ) {
		var t1 = null;
		var t2 = null;
		var x = null;

		discriminants = out.discriminants;
		classes = out.classes;

		$root.html('');
		for( var i in out.data ) {
			t1 = $node_tmp.clone();
			t2 = $rslt_tmp.clone();
			x = out.data[i];
			x.counter = (parseInt(i) + 1);

			if( parseInt(x.fulcrum) >= 0 )
				var $t = t1.render(x, node_dir);
			else
				var $t = t2.render(x, rslt_dir);

			$t.addClass('target_' + x.counter );

			if( x.counter == 1 ) $t.show();
			else $t.hide();

			$root.append( $t );
		}
	});
}

$(document).ready(function() {
	$root = $('#root');
	$node_tmp = $('.node-template').detach();
	$decd_tmp = $('.decider-template').detach();
	$rslt_tmp = $('.result-template').detach();
	node_dir = {
		'control-label':{
			'text':function( params ){
				return this.counter + '. ' + discriminants[this.fulcrum];
			}
		}, 'control-options':{
			'html':function( params ) {
				var $cont = $('<div />');

				for( var i in this.branches ) {
					var $t = $decd_tmp.clone();
					var l = i.replace('<=', 'less than or equal to');
					l = l.replace('>', 'greater than');

					$t.find('.custom-control-description').text(l);
					$t.find('input').attr("name", "grp_"+this.counter);
					$t.attr('data-target', (parseInt(this.branches[i]) + 1));

					$cont.append( $t );
				}

				return $cont.html();
			}
		}
	};
	decd_dir = {};
	rslt_dir = {
		'class_label':{
			'text':function( params ) {
				return classes[this.class];
			}
		}, 'probability':{
			'text':function( params ) {
				return (parseFloat(this.probability) * 100).toFixed(2);
			}
		}
	};

	buildTree();

	$(document).on('click', 'input[type="radio"]', function() {
		var grandparent = $(this).closest('.node-template, .result-template');
		var parent = $(this).closest('.decider-template');
		var target = ".target_" + parent.data('target');

		$('.active').removeClass('active');
		grandparent.addClass('active');
		$('.active').nextAll('.node-template, .result-template').slideUp();
		$(target).slideDown();
	});
});