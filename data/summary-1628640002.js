$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,331,859" ,

								"death": "24,805" ,

								"dailycount": "2,622" ,

								"dailydeath": "22" ,
								"date":"08/10" ,
								"info":"through 6:00pm 08/09/2021" ,							
								

								"testingaverage":"62,187" ,

								"peopletested":"7,529,038" ,

								"positivity":"5.94%" ,
								"hospitalizations":"1,503"

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



