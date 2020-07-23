$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "164,870",
				            "death": "4,213" ,
				            "dailycount": "3,266",
				            "dailydeath": "64" ,
				            "date":"07/22" ,
				            "info":"through 8:00pm 07/21/2020" ,
				            
							"testingaverage":"20,404" ,
							"peopletested":"1,578,614" ,
							"positivity":"8.3%" ,
							"hospitalizations":"2,207" ,                    
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



