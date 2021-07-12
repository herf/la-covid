$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,257,628",

								"death": "24,542",

								"dailycount": "1,113",

								"dailydeath": "4",
								"date":"07/11" ,
								"info":"through 6:00pm 07/10/2021" ,							
								

								"testingaverage":"34,639",

								"peopletested":"7,112,495",

								"positivity":"1.63%",
								"hospitalizations":"373"

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



