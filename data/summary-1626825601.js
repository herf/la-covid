$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,270,886" ,

								"death": "24,587" ,

								"dailycount": "1,821" ,

								"dailydeath": "5" ,
								"date":"07/20" ,
								"info":"through 6:00pm 07/19/2021" ,							
								

								"testingaverage":"39,300" ,

								"peopletested":"7,189,626" ,

								"positivity":"3.55%" ,
								"hospitalizations":"544"

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



