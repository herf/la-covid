$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "173,995",
				            "death": "4,360" ,
				            "dailycount": "1,703",
				            "dailydeath": "10" ,
				            "date":"07/26" ,
				            "info":"through 8:00pm 07/25/2020" ,
				            
							"testingaverage":"20,571" ,
							"peopletested":"1,621,670" ,
							"positivity":"8.4%" ,
							"hospitalizations":"2,033" ,                    
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



