$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,287,831" ,

								"death": "24,643" ,

								"dailycount": "2,067" ,

								"dailydeath": "15" ,
								"date":"07/27" ,
								"info":"through 6:00pm 07/26/2021" ,							
								

								"testingaverage":"45,031" ,

								"peopletested":"7,270,022" ,

								"positivity":"5.02%" ,
								"hospitalizations":"825"

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



