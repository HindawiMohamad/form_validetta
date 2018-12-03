$(document).ready(function () {

$("#form").validetta();

});

/////////////////////////




$( "#btn" ).click(function(){
  $( "#contenu_droite1" ).animate({ "left": "-555px" }, "slow", function(){

  $( "#contenu_droite2" ).animate({ "left": "0px" }, "slow" );

  });
});


$( "#clickme" ).click(function() {
  $( "#book" ).fadeIn( "slow", function() {
    // Animation complete
  });
});


$.ajax( {
                  url:'../json/cities.json',
				  method: "GET",
				  dataType : "json",
				  success:function(monObjet) {
  					
				//	console.log(monObjet.length); 
						 var i = 0;
					  
					  var villes = [];
					
					  
					  	for(i=0; i<monObjet.length; i++) 
	
				
				{
					
						var obj = {};
				
				
				obj["value"] = monObjet[i].zip;
				obj["label"] = monObjet[i].zip+" "+monObjet[i].name;
				obj["ville"] = monObjet[i].name;

			villes.push(obj);
					
					
					
				} // for
					  
					  console.log(villes);
			  
					  
			$( "#codepostale" ).autocomplete({
      		source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( villes, function( item ){
              return matcher.test( item.label );
          }) );
      },
			minLength: 1,
                select: function(event,ui){
                    
                    $("#commune").val(ui.item.ville);
                }
				});		  
					  
					 
                  } // success function

			  }); // ajax
    