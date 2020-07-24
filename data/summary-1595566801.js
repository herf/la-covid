$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "166,848",
				            "death": "4,262" ,
				            "dailycount": "2,014",
				            "dailydeath": "49" ,
				            "date":"07/23" ,
				            "info":"through 8:00pm 07/22/2020" ,
				            
							"testingaverage":"20,529" ,
							"peopletested":"1,593,411" ,
							"positivity":"8.4%" ,
							"hospitalizations":"2,210" ,                    
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



