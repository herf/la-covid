$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "159,045",
				            "death": "4,104" ,
				            "dailycount": "3,160",
				            "dailydeath": "9" ,
				            "date":"07/20" ,
				            "info":"through 8:00pm 07/19/2020" ,
				            
							"testingaverage":"21,137" ,
							"peopletested":"1,540,289" ,
							"positivity":"8.5%" ,
							"hospitalizations":"2,232 " ,                    
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



