$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "161,673",
				            "death": "4,154" ,
				            "dailycount": "2,741",
				            "dailydeath": "50" ,
				            "date":"07/21" ,
				            "info":"through 8:00pm 07/20/2020" ,
				            
							"testingaverage":"21,251" ,
							"peopletested":"1,559,384" ,
							"positivity":"8.5%" ,
							"hospitalizations":"2,218 " ,                    
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



