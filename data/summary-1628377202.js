$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,323,345" ,

								"death": "24,769" ,

								"dailycount": "4,283" ,

								"dailydeath": "13" ,
								"date":"08/07" ,
								"info":"through 6:00pm 08/06/2021" ,							
								

								"testingaverage":"54,248" ,

								"peopletested":"7,463,618" ,

								"positivity":"6.38%" ,
								"hospitalizations":"1,383"

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



