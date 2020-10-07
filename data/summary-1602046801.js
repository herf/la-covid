$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "275,856",
				            "death": "6,681" ,
				            "dailycount": "990",
				            "dailydeath": "30" ,
				            "date":"10/06" ,
				            "info":"through 8:00pm 10/05/2020" ,
				            
							"testingaverage":"12,047" ,
							"peopletested":"2,737,445" ,
							"positivity":"3.2%" ,
							"hospitalizations":"685" 							
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



