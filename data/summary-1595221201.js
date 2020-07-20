$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "155,887",
				            "death": "4,095" ,
				            "dailycount": "2,848",
				            "dailydeath": "11" ,
				            "date":"07/19" ,
				            "info":"through 8:00pm 07/18/2020" ,
				            
							"testingaverage":"20,677" ,
							"peopletested":"1,515,278" ,
							"positivity":"8.4%" ,
							"hospitalizations":"2,216 " ,                    
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



