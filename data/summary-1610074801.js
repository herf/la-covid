$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "871,404", 
								"death": "11,545" ,
								"dailycount": "19,719", 
								"dailydeath": "218" ,
								"date":"01/07" ,
								"info":"through 8:00pm 01/06/2021" ,
								
								"testingaverage":"76,067" , 
								"peopletested":"4,886,797" ,
								"positivity":"21.20%" ,		
								"hospitalizations":"8,098"		
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



