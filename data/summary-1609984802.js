$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "852,165", 
								"death": "11,328" ,
								"dailycount": "11,841", 
								"dailydeath": "258" ,
								"date":"01/06" ,
								"info":"through 8:00pm 01/05/2021" ,
								
								"testingaverage":"73,612" , 
								"peopletested":"4,847,170" ,
								"positivity":"21.40%" ,		
								"hospitalizations":"8,023"		
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



