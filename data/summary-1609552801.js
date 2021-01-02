$( document ).ready(function() {
    var data = {
				    "content": { 	
								
								"count": "790,582", 
								"death": "10,552" ,
								"dailycount": "20,414", 
								"dailydeath": "207" ,
								"date":"01/01" ,
								"info":"through 8:00pm 12/31/2020" ,
								
								"testingaverage":"78,554" , 
								"peopletested":"4,736,679" ,
								"positivity":"17.50%" ,
								"hospitalizations":"7,613"					
				        }       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



