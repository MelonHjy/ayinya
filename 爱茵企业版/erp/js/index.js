$( '.nav-sidebar > li.nav-parent' ).on('click', function() {
		var prev = $( '.nav-sidebar > li.nav-expanded' ),
			next = $( this );

		if ( prev.get( 0 ) !== next.get( 0 ) ) {
			collapse( prev );
			expand( next );
		} else {
			collapse( prev );
		}
	});

function collapse( li ) {
		li.children('ul.nav-children' ).slideUp( 'fast', function() {
			$(this).css( 'display', '' );
			li.removeClass( 'nav-expanded' );
		});
	}

function expand( li ) {
		li.children( 'ul.nav-children' ).slideDown( 'fast', function() {
			li.addClass( 'nav-expanded' );
			$(this).css( 'display', '' );
			ensureVisible( li );
		});
	}
	
function ensureVisible( li ) {
		var scroller = li.offsetParent();
		if ( !scroller.get(0) ) {
			return false;
		}
	}