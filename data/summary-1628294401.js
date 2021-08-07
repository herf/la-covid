$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,319,216" ,

								"death": "24,756" ,

								"dailycount": "3,930" ,

								"dailydeath": "17" ,
								"date":"08/06" ,
								"info":"through 6:00pm 08/05/2021" ,							
								

								"testingaverage":"53,486" ,

								"peopletested":"7,427,645" ,

								"positivity":"6.27%" ,
								"hospitalizations":"1,370"

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



